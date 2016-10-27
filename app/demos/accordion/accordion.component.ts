import {Component,ApplicationRef,ChangeDetectorRef,NgZone,Renderer,ElementRef} from "@angular/core";
import {BaseComponent} from "../base.component";

@Component({
    selector: 'accordion',
    providers: [],
    styles: [`
        :host{ display: block; }
    `],
    template: `
    <div class="panel-group">
      <ng-content></ng-content>
    </div>
`})
export class AccordionComponent extends BaseComponent{
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