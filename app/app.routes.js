import { AccordionDemoComponent } from "./demos/accordion/demo.component";
import { BoardDemoComponent } from "./demos/board/board.demo.component";
import { BoardDemo2Component } from "./demos/board/board2.demo.component";
import { UsersDemoComponent } from "./demos/detach/users-demo.component";
import { HomeComponent } from "./demos/home.component";
import { OnDirtyDemoComponent } from "./demos/on-dirty/on-dirty.component";
export var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'accordion', component: AccordionDemoComponent },
    { path: 'counter', component: BoardDemoComponent },
    { path: 'board', component: BoardDemo2Component },
    { path: 'onpush', component: UsersDemoComponent },
    { path: 'ondirty', component: OnDirtyDemoComponent },
];
//# sourceMappingURL=app.routes.js.map