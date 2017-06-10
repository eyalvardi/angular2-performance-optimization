import {Observable} from "rxjs/Observable";
import {Observer}   from "rxjs/Observer";

export class FeedService{
    private worker:any;
    private observer:Observer<number>;
    private updateFn:any;

    public source:Observable<number>;

    constructor(){
        this.source = Observable.create((observer)=>{ this.observer = observer; }).share();
        this.updateFn = this.update.bind(this);
    }

    start(){
        // create producer
        this.worker = new Worker('dist/tsc-out/app/demos/num-feeds.service.js');
        this.worker.addEventListener('message',this.updateFn);
        this.worker.postMessage(true);
    }
    update(e){
        this.observer.next(e.data);
    }
    stop(){
        this.worker.postMessage(false);
        this.worker.removeEventListener(this.updateFn);
        this.worker.terminate();
        this.observer.complete();
    }
}

export const feed = new FeedService();