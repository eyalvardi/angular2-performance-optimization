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
var Observable_1 = require("rxjs/Observable");
var codes_snipets_1 = require('../../codes.snipets');
require("../../rxjs-operators");
var OnDirtyDemoComponent = (function (_super) {
    __extends(OnDirtyDemoComponent, _super);
    function OnDirtyDemoComponent(elmRef, render, zone, cd) {
        _super.call(this, elmRef, render, zone, cd);
        this.val1 = 0;
        this.val2 = 0;
        this.val3 = 0;
        this.subscriber = [];
        this.updateFn = this.update.bind(this);
    }
    Object.defineProperty(OnDirtyDemoComponent.prototype, "thresholdCode", {
        get: function () { return codes_snipets_1.threshold; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OnDirtyDemoComponent.prototype, "upDownCode", {
        get: function () { return codes_snipets_1.upDown; },
        enumerable: true,
        configurable: true
    });
    OnDirtyDemoComponent.prototype.ngOnInit = function () {
        this.zone.runOutsideAngular(this.start.bind(this));
        //this.start();
    };
    OnDirtyDemoComponent.prototype.start = function () {
        this.createSource();
        this.createAuditTime();
        this.createThreshold();
        // create producer
        this.worker = new Worker('app/demos/num-feeds.service.js');
        this.worker.addEventListener('message', this.updateFn);
        this.worker.postMessage(true);
    };
    OnDirtyDemoComponent.prototype.createSource = function () {
        var _this = this;
        this.source = Observable_1.Observable.create(function (observer) { _this.observer = observer; }).share();
        this.createUpDown(this.source, 'isUp1');
        this.subscriber.push(this.source.subscribe(function (val) { _this.val1 = val; }));
    };
    OnDirtyDemoComponent.prototype.createAuditTime = function () {
        var _this = this;
        this.auditTime = this.source.auditTime(500);
        this.createUpDown(this.auditTime, 'isUp2');
        this.subscriber.push(this.auditTime.subscribe(function (val) { _this.val2 = val; }));
    };
    OnDirtyDemoComponent.prototype.createThreshold = function () {
        var _this = this;
        this.threshold = this.auditTime
            .scan(function (acc, curr) {
            return {
                curr: curr,
                delta: Math.abs(acc.curr - curr)
            };
        })
            .filter(function (value) { return value.delta > 15; })
            .map(function (acc) { return acc.curr; })
            .distinctUntilChanged();
        this.createUpDown(this.threshold, 'isUp3');
        this.subscriber.push(this.threshold.subscribe(function (val) {
            _this.val3 = val;
            _this.cd.detectChanges();
        }));
    };
    OnDirtyDemoComponent.prototype.createUpDown = function (observable, property) {
        var _this = this;
        this.subscriber.push(observable
            .scan(function (acc, curr) {
            return {
                curr: curr,
                isUp: curr - acc.curr > 0
            };
        })
            .map(function (val) { return val.isUp; })
            .distinctUntilChanged()
            .subscribe(function (val) {
            _this[property] = val;
        }));
    };
    OnDirtyDemoComponent.prototype.update = function (e) {
        this.observer.next(e.data);
        //this.cd.detectChanges();
    };
    OnDirtyDemoComponent.prototype.ngOnDestroy = function () {
        this.worker.postMessage(false);
        this.worker.removeEventListener(this.updateFn);
        this.worker.terminate();
        this.observer.complete();
        this.subscriber.forEach(function (sub) { return sub.unsubscribe(); });
    };
    OnDirtyDemoComponent = __decorate([
        core_1.Component({
            styles: ["\n    :host{\n            display: block;           \n            margin: 8px;\n                        \n    }\n    .trg-up {\n         width: 0;\n         height: 0;\n         border-left  : 5px solid transparent;\n         border-right : 5px solid transparent;\n         border-bottom: 10px solid green;\n     }\n     .trg-down {\n         width: 0;\n         height: 0;\n         border-left  : 5px solid transparent;\n         border-right : 5px solid transparent;\n         border-top: 10px solid red;\n     }\n"],
            template: "\n<div>\n  <!--<button (click)=\"isBorder=!isBorder\">{{ isBorder ? 'Border':  'No Border'}}</button>\n  <br>\n  <hr>-->\n  <p>\n      This demo shows how we can work with an Observable class and its operators to reduce the amount of\n      updates, meaning less expressions to calculate. The component is detached form the component tree and the update happens\n      only when item comes up from the observable.\n  </p>\n  <h4>Stream I (source) - Update every 10ms.</h4>\n  <pre>{{val1}} : <span [class.trg-up]=\"isUp1\" [class.trg-down]=\"!isUp1\"></span></pre>\n  \n  <h4>Stream II (auditTime) - source.auditTime(500)</h4>\n  <pre>{{val2}} : <span [class.trg-up]=\"isUp2\" [class.trg-down]=\"!isUp2\"></span></pre>\n  \n  <h4>Stream III - auditTime.threshold(15)</h4>\n  <pre>{{val3}} : <span [class.trg-up]=\"isUp3\" [class.trg-down]=\"!isUp3\"></span></pre>\n  <hr>\n  \n  <h4>Threshold</h4>\n  <pre>{{thresholdCode}}</pre>\n  \n  <h4>Up & Down triangle</h4>\n  <pre>{{upDownCode}}</pre>-\n</div>\n" }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.NgZone, core_1.ChangeDetectorRef])
    ], OnDirtyDemoComponent);
    return OnDirtyDemoComponent;
}(base_component_1.BaseComponent));
exports.OnDirtyDemoComponent = OnDirtyDemoComponent;
//# sourceMappingURL=on-dirty.component.js.map