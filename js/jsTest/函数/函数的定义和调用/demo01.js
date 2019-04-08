// 函数定义方法一：

function abs(x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}

abs(10, 'blablabla'); // 返回10
abs(-9, 'haha', 'hehe', null); // 返回9
abs(); // 返回NaN

// 函数定义方法二：
var abs1 = function (x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
};


function foo(x) {
    console.log('x = ' + x); // 10
    for (var i=0; i<arguments.length; i++) {
        console.log('arg ' + i + ' = ' + arguments[i]); // 10, 20, 30
    }
}
foo(10, 20, 30);


function abs2() {
    if (arguments.length === 0) {
        return 0;
    }
    var x = arguments[0];
    return x >= 0 ? x : -x;
}

abs2(); // 0
abs2(10); // 10
abs2(-9); // 9