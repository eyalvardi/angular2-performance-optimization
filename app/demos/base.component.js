var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ElementRef, Renderer, NgZone, ChangeDetectorRef, ChangeDetectionStrategy, VERSION, ApplicationRef, Component } from "@angular/core";
var isBorder = true;
export function setBorder(val) {
    isBorder = val;
}
var BaseComponent = (function () {
    function BaseComponent(elmRef, render, zone, cd, appRef) {
        this.elmRef = elmRef;
        this.render = render;
        this.zone = zone;
        this.cd = cd;
        this.appRef = appRef;
        //isTick:boolean = false;
        this.isDetach = false;
        //debugger;
    }
    Object.defineProperty(BaseComponent.prototype, "isBorder", {
        get: function () {
            return isBorder;
        },
        set: function (value) {
            isBorder = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "version", {
        get: function () {
            return VERSION.full;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "cdMode", {
        get: function () {
            //return this.cd['_view'].cdMode;
            return ChangeDetectionStrategy[this.cd['_view'].cdMode];
        },
        enumerable: true,
        configurable: true
    });
    // tick
    BaseComponent.prototype.ngDoCheck = function () {
        var _this = this;
        if (!this.isBorder)
            return;
        if (!this.render)
            return;
        this.render.setElementStyle(this.elmRef.nativeElement, 'border', '1px solid red');
        //for(let i=0 ;i< 400000000;i++){}
        this.zone.runOutsideAngular(function () {
            setTimeout(function () {
                _this.render.setElementStyle(_this.elmRef.nativeElement, 'border', '1px solid white');
            }, 300);
        });
    };
    BaseComponent.prototype.detach = function () {
        this.isDetach = true;
        this.cd.detach();
    };
    BaseComponent.prototype.reattach = function () {
        this.isDetach = false;
        this.cd.reattach();
    };
    BaseComponent.prototype.markForCheck = function () {
        this.cd.markForCheck();
    };
    BaseComponent.prototype.detectChanges = function () {
        this.cd.detectChanges();
    };
    return BaseComponent;
}());
BaseComponent = __decorate([
    Component({
        selector: 'base-cmp',
        template: ""
    }),
    __metadata("design:paramtypes", [ElementRef,
        Renderer,
        NgZone,
        ChangeDetectorRef,
        ApplicationRef])
], BaseComponent);
export { BaseComponent };
//# sourceMappingURL=base.component.js.map