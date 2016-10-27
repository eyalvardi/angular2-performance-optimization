import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode, ApplicationRef} from "@angular/core";
import {enableDebugTools} from "@angular/platform-browser";
import {AppModule} from "./app.module";

enableProdMode();

// JIT
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    /*.then(moduleRef=>{
        const appRef = moduleRef.injector.get(ApplicationRef);
        const cmpRef = appRef.components[0];
        enableDebugTools(cmpRef);
    });*/
