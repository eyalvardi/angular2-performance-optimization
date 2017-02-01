import {Component,ElementRef,Renderer,NgZone,VERSION} from '@angular/core';
import {BaseComponent} from "./demos/base.component";

@Component({
    selector    : 'my-app',
    styles : [`:host{display: block}`],
    template : `
    <div  class="container-fluid" style="max-width:800px">
         <tick></tick>
         <h3 class="center-block"> Change detection demos ({{version}})</h3>
        
        <a routerLink="/home" routerLinkActive="active">Home</a> |
         
         <a routerLink="/counter" routerLinkActive="active">Counter</a> |
         <a routerLink="/board" routerLinkActive="active">Board</a> |
         <a routerLink="/accordion" routerLinkActive="active">Accordion</a> |

         <a routerLink="/onpush" routerLinkActive="active">OnPush</a> |
         <a routerLink="/ondirty" routerLinkActive="active">OnDirty</a> |
         
         <a href="http://ng-course.org/ng-course/demos/ng-course/index.html" target="_blank">More</a>
         
         <hr>
         <router-outlet></router-outlet>
    </div>
    <div>
        <hr>
        Eyal Vardi: <a href="http://eyalvardi.wordpress.com">blog</a> | <a href="http://www.angular.org.il">angular.org.il</a> | Angular Version : {{version}}
    </div>
`})
export class AppComponent extends BaseComponent{
    constructor(
        protected elmRef:ElementRef,
        protected render:Renderer,
        protected zone:NgZone
    ){
        super(elmRef,render,zone)
    }
}