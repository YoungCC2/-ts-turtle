var Car = /** @class */ (function () {
    function Car(engine, chassis, body) {
        this.engine = engine;
        this.chassis = chassis;
        this.body = body;
    }
    return Car;
}());
var CarBuilder = /** @class */ (function () {
    function CarBuilder() {
    }
    CarBuilder.prototype.addChassis = function (chassis) {
        this.chassis = chassis;
        return this;
    };
    CarBuilder.prototype.addEngine = function (engine) {
        this.engine = engine;
        return this;
    };
    CarBuilder.prototype.addBody = function (body) {
        this.body = body;
        return this;
    };
    CarBuilder.prototype.build = function () {
        return new Car(this.engine, this.chassis, this.body);
    };
    return CarBuilder;
}());
var car = new CarBuilder().addEngine('v12').addChassis('镁合金').addBody('复合材料').build();
console.log(car);
