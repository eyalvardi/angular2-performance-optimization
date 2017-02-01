"use strict";
require("angular");
var board_component_1 = require("./board.component");
var counter_component_1 = require("./counter.component");
angular.module('app', [])
    .component('counter', counter_component_1.counterComponent)
    .component('board', board_component_1.boardComponent);
//# sourceMappingURL=app.module.js.map