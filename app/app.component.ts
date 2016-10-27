import {Component,ElementRef,Renderer,NgZone} from '@angular/core';
import {BaseComponent} from "./demos/base.component";

@Component({
    selector    : 'my-app',
    styles : [`:host{display: block}`],
    template : `
    <div  class="container-fluid" style="max-width:800px">
         <tick></tick>
         <h3 class="center-block"> Change detection demos</h3>
        
        <a routerLink="/home" routerLinkActive="active">Home</a> |
         
         <a routerLink="/counter" routerLinkActive="active">Counter</a> |
         <a routerLink="/board" routerLinkActive="active">Board</a> |
         <a routerLink="/accordion" routerLinkActive="active">Accordion</a> |

         <a routerLink="/onpush" routerLinkActive="active">OnPush</a> |
         <a routerLink="/ondirty" routerLinkActive="active">OnDirty</a> |
         
         
         <hr>
         <router-outlet></router-outlet>
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
