/**
 * Created by Eyal on 10/2/2016.
 */
let isStart = false;
let id;
/*let pMessage : (data:any)=>void = self.postMessage.bind(self);*/

interface Window{
    postMessage(message: any, targetOrigin?: string, transfer?: any[]): void;
}

self.addEventListener('message',function(e){
    if(e.data){
        isStart = true;
        run();
    } else {
        isStart = false;
        clearTimeout(id);
    }
});


function getRandomIntInclusive(min=0, max=100) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function run(){
    //pMessage(getRandomIntInclusive());
    self.postMessage(getRandomIntInclusive());
    if(isStart) {
        id = setTimeout(run,10);
    }
}