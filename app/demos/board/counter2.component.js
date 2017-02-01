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
import { Component, Input } from '@angular/core';
import { BaseComponent } from "../base.component";
var Counter2Component = (function (_super) {
    __extends(Counter2Component, _super);
    function Counter2Component() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Counter2Component;
}(BaseComponent));
__decorate([
    Input(),
    __metadata("design:type", Number)
], Counter2Component.prototype, "value", void 0);
Counter2Component = __decorate([
    Component({
        selector: 'counter2',
        styles: ["\n        :host{\n                display: block;\n                width: 50px; height: 50px;\n                border: 1px dotted black;\n                text-align: center;\n                vertical-align: middle;\n                margin: 8px;\n                            \n        }\n    "],
        template: "\n    <div>{{value}}</div>\n"
    })
], Counter2Component);
export { Counter2Component };
//# sourceMappingURL=counter2.component.js.map