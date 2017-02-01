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
import { Component, Input } from "@angular/core";
import { BaseComponent } from "../base.component";
var UserComponent = (function (_super) {
    __extends(UserComponent, _super);
    function UserComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(UserComponent.prototype, "isDetach", {
        get: function () { return this._isDetach; },
        set: function (value) {
            this._isDetach = value;
            this.isDetach ? this.cd.detach() : this.cd.reattach();
        },
        enumerable: true,
        configurable: true
    });
    return UserComponent;
}(BaseComponent));
__decorate([
    Input('source'),
    __metadata("design:type", Object)
], UserComponent.prototype, "user", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], UserComponent.prototype, "isDetach", null);
UserComponent = __decorate([
    Component({
        selector: 'user-profile',
        //changeDetection : ChangeDetectionStrategy.OnPush,
        styles: ["\n        :host{\n            display: block;\n        }\n        .media{\n            margin: 5px 0;\n            padding:3px;\n        }\n        .dp{\n            border:10px solid #eee;\n            transition: all 0.2s ease-in-out;\n        }\n        .dp:hover{\n            border:2px solid #eee;\n            transform:rotate(360deg);\n            -ms-transform:rotate(360deg);\n            -webkit-transform:rotate(360deg);\n            /*-webkit-font-smoothing:antialiased;*/\n        }\n    "],
        template: "\n        <div class=\"row\">\n            <div class=\"col-lg-5\">\n                <div class=\"media\">\n                    <a class=\"pull-left\" href=\"#\">\n                        <img class=\"media-object dp img-circle\"\n                             [src]=\"user.picture.thumbnail\" style=\"width: 100px;height:100px;\">\n                    </a>\n                    <div class=\"media-body\">\n                        <h4 class=\"media-heading\">{{user.name.title}} {{user.name.first}} {{user.name.last}} <small> {{user.location.state}}</small></h4>\n                        <h5>Phone: {{user.phone}}, Mobile: {{user.cell}}</h5>\n                        <hr style=\"margin:8px auto\">\n        \n                        <span *ngFor=\"let tag of tags;let i=index\"\n                              style=\"margin-right: 5px;\"\n                              class=\"label\" \n                              [class.label-default]=\"i%3!=0\" \n                              [class.label-info]=\"i%3==0\">\n                            {{tag}}\n                        </span>                        \n                    </div>\n                </div>\n                <pre>{{user | json}}</pre>\n            </div>\n        </div>\n"
    })
], UserComponent);
export { UserComponent };
//# sourceMappingURL=user.component.js.map