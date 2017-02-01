"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_1 = require("@angular/core");
var app_module_1 = require("./app.module");
core_1.enableProdMode();
// JIT
platform_browser_dynamic_1.platformBrowserDynamic()
    .bootstrapModule(app_module_1.AppModule);
/*.then(moduleRef=>{
    const appRef = moduleRef.injector.get(ApplicationRef);
    const cmpRef = appRef.components[0];
    enableDebugTools(cmpRef);
});*/
//# sourceMappingURL=main.js.map