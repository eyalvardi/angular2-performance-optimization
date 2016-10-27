"use strict";
var demo_component_1 = require("./demos/accordion/demo.component");
var board_demo_component_1 = require("./demos/board/board.demo.component");
var board2_demo_component_1 = require("./demos/board/board2.demo.component");
var users_demo_component_1 = require("./demos/detach/users-demo.component");
var home_component_1 = require("./demos/home.component");
var on_dirty_component_1 = require("./demos/on-dirty/on-dirty.component");
exports.appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'accordion', component: demo_component_1.AccordionDemoComponent },
    { path: 'counter', component: board_demo_component_1.BoardDemoComponent },
    { path: 'board', component: board2_demo_component_1.BoardDemo2Component },
    { path: 'onpush', component: users_demo_component_1.UsersDemoComponent },
    { path: 'ondirty', component: on_dirty_component_1.OnDirtyDemoComponent },
];
//# sourceMappingURL=app.routes.js.map