const fruitFn = new Map()

fruitFn.set('red',['a','b'])
.set('red',['1','2'])
.set('yelllow',['v','d'])
.set('pr',['cv','s'])

function pick (color) {
    return fruitFn.get(color) || []
}

console.log(pick('red'))

const fruitArr = [
    {
        name: "a",color: 'red'
    },
    {
        name: "b",color: 'red'
    },
    {
        name: "c",color: 'blue'
    },
    {
        name: "d",color: 'blue'
    }
]

function arrPick(color){
    return fruitArr.filter(f => f.color == color)
}

console.log(arrPick('red'))

const redFruits = ["a",'b','c','d']

function judge(type) {
    if(redFruits.includes(type)){
        console.log('d')
    }
}

judge('a')
