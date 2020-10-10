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

abstract class BMWFactory {
    abstract produce730BMW(): BMW730;
    abstract produce840BMW(): BMW840;

}

class ConcreteBMWFactory extends BMWFactory {
    produce730BMW(): BMW730{
        return new BMW730();
    }

    produce840BMW(): BMW840 {
        return new BMW840();
    }
}

const bmwFactory = new ConcreteBMWFactory();

const bmw730 = bmwFactory.produce730BMW();
const bmw840 = bmwFactory.produce840BMW();

bmw730.run();
bmw840.run();


// 抽象工厂方法  一个工厂ConcreteBMWFactory，定义每个产品的生产方法(produce730BMW) 实现 一个工厂实现多个产品的生成，而且每个产品的实现都是以独立的