abstract class BMW {
    abstract run(): void;
}

class BMW730 extends BMW {
    run(): void{
        console.log('BMW730发动');
    }
}

class BMW840 extends BMW {
    run(): void{
        console.log('BMW840发动');
    }
}


abstract class BMWFactorys {
    abstract produceBMW(): BMW;
}

class BMW730Factory extends BMWFactorys {
    produceBMW(): BMW {
        return new BMW730();
    }
}

class BMW840Factory extends BMWFactorys {
    produceBMW(): BMW {
        return new BMW840();
    }
}

const bmw730Factory = new BMW730Factory();

const bmw840Factory = new BMW840Factory();

const bmws730 = bmw730Factory.produceBMW();
const bmws840 = bmw840Factory.produceBMW();

bmws730.run();

bmws840.run();

// 工厂方法，需要多个工厂，每个工厂只能生成一个产品，  一个工厂类 独立负责 自己的生产与实现
