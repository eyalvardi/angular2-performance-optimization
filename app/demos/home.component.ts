import {Component} from "@angular/core";


@Component({
  template: `
    <div>
        <div class="starter-template">
            <a href="http://ng-course.org" target="_blank">
                <img src="images/ng-course.png" width="500">
            </a>
            <br>
           <h3>Performance Optimization in Angular (<a href="https://eyalvardi.wordpress.com/2016/12/20/performance-optimization-in-angular-2-0/" target="_blank">post</a>)</h3>
           <!--<button (click)="show=1">1 counter</button>
           <button (click)="show=2">n x counter</button>
           <button (click)="show=3">3n x counter</button>
           
           <div style="margin: 30px">
                <img *ngIf="show==1" src="images/1counter.png">                
                <img *ngIf="show==2" src="images/n_counters.png">
                <img *ngIf="show==3" src="images/n2_counters.png">
            </div>-->
           <br>
           <h4>High Frequency Problem (tick):</h4>
           <ol>
                <li>
                   <img src="images/n_counters.png" align="right" height="200">
                   <h4>Counter demo:</h4>
                   <div>                
                        <p>
                            This demo shows how we can stop the tick that setTimeout causes by 
                            using NgZone class and how to update the component area with 
                            ChangeDetectorRef class. By doing so we improve the performance because 
                            we reduce the tick frequency, meaning less calculations per second. 
                        </p>
                        <p>
                            When we use this approach we are limited by the number of counters 
                            that we can put on the page. Each counter uses on setTimeout function 
                            and this can cause the UI thread queue to be overloaded.
                        </p>                   
                   </div>
                   <br>
                </li>
                <li>
                    <h4>Board demo:</h4>
                   <div>
                        <p>
                            This demo shows how we use only 1 setTimeout in the parent 
                            component to update all its children. Now we can put many more 
                            counters on the page. We will continue to use NgZone to stop the tick.
                        </p>
                        <p>
                            If the execute handler of the setTimeout takes too long because
                            we are updating too many counters, the UI will be stuck.
                        </p>                
                   </div>        
                   <br>
                </li>
                <li>
                   <h4>Accordion demo:</h4>
                   <div>
                        <p>
                            This demo shows how we can stop the tick that happens because a click event. 
                            In this approach we can't register an event in the template because we need
                            to use the NgZone class.
                        </p>                              
                   </div>
                   <br>
               </li>
           </ol>
           <h4>High Expressions Problem:</h4>
           <ol>
           <li>
           <h4>On-Push demo:</h4>
           <div>
                <p>
                    This demo shows how to reduce the amount of expressions that need to calculate 
                    every tick by using the on-push strategy. The on-push strategy will calculate 
                    the component expressions only if the input has changed.
                </p>                              
           </div>
           <br>
           </li>
           <li>
           <h4>On-Dirty demo:</h4>
           <div>
                <p>
                    This demo shows how we can work with an Observable class and its operators to reduce the amount of
                    updates, meaning less expressions to calculate. The component is detached form the component tree and the update happens
                    only when item comes up from the observable.
                </p>                              
           </div>
           </li>
           </ol>
        </div>
  </div>
`})
export class HomeComponent {
  show:number;
}