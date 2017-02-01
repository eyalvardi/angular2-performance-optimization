import {Component,ElementRef,Renderer,NgZone,ChangeDetectorRef,ApplicationRef,Input} from '@angular/core';
import {BaseComponent} from "../base.component";

@Component({
    selector    : 'counter',
    styles : [`
    :host{
            display: block;
            width: 50px; height: 50px;
            border: 1px dotted black;
            text-align: center;
            vertical-align: middle;
            margin: 8px;
                        
    }
`],
    template : `
    <div (click)="onClick()">{{value}}</div>
`})
export class CounterComponent extends BaseComponent{

    _isRun:boolean;
    runFnBind:()=>void;
    _isDetectChanges:boolean;
    _id:any;

    @Input() set isStart(value){
        value ? this.start() : this.stop();
    }
    @Input() set isDetectChanges(value){
        this._isDetectChanges = value;
    }

    _value:number;
    @Input()
    set value(value){
        this._value = value;
    }
    get value(){return this._value;}

    _ms:number;
    @Input()
    set ms(value){ this._ms = value; }
    get ms(){return this._ms;}

    _isTick:boolean;
    @Input()
    set isTick(value){
        this._isTick = value;
        this.start();
    }
    get isTick(){return this._isTick;}
/*

    constructor( elmRef:ElementRef, render:Renderer,
                 zone:NgZone, cd :ChangeDetectorRef,
                 protected appRef : ApplicationRef ){
        super(elmRef,render,zone,cd);
    }
*/

    start(){
        //console.time('counter');
        this.runFnBind = this.run.bind(this);
        this.stop();
        this._isRun = true;
        this.isTick ? this.run()
                    : this.zone.runOutsideAngular(this.runFnBind);
    }
    run(){
        this._value++;
        if( this._value > 100) {
            //console.timeEnd('counter');
            this._value = 0;
            //console.time('counter');
        }
        if(this._isDetectChanges) {
            this.cd.detectChanges();
        }
        if(this._isRun){
           this._id = setTimeout(this.runFnBind);
        }
    }

    onClick(){
        this.value = 0;
        this._isRun = !this._isRun;
        if(this._isRun){
            this.start();
        }
    }

    stop(){
        this.value = 0;
        this._isRun = false;
        if(this._id){
            clearTimeout(this._id);
        }
    }
    ngOnDestroy(){
        this.stop();
    }
}
