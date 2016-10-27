"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var base_component_1 = require("../base.component");
var Counter2Component = (function (_super) {
    __extends(Counter2Component, _super);
    function Counter2Component(elmRef, render, zone, cd, appRef) {
        _super.call(this, elmRef, render, zone, cd);
        this.appRef = appRef;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], Counter2Component.prototype, "value", void 0);
    Counter2Component = __decorate([
        core_1.Component({
            selector: 'counter2',
            styles: ["\n        :host{\n                display: block;\n                width: 50px; height: 50px;\n                border: 1px dotted black;\n                text-align: center;\n                vertical-align: middle;\n                margin: 8px;\n                            \n        }\n    "],
            template: "\n    <div>{{value}}</div>\n" }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.NgZone, core_1.ChangeDetectorRef, core_1.ApplicationRef])
    ], Counter2Component);
    return Counter2Component;
}(base_component_1.BaseComponent));
exports.Counter2Component = Counter2Component;
//# sourceMappingURL=counter2.component.js.map