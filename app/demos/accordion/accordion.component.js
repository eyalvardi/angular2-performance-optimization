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
var AccordionComponent = (function (_super) {
    __extends(AccordionComponent, _super);
    function AccordionComponent(elmRef, render, zone, cd, appRef) {
        _super.call(this, elmRef, render, zone);
        this.cd = cd;
        this.appRef = appRef;
    }
    AccordionComponent = __decorate([
        core_1.Component({
            selector: 'accordion',
            providers: [],
            styles: ["\n        :host{ display: block; }\n    "],
            template: "\n    <div class=\"panel-group\">\n      <ng-content></ng-content>\n    </div>\n" }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.NgZone, core_1.ChangeDetectorRef, core_1.ApplicationRef])
    ], AccordionComponent);
    return AccordionComponent;
}(base_component_1.BaseComponent));
exports.AccordionComponent = AccordionComponent;
//# sourceMappingURL=accordion.component.js.map