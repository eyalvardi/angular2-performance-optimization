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
var core_1 = require("@angular/core");
var base_component_1 = require('./base.component');
var TickComponent = (function () {
    function TickComponent(elmRef, render, zone, cd) {
        this.elmRef = elmRef;
        this.render = render;
        this.zone = zone;
        this.cd = cd;
        this.isDisplay = true;
        this.oldValue = 0;
        this.value = 0;
        this.countTickFn = this.countTick.bind(this);
    }
    TickComponent.prototype.setBorder = function () {
        this.isDisplay = !this.isDisplay;
        base_component_1.setBorder(this.isDisplay);
    };
    TickComponent.prototype.ngOnInit = function () {
        this.start = new Date();
        this.countTick();
    };
    // tick
    TickComponent.prototype.ngDoCheck = function () {
        var _this = this;
        this.countTick();
        if (!this.isDisplay)
            return;
        this.render.setElementStyle(this.boxElemRef.nativeElement, 'background-color', 'red');
        this.zone.runOutsideAngular(function () {
            setTimeout(function () {
                _this.render.setElementStyle(_this.boxElemRef.nativeElement, 'background-color', 'white');
            }, 100);
        });
    };
    TickComponent.prototype.countTick = function () {
        var _this = this;
        clearTimeout(this.cancelId);
        var now = +new Date();
        var time = now - +this.start;
        if (time > 1000) {
            this.oldValue = this.value;
            this.value = 0;
            this.start = new Date();
            this.cd.detectChanges();
        }
        else {
            this.value++;
        }
        this.zone.runOutsideAngular(function () {
            _this.cancelId = setTimeout(_this.countTickFn, 1200);
        });
    };
    __decorate([
        core_1.ViewChild('box', { read: core_1.ElementRef }), 
        __metadata('design:type', core_1.ElementRef)
    ], TickComponent.prototype, "boxElemRef", void 0);
    TickComponent = __decorate([
        core_1.Component({
            selector: 'tick',
            styles: ["\n        .box{ \n            width : 10px;\n            height: 12px;\n            border: 1px solid black;\n            margin-right: 3px;\n        }\n        :host{\n            display: block;\n            position: absolute;\n            top: 8px;\n            right: 8px;\n            line-height:0px;\n        }\n        .notDisplay{\n            border: 1px solid black;    \n        }\n    "],
            template: "\n   <div style=\" margin: auto;\">\n        <button #box class=\"box\" (click)=\"setBorder()\"></button>\n        <span>ticks: {{oldValue}} / s</span>\n   </div>\n" }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.NgZone, core_1.ChangeDetectorRef])
    ], TickComponent);
    return TickComponent;
}());
exports.TickComponent = TickComponent;
//# sourceMappingURL=tick.component.js.map