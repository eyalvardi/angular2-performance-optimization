/**
 * Created by Eyal on 10/1/2016.
 */

class BoardComponent{
    counters = new Array(100);
    id:any;
    value: number = 0;
    runBindFn:any;


    constructor(private $timeout:any){
        this.runBindFn = this.run.bind(this);
        this.run();
    }

    addCounter(value:number){
        this.counters = new Array(+value);
    }
    run(){
        this.value++;
        if( this.value > 100) {
            console.timeEnd('counter get 100')
            this.value = 0;
            console.time('counter get 100')
        }
        this.id = this.$timeout(this.runBindFn,10);
    }

    ngOnDestroy(){
        clearTimeout(this.id)
    }
}

export const boardComponent = {
    controller : BoardComponent,
    template: `
    <div>
    <h4>Angular 1 Board Component</h4>            
      <br>   
      <h4><span>Size: {{$ctrl.counters.length| number}}</span></h4>
       Change to size:         
        <a ng-click="$ctrl.addCounter(100) ">100</a> |
        <a ng-click="$ctrl.addCounter(500) ">500</a> |
        <a ng-click="$ctrl.addCounter(1000)">1,000</a> |
        <a ng-click="$ctrl.addCounter(1500)">1,500</a> |
        <a ng-click="$ctrl.addCounter(3000)">3,000</a> |
        <a ng-click="$ctrl.addCounter(5000)">5,000</a> |
      
      <hr>
      <counter class="flow"
        ng-repeat="c in $ctrl.counters track by $index"       
        value="$ctrl.value + $index" >    
      </counter>
</div>
`};