class List<T>{
    private data: Array<T>;
    pointer: number;
    length: number;

    constructor(length:number){
        this.data = new Array<T>(length);
        this.length = length;
        this.pointer = 0;
    }

    push(item:T):void {
        console.log(this.pointer,this.length)
        if(this.pointer >= this.length){
            this.enlarge();
        }
        this.data[this.pointer] = item;
        this.pointer++
    }

    toString(): string {
        let str = "";
        console.log("x")
        for(var i = 0;i<this.pointer;i++){
            if(i == this.pointer-1){
                str = str + this.data[i]
            }else{
                str = str + this.data[i] + ","
            }
        }
        return str;
    }

    enlarge(): void {
        const tempArray = new Array<T>(this.length+1)

        for(var i=0;i<this.length;i++){
            tempArray[i] = this.data[i];
        }
        this.length ++
        this.data = tempArray;
    }

}

let testArray = new List<number>(2);
testArray.push(2);
testArray.push(2);
testArray.push(2);
console.log(testArray.length)
testArray.toString();