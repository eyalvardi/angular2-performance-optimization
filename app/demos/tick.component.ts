import {Component, ElementRef, NgZone, ChangeDetectorRef, ViewChild, Renderer2} from "@angular/core";
import {setBorder} from './base.component';

@Component({
    selector: 'tick',
    styles: [`
        .box{ 
            width : 10px;
            height: 12px;
            border: 1px solid black;
            margin-right: 3px;
        }
        :host{
            display: block;
            position: absolute;
            top: 8px;
            right: 8px;
            line-height:0px;
        }
        .notDisplay{
            border: 1px solid black;    
        }
    `],
    template: `
   <div style=" margin: auto;">
        <button #box class="box" (click)="setBorder()"></button>
        <span>ticks: {{oldValue}} / s</span>
   </div>
`})
export class TickComponent {
    isDisplay:boolean = true;
    oldValue :number  = 0;
    value    :number  =0;
    start    :Date;
    cancelId :any;
    countTickFn:()=>void;

    @ViewChild('box',{read:ElementRef})
    boxElemRef:ElementRef;

    constructor(
        protected render:Renderer2,
        protected zone:NgZone,
        protected cd: ChangeDetectorRef
    ){
        this.countTickFn = this.countTick.bind(this);
    }
    setBorder(){
        this.isDisplay = !this.isDisplay;
        setBorder(this.isDisplay);
    }

    ngOnInit(){
        this.start = new Date();
        this.countTick();
    }
    // tick
    ngDoCheck(){
        this.countTick();
        this.updateBackgroundColor();
    }

    updateBackgroundColor(){
        if(!this.isDisplay) return;

        this.render.setStyle(
            this.boxElemRef.nativeElement,
            'background-color',
            'red'
        );

        this.clearBackgroundColor();
    }
    clearBackgroundColor(){
        this.zone.runOutsideAngular(()=>{
            setTimeout(()=>{
                this.render.setStyle(
                    this.boxElemRef.nativeElement,
                    'background-color',
                    'white'
                );
            },100)
        });
    }

    countTick(){
        clearTimeout(this.cancelId);
        let now = +new Date();
        let time = now - +this.start;

        if(time > 1000){
            this.oldValue = this.value;
            this.value = 0;
            this.start = new Date();
            this.cd.detectChanges();
        } else {
            this.value++;
        }
        this.zone.runOutsideAngular(()=>{
            this.cancelId = setTimeout(this.countTickFn,1200);
        });

    }
}