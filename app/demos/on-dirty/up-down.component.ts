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
`})
export class UpDownComponent {
    val         :number = 0;
    isUp        :boolean;
    subscriber  :any;

    @Input() source:Observable<number>;

    constructor(private zone: NgZone,
                private cd: ChangeDetectorRef) {
    }

    ngOnInit(){
        this.subscriber = this
            .source
            .do(num => { this.val = num; })
            // number to UpDown
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

    ngOnDestroy(){
        this.subscriber.unsubscribe();
    }
}