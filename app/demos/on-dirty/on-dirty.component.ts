import {Component, ElementRef, Renderer, NgZone, ChangeDetectorRef} from "@angular/core";
import {BaseComponent}  from "../base.component";
import {Observable}     from "rxjs/Observable";
import {Observer}       from "rxjs/Observer";
import {threshold,upDown} from '../../codes.snipets';
import "../../rxjs-operators";

@Component({
    styles : [`
    :host{
            display: block;           
            margin: 8px;
                        
    }
    .trg-up {
         width: 0;
         height: 0;
         border-left  : 5px solid transparent;
         border-right : 5px solid transparent;
         border-bottom: 10px solid green;
     }
     .trg-down {
         width: 0;
         height: 0;
         border-left  : 5px solid transparent;
         border-right : 5px solid transparent;
         border-top: 10px solid red;
     }
`],
  template: `
<div>
  <!--<button (click)="isBorder=!isBorder">{{ isBorder ? 'Border':  'No Border'}}</button>
  <br>
  <hr>-->
  <p>
      This demo shows how we can work with an Observable class and its operators to reduce the amount of
      updates, meaning less expressions to calculate. The component is detached form the component tree and the update happens
      only when item comes up from the observable.
  </p>
  <h4>Stream I (source) - Update every 10ms.</h4>
  <pre>{{val1}} : <span [class.trg-up]="isUp1" [class.trg-down]="!isUp1"></span></pre>
  
  <h4>Stream II (auditTime) - source.auditTime(500)</h4>
  <pre>{{val2}} : <span [class.trg-up]="isUp2" [class.trg-down]="!isUp2"></span></pre>
  
  <h4>Stream III - auditTime.threshold(15)</h4>
  <pre>{{val3}} : <span [class.trg-up]="isUp3" [class.trg-down]="!isUp3"></span></pre>
  <hr>
  
  <h4>Threshold</h4>
  <pre>{{thresholdCode}}</pre>
  
  <h4>Up & Down triangle</h4>
  <pre>{{upDownCode}}</pre>-
</div>
`})
export class OnDirtyDemoComponent extends BaseComponent {
    source:Observable<number>;
    auditTime:Observable<number>;
    threshold:Observable<number>;

    val1:number = 0;
    val2:number = 0;
    val3:number = 0;

    isUp1:boolean;
    isUp2:boolean;
    isUp3:boolean;

    worker:any;
    updateFn:any;

    subscriber:any[] = [];
    observer:Observer<number>;

    get thresholdCode(){ return threshold; }
    get upDownCode(){ return upDown; }

    constructor(elmRef: ElementRef, render: Renderer,
                zone: NgZone, cd: ChangeDetectorRef) {

        super(elmRef, render, zone,cd);
        this.updateFn = this.update.bind(this);
    }

    ngOnInit(){
        this.zone.runOutsideAngular(this.start.bind(this));
        //this.start();
    }

    start(){
        this.createSource();
        this.createAuditTime();
        this.createThreshold();

        // create producer
        this.worker = new Worker('app/demos/num-feeds.service.js');
        this.worker.addEventListener('message',this.updateFn);
        this.worker.postMessage(true);
    }

    createSource(){
        this.source = Observable.create((observer)=>{ this.observer = observer; }).share();
        this.createUpDown(this.source,'isUp1');
        this.subscriber.push(this.source.subscribe((val)=>{this.val1=val;}));
    }
    createAuditTime(){
        this.auditTime = this.source.auditTime(500);
        this.createUpDown(this.auditTime,'isUp2');
        this.subscriber.push( this.auditTime.subscribe((val)=>{this.val2=val;}));
    }
    createThreshold(){
        this.threshold = this.auditTime
            .scan((acc:{curr:number,delta:number},curr)=>{
                return {
                    curr,
                    delta: Math.abs(acc.curr - curr)
                }
            })
            .filter(value => value.delta > 15)
            .map(acc => acc.curr)
            .distinctUntilChanged();

        this.createUpDown(this.threshold,'isUp3');
        this.subscriber.push(this.threshold.subscribe((val)=>{
            this.val3=val;
            this.cd.detectChanges();
        }));
    }
    createUpDown(observable,property){
        this.subscriber.push(
            observable
                .scan((acc,curr)=>{
                    return {
                        curr,
                        isUp: curr - acc.curr > 0
                    }
                })
                .map(val => val.isUp)
                .distinctUntilChanged()
                .subscribe((val)=>{
                    this[property] = val;
                })
        );
    }

    update(e){
        this.observer.next(e.data);
        //this.cd.detectChanges();
    }

    ngOnDestroy(){
        this.worker.postMessage(false);
        this.worker.removeEventListener(this.updateFn);
        this.worker.terminate();
        this.observer.complete();
        this.subscriber.forEach( sub => sub.unsubscribe() );
    }
}