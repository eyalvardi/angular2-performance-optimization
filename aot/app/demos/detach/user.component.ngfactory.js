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
import * as import0 from '../../../../app/demos/detach/user.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/core/src/linker/element_ref';
import * as import10 from '@angular/core/src/zone/ng_zone';
import * as import11 from '@angular/core/src/application_ref';
import * as import12 from '@angular/core/src/linker/view_container';
import * as import13 from '../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import14 from '@angular/common/src/pipes/json_pipe';
import * as import15 from '@angular/core/src/linker/template_ref';
import * as import16 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import17 from '@angular/common/src/directives/ng_for';
import * as import18 from '@angular/core/src/security';
var Wrapper_UserComponent = (function () {
    function Wrapper_UserComponent(p0, p1, p2, p3, p4) {
        this._changed = false;
        this.context = new import0.UserComponent(p0, p1, p2, p3, p4);
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
    }
    Wrapper_UserComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_UserComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_UserComponent.prototype.check_user = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.user = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_UserComponent.prototype.check_isDetach = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.isDetach = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_UserComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            this.context.ngDoCheck();
        }
        return changed;
    };
    Wrapper_UserComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_UserComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_UserComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_UserComponent;
}());
export { Wrapper_UserComponent };
var renderType_UserComponent_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_UserComponent_Host0 = (function (_super) {
    __extends(View_UserComponent_Host0, _super);
    function View_UserComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_UserComponent_Host0, renderType_UserComponent_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_UserComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'user-profile', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_UserComponent0(this.viewUtils, this, 0, this._el_0);
        this._UserComponent_0_3 = new Wrapper_UserComponent(new import9.ElementRef(this._el_0), this.renderer, this.injectorGet(import10.NgZone, this.parentIndex), this.compView_0.ref, this.injectorGet(import11.ApplicationRef, this.parentIndex));
        this.compView_0.create(this._UserComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._UserComponent_0_3.context);
    };
    View_UserComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.UserComponent) && (0 === requestNodeIndex))) {
            return this._UserComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_UserComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._UserComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_UserComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_UserComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_UserComponent_Host0;
}(import2.AppView));
export var UserComponentNgFactory = new import8.ComponentFactory('user-profile', View_UserComponent_Host0, import0.UserComponent);
var styles_UserComponent = ['[_nghost-%COMP%]{\n            display: block;\n        }\n        .media[_ngcontent-%COMP%]{\n            margin: 5px 0;\n            padding:3px;\n        }\n        .dp[_ngcontent-%COMP%]{\n            border:10px solid #eee;\n            transition: all 0.2s ease-in-out;\n        }\n        .dp[_ngcontent-%COMP%]:hover{\n            border:2px solid #eee;\n            transform:rotate(360deg);\n            -ms-transform:rotate(360deg);\n            -webkit-transform:rotate(360deg);\n            \n        }'];
var View_UserComponent1 = (function (_super) {
    __extends(View_UserComponent1, _super);
    function View_UserComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_UserComponent1, renderType_UserComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_2 = import1.UNINITIALIZED;
        _this._expr_3 = import1.UNINITIALIZED;
        _this._expr_4 = import1.UNINITIALIZED;
        return _this;
    }
    View_UserComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'span', new import3.InlineArray4(4, 'class', 'label', 'style', 'margin-right: 5px;'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_UserComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = ((this.context.index % 3) != 0);
        if (import3.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_0, 'label-default', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_3 = ((this.context.index % 3) == 0);
        if (import3.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementClass(this._el_0, 'label-info', currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_4 = import3.inlineInterpolate(1, '\n                            ', this.context.$implicit, '\n                        ');
        if (import3.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_1, currVal_4);
            this._expr_4 = currVal_4;
        }
    };
    View_UserComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_UserComponent1;
}(import2.AppView));
var renderType_UserComponent = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.Emulated, styles_UserComponent, {});
var View_UserComponent0 = (function (_super) {
    __extends(View_UserComponent0, _super);
    function View_UserComponent0(viewUtils, parentView, parentIndex, parentElement) {
        var _this = _super.call(this, View_UserComponent0, renderType_UserComponent, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
        _this._expr_36 = import1.UNINITIALIZED;
        _this._expr_37 = import1.UNINITIALIZED;
        _this._expr_38 = import1.UNINITIALIZED;
        _this._expr_39 = import1.UNINITIALIZED;
        _this._expr_40 = import1.UNINITIALIZED;
        return _this;
    }
    View_UserComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n        ', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_2 = this.renderer.createText(this._el_1, '\n            ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'div', new import3.InlineArray2(2, 'class', 'col-lg-5'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n                ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_3, 'div', new import3.InlineArray2(2, 'class', 'media'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n                    ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_5, 'a', new import3.InlineArray4(4, 'class', 'pull-left', 'href', '#'), null);
        this._text_8 = this.renderer.createText(this._el_7, '\n                        ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_7, 'img', new import3.InlineArray4(4, 'class', 'media-object dp img-circle', 'style', 'width: 100px;height:100px;'), null);
        this._text_10 = this.renderer.createText(this._el_7, '\n                    ', null);
        this._text_11 = this.renderer.createText(this._el_5, '\n                    ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_5, 'div', new import3.InlineArray2(2, 'class', 'media-body'), null);
        this._text_13 = this.renderer.createText(this._el_12, '\n                        ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_12, 'h4', new import3.InlineArray2(2, 'class', 'media-heading'), null);
        this._text_15 = this.renderer.createText(this._el_14, '', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_14, 'small', import3.EMPTY_INLINE_ARRAY, null);
        this._text_17 = this.renderer.createText(this._el_16, '', null);
        this._text_18 = this.renderer.createText(this._el_12, '\n                        ', null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_12, 'h5', import3.EMPTY_INLINE_ARRAY, null);
        this._text_20 = this.renderer.createText(this._el_19, '', null);
        this._text_21 = this.renderer.createText(this._el_12, '\n                        ', null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_12, 'hr', new import3.InlineArray2(2, 'style', 'margin:8px auto'), null);
        this._text_23 = this.renderer.createText(this._el_12, '\n        \n                        ', null);
        this._anchor_24 = this.renderer.createTemplateAnchor(this._el_12, null);
        this._vc_24 = new import12.ViewContainer(24, 12, this, this._anchor_24);
        this._TemplateRef_24_5 = new import15.TemplateRef_(this, 24, this._anchor_24);
        this._NgFor_24_6 = new import13.Wrapper_NgFor(this._vc_24.vcRef, this._TemplateRef_24_5, this.parentView.injectorGet(import16.IterableDiffers, this.parentIndex), this.ref);
        this._text_25 = this.renderer.createText(this._el_12, '                        \n                    ', null);
        this._text_26 = this.renderer.createText(this._el_5, '\n                ', null);
        this._text_27 = this.renderer.createText(this._el_3, '\n                ', null);
        this._el_28 = import3.createRenderElement(this.renderer, this._el_3, 'pre', import3.EMPTY_INLINE_ARRAY, null);
        this._text_29 = this.renderer.createText(this._el_28, '', null);
        this._text_30 = this.renderer.createText(this._el_3, '\n            ', null);
        this._text_31 = this.renderer.createText(this._el_1, '\n        ', null);
        this._text_32 = this.renderer.createText(parentRenderNode, '\n', null);
        this._pipe_json_0 = new import14.JsonPipe();
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._anchor_24,
            this._text_25,
            this._text_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._text_30,
            this._text_31,
            this._text_32
        ]), null);
        return null;
    };
    View_UserComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.TemplateRef) && (24 === requestNodeIndex))) {
            return this._TemplateRef_24_5;
        }
        if (((token === import17.NgFor) && (24 === requestNodeIndex))) {
            return this._NgFor_24_6.context;
        }
        return notFoundResult;
    };
    View_UserComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var valUnwrapper = new import1.ValueUnwrapper();
        var currVal_24_0_0 = this.context.tags;
        this._NgFor_24_6.check_ngForOf(currVal_24_0_0, throwOnChange, false);
        this._NgFor_24_6.ngDoCheck(this, this._anchor_24, throwOnChange);
        this._vc_24.detectChangesInNestedViews(throwOnChange);
        var currVal_36 = this.context.user.picture.thumbnail;
        if (import3.checkBinding(throwOnChange, this._expr_36, currVal_36)) {
            this.renderer.setElementProperty(this._el_9, 'src', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL, currVal_36));
            this._expr_36 = currVal_36;
        }
        var currVal_37 = import3.inlineInterpolate(3, '', this.context.user.name.title, ' ', this.context.user.name.first, ' ', this.context.user.name.last, ' ');
        if (import3.checkBinding(throwOnChange, this._expr_37, currVal_37)) {
            this.renderer.setText(this._text_15, currVal_37);
            this._expr_37 = currVal_37;
        }
        var currVal_38 = import3.inlineInterpolate(1, ' ', this.context.user.location.state, '');
        if (import3.checkBinding(throwOnChange, this._expr_38, currVal_38)) {
            this.renderer.setText(this._text_17, currVal_38);
            this._expr_38 = currVal_38;
        }
        var currVal_39 = import3.inlineInterpolate(2, 'Phone: ', this.context.user.phone, ', Mobile: ', this.context.user.cell, '');
        if (import3.checkBinding(throwOnChange, this._expr_39, currVal_39)) {
            this.renderer.setText(this._text_20, currVal_39);
            this._expr_39 = currVal_39;
        }
        valUnwrapper.reset();
        var currVal_40 = import3.inlineInterpolate(1, '', valUnwrapper.unwrap(this._pipe_json_0.transform(this.context.user)), '');
        if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange, this._expr_40, currVal_40))) {
            this.renderer.setText(this._text_29, currVal_40);
            this._expr_40 = currVal_40;
        }
    };
    View_UserComponent0.prototype.destroyInternal = function () {
        this._vc_24.destroyNestedViews();
    };
    View_UserComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 24)) {
            return new View_UserComponent1(this.viewUtils, this, 24, this._anchor_24, this._vc_24);
        }
        return null;
    };
    return View_UserComponent0;
}(import2.AppView));
export { View_UserComponent0 };
//# sourceMappingURL=user.component.ngfactory.js.map