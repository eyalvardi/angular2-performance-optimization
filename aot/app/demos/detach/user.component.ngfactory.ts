/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../app/demos/detach/user.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
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
export class Wrapper_UserComponent {
  /*private*/ _eventHandler:Function;
  context:import0.UserComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(p0:any,p1:any,p2:any,p3:any,p4:any) {
    this._changed = false;
    this.context = new import0.UserComponent(p0,p1,p2,p3,p4);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_user(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.user = currValue;
      this._expr_0 = currValue;
    }
  }
  check_isDetach(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.isDetach = currValue;
      this._expr_1 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { this.context.ngDoCheck(); }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_UserComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_UserComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.UserComponent>;
  _UserComponent_0_3:Wrapper_UserComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_UserComponent_Host0,renderType_UserComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'user-profile',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_UserComponent0(this.viewUtils,this,0,this._el_0);
    this._UserComponent_0_3 = new Wrapper_UserComponent(new import9.ElementRef(this._el_0),this.renderer,this.injectorGet(import10.NgZone,this.parentIndex),this.compView_0.ref,this.injectorGet(import11.ApplicationRef,this.parentIndex));
    this.compView_0.create(this._UserComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._UserComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.UserComponent) && (0 === requestNodeIndex))) { return this._UserComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._UserComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const UserComponentNgFactory:import8.ComponentFactory<import0.UserComponent> = new import8.ComponentFactory<import0.UserComponent>('user-profile',View_UserComponent_Host0,import0.UserComponent);
const styles_UserComponent:any[] = ['[_nghost-%COMP%]{\n            display: block;\n        }\n        .media[_ngcontent-%COMP%]{\n            margin: 5px 0;\n            padding:3px;\n        }\n        .dp[_ngcontent-%COMP%]{\n            border:10px solid #eee;\n            transition: all 0.2s ease-in-out;\n        }\n        .dp[_ngcontent-%COMP%]:hover{\n            border:2px solid #eee;\n            transform:rotate(360deg);\n            -ms-transform:rotate(360deg);\n            -webkit-transform:rotate(360deg);\n            \n        }'];
class View_UserComponent1 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_UserComponent1,renderType_UserComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'span',new import3.InlineArray4(4,'class','label','style','margin-right: 5px;'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = ((this.context.index % 3) != 0);
    if (import3.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementClass(this._el_0,'label-default',currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = ((this.context.index % 3) == 0);
    if (import3.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementClass(this._el_0,'label-info',currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = import3.inlineInterpolate(1,'\n                            ',this.context.$implicit,'\n                        ');
    if (import3.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setText(this._text_1,currVal_4);
      this._expr_4 = currVal_4;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
var renderType_UserComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.Emulated,styles_UserComponent,{});
export class View_UserComponent0 extends import2.AppView<import0.UserComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _el_16:any;
  _text_17:any;
  _text_18:any;
  _el_19:any;
  _text_20:any;
  _text_21:any;
  _el_22:any;
  _text_23:any;
  _anchor_24:any;
  /*private*/ _vc_24:import12.ViewContainer;
  _TemplateRef_24_5:any;
  _NgFor_24_6:import13.Wrapper_NgFor;
  _text_25:any;
  _text_26:any;
  _text_27:any;
  _el_28:any;
  _text_29:any;
  _text_30:any;
  _text_31:any;
  _text_32:any;
  /*private*/ _expr_36:any;
  /*private*/ _expr_37:any;
  /*private*/ _expr_38:any;
  /*private*/ _expr_39:any;
  /*private*/ _expr_40:any;
  _pipe_json_0:import14.JsonPipe;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_UserComponent0,renderType_UserComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
    this._expr_36 = import1.UNINITIALIZED;
    this._expr_37 = import1.UNINITIALIZED;
    this._expr_38 = import1.UNINITIALIZED;
    this._expr_39 = import1.UNINITIALIZED;
    this._expr_40 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','row'),(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_1,'div',new import3.InlineArray2(2,'class','col-lg-5'),(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n                ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,'div',new import3.InlineArray2(2,'class','media'),(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'\n                    ',(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_5,'a',new import3.InlineArray4(4,'class','pull-left','href','#'),(null as any));
    this._text_8 = this.renderer.createText(this._el_7,'\n                        ',(null as any));
    this._el_9 = import3.createRenderElement(this.renderer,this._el_7,'img',new import3.InlineArray4(4,'class','media-object dp img-circle','style','width: 100px;height:100px;'),(null as any));
    this._text_10 = this.renderer.createText(this._el_7,'\n                    ',(null as any));
    this._text_11 = this.renderer.createText(this._el_5,'\n                    ',(null as any));
    this._el_12 = import3.createRenderElement(this.renderer,this._el_5,'div',new import3.InlineArray2(2,'class','media-body'),(null as any));
    this._text_13 = this.renderer.createText(this._el_12,'\n                        ',(null as any));
    this._el_14 = import3.createRenderElement(this.renderer,this._el_12,'h4',new import3.InlineArray2(2,'class','media-heading'),(null as any));
    this._text_15 = this.renderer.createText(this._el_14,'',(null as any));
    this._el_16 = import3.createRenderElement(this.renderer,this._el_14,'small',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_17 = this.renderer.createText(this._el_16,'',(null as any));
    this._text_18 = this.renderer.createText(this._el_12,'\n                        ',(null as any));
    this._el_19 = import3.createRenderElement(this.renderer,this._el_12,'h5',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_20 = this.renderer.createText(this._el_19,'',(null as any));
    this._text_21 = this.renderer.createText(this._el_12,'\n                        ',(null as any));
    this._el_22 = import3.createRenderElement(this.renderer,this._el_12,'hr',new import3.InlineArray2(2,'style','margin:8px auto'),(null as any));
    this._text_23 = this.renderer.createText(this._el_12,'\n        \n                        ',(null as any));
    this._anchor_24 = this.renderer.createTemplateAnchor(this._el_12,(null as any));
    this._vc_24 = new import12.ViewContainer(24,12,this,this._anchor_24);
    this._TemplateRef_24_5 = new import15.TemplateRef_(this,24,this._anchor_24);
    this._NgFor_24_6 = new import13.Wrapper_NgFor(this._vc_24.vcRef,this._TemplateRef_24_5,this.parentView.injectorGet(import16.IterableDiffers,this.parentIndex),this.ref);
    this._text_25 = this.renderer.createText(this._el_12,'                        \n                    ',(null as any));
    this._text_26 = this.renderer.createText(this._el_5,'\n                ',(null as any));
    this._text_27 = this.renderer.createText(this._el_3,'\n                ',(null as any));
    this._el_28 = import3.createRenderElement(this.renderer,this._el_3,'pre',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_29 = this.renderer.createText(this._el_28,'',(null as any));
    this._text_30 = this.renderer.createText(this._el_3,'\n            ',(null as any));
    this._text_31 = this.renderer.createText(this._el_1,'\n        ',(null as any));
    this._text_32 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._pipe_json_0 = new import14.JsonPipe();
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
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
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.TemplateRef) && (24 === requestNodeIndex))) { return this._TemplateRef_24_5; }
    if (((token === import17.NgFor) && (24 === requestNodeIndex))) { return this._NgFor_24_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import1.ValueUnwrapper();
    const currVal_24_0_0:any = this.context.tags;
    this._NgFor_24_6.check_ngForOf(currVal_24_0_0,throwOnChange,false);
    this._NgFor_24_6.ngDoCheck(this,this._anchor_24,throwOnChange);
    this._vc_24.detectChangesInNestedViews(throwOnChange);
    const currVal_36:any = this.context.user.picture.thumbnail;
    if (import3.checkBinding(throwOnChange,this._expr_36,currVal_36)) {
      this.renderer.setElementProperty(this._el_9,'src',this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL,currVal_36));
      this._expr_36 = currVal_36;
    }
    const currVal_37:any = import3.inlineInterpolate(3,'',this.context.user.name.title,' ',this.context.user.name.first,' ',this.context.user.name.last,' ');
    if (import3.checkBinding(throwOnChange,this._expr_37,currVal_37)) {
      this.renderer.setText(this._text_15,currVal_37);
      this._expr_37 = currVal_37;
    }
    const currVal_38:any = import3.inlineInterpolate(1,' ',this.context.user.location.state,'');
    if (import3.checkBinding(throwOnChange,this._expr_38,currVal_38)) {
      this.renderer.setText(this._text_17,currVal_38);
      this._expr_38 = currVal_38;
    }
    const currVal_39:any = import3.inlineInterpolate(2,'Phone: ',this.context.user.phone,', Mobile: ',this.context.user.cell,'');
    if (import3.checkBinding(throwOnChange,this._expr_39,currVal_39)) {
      this.renderer.setText(this._text_20,currVal_39);
      this._expr_39 = currVal_39;
    }
    valUnwrapper.reset();
    const currVal_40:any = import3.inlineInterpolate(1,'',valUnwrapper.unwrap(this._pipe_json_0.transform(this.context.user)),'');
    if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange,this._expr_40,currVal_40))) {
      this.renderer.setText(this._text_29,currVal_40);
      this._expr_40 = currVal_40;
    }
  }
  destroyInternal():void {
    this._vc_24.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 24)) { return new View_UserComponent1(this.viewUtils,this,24,this._anchor_24,this._vc_24); }
    return (null as any);
  }
}