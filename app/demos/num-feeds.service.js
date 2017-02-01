/**
 * Created by Eyal on 10/2/2016.
 */
var isStart = false;
var id;
self.addEventListener('message', function (e) {
    if (e.data) {
        isStart = true;
        run();
    }
    else {
        isStart = false;
        clearTimeout(id);
    }
});
function getRandomIntInclusive(min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 100; }
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function run() {
    //pMessage(getRandomIntInclusive());
    self.postMessage(getRandomIntInclusive());
    if (isStart) {
        id = setTimeout(run, 10);
    }
}
//# sourceMappingURL=num-feeds.service.js.map