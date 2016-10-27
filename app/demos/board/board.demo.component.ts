import {Component, ElementRef, Renderer, NgZone, ChangeDetectorRef} from "@angular/core";
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
    <h4>Counters components</h4>    
    <P class="desc">
        This demo shows how we can stop the tick that setTimout causes by using NgZone class 
        and how to update the component area with ChangeDetectorRef class.  
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
      <h4><span>Size: {{counters.length | number}}</span></h4>
       Change to size: 
        <a (click)="addCounter(1)   ">1</a> |
        <a (click)="addCounter(100) ">100</a> |
        <a (click)="addCounter(500) ">500</a> |
        <a (click)="addCounter(1000)">1,000</a> |
        <a (click)="addCounter(1500)">1,500</a> |
        <a (click)="addCounter(3000)">3,000</a> |
        <a (click)="addCounter(5000)">5,500</a> |
        
      <hr>
      <counter class="flow"
        *ngFor="let c of counters"
        [ms]="10" 
        [value]="0" 
        [isTick]="isTick"
        [isDetectChanges]="isDetectChanges">    
      </counter>
</div>
`})
export class BoardDemoComponent extends BaseComponent {
    counters = new Array(1);
    isTick:boolean           = true;
    isDetectChanges:boolean  = false;
    isBufferTime:boolean     = false;



    constructor(elmRef: ElementRef,
                render: Renderer,
                zone: NgZone,
                cd: ChangeDetectorRef) {
        super(elmRef, render, zone, cd);
    }

    addCounter(value:number){
        this.counters = new Array(value);
    }
}