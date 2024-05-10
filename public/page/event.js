import NumberTimer from "../util/number.js"
import appendNumber from "./appendNumber.js"
var n = new NumberTimer(100);
n.onNumberCreated = function (n, isPrime) {
    appendNumber(n, isPrime);
}

//该模块用于注册事件
var isStart = false; //默认没有开始
window.addEventListener('click',function () {
    if (isStart) {
        n.stop();
        isStart = false;
        console.log(1)
    }
    else {
        n.start();
        isStart = true;
        console.log(2)
    }
},true)