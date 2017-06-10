import {Component, ElementRef, Renderer, NgZone, ChangeDetectorRef, ApplicationRef, OnDestroy} from "@angular/core";
import {BaseComponent} from "../base.component";

@Component({
    styles: [`
        :host{ display: block; }
        .flow{
            float:left;
        }
    `],
    template: `
<div>
    <h4>Board II component</h4>
    <P class="desc">
        This demo shows how we use only 1 setTimeout in 
        the parent component to update all its children.  
    </P>
      <button (click)="isTick = !isTick" class="btn"
        [ngClass]="{'btn-warning': isTick,'btn-success':!isTick}">
        <span *ngIf="!isTick">No</span>Ticks
      </button>
      <button (click)="isDetectChanges = !isDetectChanges" class="btn"
        [ngClass]="{'btn-warning': !isDetectChanges,'btn-success':isDetectChanges}">
        <span *ngIf="!isDetectChanges">No</span> Detect Changes
      </button>            
      <button (click)="isBorder = !isBorder" class="btn"
        [ngClass]="{'btn-warning': isBorder,'btn-success':!isBorder}">
        <span *ngIf="!isBorder">No</span> Border
      </button>      
      <br>   
      <h4><span>Size: {{counters.length| number}}</span></h4>
       Change to size:         
        <a (click)="addCounter(100) ">100</a> |
        <a (click)="addCounter(500) ">500</a> |
        <a (click)="addCounter(1000)">1,000</a> |
        <a (click)="addCounter(1500)">1,500</a> |
        <a (click)="addCounter(3000)">3,000</a> |
        <a (click)="addCounter(5000)">5,000</a> |
        <a (click)="addCounter(7000)">7,000</a> |
      
      <hr>
      <counter2 class="flow"
        *ngFor="let c of counters;let index=index"       
        >
          <!--[value]="value + index">-->
      </counter2>
</div>
`})
export class BoardDemo2Component extends BaseComponent implements OnDestroy{
    counters = new Array(100);
    id:any;
    value: number = 0;
    isRun:boolean = false;
    isDetectChanges:boolean = false;
    _isTick:boolean = true;

    set isTick(value){
        this._isTick = value;
        this.start();
    }
    get isTick(){return this._isTick;}

    /*constructor(
        protected elmRef : ElementRef,
        protected render : Renderer,
        protected zone   : NgZone,
        protected cd?    : ChangeDetectorRef,
        protected appRef?: ApplicationRef
    ){ super(elmRef,render,zone,cd,appRef);}*/

    ngOnInit(){
        //console.time('counter');
        this.start();
    }

    start(){
        this.stop();
        this.isRun = true;
        this.isTick ? this.run()
            : this.zone.runOutsideAngular(this.run.bind(this));
    }
    addCounter(value:number){
        this.counters = new Array(+value);
    }
    run(){
        this.value++;
        if( this.value > 100) {
            console.timeEnd('counter');
            this.value = 0;
            console.time('counter');
        }
        if(this.isDetectChanges) {
            this.cd.detectChanges();
        }
        if(this.isRun){
            this.id = setTimeout(this.run.bind(this),10);
        }
    }

    stop(){
        this.value = 0;
        this.isRun = false;
        if(this.id){
            clearTimeout(this.id);
        }
    }
    ngOnDestroy(){
        this.stop();
    }
}