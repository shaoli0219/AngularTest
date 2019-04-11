'use strict';

// JavaScript的函数定义有个特点，它会先扫描整个函数体的语句，把所有申明的变量“提升”到函数顶部：

function foo1() {
    var x = 'Hello, ' + y;
    console.log(x);
    var y = 'Bob';
}

// JavaScript引擎自动提升了变量y的声明，但不会提升变量y的赋值。
foo(); // Hello, undefined


// 相当于
function foo2() {
    var y; // 提升变量y的申明，此时y为undefined
    var x = 'Hello, ' + y;
    console.log(x);
    y = 'Bob';
}

