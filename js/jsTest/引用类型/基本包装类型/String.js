var stringObject = new String("hello world");
console.log("-----------------------------------------------------------");
console.log(stringObject);
console.log(stringObject.toString());
console.log(stringObject.length);
console.log(typeof stringObject);
console.log("-----------------------------------------------------------");
var stringValue = "hello ";
console.log(stringValue.length);
console.log(stringValue.charAt(1));         //返回索引位置字符
console.log(stringValue.charCodeAt(1));     //返回索引位置字符编码
console.log(stringValue[1]);
console.log("-----------------------------------------------------------");
var result1 = stringValue.concat("world");
console.log(result1);
var result2 = stringValue.concat("world","!","!!");
console.log(result2);
var result3 = stringValue+"Nicholas";
console.log(result3);
console.log("-----------------------------------------------------------");