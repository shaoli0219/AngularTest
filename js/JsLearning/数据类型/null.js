/**
 *
 *  Null 类型只有一个值的数据类型，这个特殊的值是 null
 *  从逻辑角度来看， null 值表示一个空对象指针，而这也正是使用 typeof 操作符检测 null 值时会返回"object"的原因
 *
 *  如果定义的变量准备在将来用于保存对象，那么最好将该变量初始化为 null
 *
 */

var car = null;
console.log(typeof car);

if (car != null) {
    //对car对象执行某些操作
}