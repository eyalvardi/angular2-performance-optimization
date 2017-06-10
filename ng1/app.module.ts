import 'angular';
import {boardComponent}   from './board.component';
import {counterComponent} from "./counter.component";
import IInjectorService = angular.auto.IInjectorService;

declare const angular:any;

export const appModule = angular.module('app',[])
    .component('counter',counterComponent)
    .component('board',boardComponent);
    /*.run(($injector:any)=>{
        console.log(`$injector modules: ${JSON.stringify($injector.modules)}`);
        debugger;
    });*/

