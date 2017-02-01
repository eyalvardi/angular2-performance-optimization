import {
    Component,
    ElementRef,
    Renderer,
    NgZone,
    ChangeDetectorRef
} from '@angular/core';
import {BaseComponent} from "../base.component";


@Component({
    styles : [`:host{display: block;margin: 5px}`],
    template : `
<div>     
     <h4>Counter component</h4>
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
      <hr>
      <counter #counter
          [value]          ="100" 
          [ms]             ="10"
          [isTick]         ="isTick"
          [isDetectChanges]="isDetectChanges">      
      </counter>
      
      <!--<gauge [value]="counter.value"></gauge>-->
</div>
`})
export class CounterDemoComponent extends BaseComponent{
    isTick:boolean           = true;
    isDetectChanges:boolean  = false;

    constructor(
        elmRef: ElementRef,
        render: Renderer,
        zone  : NgZone,
        cd    : ChangeDetectorRef
    ){
        super(elmRef,render,zone,cd);
    }
}