var List = /** @class */ (function () {
    function List(length) {
        this.data = new Array(length);
        this.length = length;
        this.pointer = 0;
    }
    List.prototype.push = function (item) {
        console.log(this.pointer, this.length);
        if (this.pointer >= this.length) {
            this.enlarge();
        }
        this.data[this.pointer] = item;
        this.pointer++;
    };
    List.prototype.toString = function () {
        var str = "";
        console.log("x");
        for (var i = 0; i < this.pointer; i++) {
            if (i == this.pointer - 1) {
                str = str + this.data[i];
            }
            else {
                str = str + this.data[i] + ",";
            }
        }
        return str;
    };
    List.prototype.enlarge = function () {
        var tempArray = new Array(this.length + 1);
        for (var i = 0; i < this.length; i++) {
            tempArray[i] = this.data[i];
        }
        this.length++;
        this.data = tempArray;
    };
    return List;
}());
var testArray = new List(2);
testArray.push(2);
testArray.push(2);
testArray.push(2);
console.log(testArray.length);
testArray.toString();
