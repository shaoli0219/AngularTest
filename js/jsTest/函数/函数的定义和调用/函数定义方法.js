// 函数体内部的语句在执行时，一旦执行到return时，函数就执行完毕，并将结果返回.如果没有return语句，函数执行完毕后也会返回结果，只是结果为undefined。

// 函数定义方法一：函数声明
function abs1(x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}

// 函数定义方法二：函数表达式
var abs2 = function (x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
};

// 由于JavaScript允许传入任意个参数而不影响调用，因此传入的参数比定义的参数多也没有问题，虽然函数内部并不需要这些参数：
abs2(10, 'blablabla'); // 返回10
abs2(-9, 'haha', 'hehe', null); // 返回9
// 传入的参数比定义的少也没有问题：
abs2(); // 返回NaN


function abs(x) {
    if (typeof x !== 'number') {
        throw 'Not a number';
    }
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}

console.log(abs(1));


function foo(x) {
    console.log('x = ' + x); // 10
    for (var i = 0; i < arguments.length; i++) {
        console.log('arg ' + i + ' = ' + arguments[i]); // 10, 20, 30
    }
}

foo(10, 20, 30);


function abs3() {
    if (arguments.length === 0) {
        return 0;
    }
    var x = arguments[0];
    return x >= 0 ? x : -x;
}

abs3(); // 0
abs3(10); // 10
abs3(-9); // 9


/**
 * rest参数,由于JavaScript函数允许接收任意个参数，于是我们就不得不用arguments来获取所有参数：
 * @param a
 * @param b
 */
function restTest1(a, b) {
    var i, rest = [];
    if (arguments.length > 2) {
        for (i = 2; i<arguments.length; i++) {
            rest.push(arguments[i]);
        }
    }
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

restTest1(1, 2, 3, 4, 5);

/**
 * ES6标准引入了rest参数，上面的函数可以改写为：
 * @param a
 * @param b
 * @param rest
 */
function restTest2(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

restTest2(1, 2, 3, 4, 5);