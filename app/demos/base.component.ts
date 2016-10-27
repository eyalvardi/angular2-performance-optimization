import {ElementRef, Renderer, NgZone, ChangeDetectorRef, ChangeDetectionStrategy,DoCheck} from "@angular/core";

let isBorder = true;

export function setBorder(val:boolean){
    isBorder = val;
}

export class BaseComponent implements DoCheck{
    //isTick:boolean = false;
    isDetach:boolean = false;

    set isBorder(value:boolean) {
        isBorder = value;
    }
    get isBorder():boolean{
        return isBorder;
    }

    constructor(
        protected elmRef:ElementRef,
        protected render:Renderer,
        protected zone:NgZone,
        protected cd?:ChangeDetectorRef
    ){}



    get cdMode(){
        //return this.cd['_view'].cdMode;
        return ChangeDetectionStrategy[this.cd['_view'].cdMode];
    }

    // tick
    ngDoCheck(){
        if(!this.isBorder) return;
        this.render.setElementStyle(
            this.elmRef.nativeElement,
            'border',
            '1px solid red'
        );

        //for(let i=0 ;i< 400000000;i++){}

        this.zone.runOutsideAngular(()=>{
            setTimeout(()=>{
                this.render.setElementStyle(
                    this.elmRef.nativeElement,
                    'border',
                    '1px solid white'
                );
            },300)
        });
    }

    detach(){
        this.isDetach = true;
        this.cd.detach();
    }
    reattach(){
        this.isDetach = false;
        this.cd.reattach();
    }
    markForCheck(){
        this.cd.markForCheck();
    }
    detectChanges(){
        this.cd.detectChanges();
    }
}
