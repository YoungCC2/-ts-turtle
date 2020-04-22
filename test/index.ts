// 
/**
泛型的意义:
1.类型的参数化，  可以把类型像方法的参数一样传递
2.提高编译效率    使得编译器在编译时对类型进行检查以提高类型安全 减少运行时由于对象类型不匹配引发的异常 



 */

//

let identity : (arg:number)=> number;

function identityType<T>(arg:T):T {
    // console.log(arg.length)  // 未知的arg类型，如果是number类型，number类型没有length属性
    return arg
}

let myIdentity: <T>(arg:T) => T = identityType
myIdentity(12);


function identityTarray<T> (arg:T[]):T[] {
    console.log(arg.length);
    return arg;
}

// function identityArrayT<T>(arg: Array<T>): Array<T>{
//     returna arg;
// }

//  interface<T>

interface GenericIdentituFn {
    <T>(arg:T): T
}

function identityInter<T>(arg:T):T {
    return arg
}

let myidentityInter: GenericIdentituFn = identityInter

console.log(myidentityInter(12))

// class <T>

class GenericIdentituClass <T>{
    zeroVal: T;
    add: (x:T,y:T)=>T
}

let myGeneric = new GenericIdentituClass<number>();

myGeneric.zeroVal = 0;
myGeneric.add = function (x,y){
    return x + y;
}

// 泛型约束

interface LengthWise {
    length: number
}

function loggingIdentity <T extends LengthWise> (arg:T) : T {
    console.log(arg.length);
    return arg;
}

// console.log(loggingIdentity(3)) Error

loggingIdentity([1,2,3,4])


// 在泛型约束中使用类型参数

// function getProperty(obj: T,key: K) {
//     return obj[key]
// }

// let x = { a: 1, b: 2, c: 3, d: 4 };

// getProperty(x,"a")

// console.log(getProperty(x,"m"))

const testIden = identityType<string>("xx")

console.log(testIden)