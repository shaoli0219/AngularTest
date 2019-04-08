/**
 *
 *  鉴于 ECMAScript 是松散类型的，因此需要有一种手段来检测给定变量的数据类型 —— typeof 就是负责提供这方面信息的操作符。
 *  "undefined"——如果这个值未定义；
 *  "boolean"——如果这个值是布尔值；
 *  "string"——如果这个值是字符串；
 *  "number"——如果这个值是数值；
 *  "object"——如果这个值是对象或 null；
 *  "function"——如果这个值是函数
 *
 */
var message = "some string";

console.log(typeof message);
console.log(typeof (message));
console.log(typeof 11);
console.log(typeof scr);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof function () {

});