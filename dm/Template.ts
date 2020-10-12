// import fs from 'fs';
const fs = require("fs");

console.log(fs)

abstract class DataParser {
    data: string = '';
    out: any = null;

    // 
    parse(pathUrl: string) {
        this.readFile(pathUrl);
        this.doParsing();
        this.printData()
    }


    readFile(pathUrl: string) {
        this.data = fs.readFileSync(pathUrl,'utf8');
    }

    abstract doParsing(): void;

    printData() {
        console.log(this.out)
    }
}

class CSVParser extends DataParser {
    doParsing() {
        this.out = this.data.split(',');
    }
}

class MarkupParser extends DataParser {
    doParsing() {
        this.out = this.data.match(/<\w+>.*<\/\w+>/gim)
    }
}

const csvPath = './FeHelper-20201012112518.csv'
const mdPath = './README.md'


new CSVParser().parse(csvPath)

new MarkupParser().parse(mdPath)