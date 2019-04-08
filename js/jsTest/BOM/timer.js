/**
 *
 *  计时器：包括超时调用setTimeout()和间歇调用setInterval()
 *
 *
 */

// var timeoutId = setTimeout(function () {
//     console.log("setTimeout")
// }, 1000);
// clearTimeout(timeoutId);
//
// setInterval(function () {
//     console.log("setInterval")
// }, 1000);

// var num = 0;
// var max = 10;

// function increaseNumber() {
//     num++;
//     if (num == max) {
//         clearInterval(intervalId);
//         console.log("Done");
//     }
// }
// var intervalId = setInterval(increaseNumber, 500);

// function increaseNumber() {
//     num++;
//     if (num < max) {
//         setTimeout(increaseNumber, 500);
//     } else {
//         console.log("Done");
//     }
// }
//
// setTimeout(increaseNumber, 500);
var leftmin = 20;
var leftSec = leftmin * 60;
var intervalId = setInterval(function () {
    console.log(leftSec);
    leftSec--;
    if (leftSec == 0) {
        clearInterval(intervalId);
        console.log("放学！");
    }
}, 1000);