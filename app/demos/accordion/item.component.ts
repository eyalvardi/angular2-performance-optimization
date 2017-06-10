import {
    Component, Input, ApplicationRef, ChangeDetectorRef, NgZone, Renderer, ElementRef,
    Renderer2
} from "@angular/core";
import {BaseComponent} from "../base.component";

@Component({
    selector: 'item',
    providers: [],
    styles: [`
        :host{ display: block; }
`],
    template: `
<div class="panel panel-default">
    <div (click)="isActive = !isActive" class="panel-heading">
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
export class ItemComponent extends BaseComponent{

    _title:string;
    @Input()
    set title(value){ this._title = value; }
    get title(){return this._title;}

    isActive:boolean = false;

    /*constructor(
        elmRef:ElementRef,
        render:Renderer2,
        zone:NgZone,
        protected cd :ChangeDetectorRef,
        protected appRef : ApplicationRef

    ){
        super(elmRef,render,zone);
    }*/

}