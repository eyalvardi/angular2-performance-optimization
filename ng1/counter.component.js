"use strict";
/**
 * Created by Eyal on 10/1/2016.
 */
var CounterController = (function () {
    function CounterController() {
    }
    Object.defineProperty(CounterController.prototype, "value", {
        get: function () { return this._value; },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    return CounterController;
}());
exports.counterComponent = {
    bindings: {
        value: '<'
    },
    controller: CounterController,
    template: "\n    <div class=\"counter\">\n        {{$ctrl.value}}\n    </div>\n" };
//# sourceMappingURL=counter.component.js.map