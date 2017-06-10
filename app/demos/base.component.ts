import {
    ElementRef,
    NgZone,
    ChangeDetectorRef,
    ChangeDetectionStrategy,
    DoCheck,
    VERSION, Injectable, ApplicationRef, Component, Renderer2
} from "@angular/core";

let isBorder = true;

export function setBorder(val:boolean){
    isBorder = val;
}

@Component({
    selector: 'base',
    styles: [],
    template: `
<div>
  
</div>
`
})
export class BaseComponent implements DoCheck{
    //isTick:boolean = false;
   /* public isDetach:boolean = false;*/

    _isDetach:boolean = false;
    /*@Input()*/
    set isDetach(value){
        if(value){
            this.cd.detach();
        }else{
            this.cd.reattach();
        }
        this._isDetach = value;
    }
    get isDetach(){
        return this._isDetach;
    }



    set isBorder(value:boolean) {
        isBorder = value;
    }
    get isBorder():boolean{
        return isBorder;
    }

    constructor( protected elmRef : ElementRef,
                 protected render : Renderer2,
                 protected zone   : NgZone,
                 protected cd?    : ChangeDetectorRef,
                 protected appRef?: ApplicationRef) {
        //debugger;
    }


    get version(){
            return VERSION.full;
    }
    get cdMode(){
        //return this.cd['_view'].cdMode;
        return ChangeDetectionStrategy[this.cd['_view'].cdMode];
    }

    // tick
    ngDoCheck(){
        if(!this.isBorder) return;
        if(!this.render) return;

        this.render.setStyle(
            this.elmRef.nativeElement,
            'border',
            '1px solid red'
        );

        //for(let i=0 ;i< 400000000;i++){}

        this.zone.runOutsideAngular(()=>{
            setTimeout(()=>{
                this.render.setStyle(
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
