let isDone: boolean = true

let age: number = 20
let binaryNumber: number = 0b11111

let firstName: string = 'viking'
let message: string = `hello, ${firstName}`

let u: undefined = undefined
let n: null = null

let num: number = undefined


let notSure: any = 4
notSure = 'maybe it is a string'
notSure.myName
notSure.getName()


// 联合类型
let numberOrString: number | string = 0
numberOrString = 'dka'


// 数组
let arrOfNumbers: number[] = [1, 2, 3]
arrOfNumbers.push(0)

    // 类数组
function test() {
    console.log(arguments)
    arguments.length

}

// 元组  固定长度和类型的数组
let user: [number, string] = [1, 'viking']
user = [3, 'ttt']









