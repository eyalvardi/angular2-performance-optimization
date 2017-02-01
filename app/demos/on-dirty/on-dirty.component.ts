import {Component, ElementRef, Renderer, NgZone, ChangeDetectorRef} from "@angular/core";
import {BaseComponent}  from "../base.component";
import {Observable}     from "rxjs/Observable";
import {Observer}       from "rxjs/Observer";
import {threshold,upDown} from '../../codes.snipets';
import "../../rxjs-operators";
import {feed}           from './feed.service';

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
  <up-down [source]="feed"></up-down>
  
  <h4>Stream II (auditTime) - source.auditTime(500)</h4>
  <up-down [source]="auditTimeFeed"></up-down>
  
  <h4>Stream III - auditTime.threshold(15)</h4>
  <up-down [source]="thresholdFeed"></up-down>
  <hr>
  
  <h4>Threshold</h4>
  <pre>{{thresholdCode}}</pre>
  
  <h4>Up & Down triangle</h4>
  <pre>{{upDownCode}}</pre>-
</div>
`})
export class OnDirtyDemoComponent extends BaseComponent {

    get thresholdCode(){ return threshold; }
    get upDownCode(){ return upDown; }


    ngOnInit(){
        this.zone.runOutsideAngular(()=>{
            feed.start();
        });
    }
    get feed(){
        return feed.source;
    }
    get auditTimeFeed(){
        return feed.source.auditTime(500);
    }
    get thresholdFeed(){
        return this.auditTimeFeed
            .scan((acc:{curr:number,delta:number},curr)=>{
                return {
                    curr,
                    delta: Math.abs(acc.curr - curr)
                }
            })
            .filter(value => value.delta > 15)
            .map(acc => acc.curr);
    }
}