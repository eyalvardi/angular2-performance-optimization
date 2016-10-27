/**
 * Created by Eyal on 10/1/2016.
 */
class CounterController{
    _value:number;

    set value(value){
        this._value = value;
    }
    get value(){return this._value;}

}

export const counterComponent = {
    bindings:{
        value:'<'
    },
    controller : CounterController,
    template : `
    <div class="counter">
        {{$ctrl.value}}
    </div>
`};

