/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../../app/demos/board/board.demo.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/linker/element_ref';
import * as import9 from '@angular/core/src/zone/ng_zone';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '@angular/common/src/directives/ng_class';
import * as import13 from '@angular/common/src/directives/ng_if';
import * as import14 from '@angular/common/src/directives/ng_for';
import * as import15 from '@angular/common/src/pipes/number_pipe';
import * as import16 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import17 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import18 from '@angular/core/src/linker/template_ref';
import * as import19 from '@angular/core/src/i18n/tokens';
import * as import20 from '../../../../app/demos/counter/counter.component';
import * as import21 from '../counter/counter.component.ngfactory';
import * as import22 from '@angular/core/src/application_ref';
var renderType_BoardDemoComponent_Host:import0.RenderComponentType = (null as any);
class _View_BoardDemoComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _BoardDemoComponent_0_4:import3.BoardDemoComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_BoardDemoComponent_Host0,renderType_BoardDemoComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ng-component',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_BoardDemoComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._BoardDemoComponent_0_4 = new import3.BoardDemoComponent(new import8.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import9.NgZone),compView_0.ref);
    this._appEl_0.initComponent(this._BoardDemoComponent_0_4,([] as any[]),compView_0);
    compView_0.create(this._BoardDemoComponent_0_4,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.BoardDemoComponent) && (0 === requestNodeIndex))) { return this._BoardDemoComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_BoardDemoComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_BoardDemoComponent_Host === (null as any))) { (renderType_BoardDemoComponent_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_BoardDemoComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const BoardDemoComponentNgFactory:import11.ComponentFactory<import3.BoardDemoComponent> = new import11.ComponentFactory<import3.BoardDemoComponent>('ng-component',viewFactory_BoardDemoComponent_Host0,import3.BoardDemoComponent);
const styles_BoardDemoComponent:any[] = ['[_nghost-%COMP%]{ display: block; }\n        .flow[_ngcontent-%COMP%]{\n            float:left;\n        }'];
var renderType_BoardDemoComponent:import0.RenderComponentType = (null as any);
class _View_BoardDemoComponent0 extends import1.AppView<import3.BoardDemoComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  _NgClass_9_3:import12.NgClass;
  _text_10:any;
  _anchor_11:any;
  /*private*/ _appEl_11:import2.AppElement;
  _TemplateRef_11_5:any;
  _NgIf_11_6:import13.NgIf;
  _text_12:any;
  _text_13:any;
  _el_14:any;
  _NgClass_14_3:import12.NgClass;
  _text_15:any;
  _anchor_16:any;
  /*private*/ _appEl_16:import2.AppElement;
  _TemplateRef_16_5:any;
  _NgIf_16_6:import13.NgIf;
  _text_17:any;
  _text_18:any;
  _el_19:any;
  _NgClass_19_3:import12.NgClass;
  _text_20:any;
  _anchor_21:any;
  /*private*/ _appEl_21:import2.AppElement;
  _TemplateRef_21_5:any;
  _NgIf_21_6:import13.NgIf;
  _text_22:any;
  _text_23:any;
  _el_24:any;
  _text_25:any;
  _el_26:any;
  _el_27:any;
  _text_28:any;
  _text_29:any;
  _el_30:any;
  _text_31:any;
  _text_32:any;
  _el_33:any;
  _text_34:any;
  _text_35:any;
  _el_36:any;
  _text_37:any;
  _text_38:any;
  _el_39:any;
  _text_40:any;
  _text_41:any;
  _el_42:any;
  _text_43:any;
  _text_44:any;
  _el_45:any;
  _text_46:any;
  _text_47:any;
  _el_48:any;
  _text_49:any;
  _text_50:any;
  _el_51:any;
  _text_52:any;
  _anchor_53:any;
  /*private*/ _appEl_53:import2.AppElement;
  _TemplateRef_53_5:any;
  _NgFor_53_6:import14.NgFor;
  _text_54:any;
  _text_55:any;
  /*private*/ _expr_1:any;
  _map_0:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_5:any;
  _map_1:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_9:any;
  _map_2:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_11:any;
  _pipe_number_0:import15.DecimalPipe;
  _pipe_number_0_0:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_20:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_BoardDemoComponent0,renderType_BoardDemoComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._el_3 = this.renderer.createElement(this._el_1,'h4',(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'Counters components',(null as any));
    this._text_5 = this.renderer.createText(this._el_1,'    \n    ',(null as any));
    this._el_6 = this.renderer.createElement(this._el_1,'P',(null as any));
    this.renderer.setElementAttribute(this._el_6,'class','desc');
    this._text_7 = this.renderer.createText(this._el_6,'\n        This demo shows how we can stop the tick that setTimout causes by using NgZone class \n        and how to update the component area with ChangeDetectorRef class.  \n    ',(null as any));
    this._text_8 = this.renderer.createText(this._el_1,'\n      \n      ',(null as any));
    this._el_9 = this.renderer.createElement(this._el_1,'button',(null as any));
    this.renderer.setElementAttribute(this._el_9,'class','btn');
    this._NgClass_9_3 = new import12.NgClass(this.parentInjector.get(import16.IterableDiffers),this.parentInjector.get(import17.KeyValueDiffers),new import8.ElementRef(this._el_9),this.renderer);
    this._text_10 = this.renderer.createText(this._el_9,'\n        ',(null as any));
    this._anchor_11 = this.renderer.createTemplateAnchor(this._el_9,(null as any));
    this._appEl_11 = new import2.AppElement(11,9,this,this._anchor_11);
    this._TemplateRef_11_5 = new import18.TemplateRef_(this._appEl_11,viewFactory_BoardDemoComponent1);
    this._NgIf_11_6 = new import13.NgIf(this._appEl_11.vcRef,this._TemplateRef_11_5);
    this._text_12 = this.renderer.createText(this._el_9,'Ticks\n      ',(null as any));
    this._text_13 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_14 = this.renderer.createElement(this._el_1,'button',(null as any));
    this.renderer.setElementAttribute(this._el_14,'class','btn');
    this._NgClass_14_3 = new import12.NgClass(this.parentInjector.get(import16.IterableDiffers),this.parentInjector.get(import17.KeyValueDiffers),new import8.ElementRef(this._el_14),this.renderer);
    this._text_15 = this.renderer.createText(this._el_14,'\n        ',(null as any));
    this._anchor_16 = this.renderer.createTemplateAnchor(this._el_14,(null as any));
    this._appEl_16 = new import2.AppElement(16,14,this,this._anchor_16);
    this._TemplateRef_16_5 = new import18.TemplateRef_(this._appEl_16,viewFactory_BoardDemoComponent2);
    this._NgIf_16_6 = new import13.NgIf(this._appEl_16.vcRef,this._TemplateRef_16_5);
    this._text_17 = this.renderer.createText(this._el_14,' Detect Changes\n      ',(null as any));
    this._text_18 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_19 = this.renderer.createElement(this._el_1,'button',(null as any));
    this.renderer.setElementAttribute(this._el_19,'class','btn');
    this._NgClass_19_3 = new import12.NgClass(this.parentInjector.get(import16.IterableDiffers),this.parentInjector.get(import17.KeyValueDiffers),new import8.ElementRef(this._el_19),this.renderer);
    this._text_20 = this.renderer.createText(this._el_19,'\n       ',(null as any));
    this._anchor_21 = this.renderer.createTemplateAnchor(this._el_19,(null as any));
    this._appEl_21 = new import2.AppElement(21,19,this,this._anchor_21);
    this._TemplateRef_21_5 = new import18.TemplateRef_(this._appEl_21,viewFactory_BoardDemoComponent3);
    this._NgIf_21_6 = new import13.NgIf(this._appEl_21.vcRef,this._TemplateRef_21_5);
    this._text_22 = this.renderer.createText(this._el_19,' Border\n      ',(null as any));
    this._text_23 = this.renderer.createText(this._el_1,'      \n      ',(null as any));
    this._el_24 = this.renderer.createElement(this._el_1,'br',(null as any));
    this._text_25 = this.renderer.createText(this._el_1,'    \n      ',(null as any));
    this._el_26 = this.renderer.createElement(this._el_1,'h4',(null as any));
    this._el_27 = this.renderer.createElement(this._el_26,'span',(null as any));
    this._text_28 = this.renderer.createText(this._el_27,'',(null as any));
    this._text_29 = this.renderer.createText(this._el_1,'\n       Change to size: \n        ',(null as any));
    this._el_30 = this.renderer.createElement(this._el_1,'a',(null as any));
    this._text_31 = this.renderer.createText(this._el_30,'1',(null as any));
    this._text_32 = this.renderer.createText(this._el_1,' |\n        ',(null as any));
    this._el_33 = this.renderer.createElement(this._el_1,'a',(null as any));
    this._text_34 = this.renderer.createText(this._el_33,'100',(null as any));
    this._text_35 = this.renderer.createText(this._el_1,' |\n        ',(null as any));
    this._el_36 = this.renderer.createElement(this._el_1,'a',(null as any));
    this._text_37 = this.renderer.createText(this._el_36,'500',(null as any));
    this._text_38 = this.renderer.createText(this._el_1,' |\n        ',(null as any));
    this._el_39 = this.renderer.createElement(this._el_1,'a',(null as any));
    this._text_40 = this.renderer.createText(this._el_39,'1,000',(null as any));
    this._text_41 = this.renderer.createText(this._el_1,' |\n        ',(null as any));
    this._el_42 = this.renderer.createElement(this._el_1,'a',(null as any));
    this._text_43 = this.renderer.createText(this._el_42,'1,500',(null as any));
    this._text_44 = this.renderer.createText(this._el_1,' |\n        ',(null as any));
    this._el_45 = this.renderer.createElement(this._el_1,'a',(null as any));
    this._text_46 = this.renderer.createText(this._el_45,'3,000',(null as any));
    this._text_47 = this.renderer.createText(this._el_1,' |\n        ',(null as any));
    this._el_48 = this.renderer.createElement(this._el_1,'a',(null as any));
    this._text_49 = this.renderer.createText(this._el_48,'5,500',(null as any));
    this._text_50 = this.renderer.createText(this._el_1,' |\n        \n      ',(null as any));
    this._el_51 = this.renderer.createElement(this._el_1,'hr',(null as any));
    this._text_52 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._anchor_53 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._appEl_53 = new import2.AppElement(53,1,this,this._anchor_53);
    this._TemplateRef_53_5 = new import18.TemplateRef_(this._appEl_53,viewFactory_BoardDemoComponent4);
    this._NgFor_53_6 = new import14.NgFor(this._appEl_53.vcRef,this._TemplateRef_53_5,this.parentInjector.get(import16.IterableDiffers),this.ref);
    this._text_54 = this.renderer.createText(this._el_1,'\n',(null as any));
    this._text_55 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_9,'click',this.eventHandler(this._handle_click_9_0.bind(this)));
    this._expr_1 = import7.UNINITIALIZED;
    this._map_0 = import4.pureProxy2((p0:any,p1:any):{[key: string]:any} => {
      return {
        'btn-warning': p0,
        'btn-success': p1
      }
      ;
    });
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    var disposable_1:Function = this.renderer.listen(this._el_14,'click',this.eventHandler(this._handle_click_14_0.bind(this)));
    this._expr_5 = import7.UNINITIALIZED;
    this._map_1 = import4.pureProxy2((p0:any,p1:any):{[key: string]:any} => {
      return {
        'btn-warning': p0,
        'btn-success': p1
      }
      ;
    });
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    var disposable_2:Function = this.renderer.listen(this._el_19,'click',this.eventHandler(this._handle_click_19_0.bind(this)));
    this._expr_9 = import7.UNINITIALIZED;
    this._map_2 = import4.pureProxy2((p0:any,p1:any):{[key: string]:any} => {
      return {
        'btn-warning': p0,
        'btn-success': p1
      }
      ;
    });
    this._expr_10 = import7.UNINITIALIZED;
    this._expr_11 = import7.UNINITIALIZED;
    this._pipe_number_0 = new import15.DecimalPipe(this.parentInjector.get(import19.LOCALE_ID));
    this._pipe_number_0_0 = import4.pureProxy1(this._pipe_number_0.transform.bind(this._pipe_number_0));
    this._expr_12 = import7.UNINITIALIZED;
    var disposable_3:Function = this.renderer.listen(this._el_30,'click',this.eventHandler(this._handle_click_30_0.bind(this)));
    var disposable_4:Function = this.renderer.listen(this._el_33,'click',this.eventHandler(this._handle_click_33_0.bind(this)));
    var disposable_5:Function = this.renderer.listen(this._el_36,'click',this.eventHandler(this._handle_click_36_0.bind(this)));
    var disposable_6:Function = this.renderer.listen(this._el_39,'click',this.eventHandler(this._handle_click_39_0.bind(this)));
    var disposable_7:Function = this.renderer.listen(this._el_42,'click',this.eventHandler(this._handle_click_42_0.bind(this)));
    var disposable_8:Function = this.renderer.listen(this._el_45,'click',this.eventHandler(this._handle_click_45_0.bind(this)));
    var disposable_9:Function = this.renderer.listen(this._el_48,'click',this.eventHandler(this._handle_click_48_0.bind(this)));
    this._expr_20 = import7.UNINITIALIZED;
    this.init(([] as any[]),[
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._anchor_11,
      this._text_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._anchor_16,
      this._text_17,
      this._text_18,
      this._el_19,
      this._text_20,
      this._anchor_21,
      this._text_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._el_26,
      this._el_27,
      this._text_28,
      this._text_29,
      this._el_30,
      this._text_31,
      this._text_32,
      this._el_33,
      this._text_34,
      this._text_35,
      this._el_36,
      this._text_37,
      this._text_38,
      this._el_39,
      this._text_40,
      this._text_41,
      this._el_42,
      this._text_43,
      this._text_44,
      this._el_45,
      this._text_46,
      this._text_47,
      this._el_48,
      this._text_49,
      this._text_50,
      this._el_51,
      this._text_52,
      this._anchor_53,
      this._text_54,
      this._text_55
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3,
      disposable_4,
      disposable_5,
      disposable_6,
      disposable_7,
      disposable_8,
      disposable_9
    ]
    ,([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import18.TemplateRef) && (11 === requestNodeIndex))) { return this._TemplateRef_11_5; }
    if (((token === import13.NgIf) && (11 === requestNodeIndex))) { return this._NgIf_11_6; }
    if (((token === import12.NgClass) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 12)))) { return this._NgClass_9_3; }
    if (((token === import18.TemplateRef) && (16 === requestNodeIndex))) { return this._TemplateRef_16_5; }
    if (((token === import13.NgIf) && (16 === requestNodeIndex))) { return this._NgIf_16_6; }
    if (((token === import12.NgClass) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 17)))) { return this._NgClass_14_3; }
    if (((token === import18.TemplateRef) && (21 === requestNodeIndex))) { return this._TemplateRef_21_5; }
    if (((token === import13.NgIf) && (21 === requestNodeIndex))) { return this._NgIf_21_6; }
    if (((token === import12.NgClass) && ((19 <= requestNodeIndex) && (requestNodeIndex <= 22)))) { return this._NgClass_19_3; }
    if (((token === import18.TemplateRef) && (53 === requestNodeIndex))) { return this._TemplateRef_53_5; }
    if (((token === import14.NgFor) && (53 === requestNodeIndex))) { return this._NgFor_53_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    const valUnwrapper:any = new import7.ValueUnwrapper();
    const currVal_1:any = 'btn';
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgClass_9_3.klass = currVal_1;
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this._map_0(this.context.isTick,!this.context.isTick);
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._NgClass_9_3.ngClass = currVal_2;
      this._expr_2 = currVal_2;
    }
    if (!throwOnChange) { this._NgClass_9_3.ngDoCheck(); }
    const currVal_3:boolean = !this.context.isTick;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._NgIf_11_6.ngIf = currVal_3;
      this._expr_3 = currVal_3;
    }
    const currVal_5:any = 'btn';
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._NgClass_14_3.klass = currVal_5;
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this._map_1(!this.context.isDetectChanges,this.context.isDetectChanges);
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this._NgClass_14_3.ngClass = currVal_6;
      this._expr_6 = currVal_6;
    }
    if (!throwOnChange) { this._NgClass_14_3.ngDoCheck(); }
    const currVal_7:boolean = !this.context.isDetectChanges;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this._NgIf_16_6.ngIf = currVal_7;
      this._expr_7 = currVal_7;
    }
    const currVal_9:any = 'btn';
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this._NgClass_19_3.klass = currVal_9;
      this._expr_9 = currVal_9;
    }
    const currVal_10:any = this._map_2(this.context.isBorder,!this.context.isBorder);
    if (import4.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this._NgClass_19_3.ngClass = currVal_10;
      this._expr_10 = currVal_10;
    }
    if (!throwOnChange) { this._NgClass_19_3.ngDoCheck(); }
    const currVal_11:boolean = !this.context.isBorder;
    if (import4.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this._NgIf_21_6.ngIf = currVal_11;
      this._expr_11 = currVal_11;
    }
    changes = (null as any);
    const currVal_20:any = this.context.counters;
    if (import4.checkBinding(throwOnChange,this._expr_20,currVal_20)) {
      this._NgFor_53_6.ngForOf = currVal_20;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import7.SimpleChange(this._expr_20,currVal_20);
      this._expr_20 = currVal_20;
    }
    if ((changes !== (null as any))) { this._NgFor_53_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_53_6.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    valUnwrapper.reset();
    const currVal_12:any = import4.interpolate(1,'Size: ',valUnwrapper.unwrap(import4.castByValue(this._pipe_number_0_0,this._pipe_number_0.transform)(this.context.counters.length)),'');
    if ((valUnwrapper.hasWrappedValue || import4.checkBinding(throwOnChange,this._expr_12,currVal_12))) {
      this.renderer.setText(this._text_28,currVal_12);
      this._expr_12 = currVal_12;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_9_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.context.isTick = !this.context.isTick)) !== false);
    return (true && pd_0);
  }
  private _handle_click_14_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.context.isDetectChanges = !this.context.isDetectChanges)) !== false);
    return (true && pd_0);
  }
  private _handle_click_19_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.context.isBorder = !this.context.isBorder)) !== false);
    return (true && pd_0);
  }
  private _handle_click_30_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.addCounter(1)) !== false);
    return (true && pd_0);
  }
  private _handle_click_33_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.addCounter(100)) !== false);
    return (true && pd_0);
  }
  private _handle_click_36_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.addCounter(500)) !== false);
    return (true && pd_0);
  }
  private _handle_click_39_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.addCounter(1000)) !== false);
    return (true && pd_0);
  }
  private _handle_click_42_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.addCounter(1500)) !== false);
    return (true && pd_0);
  }
  private _handle_click_45_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.addCounter(3000)) !== false);
    return (true && pd_0);
  }
  private _handle_click_48_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.addCounter(5000)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_BoardDemoComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.BoardDemoComponent> {
  if ((renderType_BoardDemoComponent === (null as any))) { (renderType_BoardDemoComponent = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.Emulated,styles_BoardDemoComponent,{})); }
  return new _View_BoardDemoComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_BoardDemoComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_BoardDemoComponent1,renderType_BoardDemoComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'span',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'No',(null as any));
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
}
function viewFactory_BoardDemoComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_BoardDemoComponent1(viewUtils,parentInjector,declarationEl);
}
class _View_BoardDemoComponent2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_BoardDemoComponent2,renderType_BoardDemoComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'span',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'No',(null as any));
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
}
function viewFactory_BoardDemoComponent2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_BoardDemoComponent2(viewUtils,parentInjector,declarationEl);
}
class _View_BoardDemoComponent3 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_BoardDemoComponent3,renderType_BoardDemoComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'span',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'No',(null as any));
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
}
function viewFactory_BoardDemoComponent3(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_BoardDemoComponent3(viewUtils,parentInjector,declarationEl);
}
class _View_BoardDemoComponent4 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _CounterComponent_0_4:import20.CounterComponent;
  _text_1:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_BoardDemoComponent4,renderType_BoardDemoComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'counter',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','flow');
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import21.viewFactory_CounterComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._CounterComponent_0_4 = new import20.CounterComponent(new import8.ElementRef(this._el_0),this.renderer,this.parent.parentInjector.get(import9.NgZone),compView_0.ref,this.parent.parentInjector.get(import22.ApplicationRef));
    this._appEl_0.initComponent(this._CounterComponent_0_4,([] as any[]),compView_0);
    this._text_1 = this.renderer.createText((null as any),'    \n      ',(null as any));
    compView_0.create(this._CounterComponent_0_4,([] as any[]),(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import20.CounterComponent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._CounterComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.parent.context.isDetectChanges;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._CounterComponent_0_4.isDetectChanges = currVal_0;
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = 0;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._CounterComponent_0_4.value = currVal_1;
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = 10;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._CounterComponent_0_4.ms = currVal_2;
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = this.parent.context.isTick;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._CounterComponent_0_4.isTick = currVal_3;
      this._expr_3 = currVal_3;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._CounterComponent_0_4.ngOnDestroy();
  }
}
function viewFactory_BoardDemoComponent4(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_BoardDemoComponent4(viewUtils,parentInjector,declarationEl);
}