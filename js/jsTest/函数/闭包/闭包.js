/**
 *
 *  闭包是指有权访问另一个函数作用域中的变量的函数。创建闭包的常见方式，就是在一个函数内部创建另一个函数
 *  闭包是可访问上一层函数作用域里变量的函数，即便上一层函数已经关闭。
 *
 */


/*闭包基本示例*/
// function outerFunction() {
//     var counter = 0;
//     return function () {
//         return counter += 1;
//     }
// }
//
// var add = outerFunction();
//
//
// console.log(typeof add());
// console.log(add());
// console.log(add());
// console.log(add());

/*闭包就是跨作用域访问变量*/

/*闭包使用的背景*/

/*变量都存在在指定的作用域中，如果在当前作用中找不到想要的变量，
则通过作用域链向在父作用域中继续查找，直到找到第一个同名的变量
为止（或找不到，抛出 ReferenceError 错误）。这是 js 中作用
域链的概念，即子作用域可以根据作用域链访问父作用域中的变量，那
如果相反呢，在父作用域想访问子作用域中的变量呢？——这就需要通过
闭包来实现。*/

// var name = "shaoli";
// function user() {
//     function getName() {
//         console.log(name);
//     }
//
//     getName();
// }
// user();

// function user() {
//     var name = "shaoli";
//     return function getName() {
//         return name;
//     }
// }
//
// var userName = user()();
// console.log(userName);
// userName = null; // 销毁闭包，释放内存


/*这不是闭包*/
// function user () {
//     var name = 'wangxi'
//     return name
// }
// var userName = user()
// console.log(userName) // wangxi