/**
 * Created by Eyal on 10/1/2016.
 */
"use strict";
var BoardComponent = (function () {
    function BoardComponent($timeout) {
        this.$timeout = $timeout;
        this.counters = new Array(100);
        this.value = 0;
        this.runBindFn = this.run.bind(this);
        this.run();
    }
    BoardComponent.prototype.addCounter = function (value) {
        this.counters = new Array(+value);
    };
    BoardComponent.prototype.run = function () {
        this.value++;
        if (this.value > 100) {
            console.timeEnd('counter get 100');
            this.value = 0;
            console.time('counter get 100');
        }
        this.id = this.$timeout(this.runBindFn, 10);
    };
    BoardComponent.prototype.ngOnDestroy = function () {
        clearTimeout(this.id);
    };
    return BoardComponent;
}());
exports.boardComponent = {
    controller: BoardComponent,
    template: "\n    <div>\n    <h4>Angular 1 Board Component</h4>            \n      <br>   \n      <h4><span>Size: {{$ctrl.counters.length| number}}</span></h4>\n       Change to size:         \n        <a ng-click=\"$ctrl.addCounter(100) \">100</a> |\n        <a ng-click=\"$ctrl.addCounter(500) \">500</a> |\n        <a ng-click=\"$ctrl.addCounter(1000)\">1,000</a> |\n        <a ng-click=\"$ctrl.addCounter(1500)\">1,500</a> |\n        <a ng-click=\"$ctrl.addCounter(3000)\">3,000</a> |\n        <a ng-click=\"$ctrl.addCounter(5000)\">5,000</a> |\n        <a ng-click=\"$ctrl.addCounter(7000)\">7,000</a> |\n      \n      <hr>\n      <counter class=\"flow\"\n        ng-repeat=\"c in $ctrl.counters track by $index\"       \n        value=\"$ctrl.value + $index\" >    \n      </counter>\n</div>\n"
};
//# sourceMappingURL=board.component.js.map