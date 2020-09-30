interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
}



class ConcreteSubject  implements Subject {

    public state: number;

    public observers: Array<Observer> = [];

    public attach(observer: any): void {

        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex !== -1) {
          return console.log('已订阅');
        }
    
        this.observers.push(observer);
        console.log('订阅成功');

        // throw new Error("Method not implemented.");
    }
    public detach(observer: any): void {

        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
          return console.log('订阅者未订阅');
        }
    
        this.observers.splice(observerIndex, 1);
        console.log('订阅者已移除');

        // throw new Error("Method not implemented.");
    }
    public notify(): void {

        console.log('通知所有订阅者');
        for (const observer of this.observers) {
          observer.update(this);
        }

        // throw new Error("Method not implemented.");
    }

    public someLogic() {
        this.state = Math.floor(Math.random()*10 + 1);

        console.log(`我更改了我的状态：state=${this.state}`);

        this.notify();
    }
    
}


interface Observer {
    update(subject: Subject): void;
}


class ConcreteObserverA implements Observer{
    public update(subject: ConcreteSubject) {
        if(subject.state <= 5){
            console.log('.A')
        }
    }
}

class ConcreteObserverB implements Observer{
    public update(subject: ConcreteSubject) {
        if(subject.state > 5){
            console.log(".B")
        }
    }
}


// 
const subject = new ConcreteSubject()

const observerA = new ConcreteObserverA();

subject.attach(observerA)

const observerB = new ConcreteObserverB();

subject.attach(observerB)

subject.someLogic();

subject.detach(observerB)
subject.someLogic()
