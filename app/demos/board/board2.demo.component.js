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
var BoardDemo2Component = (function (_super) {
    __extends(BoardDemo2Component, _super);
    function BoardDemo2Component(elmRef, render, zone, cd, appRef) {
        _super.call(this, elmRef, render, zone, cd);
        this.counters = new Array(100);
        this.value = 0;
        this.isRun = false;
        this.isDetectChanges = false;
        this._isTick = true;
    }
    Object.defineProperty(BoardDemo2Component.prototype, "isTick", {
        get: function () { return this._isTick; },
        set: function (value) {
            this._isTick = value;
            this.start();
        },
        enumerable: true,
        configurable: true
    });
    BoardDemo2Component.prototype.ngOnInit = function () {
        //console.time('counter');
        this.start();
    };
    BoardDemo2Component.prototype.start = function () {
        this.stop();
        this.isRun = true;
        this.isTick ? this.run()
            : this.zone.runOutsideAngular(this.run.bind(this));
    };
    BoardDemo2Component.prototype.addCounter = function (value) {
        this.counters = new Array(+value);
    };
    BoardDemo2Component.prototype.run = function () {
        this.value++;
        if (this.value > 100) {
            console.timeEnd('counter');
            this.value = 0;
            console.time('counter');
        }
        if (this.isDetectChanges) {
            this.cd.detectChanges();
        }
        if (this.isRun) {
            this.id = setTimeout(this.run.bind(this), 10);
        }
    };
    BoardDemo2Component.prototype.stop = function () {
        this.value = 0;
        this.isRun = false;
        if (this.id) {
            clearTimeout(this.id);
        }
    };
    BoardDemo2Component.prototype.ngOnDestroy = function () {
        this.stop();
    };
    BoardDemo2Component = __decorate([
        core_1.Component({
            styles: ["\n        :host{ display: block; }\n        .flow{\n            float:left;\n        }\n    "],
            template: "\n<div>\n    <h4>Board II component</h4>\n    <P class=\"desc\">\n        This demo shows how we use only 1 setTimeout in \n        the parent component to update all its children.  \n    </P>\n      <button (click)=\"isTick = !isTick\" class=\"btn\"\n        [ngClass]=\"{'btn-warning': isTick,'btn-success':!isTick}\">\n        <span *ngIf=\"!isTick\">No</span>Ticks\n      </button>\n      <button (click)=\"isDetectChanges = !isDetectChanges\" class=\"btn\"\n        [ngClass]=\"{'btn-warning': !isDetectChanges,'btn-success':isDetectChanges}\">\n        <span *ngIf=\"!isDetectChanges\">No</span> Detect Changes\n      </button>            \n      <button (click)=\"isBorder = !isBorder\" class=\"btn\"\n        [ngClass]=\"{'btn-warning': isBorder,'btn-success':!isBorder}\">\n        <span *ngIf=\"!isBorder\">No</span> Border\n      </button>      \n      <br>   \n      <h4><span>Size: {{counters.length| number}}</span></h4>\n       Change to size:         \n        <a (click)=\"addCounter(100) \">100</a> |\n        <a (click)=\"addCounter(500) \">500</a> |\n        <a (click)=\"addCounter(1000)\">1,000</a> |\n        <a (click)=\"addCounter(1500)\">1,500</a> |\n        <a (click)=\"addCounter(3000)\">3,000</a> |\n        <a (click)=\"addCounter(5000)\">5,000</a> |\n        <a (click)=\"addCounter(7000)\">7,000</a> |\n      \n      <hr>\n      <counter2 class=\"flow\"\n        *ngFor=\"let c of counters;let index=index\"       \n        [value]=\"value + index\">    \n      </counter2>\n</div>\n" }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.NgZone, core_1.ChangeDetectorRef, core_1.ApplicationRef])
    ], BoardDemo2Component);
    return BoardDemo2Component;
}(base_component_1.BaseComponent));
exports.BoardDemo2Component = BoardDemo2Component;
//# sourceMappingURL=board2.demo.component.js.map