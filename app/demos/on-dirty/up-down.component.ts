import {Component, ChangeDetectorRef, NgZone, Input} from "@angular/core";
import {Observable}  from "rxjs/Observable";


@Component({
  selector: 'up-down',
    styles : [`
    :host{
            display: block;           
            margin: 8px;                        
    }
    .trg-up {
         width: 0;
         height: 0;
         border-left  : 5px solid transparent;
         border-right : 5px solid transparent;
         border-bottom: 10px solid green;
     }
    .trg-down {
         width: 0;
         height: 0;
         border-left  : 5px solid transparent;
         border-right : 5px solid transparent;
         border-top: 10px solid red;
     }
`],
    template: `
    <pre>{{val}} : <span [class.trg-up]="isUp" [class.trg-down]="!isUp"></span></pre>
    
    <!--<pre *ngIf="(lastObservable$ | async) as data; else loading">
        {{data.curr}} : <span [class.trg-up]="data.isUp" [class.trg-down]="!data.isUp"></span>
    </pre>  
    <ng-template #loading>loading...</ng-template>    -->
`})
export class UpDownComponent {
    val         :number = 0;
    isUp        :boolean;
    subscriber  :any;

    @Input() source:Observable<number>;

    lastObservable$:Observable<{curr:number,isUp:boolean}>

    constructor(private zone: NgZone,
                private cd: ChangeDetectorRef) {
    }

    ngOnInit(){
        // Option I
        //this.buildPipe();

        // option II
        this.subscriber = this
            .source
            .do(num => { this.val = num; })
            // number to UpDown
            //.startWith({ curr:0 , isUp:false })
            .scan((acc:{curr:number,isUp:boolean},curr)=>{
                return {
                    curr,
                    isUp: curr - acc.curr > 0
                }
            })
            .map( (val:{isUp:boolean}) => val.isUp )
            .distinctUntilChanged()
            .subscribe((val:boolean)=>{
                this.isUp = val;
                this.cd.detectChanges();
            });
    }

    buildPipe(){
        this.lastObservable$ =
                this.source
               // .do(item=>{console.log(item)})
                .scan((acc:{curr:number,isUp:boolean},curr)=>{
                    return {
                        curr,
                        isUp: curr - acc.curr > 0
                    }
                })
                .distinctUntilChanged()
                .do(_=>{this.cd.detectChanges()});
    }

    ngOnDestroy(){
        this.subscriber.unsubscribe();
    }
}