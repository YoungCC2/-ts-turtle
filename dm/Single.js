var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!Singleton.singleton) {
            Singleton.singleton = new Singleton();
        }
        return Singleton.singleton;
    };
    return Singleton;
}());
var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();
console.log(instance1 === instance2);
