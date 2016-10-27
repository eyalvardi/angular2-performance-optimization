"use strict";
var core_1 = require("@angular/core");
var isBorder = true;
function setBorder(val) {
    isBorder = val;
}
exports.setBorder = setBorder;
var BaseComponent = (function () {
    function BaseComponent(elmRef, render, zone, cd) {
        this.elmRef = elmRef;
        this.render = render;
        this.zone = zone;
        this.cd = cd;
        //isTick:boolean = false;
        this.isDetach = false;
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
    Object.defineProperty(BaseComponent.prototype, "cdMode", {
        get: function () {
            //return this.cd['_view'].cdMode;
            return core_1.ChangeDetectionStrategy[this.cd['_view'].cdMode];
        },
        enumerable: true,
        configurable: true
    });
    // tick
    BaseComponent.prototype.ngDoCheck = function () {
        var _this = this;
        if (!this.isBorder)
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
exports.BaseComponent = BaseComponent;
//# sourceMappingURL=base.component.js.map