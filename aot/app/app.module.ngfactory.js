/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../app/app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/http/src/http_module';
import * as import6 from '@angular/router/src/router_module';
import * as import7 from '../../app/demos/demos.module';
import * as import8 from '@angular/common/src/localization';
import * as import9 from '@angular/core/src/application_init';
import * as import10 from '@angular/core/src/testability/testability';
import * as import11 from '@angular/core/src/application_ref';
import * as import12 from '@angular/core/src/linker/compiler';
import * as import13 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import14 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import15 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import16 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import17 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import18 from '@angular/core/src/animation/animation_queue';
import * as import19 from '@angular/core/src/linker/view_utils';
import * as import20 from '@angular/platform-browser/src/browser/title';
import * as import21 from '@angular/http/src/backends/browser_xhr';
import * as import22 from '@angular/http/src/base_response_options';
import * as import23 from '@angular/http/src/backends/xhr_backend';
import * as import24 from '@angular/http/src/base_request_options';
import * as import25 from '@angular/common/src/location/location';
import * as import26 from '@angular/router/src/url_tree';
import * as import27 from '@angular/router/src/router_outlet_map';
import * as import28 from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import * as import29 from '@angular/router/src/router_preloader';
import * as import31 from './demos/home.component.ngfactory';
import * as import32 from './demos/accordion/demo.component.ngfactory';
import * as import33 from './demos/board/board.demo.component.ngfactory';
import * as import34 from './demos/board/board2.demo.component.ngfactory';
import * as import35 from './demos/detach/users-demo.component.ngfactory';
import * as import36 from './demos/on-dirty/on-dirty.component.ngfactory';
import * as import37 from './app.component.ngfactory';
import * as import38 from '@angular/core/src/i18n/tokens';
import * as import39 from '@angular/core/src/application_tokens';
import * as import40 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import41 from '@angular/platform-browser/src/dom/events/key_events';
import * as import42 from '@angular/core/src/zone/ng_zone';
import * as import43 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import44 from '@angular/common/src/location/platform_location';
import * as import45 from '@angular/common/src/location/location_strategy';
import * as import46 from '../../app/demos/home.component';
import * as import47 from '../../app/demos/accordion/demo.component';
import * as import48 from '../../app/demos/board/board.demo.component';
import * as import49 from '../../app/demos/board/board2.demo.component';
import * as import50 from '../../app/demos/detach/users-demo.component';
import * as import51 from '../../app/demos/on-dirty/on-dirty.component';
import * as import52 from '@angular/router/src/url_handling_strategy';
import * as import53 from '@angular/router/src/route_reuse_strategy';
import * as import54 from '@angular/router/src/router';
import * as import55 from '@angular/core/src/console';
import * as import56 from '@angular/core/src/error_handler';
import * as import57 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import58 from '@angular/platform-browser/src/dom/animation_driver';
import * as import59 from '@angular/core/src/render/api';
import * as import60 from '@angular/core/src/security';
import * as import61 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import62 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import63 from '@angular/http/src/interfaces';
import * as import64 from '@angular/http/src/http';
import * as import65 from '@angular/core/src/linker/ng_module_factory_loader';
import * as import66 from '@angular/router/src/router_config_loader';
import * as import67 from '@angular/router/src/router_state';
var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        return _super.call(this, parent, [
            import31.HomeComponentNgFactory,
            import32.AccordionDemoComponentNgFactory,
            import33.BoardDemoComponentNgFactory,
            import34.BoardDemo2ComponentNgFactory,
            import35.UsersDemoComponentNgFactory,
            import36.OnDirtyDemoComponentNgFactory,
            import37.AppComponentNgFactory
        ], [import37.AppComponentNgFactory]) || this;
    }
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_8", {
        get: function () {
            if ((this.__LOCALE_ID_8 == null)) {
                (this.__LOCALE_ID_8 = import3._localeFactory(this.parent.get(import38.LOCALE_ID, null)));
            }
            return this.__LOCALE_ID_8;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_9", {
        get: function () {
            if ((this.__NgLocalization_9 == null)) {
                (this.__NgLocalization_9 = new import8.NgLocaleLocalization(this._LOCALE_ID_8));
            }
            return this.__NgLocalization_9;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ApplicationRef_14", {
        get: function () {
            if ((this.__ApplicationRef_14 == null)) {
                (this.__ApplicationRef_14 = this._ApplicationRef__13);
            }
            return this.__ApplicationRef_14;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Compiler_15", {
        get: function () {
            if ((this.__Compiler_15 == null)) {
                (this.__Compiler_15 = new import12.Compiler());
            }
            return this.__Compiler_15;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_16", {
        get: function () {
            if ((this.__APP_ID_16 == null)) {
                (this.__APP_ID_16 = import39._appIdRandomProviderFactory());
            }
            return this.__APP_ID_16;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DOCUMENT_17", {
        get: function () {
            if ((this.__DOCUMENT_17 == null)) {
                (this.__DOCUMENT_17 = import4._document());
            }
            return this.__DOCUMENT_17;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_18", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_18 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_18 = new import13.HammerGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_18;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_19", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_19 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_19 = [
                    new import40.DomEventsPlugin(),
                    new import41.KeyEventsPlugin(),
                    new import13.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_18)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_19;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_20", {
        get: function () {
            if ((this.__EventManager_20 == null)) {
                (this.__EventManager_20 = new import14.EventManager(this._EVENT_MANAGER_PLUGINS_19, this.parent.get(import42.NgZone)));
            }
            return this.__EventManager_20;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSharedStylesHost_21", {
        get: function () {
            if ((this.__DomSharedStylesHost_21 == null)) {
                (this.__DomSharedStylesHost_21 = new import15.DomSharedStylesHost(this._DOCUMENT_17));
            }
            return this.__DomSharedStylesHost_21;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationDriver_22", {
        get: function () {
            if ((this.__AnimationDriver_22 == null)) {
                (this.__AnimationDriver_22 = import4._resolveDefaultAnimationDriver());
            }
            return this.__AnimationDriver_22;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomRootRenderer_23", {
        get: function () {
            if ((this.__DomRootRenderer_23 == null)) {
                (this.__DomRootRenderer_23 = new import16.DomRootRenderer_(this._DOCUMENT_17, this._EventManager_20, this._DomSharedStylesHost_21, this._AnimationDriver_22, this._APP_ID_16));
            }
            return this.__DomRootRenderer_23;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgProbeToken_24", {
        get: function () {
            if ((this.__NgProbeToken_24 == null)) {
                (this.__NgProbeToken_24 = [import6.routerNgProbeToken()]);
            }
            return this.__NgProbeToken_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RootRenderer_25", {
        get: function () {
            if ((this.__RootRenderer_25 == null)) {
                (this.__RootRenderer_25 = import43._createConditionalRootRenderer(this._DomRootRenderer_23, this.parent.get(import43.NgProbeToken, null), this._NgProbeToken_24));
            }
            return this.__RootRenderer_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_26", {
        get: function () {
            if ((this.__DomSanitizer_26 == null)) {
                (this.__DomSanitizer_26 = new import17.DomSanitizerImpl());
            }
            return this.__DomSanitizer_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_27", {
        get: function () {
            if ((this.__Sanitizer_27 == null)) {
                (this.__Sanitizer_27 = this._DomSanitizer_26);
            }
            return this.__Sanitizer_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationQueue_28", {
        get: function () {
            if ((this.__AnimationQueue_28 == null)) {
                (this.__AnimationQueue_28 = new import18.AnimationQueue(this.parent.get(import42.NgZone)));
            }
            return this.__AnimationQueue_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ViewUtils_29", {
        get: function () {
            if ((this.__ViewUtils_29 == null)) {
                (this.__ViewUtils_29 = new import19.ViewUtils(this._RootRenderer_25, this._Sanitizer_27, this._AnimationQueue_28));
            }
            return this.__ViewUtils_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_30", {
        get: function () {
            if ((this.__IterableDiffers_30 == null)) {
                (this.__IterableDiffers_30 = import3._iterableDiffersFactory());
            }
            return this.__IterableDiffers_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_31", {
        get: function () {
            if ((this.__KeyValueDiffers_31 == null)) {
                (this.__KeyValueDiffers_31 = import3._keyValueDiffersFactory());
            }
            return this.__KeyValueDiffers_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_SharedStylesHost_32", {
        get: function () {
            if ((this.__SharedStylesHost_32 == null)) {
                (this.__SharedStylesHost_32 = this._DomSharedStylesHost_21);
            }
            return this.__SharedStylesHost_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_33", {
        get: function () {
            if ((this.__Title_33 == null)) {
                (this.__Title_33 = new import20.Title());
            }
            return this.__Title_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BrowserXhr_34", {
        get: function () {
            if ((this.__BrowserXhr_34 == null)) {
                (this.__BrowserXhr_34 = new import21.BrowserXhr());
            }
            return this.__BrowserXhr_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ResponseOptions_35", {
        get: function () {
            if ((this.__ResponseOptions_35 == null)) {
                (this.__ResponseOptions_35 = new import22.BaseResponseOptions());
            }
            return this.__ResponseOptions_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XSRFStrategy_36", {
        get: function () {
            if ((this.__XSRFStrategy_36 == null)) {
                (this.__XSRFStrategy_36 = import5._createDefaultCookieXSRFStrategy());
            }
            return this.__XSRFStrategy_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XHRBackend_37", {
        get: function () {
            if ((this.__XHRBackend_37 == null)) {
                (this.__XHRBackend_37 = new import23.XHRBackend(this._BrowserXhr_34, this._ResponseOptions_35, this._XSRFStrategy_36));
            }
            return this.__XHRBackend_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RequestOptions_38", {
        get: function () {
            if ((this.__RequestOptions_38 == null)) {
                (this.__RequestOptions_38 = new import24.BaseRequestOptions());
            }
            return this.__RequestOptions_38;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Http_39", {
        get: function () {
            if ((this.__Http_39 == null)) {
                (this.__Http_39 = import5.httpFactory(this._XHRBackend_37, this._RequestOptions_38));
            }
            return this.__Http_39;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_CONFIGURATION_40", {
        get: function () {
            if ((this.__ROUTER_CONFIGURATION_40 == null)) {
                (this.__ROUTER_CONFIGURATION_40 = { useHash: true });
            }
            return this.__ROUTER_CONFIGURATION_40;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_LocationStrategy_41", {
        get: function () {
            if ((this.__LocationStrategy_41 == null)) {
                (this.__LocationStrategy_41 = import6.provideLocationStrategy(this.parent.get(import44.PlatformLocation), this.parent.get(import45.APP_BASE_HREF, null), this._ROUTER_CONFIGURATION_40));
            }
            return this.__LocationStrategy_41;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Location_42", {
        get: function () {
            if ((this.__Location_42 == null)) {
                (this.__Location_42 = new import25.Location(this._LocationStrategy_41));
            }
            return this.__Location_42;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_UrlSerializer_43", {
        get: function () {
            if ((this.__UrlSerializer_43 == null)) {
                (this.__UrlSerializer_43 = new import26.DefaultUrlSerializer());
            }
            return this.__UrlSerializer_43;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RouterOutletMap_44", {
        get: function () {
            if ((this.__RouterOutletMap_44 == null)) {
                (this.__RouterOutletMap_44 = new import27.RouterOutletMap());
            }
            return this.__RouterOutletMap_44;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgModuleFactoryLoader_45", {
        get: function () {
            if ((this.__NgModuleFactoryLoader_45 == null)) {
                (this.__NgModuleFactoryLoader_45 = new import28.SystemJsNgModuleLoader(this._Compiler_15, this.parent.get(import28.SystemJsNgModuleLoaderConfig, null)));
            }
            return this.__NgModuleFactoryLoader_45;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTES_46", {
        get: function () {
            if ((this.__ROUTES_46 == null)) {
                (this.__ROUTES_46 = [[
                        {
                            path: '',
                            redirectTo: '/home',
                            pathMatch: 'full'
                        },
                        {
                            path: 'home',
                            component: import46.HomeComponent
                        },
                        {
                            path: 'accordion',
                            component: import47.AccordionDemoComponent
                        },
                        {
                            path: 'counter',
                            component: import48.BoardDemoComponent
                        },
                        {
                            path: 'board',
                            component: import49.BoardDemo2Component
                        },
                        {
                            path: 'onpush',
                            component: import50.UsersDemoComponent
                        },
                        {
                            path: 'ondirty',
                            component: import51.OnDirtyDemoComponent
                        }
                    ]
                ]);
            }
            return this.__ROUTES_46;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Router_47", {
        get: function () {
            if ((this.__Router_47 == null)) {
                (this.__Router_47 = import6.setupRouter(this._ApplicationRef_14, this._UrlSerializer_43, this._RouterOutletMap_44, this._Location_42, this, this._NgModuleFactoryLoader_45, this._Compiler_15, this._ROUTES_46, this._ROUTER_CONFIGURATION_40, this.parent.get(import52.UrlHandlingStrategy, null), this.parent.get(import53.RouteReuseStrategy, null)));
            }
            return this.__Router_47;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ActivatedRoute_48", {
        get: function () {
            if ((this.__ActivatedRoute_48 == null)) {
                (this.__ActivatedRoute_48 = import6.rootRoute(this._Router_47));
            }
            return this.__ActivatedRoute_48;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_PreloadAllModules_52", {
        get: function () {
            if ((this.__PreloadAllModules_52 == null)) {
                (this.__PreloadAllModules_52 = new import29.PreloadAllModules());
            }
            return this.__PreloadAllModules_52;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_INITIALIZER_53", {
        get: function () {
            if ((this.__ROUTER_INITIALIZER_53 == null)) {
                (this.__ROUTER_INITIALIZER_53 = import6.initialRouterNavigation(this._Router_47, this._ApplicationRef_14, this._RouterPreloader_51, this._ROUTER_CONFIGURATION_40));
            }
            return this.__ROUTER_INITIALIZER_53;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_BOOTSTRAP_LISTENER_54", {
        get: function () {
            if ((this.__APP_BOOTSTRAP_LISTENER_54 == null)) {
                (this.__APP_BOOTSTRAP_LISTENER_54 = [this._ROUTER_INITIALIZER_53]);
            }
            return this.__APP_BOOTSTRAP_LISTENER_54;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ApplicationModule_1 = new import3.ApplicationModule();
        this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
        this._HttpModule_3 = new import5.HttpModule();
        this._ROUTER_FORROOT_GUARD_4 = import6.provideForRootGuard(this.parent.get(import54.Router, null));
        this._RouterModule_5 = new import6.RouterModule(this._ROUTER_FORROOT_GUARD_4);
        this._DemosModule_6 = new import7.DemosModule();
        this._AppModule_7 = new import1.AppModule();
        this._ErrorHandler_10 = import4.errorHandler();
        this._ApplicationInitStatus_11 = new import9.ApplicationInitStatus(this.parent.get(import9.APP_INITIALIZER, null));
        this._Testability_12 = new import10.Testability(this.parent.get(import42.NgZone));
        this._ApplicationRef__13 = new import11.ApplicationRef_(this.parent.get(import42.NgZone), this.parent.get(import55.Console), this, this._ErrorHandler_10, this, this._ApplicationInitStatus_11, this.parent.get(import10.TestabilityRegistry, null), this._Testability_12);
        this._NoPreloading_49 = new import29.NoPreloading();
        this._PreloadingStrategy_50 = this._NoPreloading_49;
        this._RouterPreloader_51 = new import29.RouterPreloader(this._Router_47, this._NgModuleFactoryLoader_45, this._Compiler_15, this, this._PreloadingStrategy_50);
        return this._AppModule_7;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.ApplicationModule)) {
            return this._ApplicationModule_1;
        }
        if ((token === import4.BrowserModule)) {
            return this._BrowserModule_2;
        }
        if ((token === import5.HttpModule)) {
            return this._HttpModule_3;
        }
        if ((token === import6.ROUTER_FORROOT_GUARD)) {
            return this._ROUTER_FORROOT_GUARD_4;
        }
        if ((token === import6.RouterModule)) {
            return this._RouterModule_5;
        }
        if ((token === import7.DemosModule)) {
            return this._DemosModule_6;
        }
        if ((token === import1.AppModule)) {
            return this._AppModule_7;
        }
        if ((token === import38.LOCALE_ID)) {
            return this._LOCALE_ID_8;
        }
        if ((token === import8.NgLocalization)) {
            return this._NgLocalization_9;
        }
        if ((token === import56.ErrorHandler)) {
            return this._ErrorHandler_10;
        }
        if ((token === import9.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_11;
        }
        if ((token === import10.Testability)) {
            return this._Testability_12;
        }
        if ((token === import11.ApplicationRef_)) {
            return this._ApplicationRef__13;
        }
        if ((token === import11.ApplicationRef)) {
            return this._ApplicationRef_14;
        }
        if ((token === import12.Compiler)) {
            return this._Compiler_15;
        }
        if ((token === import39.APP_ID)) {
            return this._APP_ID_16;
        }
        if ((token === import57.DOCUMENT)) {
            return this._DOCUMENT_17;
        }
        if ((token === import13.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_18;
        }
        if ((token === import14.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_19;
        }
        if ((token === import14.EventManager)) {
            return this._EventManager_20;
        }
        if ((token === import15.DomSharedStylesHost)) {
            return this._DomSharedStylesHost_21;
        }
        if ((token === import58.AnimationDriver)) {
            return this._AnimationDriver_22;
        }
        if ((token === import16.DomRootRenderer)) {
            return this._DomRootRenderer_23;
        }
        if ((token === import11.NgProbeToken)) {
            return this._NgProbeToken_24;
        }
        if ((token === import59.RootRenderer)) {
            return this._RootRenderer_25;
        }
        if ((token === import17.DomSanitizer)) {
            return this._DomSanitizer_26;
        }
        if ((token === import60.Sanitizer)) {
            return this._Sanitizer_27;
        }
        if ((token === import18.AnimationQueue)) {
            return this._AnimationQueue_28;
        }
        if ((token === import19.ViewUtils)) {
            return this._ViewUtils_29;
        }
        if ((token === import61.IterableDiffers)) {
            return this._IterableDiffers_30;
        }
        if ((token === import62.KeyValueDiffers)) {
            return this._KeyValueDiffers_31;
        }
        if ((token === import15.SharedStylesHost)) {
            return this._SharedStylesHost_32;
        }
        if ((token === import20.Title)) {
            return this._Title_33;
        }
        if ((token === import21.BrowserXhr)) {
            return this._BrowserXhr_34;
        }
        if ((token === import22.ResponseOptions)) {
            return this._ResponseOptions_35;
        }
        if ((token === import63.XSRFStrategy)) {
            return this._XSRFStrategy_36;
        }
        if ((token === import23.XHRBackend)) {
            return this._XHRBackend_37;
        }
        if ((token === import24.RequestOptions)) {
            return this._RequestOptions_38;
        }
        if ((token === import64.Http)) {
            return this._Http_39;
        }
        if ((token === import6.ROUTER_CONFIGURATION)) {
            return this._ROUTER_CONFIGURATION_40;
        }
        if ((token === import45.LocationStrategy)) {
            return this._LocationStrategy_41;
        }
        if ((token === import25.Location)) {
            return this._Location_42;
        }
        if ((token === import26.UrlSerializer)) {
            return this._UrlSerializer_43;
        }
        if ((token === import27.RouterOutletMap)) {
            return this._RouterOutletMap_44;
        }
        if ((token === import65.NgModuleFactoryLoader)) {
            return this._NgModuleFactoryLoader_45;
        }
        if ((token === import66.ROUTES)) {
            return this._ROUTES_46;
        }
        if ((token === import54.Router)) {
            return this._Router_47;
        }
        if ((token === import67.ActivatedRoute)) {
            return this._ActivatedRoute_48;
        }
        if ((token === import29.NoPreloading)) {
            return this._NoPreloading_49;
        }
        if ((token === import29.PreloadingStrategy)) {
            return this._PreloadingStrategy_50;
        }
        if ((token === import29.RouterPreloader)) {
            return this._RouterPreloader_51;
        }
        if ((token === import29.PreloadAllModules)) {
            return this._PreloadAllModules_52;
        }
        if ((token === import6.ROUTER_INITIALIZER)) {
            return this._ROUTER_INITIALIZER_53;
        }
        if ((token === import39.APP_BOOTSTRAP_LISTENER)) {
            return this._APP_BOOTSTRAP_LISTENER_54;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ApplicationRef__13.ngOnDestroy();
        this._RouterPreloader_51.ngOnDestroy();
    };
    return AppModuleInjector;
}(import0.NgModuleInjector));
export var AppModuleNgFactory = new import0.NgModuleFactory(AppModuleInjector, import1.AppModule);
//# sourceMappingURL=app.module.ngfactory.js.map