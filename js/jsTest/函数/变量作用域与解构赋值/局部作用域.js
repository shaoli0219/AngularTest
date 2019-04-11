'use strict';

// 由于JavaScript的函数可以嵌套，此时，内部函数可以访问外部函数定义的变量，反过来则不行：
function foo() {
    var x = 1;

    function bar() {
        var y = x + 1; // bar可以访问foo的变量x!
    }

    return y + 1; // ReferenceError! foo不可以访问bar的变量y!
}

// JavaScript的函数在查找变量时从自身函数定义开始，从“内”向“外”查找。如果内部函数定义了与外部函数重名的变量，则内部函数的变量将“屏蔽”外部函数的变量。
function foo1() {
    var x = 1;

    function bar() {
        var x = 'A';
        console.log('x in bar() = ' + x); // 'A'
    }

    console.log('x in foo() = ' + x); // 1
    bar();
}

foo1();
