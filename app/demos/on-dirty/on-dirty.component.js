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
import { threshold, upDown } from '../../codes.snipets';
import "../../rxjs-operators";
import { feed } from './feed.service';
var OnDirtyDemoComponent = (function (_super) {
    __extends(OnDirtyDemoComponent, _super);
    function OnDirtyDemoComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(OnDirtyDemoComponent.prototype, "thresholdCode", {
        get: function () { return threshold; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OnDirtyDemoComponent.prototype, "upDownCode", {
        get: function () { return upDown; },
        enumerable: true,
        configurable: true
    });
    OnDirtyDemoComponent.prototype.ngOnInit = function () {
        this.zone.runOutsideAngular(function () {
            feed.start();
        });
    };
    Object.defineProperty(OnDirtyDemoComponent.prototype, "feed", {
        get: function () {
            return feed.source;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OnDirtyDemoComponent.prototype, "auditTimeFeed", {
        get: function () {
            return feed.source.auditTime(500);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OnDirtyDemoComponent.prototype, "thresholdFeed", {
        get: function () {
            return this.auditTimeFeed
                .scan(function (acc, curr) {
                return {
                    curr: curr,
                    delta: Math.abs(acc.curr - curr)
                };
            })
                .filter(function (value) { return value.delta > 15; })
                .map(function (acc) { return acc.curr; });
        },
        enumerable: true,
        configurable: true
    });
    return OnDirtyDemoComponent;
}(BaseComponent));
OnDirtyDemoComponent = __decorate([
    Component({
        styles: ["\n    :host{\n            display: block;           \n            margin: 8px;\n                        \n    }\n    .trg-up {\n         width: 0;\n         height: 0;\n         border-left  : 5px solid transparent;\n         border-right : 5px solid transparent;\n         border-bottom: 10px solid green;\n     }\n     .trg-down {\n         width: 0;\n         height: 0;\n         border-left  : 5px solid transparent;\n         border-right : 5px solid transparent;\n         border-top: 10px solid red;\n     }\n"],
        template: "\n<div>\n  <!--<button (click)=\"isBorder=!isBorder\">{{ isBorder ? 'Border':  'No Border'}}</button>\n  <br>\n  <hr>-->\n  <p>\n      This demo shows how we can work with an Observable class and its operators to reduce the amount of\n      updates, meaning less expressions to calculate. The component is detached form the component tree and the update happens\n      only when item comes up from the observable.\n  </p>\n  <h4>Stream I (source) - Update every 10ms.</h4>\n  <up-down [source]=\"feed\"></up-down>\n  \n  <h4>Stream II (auditTime) - source.auditTime(500)</h4>\n  <up-down [source]=\"auditTimeFeed\"></up-down>\n  \n  <h4>Stream III - auditTime.threshold(15)</h4>\n  <up-down [source]=\"thresholdFeed\"></up-down>\n  <hr>\n  \n  <h4>Threshold</h4>\n  <pre>{{thresholdCode}}</pre>\n  \n  <h4>Up & Down triangle</h4>\n  <pre>{{upDownCode}}</pre>-\n</div>\n"
    })
], OnDirtyDemoComponent);
export { OnDirtyDemoComponent };
//# sourceMappingURL=on-dirty.component.js.map