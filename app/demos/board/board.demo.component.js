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
import { Component } from "@angular/core";
import { BaseComponent } from "../base.component";
var BoardDemoComponent = (function (_super) {
    __extends(BoardDemoComponent, _super);
    function BoardDemoComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.counters = new Array(1);
        _this.isTick = true;
        _this.isDetectChanges = false;
        _this.isBufferTime = false;
        return _this;
    }
    BoardDemoComponent.prototype.addCounter = function (value) {
        this.counters = new Array(value);
    };
    return BoardDemoComponent;
}(BaseComponent));
BoardDemoComponent = __decorate([
    Component({
        styles: ["\n        :host{ display: block; }\n        .flow{\n            float:left;\n        }\n    "],
        template: "\n<div>\n    <h4>Counters components</h4>    \n    <P class=\"desc\">\n        This demo shows how we can stop the tick that setTimout causes by using NgZone class \n        and how to update the component area with ChangeDetectorRef class.  \n    </P>\n      \n      <button (click)=\"isTick = !isTick\" class=\"btn\"\n        [ngClass]=\"{'btn-warning': isTick,'btn-success':!isTick}\">\n        <span *ngIf=\"!isTick\">No</span>Ticks\n      </button>\n      <button (click)=\"isDetectChanges = !isDetectChanges\" class=\"btn\"\n        [ngClass]=\"{'btn-warning': !isDetectChanges,'btn-success':isDetectChanges}\">\n        <span *ngIf=\"!isDetectChanges\">No</span> Detect Changes\n      </button>\n      <button (click)=\"isBorder = !isBorder\" class=\"btn\"\n        [ngClass]=\"{'btn-warning': isBorder,'btn-success':!isBorder}\">\n       <span *ngIf=\"!isBorder\">No</span> Border\n      </button>      \n      <br>    \n      <h4><span>Size: {{counters.length | number}}</span></h4>\n       Change to size: \n        <a (click)=\"addCounter(1)   \">1</a> |\n        <a (click)=\"addCounter(100) \">100</a> |\n        <a (click)=\"addCounter(500) \">500</a> |\n        <a (click)=\"addCounter(1000)\">1,000</a> |\n        <a (click)=\"addCounter(1500)\">1,500</a> |\n        <a (click)=\"addCounter(3000)\">3,000</a> |\n        <a (click)=\"addCounter(5000)\">5,500</a> |\n        \n      <hr>\n      <counter class=\"flow\"\n        *ngFor=\"let c of counters\"\n        [ms]=\"10\" \n        [value]=\"0\" \n        [isTick]=\"isTick\"\n        [isDetectChanges]=\"isDetectChanges\">    \n      </counter>\n</div>\n"
    })
], BoardDemoComponent);
export { BoardDemoComponent };
//# sourceMappingURL=board.demo.component.js.map