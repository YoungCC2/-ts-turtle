"use strict";
// 具体的 优惠策略
var FullAddReduceStrategy = /** @class */ (function () {
    function FullAddReduceStrategy(money, returnMoney) {
        this.conditionMoney = money;
        this.reduceMoney = returnMoney;
    }
    FullAddReduceStrategy.prototype.discount = function (money) {
        var result = 0;
        if (money >= this.conditionMoney) {
            result = money - Math.floor(money / this.conditionMoney) * this.reduceMoney;
        }
        return result;
    };
    return FullAddReduceStrategy;
}());
// 
var CashRebateStrategy = /** @class */ (function () {
    function CashRebateStrategy(moneyRabte) {
        this.monetRabte = moneyRabte;
    }
    CashRebateStrategy.prototype.discount = function (money) {
        return money * this.monetRabte;
    };
    return CashRebateStrategy;
}());
var Context = /** @class */ (function () {
    function Context(moeny) {
        this.money = moeny;
    }
    Context.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    Context.prototype.execute = function () {
        return this.strategy.discount(this.money);
    };
    return Context;
}());
//  test
var context = new Context(100);
context.setStrategy(new FullAddReduceStrategy(50, 2));
console.log(context.execute());
context.setStrategy(new CashRebateStrategy(0.5));
console.log(context.execute());
