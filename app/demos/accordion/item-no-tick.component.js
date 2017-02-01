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
import { Component, Input, ApplicationRef, ChangeDetectorRef, NgZone, Renderer, ElementRef, ViewChild } from "@angular/core";
import { BaseComponent } from "../base.component";
var Item2Component = (function (_super) {
    __extends(Item2Component, _super);
    function Item2Component(elmRef, render, zone, cd, appRef) {
        var _this = _super.call(this, elmRef, render, zone) || this;
        _this.cd = cd;
        _this.appRef = appRef;
        _this._onClick = function () {
            _this.isActive = !_this.isActive;
            _this.cd.detectChanges();
        };
        _this.isActive = false;
        return _this;
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
    return Item2Component;
}(BaseComponent));
__decorate([
    ViewChild('head', { read: ElementRef }),
    __metadata("design:type", Object)
], Item2Component.prototype, "head", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], Item2Component.prototype, "title", null);
Item2Component = __decorate([
    Component({
        selector: 'item2',
        providers: [],
        styles: ["\n        :host{ display: block; }\n"],
        template: "\n<div class=\"panel panel-default\">\n    <div #head class=\"panel-heading\">\n        <h4 class=\"panel-title\">\n            {{title}}\n        </h4>\n    </div>\n    <div *ngIf=\"isActive\">\n        <div class=\"panel-body\">\n            <ng-content></ng-content>\n        </div>\n    </div>\n</div>\n"
    }),
    __metadata("design:paramtypes", [ElementRef,
        Renderer,
        NgZone,
        ChangeDetectorRef,
        ApplicationRef])
], Item2Component);
export { Item2Component };
//# sourceMappingURL=item-no-tick.component.js.map