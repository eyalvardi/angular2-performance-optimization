var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Eyal on 10/12/2016.
 */
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { TickComponent } from "./tick.component";
import { CounterComponent } from "./counter/counter.component";
import { HomeComponent } from "./home.component";
import { AccordionComponent } from "./accordion/accordion.component";
import { ItemComponent } from "./accordion/item.component";
import { BoardDemoComponent } from "./board/board.demo.component";
import { AccordionDemoComponent } from "./accordion/demo.component";
import { Item2Component } from "./accordion/item-no-tick.component";
import { BoardDemo2Component } from "./board/board2.demo.component";
import { Counter2Component } from "./board/counter2.component";
import { UserComponent } from "./detach/user.component";
import { UsersDemoComponent } from "./detach/users-demo.component";
import { OnDirtyDemoComponent } from "./on-dirty/on-dirty.component";
import { UpDownComponent } from "./on-dirty/up-down.component";
var demosComponent = [
    TickComponent,
    HomeComponent,
    CounterComponent,
    AccordionComponent,
    ItemComponent,
    Item2Component,
    AccordionDemoComponent,
    BoardDemoComponent,
    BoardDemo2Component,
    Counter2Component,
    UserComponent,
    UsersDemoComponent,
    OnDirtyDemoComponent,
    UpDownComponent
];
var DemosModule = (function () {
    function DemosModule() {
    }
    return DemosModule;
}());
DemosModule = __decorate([
    NgModule({
        declarations: [demosComponent],
        //entryComponents:[BaseComponent],
        imports: [CommonModule],
        exports: [demosComponent]
    })
], DemosModule);
export { DemosModule };
//# sourceMappingURL=demos.module.js.map