"use strict";
// 
/**
泛型的意义:
1.类型的参数化，  可以把类型像方法的参数一样传递
2.提高编译效率    使得编译器在编译时对类型进行检查以提高类型安全 减少运行时由于对象类型不匹配引发的异常



 */
//
var identity;
function identityType(arg) {
    // console.log(arg.length)  // 未知的arg类型，如果是number类型，number类型没有length属性
    return arg;
}
var myIdentity = identityType;
myIdentity(12);
function identityTarray(arg) {
    console.log(arg.length);
    return arg;
}
function identityInter(arg) {
    return arg;
}
var myidentityInter = identityInter;
console.log(myidentityInter(12));
// class <T>
var GenericIdentituClass = /** @class */ (function () {
    function GenericIdentituClass() {
    }
    return GenericIdentituClass;
}());
var myGeneric = new GenericIdentituClass();
myGeneric.zeroVal = 0;
myGeneric.add = function (x, y) {
    return x + y;
};
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
// console.log(loggingIdentity(3)) Error
loggingIdentity([1, 2, 3, 4]);
// 在泛型约束中使用类型参数
// function getProperty(obj: T,key: K) {
//     return obj[key]
// }
// let x = { a: 1, b: 2, c: 3, d: 4 };
// getProperty(x,"a")
// console.log(getProperty(x,"m"))
var testIden = identityType("xx");
console.log(testIden);
