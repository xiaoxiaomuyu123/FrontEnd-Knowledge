/*
泛型：
 */
function echo(arg) {
    return arg;
}
var str = 'abc';
var result = echo(123);
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
function echoWithArr(arg) {
    console.log(arg.length);
    return arg;
}
var arrs = echoWithArr([1, 2, 3]);
function echoWithLength(args) {
    console.log(args.length);
    return args;
}
console.log(echoWithLength([1, 2, 3, 4, 5, 6, 5]));
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.push = function (item) {
        return this.data.push(item);
    };
    Queue.prototype.pop = function () {
        return this.data.shift();
    };
    return Queue;
}());
var queue = new Queue();
queue.push(1);
queue.push(2);
console.log(queue.pop());
function sum(x, y) {
    return x + y;
}
var sum1 = sum;
function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
/*
类型断言
 */
function getLength(input) {
    // if(typeof input === 'string') {
    //     return input.length
    // } else {
    //     return input.toString().length
    // }
    if (input.length) {
        return input.length;
    }
    else {
        return input.toString().length;
    }
}
var a = getLength("abcd");
console.log("a", a);
var b = getLength(1234567);
console.log("b", b);
