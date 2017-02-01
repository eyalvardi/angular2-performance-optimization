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
var core_1 = require("@angular/core");
var base_component_1 = require("../base.component");
var CounterDemoComponent = (function (_super) {
    __extends(CounterDemoComponent, _super);
    function CounterDemoComponent(elmRef, render, zone, cd) {
        var _this = _super.call(this, elmRef, render, zone, cd) || this;
        _this.isTick = true;
        _this.isDetectChanges = false;
        return _this;
    }
    return CounterDemoComponent;
}(base_component_1.BaseComponent));
CounterDemoComponent = __decorate([
    core_1.Component({
        styles: [":host{display: block;margin: 5px}"],
        template: "\n<div>     \n     <h4>Counter component</h4>\n      <button (click)=\"isTick = !isTick\" class=\"btn\" \n        [ngClass]=\"{'btn-warning': isTick,'btn-success':!isTick}\">\n        <span *ngIf=\"!isTick\">No</span>Ticks\n      </button>\n      <button (click)=\"isDetectChanges = !isDetectChanges\" class=\"btn\"\n        [ngClass]=\"{'btn-warning': !isDetectChanges,'btn-success':isDetectChanges}\">\n        <span *ngIf=\"!isDetectChanges\">No</span> Detect Changes\n      </button>\n      <button (click)=\"isBorder = !isBorder\" class=\"btn\"\n        [ngClass]=\"{'btn-warning': isBorder,'btn-success':!isBorder}\">\n        <span *ngIf=\"!isBorder\">No</span> Border\n      </button>            \n      <br> \n      <hr>\n      <counter #counter\n          [value]          =\"100\" \n          [ms]             =\"10\"\n          [isTick]         =\"isTick\"\n          [isDetectChanges]=\"isDetectChanges\">      \n      </counter>\n      \n      <!--<gauge [value]=\"counter.value\"></gauge>-->\n</div>\n"
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        core_1.Renderer,
        core_1.NgZone,
        core_1.ChangeDetectorRef])
], CounterDemoComponent);
exports.CounterDemoComponent = CounterDemoComponent;
//# sourceMappingURL=demo.component.js.map