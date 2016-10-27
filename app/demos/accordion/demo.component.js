"use strict";
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
var AccordionDemoComponent = (function () {
    function AccordionDemoComponent() {
    }
    AccordionDemoComponent = __decorate([
        core_1.Component({
            providers: [],
            styles: [],
            template: "\n<div>\n    <h4>(click) in the template cause a tick</h4>\n    <accordion>        \n        <item title=\"title 1\">\n            <template></template>\n            desc 1\n        </item>\n        <item title=\"title 2\">desc 2</item>\n        <item title=\"title 3\">desc 3</item>\n    </accordion>\n    <h4>No ticks (NgZone)</h4>\n    <p>\n        This demo shows how we can stop the tick that happens because a click event. \n        In this approach we can't register an event in the template because we need\n        to use the NgZone class.\n    </p> \n    <accordion>\n        <item2 title=\"title 1\">desc 1</item2>\n        <item2 title=\"title 2\">desc 2</item2>\n        <item2 title=\"title 3\">desc 3</item2>\n    </accordion>\n</div>\n" }), 
        __metadata('design:paramtypes', [])
    ], AccordionDemoComponent);
    return AccordionDemoComponent;
}());
exports.AccordionDemoComponent = AccordionDemoComponent;
//# sourceMappingURL=demo.component.js.map