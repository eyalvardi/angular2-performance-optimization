import {Component, Input, ApplicationRef, ChangeDetectorRef, NgZone, Renderer, ElementRef,ViewChild} from "@angular/core";
import {BaseComponent} from "../base.component";

@Component({
    selector: 'item2',
    providers: [],
    styles: [`
        :host{ display: block; }
`],
    template: `
<div class="panel panel-default">
    <div #head class="panel-heading">
        <h4 class="panel-title">
            {{title}}
        </h4>
    </div>
    <div *ngIf="isActive">
        <div class="panel-body">
            <ng-content></ng-content>
        </div>
    </div>
</div>
`})
export class Item2Component extends BaseComponent{
    @ViewChild('head',{read:ElementRef}) head;

    _onClick = ()=>{
        this.isActive = !this.isActive;
        this.cd.detectChanges();
    };

    ngAfterViewInit(){
        this.zone.runOutsideAngular(()=>{
            this.head.nativeElement.addEventListener('click',this._onClick);
        });

    }
    ngOnDestroy(){
        this.head.nativeElement.removeEventListener('click',this._onClick)
    }

    _title:string;
    @Input()
    set title(value){ this._title = value; }
    get title(){return this._title;}

    isActive:boolean = false;

    constructor(
        elmRef:ElementRef,
        render:Renderer,
        zone:NgZone,
        protected cd :ChangeDetectorRef,
        protected appRef : ApplicationRef

    ){
        super(elmRef,render,zone);
    }

}