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
var Item2Component = (function (_super) {
    __extends(Item2Component, _super);
    function Item2Component(elmRef, render, zone, cd, appRef) {
        var _this = this;
        _super.call(this, elmRef, render, zone);
        this.cd = cd;
        this.appRef = appRef;
        this._onClick = function () {
            _this.isActive = !_this.isActive;
            _this.cd.detectChanges();
        };
        this.isActive = false;
    }
    Item2Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.head.nativeElement.addEventListener('click', _this._onClick);
        });
    };
    Item2Component.prototype.ngOnDestroy = function () {
        this.head.nativeElement.removeEventListener('click', this._onClick);
    };
    Object.defineProperty(Item2Component.prototype, "title", {
        get: function () { return this._title; },
        set: function (value) { this._title = value; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.ViewChild('head', { read: core_1.ElementRef }), 
        __metadata('design:type', Object)
    ], Item2Component.prototype, "head", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], Item2Component.prototype, "title", null);
    Item2Component = __decorate([
        core_1.Component({
            selector: 'item2',
            providers: [],
            styles: ["\n        :host{ display: block; }\n"],
            template: "\n<div class=\"panel panel-default\">\n    <div #head class=\"panel-heading\">\n        <h4 class=\"panel-title\">\n            {{title}}\n        </h4>\n    </div>\n    <div *ngIf=\"isActive\">\n        <div class=\"panel-body\">\n            <ng-content></ng-content>\n        </div>\n    </div>\n</div>\n" }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.NgZone, core_1.ChangeDetectorRef, core_1.ApplicationRef])
    ], Item2Component);
    return Item2Component;
}(base_component_1.BaseComponent));
exports.Item2Component = Item2Component;
//# sourceMappingURL=item-no-tick.component.js.map