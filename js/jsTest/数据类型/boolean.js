var message = "hello";
var messageBoolean = Boolean(message);
console.log("-----------------------------------------------------------");
console.log(typeof message);
console.log(typeof messageBoolean);
console.log("-----------------------------------------------------------");
var scr1 = "test";
var scr2 = "";
console.log(Boolean(scr1));
console.log(Boolean(scr2));
console.log("-----------------------------------------------------------");
var scr3 = 1;   //非0和无穷大都为true
var scr4 = 0;   //NaN也为false
console.log(Boolean(scr3));
console.log(Boolean(scr4));
console.log("-----------------------------------------------------------");
var scr5 = {};      //任何对象
var scr6 = null;
console.log(Boolean(scr5));
console.log(Boolean(scr6));
console.log("-----------------------------------------------------------");
var scr7 = undefined;
console.log(Boolean(scr7));