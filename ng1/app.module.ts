import 'angular';
import {boardComponent}   from './board.component';
import {counterComponent} from "./counter.component";

declare const angular:any;

angular.module('app',[])
    .component('counter',counterComponent)
    .component('board',boardComponent);