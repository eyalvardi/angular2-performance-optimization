/**
 * Created by Eyal on 10/12/2016.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import {TickComponent} from "./tick.component";
import {CounterComponent} from "./counter/counter.component";
import {HomeComponent} from "./home.component";
import {AccordionComponent} from "./accordion/accordion.component";
import {ItemComponent} from "./accordion/item.component";
import {BoardDemoComponent} from "./board/board.demo.component";
import {AccordionDemoComponent} from "./accordion/demo.component";
import {Item2Component} from "./accordion/item-no-tick.component";
import {BoardDemo2Component} from "./board/board2.demo.component";
import {Counter2Component} from "./board/counter2.component";
import {UserComponent} from "./detach/user.component";
import {UsersDemoComponent} from "./detach/users-demo.component";
import {OnDirtyDemoComponent} from "./on-dirty/on-dirty.component";
import {UpDownComponent} from "./on-dirty/up-down.component";

let demosComponent = [
    TickComponent
    ,HomeComponent
    ,CounterComponent
    //,CounterDemoComponent
    ,AccordionComponent
    ,ItemComponent
    ,Item2Component
    ,AccordionDemoComponent
    ,BoardDemoComponent
    ,BoardDemo2Component
    ,Counter2Component
    ,UserComponent
    ,UsersDemoComponent
    ,OnDirtyDemoComponent
    ,UpDownComponent
];

@NgModule({
    declarations:[demosComponent],
    //entryComponents:[BaseComponent],
    imports     :[CommonModule],
    exports     :[demosComponent]
})
export class DemosModule{}