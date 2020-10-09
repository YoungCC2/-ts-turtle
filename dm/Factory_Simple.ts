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

class BMWFactory {
    public static produceBMW(model: "730" | "840"): BMW {
        if(model === "730"){
            return new BMW730();
        }else if(model === "840"){
            return new BMW840();
        }else{
            throw Error('error')
        }
    }
}

const bmw730 = BMWFactory.produceBMW('730')

const bmw840 = BMWFactory.produceBMW('840')


bmw730.run()
bmw840.run()
