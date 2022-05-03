/*
泛型：
 */

function echo<T>(arg: T): T {
    return arg
}

const str: string = 'abc'
const result = echo(123)

function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}

function echoWithArr<T> (arg: T[]): T[] {
    console.log(arg.length)
    return arg
}

const arrs = echoWithArr([1, 2, 3])

/*
约束泛型
 */

interface IWithLength {
    length: number
}

function echoWithLength<T extends IWithLength>(args: T): T {
    console.log(args.length)
    return args
}

console.log(echoWithLength([1, 2, 3, 4, 5, 6, 5]))



class Queue<T> {
    private data: T[] = [];
    push(item: T ) {
        return this.data.push(item)
    }
    pop(): T {
        return this.data.shift()
    }
}

const queue = new Queue<number>();
queue.push(1)
queue.push(2)
console.log(queue.pop())


/*
类型别名
 */

type PlusType = (x: number, y: number) => number
function sum(x: number, y: number): number {
    return x + y
}

const sum1: PlusType = sum


type NameRes = () => string
type NameOrRes = string | NameRes
function getName(n: NameOrRes) {
    if(typeof n === 'string') {
        return n
    } else {
        return n()
    }
}

/*
类型断言
 */

function getLength(input: string | number): number {
    // if(typeof input === 'string') {
    //     return input.length
    // } else {
    //     return input.toString().length
    // }
    if((<string>input).length) {
        return (<string>input).length
    } else {
        return input.toString().length
    }
}

const a = getLength("abcd")
console.log("a", a)
const b = getLength(1234567)
console.log("b", b)





