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
import { Component, ElementRef, Renderer, ChangeDetectorRef, NgZone } from "@angular/core";
import { Http } from "@angular/http";
import { BaseComponent } from "../base.component";
import '../../rxjs-operators';
var UsersDemoComponent = (function (_super) {
    __extends(UsersDemoComponent, _super);
    function UsersDemoComponent(elmRef, render, zone, cd, http) {
        var _this = _super.call(this, elmRef, render, zone, cd) || this;
        _this.http = http;
        _this.users = [];
        _this.value = 0;
        _this.isDetach = false;
        _this.runFnBind = _this.run.bind(_this);
        return _this;
    }
    Object.defineProperty(UsersDemoComponent.prototype, "isStart", {
        get: function () { return this._isStart; },
        set: function (value) {
            this._isStart = value;
            if (value) {
                this.run();
            }
        },
        enumerable: true,
        configurable: true
    });
    UsersDemoComponent.prototype.load = function (num) {
        if (num === void 0) { num = 1; }
        //this.loadOffline();
        this.loadOnLine(num);
    };
    UsersDemoComponent.prototype.loadOnLine = function (num) {
        var _this = this;
        this.http
            .get("https://randomuser.me/api?results=" + num)
            .map(function (resp) { return resp.json(); })
            .map(function (json) { return json.results; })
            .subscribe(function (users) {
            _this.users = users;
        });
    };
    UsersDemoComponent.prototype.loadOffline = function () {
        var _this = this;
        this.http
            .get('app/users')
            .map(function (resp) { return resp.json(); })
            .map(function (json) { return json.data.results; })
            .subscribe(function (users) {
            _this.users = users;
        });
    };
    UsersDemoComponent.prototype.run = function () {
        this.value++;
        if (this.value > 90) {
            console.timeEnd('counter');
            this.value = 0;
            console.time('counter');
        }
        if (this.isStart) {
            this.id = setTimeout(this.runFnBind, 10);
        }
    };
    UsersDemoComponent.prototype.ngOnDestroy = function () {
        clearTimeout(this.id);
    };
    return UsersDemoComponent;
}(BaseComponent));
UsersDemoComponent = __decorate([
    Component({
        styles: ["\n    :host{display: block;}\n    .short{\n        width: 70px;\n    }\n"],
        //changeDetection:ChangeDetectionStrategy.OnPush,
        template: "\n<div>\n    <P class=\"desc\">\n        This demo shows how to reduce the amount of expressions that need to \n        calculate every tick by using the on push strategy.  \n    </P>\n    <input type=\"number\" #i value=\"1000\" class=\"short\">\n    <button (click)=\"load(i.value)\">Load</button>\n    <button (click)=\"isDetach=!isDetach\" class=\"btn\"\n        [ngClass]=\"{'btn-warning': !isDetach,'btn-success':isDetach}\">\n        {{ isDetach ? 'Reattach':  'Detach'}}\n    </button>\n     <button (click)=\"isBorder = !isBorder\" class=\"btn\"\n        [ngClass]=\"{'btn-warning': isBorder,'btn-success':!isBorder}\">\n        <span *ngIf=\"!isBorder\">No</span> Border\n      </button>\n     <button (click)=\"isStart = !isStart\" class=\"btn\"\n        [ngClass]=\"{'btn-warning': !isStart,'btn-success':isStart}\">\n        {{ isStart ? 'Start':  'Stop'}}\n      </button>\n    \n    <hr>\n    <user-profile \n        *ngFor=\"let user of users\" \n        [source]=\"user\"\n        [isDetach]=\"isDetach\"\n        >\n    </user-profile>\n</div>\n"
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer,
        NgZone, ChangeDetectorRef,
        Http])
], UsersDemoComponent);
export { UsersDemoComponent };
//# sourceMappingURL=users-demo.component.js.map