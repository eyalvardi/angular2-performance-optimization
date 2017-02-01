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
import { Component, ApplicationRef, ChangeDetectorRef, NgZone, Renderer, ElementRef } from "@angular/core";
import { BaseComponent } from "../base.component";
var AccordionComponent = (function (_super) {
    __extends(AccordionComponent, _super);
    function AccordionComponent(elmRef, render, zone, cd, appRef) {
        var _this = _super.call(this, elmRef, render, zone) || this;
        _this.cd = cd;
        _this.appRef = appRef;
        return _this;
    }
    return AccordionComponent;
}(BaseComponent));
AccordionComponent = __decorate([
    Component({
        selector: 'accordion',
        providers: [],
        styles: ["\n        :host{ display: block; }\n    "],
        template: "\n    <div class=\"panel-group\">\n      <ng-content></ng-content>\n    </div>\n"
    }),
    __metadata("design:paramtypes", [ElementRef,
        Renderer,
        NgZone,
        ChangeDetectorRef,
        ApplicationRef])
], AccordionComponent);
export { AccordionComponent };
//# sourceMappingURL=accordion.component.js.map