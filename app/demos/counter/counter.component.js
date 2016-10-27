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
var CounterComponent = (function (_super) {
    __extends(CounterComponent, _super);
    function CounterComponent(elmRef, render, zone, cd, appRef) {
        _super.call(this, elmRef, render, zone, cd);
        this.appRef = appRef;
        this.runFnBind = this.run.bind(this);
    }
    Object.defineProperty(CounterComponent.prototype, "isStart", {
        set: function (value) {
            value ? this.start() : this.stop();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CounterComponent.prototype, "isDetectChanges", {
        set: function (value) {
            this._isDetectChanges = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CounterComponent.prototype, "value", {
        get: function () { return this._value; },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CounterComponent.prototype, "ms", {
        get: function () { return this._ms; },
        set: function (value) { this._ms = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CounterComponent.prototype, "isTick", {
        get: function () { return this._isTick; },
        set: function (value) {
            this._isTick = value;
            this.start();
        },
        enumerable: true,
        configurable: true
    });
    CounterComponent.prototype.start = function () {
        //console.time('counter');
        this.stop();
        this._isRun = true;
        this.isTick ? this.run()
            : this.zone.runOutsideAngular(this.runFnBind);
    };
    CounterComponent.prototype.run = function () {
        this._value++;
        if (this._value > 100) {
            //console.timeEnd('counter');
            this._value = 0;
        }
        if (this._isDetectChanges) {
            this.cd.detectChanges();
        }
        if (this._isRun) {
            this._id = setTimeout(this.runFnBind);
        }
    };
    CounterComponent.prototype.onClick = function () {
        this.value = 0;
        this._isRun = !this._isRun;
        if (this._isRun) {
            this.start();
        }
    };
    CounterComponent.prototype.stop = function () {
        this.value = 0;
        this._isRun = false;
        if (this._id) {
            clearTimeout(this._id);
        }
    };
    CounterComponent.prototype.ngOnDestroy = function () {
        this.stop();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], CounterComponent.prototype, "isStart", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], CounterComponent.prototype, "isDetectChanges", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], CounterComponent.prototype, "value", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], CounterComponent.prototype, "ms", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], CounterComponent.prototype, "isTick", null);
    CounterComponent = __decorate([
        core_1.Component({
            selector: 'counter',
            styles: ["\n    :host{\n            display: block;\n            width: 50px; height: 50px;\n            border: 1px dotted black;\n            text-align: center;\n            vertical-align: middle;\n            margin: 8px;\n                        \n    }\n"],
            template: "\n    <div (click)=\"onClick()\">{{value}}</div>\n" }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.NgZone, core_1.ChangeDetectorRef, core_1.ApplicationRef])
    ], CounterComponent);
    return CounterComponent;
}(base_component_1.BaseComponent));
exports.CounterComponent = CounterComponent;
//# sourceMappingURL=counter.component.js.map