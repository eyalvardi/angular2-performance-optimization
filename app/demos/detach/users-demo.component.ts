import {
    Component, ElementRef, Renderer, ChangeDetectorRef, NgZone, OnDestroy, ChangeDetectionStrategy,
    Renderer2
} from "@angular/core";
import {Http} from "@angular/http";
import {BaseComponent} from "../base.component";
import '../../rxjs-operators';

@Component({
  styles:[`
    :host{display: block;}
    .short{
        width: 70px;
    }
`],
  //changeDetection:ChangeDetectionStrategy.OnPush,
  template: `
<div>
    <P class="desc">
        This demo shows how to reduce the amount of expressions that need to 
        calculate every tick by using the on push strategy.  
    </P>
    <input type="number" #i value="1000" class="short">
    <button (click)="load(i.value)">Load</button>
    <button (click)="isDetach=!isDetach" class="btn"
        [ngClass]="{'btn-warning': !isDetach,'btn-success':isDetach}">
        {{ isDetach ? 'Reattach':  'Detach'}}
    </button>
     <button (click)="isBorder = !isBorder" class="btn"
        [ngClass]="{'btn-warning': isBorder,'btn-success':!isBorder}">
        <span *ngIf="!isBorder">No</span> Border
      </button>
     <button (click)="isStart = !isStart" class="btn"
        [ngClass]="{'btn-warning': !isStart,'btn-success':isStart}">
        {{ isStart ? 'Start':  'Stop'}}
      </button>
    
    <hr>
    <user-profile 
        *ngFor="let user of users" 
        [source]="user"
        [isDetach]="isDetach"
        >
    </user-profile>
</div>
`})
export class UsersDemoComponent extends BaseComponent  implements OnDestroy{
    users:any[] = [];
    value:number = 0;
    id:any;


    runFnBind: ()=>void;

    _isStart:boolean;

    set isStart(value){
        this._isStart = value;
        if(value) { this.run(); }
    }
    get isStart(){return this._isStart;}


    constructor(elmRef: ElementRef, render: Renderer2,
                zone: NgZone, cd: ChangeDetectorRef,
                private http:Http) {
        super(elmRef, render, zone,cd);
        this.runFnBind = this.run.bind(this);
    }
    
    load(num=1){
        //this.loadOffline();
        this.loadOnLine(num);
    }
    loadOnLine(num){
        this.http
            .get(`https://randomuser.me/api?results=${num}`)
            .map(resp=>resp.json())
            .map(json=> json.results)
            .subscribe((users)=> {
                this.users = users
            });
    }
    loadOffline(){
        this.http
            .get('app/users')
            .map(resp=>resp.json())
            .map(json=> json.data.results)
            .subscribe((users)=> {
                this.users = users
            });
    }
    run(){
        this.value++;
        if( this.value > 100) {
            console.timeEnd('counter');
            this.value = 0;
            console.time('counter');
        }
        if(this.isStart){
            this.id = setTimeout(this.runFnBind,10);
        }
    }

    ngOnDestroy(){
        clearTimeout(this.id)
    }
}