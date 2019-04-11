//*************************************************
//demo1
//*************************************************

// 在一个对象中绑定函数，称为这个对象的方法。

// var xiaoming = {
//     name: '小明',
//     birth: 1990,
//     age: function () {
//         var y = new Date().getFullYear();
//         return y - this.birth;
//     }
// };

// console.log(xiaoming.age); // function xiaoming.age()
// console.log(xiaoming.age()); // 今年调用是29,明年调用就变成26了

//*************************************************
//demo2
//*************************************************


// function getAge() {
//     var y = new Date().getFullYear();
//     return y - this.birth;
// }
//
// var xiaoming = {
//     name: '小明',
//     birth: 1990,
//     age: getAge
// };
//
// console.log(xiaoming.age()); // 29, 正常结果
// console.log(getAge()); // NaN
// var fn = xiaoming.age;
// console.log(fn()); // NaN


//*************************************************
//demo3
//*************************************************

// 'use strict';
//
// var xiaoming = {
//     name: '小明',
//     birth: 1990,
//     age: function () {
//         var that = this; // 在方法内部一开始就捕获this
//         function getAgeFromBirth() {
//             var y = new Date().getFullYear();
//             return y - that.birth; // 用that而不是this
//         }
//         return getAgeFromBirth();
//     }
// };
// console.log(xiaoming.age()); // 29, 正常结果

//*************************************************
//demo4
//*************************************************

// apply
// 虽然在一个独立的函数调用中，根据是否是strict模式，this指向undefined或window，不过，我们还是可以控制this的指向的！
//
// 要指定函数的this指向哪个对象，可以用函数本身的apply方法，它接收两个参数，第一个参数就是需要绑定的this变量，第二个参数是Array，表示函数本身的参数。
//
// 用apply修复getAge()调用：

function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};

xiaoming.age(); // 25
getAge.apply(xiaoming, []); // 25, this指向xiaoming, 参数为空
// 另一个与apply()类似的方法是call()，唯一区别是：
//
// apply()把参数打包成Array再传入；
//
// call()把参数按顺序传入。
//
// 比如调用Math.max(3, 5, 4)，分别用apply()和call()实现如下：

Math.max.apply(null, [3, 5, 4]); // 5
Math.max.call(null, 3, 5, 4); // 5
// 对普通函数调用，我们通常把this绑定为null。