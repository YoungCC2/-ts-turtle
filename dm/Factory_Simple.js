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
var BMWFactory = /** @class */ (function () {
    function BMWFactory() {
    }
    BMWFactory.produceBMW = function (model) {
        if (model === "730") {
            return new BMW730();
        }
        else if (model === "840") {
            return new BMW840();
        }
    };
    return BMWFactory;
}());
var bmw730 = BMWFactory.produceBMW('730');
var bmw840 = BMWFactory.produceBMW('840');
bmw730.run();
bmw840.run();
