import {Component, Input, ElementRef, Renderer, NgZone, ChangeDetectorRef,ChangeDetectionStrategy} from "@angular/core";
import {BaseComponent} from "../base.component";

@Component({
    selector:'user-profile',
    changeDetection : ChangeDetectionStrategy.OnPush,
    styles:[`
        :host{
            display: block;
        }
        .media{
            margin: 5px 0;
            padding:3px;
        }
        .dp{
            border:10px solid #eee;
            transition: all 0.2s ease-in-out;
        }
        .dp:hover{
            border:2px solid #eee;
            transform:rotate(360deg);
            -ms-transform:rotate(360deg);
            -webkit-transform:rotate(360deg);
            /*-webkit-font-smoothing:antialiased;*/
        }
    `],
    template:`
        <div class="row">
            <div class="col-lg-5">
                <div class="media">
                    <a class="pull-left" href="#">
                        <img class="media-object dp img-circle"
                             [src]="user.picture.thumbnail" style="width: 100px;height:100px;">
                    </a>
                    <div class="media-body">
                        <h4 class="media-heading">{{user.name.title}} {{user.name.first}} {{user.name.last}} <small> {{user.location.state}}</small></h4>
                        <h5>Phone: {{user.phone}}, Mobile: {{user.cell}}</h5>
                        <hr style="margin:8px auto">
        
                        <span *ngFor="let tag of tags;let i=index"
                              style="margin-right: 5px;"
                              class="label" 
                              [class.label-default]="i%3!=0" 
                              [class.label-info]="i%3==0">
                            {{tag}}
                        </span>                        
                    </div>
                </div>
                <pre>{{user | json}}</pre>
            </div>
        </div>
`})
export class UserComponent extends BaseComponent{
    @Input('source')user:any;

    tags:string[] = ['HTML5/CSS3','jQuery','CakePHP','Android','AngularJS'];

    _isDetach:boolean;
    @Input()
    set isDetach(value){
        this._isDetach = value;
        this.isDetach ? this.cd.detach(): this.cd.reattach();
    }
    get isDetach(){return this._isDetach;}

    constructor(elmRef: ElementRef, render: Renderer,
                zone: NgZone, cd: ChangeDetectorRef) {
        super(elmRef, render, zone,cd);
    }
}