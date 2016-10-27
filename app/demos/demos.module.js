"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Eyal on 10/12/2016.
 */
var core_1 = require("@angular/core");
var common_1 = require('@angular/common');
var tick_component_1 = require("./tick.component");
var counter_component_1 = require("./counter/counter.component");
var home_component_1 = require("./home.component");
var accordion_component_1 = require("./accordion/accordion.component");
var item_component_1 = require("./accordion/item.component");
var board_demo_component_1 = require("./board/board.demo.component");
var demo_component_1 = require("./accordion/demo.component");
var item_no_tick_component_1 = require("./accordion/item-no-tick.component");
var board2_demo_component_1 = require("./board/board2.demo.component");
var counter2_component_1 = require("./board/counter2.component");
var user_component_1 = require("./detach/user.component");
var users_demo_component_1 = require("./detach/users-demo.component");
var on_dirty_component_1 = require("./on-dirty/on-dirty.component");
var demosComponent = [
    tick_component_1.TickComponent,
    home_component_1.HomeComponent,
    counter_component_1.CounterComponent,
    accordion_component_1.AccordionComponent,
    item_component_1.ItemComponent,
    item_no_tick_component_1.Item2Component,
    demo_component_1.AccordionDemoComponent,
    board_demo_component_1.BoardDemoComponent,
    board2_demo_component_1.BoardDemo2Component,
    counter2_component_1.Counter2Component,
    user_component_1.UserComponent,
    users_demo_component_1.UsersDemoComponent,
    on_dirty_component_1.OnDirtyDemoComponent
];
var DemosModule = (function () {
    function DemosModule() {
    }
    DemosModule = __decorate([
        core_1.NgModule({
            declarations: [demosComponent],
            imports: [common_1.CommonModule],
            exports: [demosComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], DemosModule);
    return DemosModule;
}());
exports.DemosModule = DemosModule;
//# sourceMappingURL=demos.module.js.map