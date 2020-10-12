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
// import fs from 'fs';
var fs = require("fs");
console.log(fs);
var DataParser = /** @class */ (function () {
    function DataParser() {
        this.data = '';
        this.out = null;
    }
    // 
    DataParser.prototype.parse = function (pathUrl) {
        this.readFile(pathUrl);
        this.doParsing();
        this.printData();
    };
    DataParser.prototype.readFile = function (pathUrl) {
        this.data = fs.readFileSync(pathUrl, 'utf8');
    };
    DataParser.prototype.printData = function () {
        console.log(this.out);
    };
    return DataParser;
}());
var CSVParser = /** @class */ (function (_super) {
    __extends(CSVParser, _super);
    function CSVParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CSVParser.prototype.doParsing = function () {
        this.out = this.data.split(',');
    };
    return CSVParser;
}(DataParser));
var MarkupParser = /** @class */ (function (_super) {
    __extends(MarkupParser, _super);
    function MarkupParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MarkupParser.prototype.doParsing = function () {
        this.out = this.data.match(/<\w+>.*<\/\w+>/gim);
    };
    return MarkupParser;
}(DataParser));
var csvPath = './FeHelper-20201012112518.csv';
var mdPath = './README.md';
new CSVParser().parse(csvPath);
new MarkupParser().parse(mdPath);
