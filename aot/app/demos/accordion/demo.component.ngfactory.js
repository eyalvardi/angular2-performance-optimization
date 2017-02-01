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
import * as import0 from '../../../../app/demos/accordion/demo.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/linker/view_container';
import * as import9 from '../../../../app/demos/accordion/accordion.component';
import * as import10 from './accordion.component.ngfactory';
import * as import11 from '../../../../app/demos/accordion/item.component';
import * as import12 from './item.component.ngfactory';
import * as import13 from '../../../../app/demos/accordion/item-no-tick.component';
import * as import14 from './item-no-tick.component.ngfactory';
import * as import15 from '@angular/core/src/linker/element_ref';
import * as import16 from '@angular/core/src/zone/ng_zone';
import * as import17 from '@angular/core/src/application_ref';
import * as import18 from '@angular/core/src/linker/template_ref';
var Wrapper_AccordionDemoComponent = (function () {
    function Wrapper_AccordionDemoComponent() {
        this._changed = false;
        this.context = new import0.AccordionDemoComponent();
    }
    Wrapper_AccordionDemoComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_AccordionDemoComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_AccordionDemoComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_AccordionDemoComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_AccordionDemoComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_AccordionDemoComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_AccordionDemoComponent;
}());
export { Wrapper_AccordionDemoComponent };
var renderType_AccordionDemoComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_AccordionDemoComponent_Host0 = (function (_super) {
    __extends(View_AccordionDemoComponent_Host0, _super);
    function View_AccordionDemoComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_AccordionDemoComponent_Host0, renderType_AccordionDemoComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_AccordionDemoComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_AccordionDemoComponent0(this.viewUtils, this, 0, this._el_0);
        this._AccordionDemoComponent_0_3 = new Wrapper_AccordionDemoComponent();
        this.compView_0.create(this._AccordionDemoComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._AccordionDemoComponent_0_3.context);
    };
    View_AccordionDemoComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.AccordionDemoComponent) && (0 === requestNodeIndex))) {
            return this._AccordionDemoComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_AccordionDemoComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AccordionDemoComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_AccordionDemoComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_AccordionDemoComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AccordionDemoComponent_Host0;
}(import1.AppView));
export var AccordionDemoComponentNgFactory = new import7.ComponentFactory('ng-component', View_AccordionDemoComponent_Host0, import0.AccordionDemoComponent);
var styles_AccordionDemoComponent = [];
var View_AccordionDemoComponent1 = (function (_super) {
    __extends(View_AccordionDemoComponent1, _super);
    function View_AccordionDemoComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_AccordionDemoComponent1, renderType_AccordionDemoComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_AccordionDemoComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createTemplateAnchor(null, null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : []), null);
        return null;
    };
    View_AccordionDemoComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AccordionDemoComponent1;
}(import1.AppView));
var renderType_AccordionDemoComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_AccordionDemoComponent, {});
var View_AccordionDemoComponent0 = (function (_super) {
    __extends(View_AccordionDemoComponent0, _super);
    function View_AccordionDemoComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_AccordionDemoComponent0, renderType_AccordionDemoComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_AccordionDemoComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_2 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'h4', import3.EMPTY_INLINE_ARRAY, null);
        this._text_4 = this.renderer.createText(this._el_3, '(click) in the template cause a tick', null);
        this._text_5 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_1, 'accordion', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_6 = new import10.View_AccordionComponent0(this.viewUtils, this, 6, this._el_6);
        this._AccordionComponent_6_3 = new import10.Wrapper_AccordionComponent(new import15.ElementRef(this._el_6), this.renderer, this.parentView.injectorGet(import16.NgZone, this.parentIndex), this.compView_6.ref, this.parentView.injectorGet(import17.ApplicationRef, this.parentIndex));
        this._text_7 = this.renderer.createText(null, '        \n        ', null);
        this._el_8 = import3.createRenderElement(this.renderer, null, 'item', new import3.InlineArray2(2, 'title', 'title 1'), null);
        this.compView_8 = new import12.View_ItemComponent0(this.viewUtils, this, 8, this._el_8);
        this._ItemComponent_8_3 = new import12.Wrapper_ItemComponent(new import15.ElementRef(this._el_8), this.renderer, this.parentView.injectorGet(import16.NgZone, this.parentIndex), this.compView_8.ref, this.parentView.injectorGet(import17.ApplicationRef, this.parentIndex));
        this._text_9 = this.renderer.createText(null, '\n            ', null);
        this._anchor_10 = this.renderer.createTemplateAnchor(null, null);
        this._vc_10 = new import8.ViewContainer(10, 8, this, this._anchor_10);
        this._TemplateRef_10_4 = new import18.TemplateRef_(this, 10, this._anchor_10);
        this._text_11 = this.renderer.createText(null, '\n            desc 1\n        ', null);
        this.compView_8.create(this._ItemComponent_8_3.context);
        this._text_12 = this.renderer.createText(null, '\n        ', null);
        this._el_13 = import3.createRenderElement(this.renderer, null, 'item', new import3.InlineArray2(2, 'title', 'title 2'), null);
        this.compView_13 = new import12.View_ItemComponent0(this.viewUtils, this, 13, this._el_13);
        this._ItemComponent_13_3 = new import12.Wrapper_ItemComponent(new import15.ElementRef(this._el_13), this.renderer, this.parentView.injectorGet(import16.NgZone, this.parentIndex), this.compView_13.ref, this.parentView.injectorGet(import17.ApplicationRef, this.parentIndex));
        this._text_14 = this.renderer.createText(null, 'desc 2', null);
        this.compView_13.create(this._ItemComponent_13_3.context);
        this._text_15 = this.renderer.createText(null, '\n        ', null);
        this._el_16 = import3.createRenderElement(this.renderer, null, 'item', new import3.InlineArray2(2, 'title', 'title 3'), null);
        this.compView_16 = new import12.View_ItemComponent0(this.viewUtils, this, 16, this._el_16);
        this._ItemComponent_16_3 = new import12.Wrapper_ItemComponent(new import15.ElementRef(this._el_16), this.renderer, this.parentView.injectorGet(import16.NgZone, this.parentIndex), this.compView_16.ref, this.parentView.injectorGet(import17.ApplicationRef, this.parentIndex));
        this._text_17 = this.renderer.createText(null, 'desc 3', null);
        this.compView_16.create(this._ItemComponent_16_3.context);
        this._text_18 = this.renderer.createText(null, '\n    ', null);
        this.compView_6.create(this._AccordionComponent_6_3.context);
        this._text_19 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_1, 'h4', import3.EMPTY_INLINE_ARRAY, null);
        this._text_21 = this.renderer.createText(this._el_20, 'No ticks (NgZone)', null);
        this._text_22 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_23 = import3.createRenderElement(this.renderer, this._el_1, 'p', import3.EMPTY_INLINE_ARRAY, null);
        this._text_24 = this.renderer.createText(this._el_23, '\n        This demo shows how we can stop the tick that happens because a click event. \n        In this approach we can\'t register an event in the template because we need\n        to use the NgZone class.\n    ', null);
        this._text_25 = this.renderer.createText(this._el_1, ' \n    ', null);
        this._el_26 = import3.createRenderElement(this.renderer, this._el_1, 'accordion', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_26 = new import10.View_AccordionComponent0(this.viewUtils, this, 26, this._el_26);
        this._AccordionComponent_26_3 = new import10.Wrapper_AccordionComponent(new import15.ElementRef(this._el_26), this.renderer, this.parentView.injectorGet(import16.NgZone, this.parentIndex), this.compView_26.ref, this.parentView.injectorGet(import17.ApplicationRef, this.parentIndex));
        this._text_27 = this.renderer.createText(null, '\n        ', null);
        this._el_28 = import3.createRenderElement(this.renderer, null, 'item2', new import3.InlineArray2(2, 'title', 'title 1'), null);
        this.compView_28 = new import14.View_Item2Component0(this.viewUtils, this, 28, this._el_28);
        this._Item2Component_28_3 = new import14.Wrapper_Item2Component(new import15.ElementRef(this._el_28), this.renderer, this.parentView.injectorGet(import16.NgZone, this.parentIndex), this.compView_28.ref, this.parentView.injectorGet(import17.ApplicationRef, this.parentIndex));
        this._text_29 = this.renderer.createText(null, 'desc 1', null);
        this.compView_28.create(this._Item2Component_28_3.context);
        this._text_30 = this.renderer.createText(null, '\n        ', null);
        this._el_31 = import3.createRenderElement(this.renderer, null, 'item2', new import3.InlineArray2(2, 'title', 'title 2'), null);
        this.compView_31 = new import14.View_Item2Component0(this.viewUtils, this, 31, this._el_31);
        this._Item2Component_31_3 = new import14.Wrapper_Item2Component(new import15.ElementRef(this._el_31), this.renderer, this.parentView.injectorGet(import16.NgZone, this.parentIndex), this.compView_31.ref, this.parentView.injectorGet(import17.ApplicationRef, this.parentIndex));
        this._text_32 = this.renderer.createText(null, 'desc 2', null);
        this.compView_31.create(this._Item2Component_31_3.context);
        this._text_33 = this.renderer.createText(null, '\n        ', null);
        this._el_34 = import3.createRenderElement(this.renderer, null, 'item2', new import3.InlineArray2(2, 'title', 'title 3'), null);
        this.compView_34 = new import14.View_Item2Component0(this.viewUtils, this, 34, this._el_34);
        this._Item2Component_34_3 = new import14.Wrapper_Item2Component(new import15.ElementRef(this._el_34), this.renderer, this.parentView.injectorGet(import16.NgZone, this.parentIndex), this.compView_34.ref, this.parentView.injectorGet(import17.ApplicationRef, this.parentIndex));
        this._text_35 = this.renderer.createText(null, 'desc 3', null);
        this.compView_34.create(this._Item2Component_34_3.context);
        this._text_36 = this.renderer.createText(null, '\n    ', null);
        this.compView_26.create(this._AccordionComponent_26_3.context);
        this._text_37 = this.renderer.createText(this._el_1, '\n', null);
        this._text_38 = this.renderer.createText(parentRenderNode, '\n', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._anchor_10,
            this._text_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._text_33,
            this._el_34,
            this._text_35,
            this._text_36,
            this._text_37,
            this._text_38
        ]), null);
        return null;
    };
    View_AccordionDemoComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import18.TemplateRef) && (10 === requestNodeIndex))) {
            return this._TemplateRef_10_4;
        }
        if (((token === import11.ItemComponent) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._ItemComponent_8_3.context;
        }
        if (((token === import11.ItemComponent) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._ItemComponent_13_3.context;
        }
        if (((token === import11.ItemComponent) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._ItemComponent_16_3.context;
        }
        if (((token === import9.AccordionComponent) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 18)))) {
            return this._AccordionComponent_6_3.context;
        }
        if (((token === import13.Item2Component) && ((28 <= requestNodeIndex) && (requestNodeIndex <= 29)))) {
            return this._Item2Component_28_3.context;
        }
        if (((token === import13.Item2Component) && ((31 <= requestNodeIndex) && (requestNodeIndex <= 32)))) {
            return this._Item2Component_31_3.context;
        }
        if (((token === import13.Item2Component) && ((34 <= requestNodeIndex) && (requestNodeIndex <= 35)))) {
            return this._Item2Component_34_3.context;
        }
        if (((token === import9.AccordionComponent) && ((26 <= requestNodeIndex) && (requestNodeIndex <= 36)))) {
            return this._AccordionComponent_26_3.context;
        }
        return notFoundResult;
    };
    View_AccordionDemoComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AccordionComponent_6_3.ngDoCheck(this, this._el_6, throwOnChange);
        var currVal_8_0_0 = 'title 1';
        this._ItemComponent_8_3.check_title(currVal_8_0_0, throwOnChange, false);
        this._ItemComponent_8_3.ngDoCheck(this, this._el_8, throwOnChange);
        var currVal_13_0_0 = 'title 2';
        this._ItemComponent_13_3.check_title(currVal_13_0_0, throwOnChange, false);
        this._ItemComponent_13_3.ngDoCheck(this, this._el_13, throwOnChange);
        var currVal_16_0_0 = 'title 3';
        this._ItemComponent_16_3.check_title(currVal_16_0_0, throwOnChange, false);
        this._ItemComponent_16_3.ngDoCheck(this, this._el_16, throwOnChange);
        this._AccordionComponent_26_3.ngDoCheck(this, this._el_26, throwOnChange);
        var currVal_28_0_0 = 'title 1';
        this._Item2Component_28_3.check_title(currVal_28_0_0, throwOnChange, false);
        this._Item2Component_28_3.ngDoCheck(this, this._el_28, throwOnChange);
        var currVal_31_0_0 = 'title 2';
        this._Item2Component_31_3.check_title(currVal_31_0_0, throwOnChange, false);
        this._Item2Component_31_3.ngDoCheck(this, this._el_31, throwOnChange);
        var currVal_34_0_0 = 'title 3';
        this._Item2Component_34_3.check_title(currVal_34_0_0, throwOnChange, false);
        this._Item2Component_34_3.ngDoCheck(this, this._el_34, throwOnChange);
        this._vc_10.detectChangesInNestedViews(throwOnChange);
        this.compView_6.internalDetectChanges(throwOnChange);
        this.compView_8.internalDetectChanges(throwOnChange);
        this.compView_13.internalDetectChanges(throwOnChange);
        this.compView_16.internalDetectChanges(throwOnChange);
        this.compView_26.internalDetectChanges(throwOnChange);
        this.compView_28.internalDetectChanges(throwOnChange);
        this.compView_31.internalDetectChanges(throwOnChange);
        this.compView_34.internalDetectChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Item2Component_28_3.context.ngAfterViewInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item2Component_31_3.context.ngAfterViewInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item2Component_34_3.context.ngAfterViewInit();
            }
        }
    };
    View_AccordionDemoComponent0.prototype.destroyInternal = function () {
        this._vc_10.destroyNestedViews();
        this.compView_6.destroy();
        this.compView_8.destroy();
        this.compView_13.destroy();
        this.compView_16.destroy();
        this.compView_26.destroy();
        this.compView_28.destroy();
        this.compView_31.destroy();
        this.compView_34.destroy();
        this._Item2Component_28_3.ngOnDestroy();
        this._Item2Component_31_3.ngOnDestroy();
        this._Item2Component_34_3.ngOnDestroy();
    };
    View_AccordionDemoComponent0.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 6) && (ngContentIndex == 0))) {
            cb(this._text_7, ctx);
            cb(this._el_8, ctx);
            cb(this._text_12, ctx);
            cb(this._el_13, ctx);
            cb(this._text_15, ctx);
            cb(this._el_16, ctx);
            cb(this._text_18, ctx);
        }
        if (((nodeIndex == 8) && (ngContentIndex == 0))) {
            cb(this._text_9, ctx);
            cb(this._anchor_10, ctx);
            cb(this._text_11, ctx);
        }
        if (((nodeIndex == 13) && (ngContentIndex == 0))) {
            cb(this._text_14, ctx);
        }
        if (((nodeIndex == 16) && (ngContentIndex == 0))) {
            cb(this._text_17, ctx);
        }
        if (((nodeIndex == 26) && (ngContentIndex == 0))) {
            cb(this._text_27, ctx);
            cb(this._el_28, ctx);
            cb(this._text_30, ctx);
            cb(this._el_31, ctx);
            cb(this._text_33, ctx);
            cb(this._el_34, ctx);
            cb(this._text_36, ctx);
        }
        if (((nodeIndex == 28) && (ngContentIndex == 0))) {
            cb(this._text_29, ctx);
        }
        if (((nodeIndex == 31) && (ngContentIndex == 0))) {
            cb(this._text_32, ctx);
        }
        if (((nodeIndex == 34) && (ngContentIndex == 0))) {
            cb(this._text_35, ctx);
        }
    };
    View_AccordionDemoComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 10)) {
            return new View_AccordionDemoComponent1(this.viewUtils, this, 10, this._anchor_10, this._vc_10);
        }
        return null;
    };
    return View_AccordionDemoComponent0;
}(import1.AppView));
export { View_AccordionDemoComponent0 };
//# sourceMappingURL=demo.component.ngfactory.js.map