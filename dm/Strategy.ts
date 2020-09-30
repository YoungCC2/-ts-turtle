interface Strategy {
    discount(monet:number):number
}


// 具体的 优惠策略
class FullAddReduceStrategy implements Strategy {

    private conditionMoney: number

    private reduceMoney: number

    constructor(money: number, returnMoney: number) {
        this.conditionMoney = money;
        this.reduceMoney = returnMoney
    }

    public discount (money: number): number {
        let result: number = 0;

        if(money >= this.conditionMoney){
            result = money - Math.floor( money / this.conditionMoney) * this.reduceMoney
        }

        return result;
    }
}

// 
class CashRebateStrategy  implements Strategy {

    private monetRabte: number;

    constructor(moneyRabte: number) {
        this.monetRabte = moneyRabte
    }

    discount(money: number) :number {
        return money * this.monetRabte;
    }
}

class Context {
    private strategy: Strategy;

    private money: number;

    constructor(moeny: number){
        this.money = moeny;

    }

    public setStrategy(strategy: Strategy):void {
        this.strategy = strategy
    }

    public execute(): number {
        return this.strategy.discount(this.money);
    }
}

//  test
const context: Context = new Context(100);
context.setStrategy(new FullAddReduceStrategy(50,2));
console.log(context.execute());


context.setStrategy(new CashRebateStrategy(0.5));
console.log(context.execute())

