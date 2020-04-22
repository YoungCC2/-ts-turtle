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
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a");
console.log(getProperty(x, "m"));
var testIden = identityType("xx");
console.log(testIden);
