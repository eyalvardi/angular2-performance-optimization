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
import { Component, ElementRef, Renderer, NgZone } from '@angular/core';
import { BaseComponent } from "./demos/base.component";
var AppComponent = (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent(elmRef, render, zone) {
        var _this = _super.call(this, elmRef, render, zone) || this;
        _this.elmRef = elmRef;
        _this.render = render;
        _this.zone = zone;
        return _this;
    }
    return AppComponent;
}(BaseComponent));
AppComponent = __decorate([
    Component({
        selector: 'my-app',
        styles: [":host{display: block}"],
        template: "\n    <div  class=\"container-fluid\" style=\"max-width:800px\">\n         <tick></tick>\n         <h3 class=\"center-block\"> Change detection demos ({{version}})</h3>\n        \n        <a routerLink=\"/home\" routerLinkActive=\"active\">Home</a> |\n         \n         <a routerLink=\"/counter\" routerLinkActive=\"active\">Counter</a> |\n         <a routerLink=\"/board\" routerLinkActive=\"active\">Board</a> |\n         <a routerLink=\"/accordion\" routerLinkActive=\"active\">Accordion</a> |\n\n         <a routerLink=\"/onpush\" routerLinkActive=\"active\">OnPush</a> |\n         <a routerLink=\"/ondirty\" routerLinkActive=\"active\">OnDirty</a> |\n         \n         <a href=\"http://ng-course.org/ng-course/demos/ng-course/index.html\" target=\"_blank\">More</a>\n         \n         <hr>\n         <router-outlet></router-outlet>\n    </div>\n    <div>\n        <hr>\n        Eyal Vardi: <a href=\"http://eyalvardi.wordpress.com\">blog</a> | <a href=\"http://www.angular.org.il\">angular.org.il</a> | Angular Version : {{version}}\n    </div>\n"
    }),
    __metadata("design:paramtypes", [ElementRef,
        Renderer,
        NgZone])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map