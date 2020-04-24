import Promise from "ts-promise";

const util = {
    toString():string{
        
        return "";
    },

    promisy(fn:Function){
        return (...args:any)=>{
            return new Promise((resolve,reject)=>{
                try {
                    fn(...args,resolve)
                } catch (error) {
                    reject(error)
                }
            })
        }
    }
}