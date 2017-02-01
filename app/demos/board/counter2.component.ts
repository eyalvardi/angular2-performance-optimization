import {Component, ElementRef, Renderer, NgZone, ChangeDetectorRef, ApplicationRef, Input} from '@angular/core';
import {BaseComponent} from "../base.component";


@Component({
    selector    : 'counter2',
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
    <div>{{value}}</div>
`})
export class Counter2Component extends BaseComponent{

    @Input()
    value:number;
}
