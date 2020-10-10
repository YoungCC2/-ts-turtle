var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BMW = /** @class */ (function () {
    function BMW() {
    }
    return BMW;
}());
var BMW730 = /** @class */ (function (_super) {
    __extends(BMW730, _super);
    function BMW730() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BMW730.prototype.run = function () {
        console.log('BMW730发动');
    };
    return BMW730;
}(BMW));
var BMW840 = /** @class */ (function (_super) {
    __extends(BMW840, _super);
    function BMW840() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BMW840.prototype.run = function () {
        console.log('BMW840发动');
    };
    return BMW840;
}(BMW));
var BMWFactorys = /** @class */ (function () {
    function BMWFactorys() {
    }
    return BMWFactorys;
}());
var BMW730Factory = /** @class */ (function (_super) {
    __extends(BMW730Factory, _super);
    function BMW730Factory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BMW730Factory.prototype.produceBMW = function () {
        return new BMW730();
    };
    return BMW730Factory;
}(BMWFactorys));
var BMW840Factory = /** @class */ (function (_super) {
    __extends(BMW840Factory, _super);
    function BMW840Factory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BMW840Factory.prototype.produceBMW = function () {
        return new BMW840();
    };
    return BMW840Factory;
}(BMWFactorys));
var bmw730Factory = new BMW730Factory();
var bmw840Factory = new BMW840Factory();
var bmws730 = bmw730Factory.produceBMW();
var bmws840 = bmw840Factory.produceBMW();
bmws730.run();
bmws840.run();
