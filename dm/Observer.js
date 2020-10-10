var ConcreteObserver = /** @class */ (function () {
    function ConcreteObserver(name) {
        this.name = name;
    }
    ConcreteObserver.prototype.notify = function () {
        console.log(this.name + " has been notified.");
    };
    return ConcreteObserver;
}());
var Subject = /** @class */ (function () {
    function Subject() {
        this.observers = [];
    }
    Subject.prototype.addObserver = function (observer) {
        console.log(observer, "is pushed");
        this.observers.push(observer);
    };
    Subject.prototype.deleteObserver = function (observer) {
        console.log('remove', observer);
        var n = this.observers.indexOf(observer);
        n != -1 && this.observers.splice(n, 1);
    };
    Subject.prototype.notifyObservers = function () {
        console.log("notify all the observers", this.observers);
        this.observers.forEach(function (observer) { return observer.notify(); });
    };
    return Subject;
}());
var subject1 = new Subject();
var xiaoQin = new ConcreteObserver("小秦");
var xiaoWang = new ConcreteObserver("小王");
subject1.addObserver(xiaoQin);
subject1.addObserver(xiaoWang);
subject1.notifyObservers();
subject1.deleteObserver(xiaoQin);
subject1.notifyObservers();
