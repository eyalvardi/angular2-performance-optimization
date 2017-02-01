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
import { Component, Input } from '@angular/core';
import { BaseComponent } from "../base.component";
var CounterComponent = (function (_super) {
    __extends(CounterComponent, _super);
    function CounterComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
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
    /*
    
        constructor( elmRef:ElementRef, render:Renderer,
                     zone:NgZone, cd :ChangeDetectorRef,
                     protected appRef : ApplicationRef ){
            super(elmRef,render,zone,cd);
        }
    */
    CounterComponent.prototype.start = function () {
        //console.time('counter');
        this.runFnBind = this.run.bind(this);
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
    return CounterComponent;
}(BaseComponent));
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], CounterComponent.prototype, "isStart", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], CounterComponent.prototype, "isDetectChanges", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], CounterComponent.prototype, "value", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], CounterComponent.prototype, "ms", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], CounterComponent.prototype, "isTick", null);
CounterComponent = __decorate([
    Component({
        selector: 'counter',
        styles: ["\n    :host{\n            display: block;\n            width: 50px; height: 50px;\n            border: 1px dotted black;\n            text-align: center;\n            vertical-align: middle;\n            margin: 8px;\n                        \n    }\n"],
        template: "\n    <div (click)=\"onClick()\">{{value}}</div>\n"
    })
], CounterComponent);
export { CounterComponent };
//# sourceMappingURL=counter.component.js.map