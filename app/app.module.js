var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./app.routes";
import { AppComponent } from "./app.component";
import { DemosModule } from './demos/demos.module';
import { BaseComponent } from "./demos/base.component";
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [AppComponent, BaseComponent],
        entryComponents: [],
        bootstrap: [AppComponent],
        imports: [
            BrowserModule,
            HttpModule,
            RouterModule.forRoot(appRoutes, { useHash: true }),
            //InMemoryWebApiModule.forRoot(InMemoryDataService),
            DemosModule
        ],
        providers: []
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map