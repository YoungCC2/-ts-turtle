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
    context.fun = this;
    return context.fun(...args);
}


function foo (){
    console.log(this)
}

var obj = {
    x: "xx"
}

console.log(foo.mycall(obj))