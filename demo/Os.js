"use strict";
var ConcreteSubject = /** @class */ (function () {
    function ConcreteSubject() {
        this.observers = [];
    }
    ConcreteSubject.prototype.attach = function (observer) {
        var observerIndex = this.observers.indexOf(observer);
        if (observerIndex !== -1) {
            return console.log('已订阅');
        }
        this.observers.push(observer);
        console.log('订阅成功');
        // throw new Error("Method not implemented.");
    };
    ConcreteSubject.prototype.detach = function (observer) {
        var observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('订阅者未订阅');
        }
        this.observers.splice(observerIndex, 1);
        console.log('订阅者已移除');
        // throw new Error("Method not implemented.");
    };
    ConcreteSubject.prototype.notify = function () {
        console.log('通知所有订阅者');
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this);
        }
        // throw new Error("Method not implemented.");
    };
    ConcreteSubject.prototype.someLogic = function () {
        this.state = Math.floor(Math.random() * 10 + 1);
        console.log("\u6211\u66F4\u6539\u4E86\u6211\u7684\u72B6\u6001\uFF1Astate=" + this.state);
        this.notify();
    };
    return ConcreteSubject;
}());
var ConcreteObserverA = /** @class */ (function () {
    function ConcreteObserverA() {
    }
    ConcreteObserverA.prototype.update = function (subject) {
        if (subject.state <= 5) {
            console.log('.A');
        }
    };
    return ConcreteObserverA;
}());
var ConcreteObserverB = /** @class */ (function () {
    function ConcreteObserverB() {
    }
    ConcreteObserverB.prototype.update = function (subject) {
        if (subject.state > 5) {
            console.log(".B");
        }
    };
    return ConcreteObserverB;
}());
// 
var subject = new ConcreteSubject();
var observerA = new ConcreteObserverA();
subject.attach(observerA);
var observerB = new ConcreteObserverB();
subject.attach(observerB);
subject.someLogic();
subject.detach(observerB);
subject.someLogic();
