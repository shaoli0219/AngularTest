// 传统做法如何把一个数组的元素分别赋值给几个变量：

// var array = ['hello', 'JavaScript', 'ES6'];
// var x = array[0];
// var y = array[1];
// var z = array[2];


// 在ES6中，可以使用解构赋值，直接对多个变量同时赋值：

// 如果浏览器支持解构赋值就不会报错:
// var [x, y, z] = ['hello', 'JavaScript', 'ES6'];


// 如果数组本身还有嵌套，也可以通过下面的形式进行解构赋值，注意嵌套层次和位置要保持一致：

// let [x, [y, z]] = ['hello', ['JavaScript', 'ES6']];
// console.log('x = ' + x + ', y = ' + y + ', z = ' + z);

// 解构赋值还可以忽略某些元素：

let [, , z] = ['hello', 'JavaScript', 'ES6']; // 忽略前两个元素，只对z赋值第三个元素
console.log('z = ' + z);

// 如果需要从一个对象中取出若干属性，也可以使用解构赋值，便于快速获取对象的指定属性：

// var person = {
//     name: '小明',
//     age: 20,
//     gender: 'male',
//     passport: 'G-12345678',
//     school: 'No.4 middle school'
// };
// var {name, age, passport} = person;
//
// console.log('name = ' + name + ', age = ' + age + ', passport = ' + passport);


// 对一个对象进行解构赋值时，同样可以直接对嵌套的对象属性进行赋值，只要保证对应的层次是一致的：
// var person = {
//     name: '小明',
//     age: 20,
//     gender: 'male',
//     passport: 'G-12345678',
//     school: 'No.4 middle school',
//     address: {
//         city: 'Beijing',
//         street: 'No.1 Road',
//         zipcode: '100001'
//     }
// };
// var {name, address: {city, zipcode}} = person;
//
// console.log('name = ' + name + ', city = ' + city + ', zipcode = ' + zipcode);
// name; // '小明'
// city; // 'Beijing'
// zip; // undefined, 因为属性名是zipcode而不是zip
// // 注意: address不是变量，而是为了让city和zip获得嵌套的address对象的属性:
// address; // Uncaught ReferenceError: address is not defined

// 使用解构赋值对对象属性进行赋值时，如果对应的属性不存在，变量将被赋值为undefined，这和引用一个不存在的属性获得undefined是一致的。如果要使用的变量名和属性名不一致，可以用下面的语法获取：

var person = {
    name: '小明',
    age: 20,
    gender: 'male',
    passport: 'G-12345678',
    school: 'No.4 middle school'
};

// 把passport属性赋值给变量id:
// 解构赋值还可以使用默认值，这样就避免了不存在的属性返回undefined的问题：
var {name, age: myAge, gender: sex, passport: id, school, score = 0} = person;

console.log('name = ' + name + ', id = ' + id + ', myAge = ' + myAge + ', sex = ' + sex + ', score = ' + score);

// 解构赋值在很多时候可以大大简化代码。例如，交换两个变量x和y的值，可以这么写，不再需要临时变量：

var x = 1, y = 2;
[x, y] = [y, x];
console.log('x = ' + x + ', y = ' + y);

// 快速获取当前页面的域名和路径：
// var {hostname: domain, pathname: path} = location;
