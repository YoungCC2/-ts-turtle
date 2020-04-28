Function.prototype.mybind = function (context, ...args) {
    let fun = this;
    function bound(...arg2) {
        let self = this instanceof bound ? this : context

        return fun.apply(self, args.concat(...arg2))
    }

    bound.prototype = Object.create(fun.prototype)

    return bound;
}

Function.prototype.mycall = function (context,...args) {
    context = context || window
    context.fun = this;
    return context.fun(...args);
}


Function.prototype.myapply = function (context, args) {
    context = context || window
    context.fun = this;
    return context.fun(...args)
}


function foo (){
    console.log(this)
    return this
}

var obj = {
    x: "xx"
}

var animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Fail' }
];

//  为数组元素 每个添加一个方法
for (let i = 0; i < animals.length; i++) {
    (
        function (i) {
            this.print = function () {
                this.print = function () {
                    console.log(`# ${i} ${this.species} ${this.name}`);
                }

                this.print()
            }

        }
    ).mycall(animals[i], i)
}

//  使用 call 方法调用函数并且指定上下文的 'this'
function greet() {
    let reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');

    console.log(reply)
}

var obj  = {
    animal: 'cats',
    sleepDuration: '12 and 16 hours'
}

greet.mycall(obj)

//
// 第三版
Function.prototype.bind2 = function (context) {

    // 确定调用函数是function
    if (typeof this !== "function") {
      throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fNOP = function () {};

    var fBound = function () {
        
        var bindArgs = Array.prototype.slice.call(arguments);

        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
    }

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}


console.log(foo.mycall(obj))
