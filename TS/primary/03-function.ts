// 定义函数的输入和输出

// 函数声明
function add (x: number, y: number, z?: number): number {
    return x + y
}

let result = add (2, 4)
let sum = add(2, 3, 4)


// 函数表达式
const add1 = function(x: number, y: number): number {
    return x + y
}

// 这里的 箭头不是 es6 的箭头，是 ts 声明函数返回值类型的方法。ts 中 冒号后面都是生命的类型，和实际的代码没有关系
const add2: (x: number, y: number) => number = add

