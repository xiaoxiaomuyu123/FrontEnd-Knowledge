/*-----> 函数式编程的多态  <-----*/
function add(x, y){
  return x + y;
}

const sub = function(x, y){
  return x - y;
};

function multiply(x, y){
    return x * y;
}

function compute(expression){
    const commands = {
        '+': add,
        '-': sub,
        'x': multiply
    };
    const [ left, op, right ] = expression;
    return commands[op](left, right);
}

[ [1, '+', 2], [5, '-', 3], [4, 'x', 6] ].map(compute);


/*-----> 面向对象编程的多态  <-----*/
class Dog {
    constructor() {
    }
    cry(){
        console.log('汪汪汪');
    }
}
class Cat {
    constructor() {
    }
    cry(){
        console.log('喵喵喵');
    }
}

[new Dog(), new Cat()].forEach(animal => animal.cry());

/*-----> 接口约束的机制  <-----*/
function createOperator(op){
    const commands = {
        '+': add,
        '-': sub,
        'x': multiply
    };
    return commands[op];
}
[ [1, '+', 2], [5, '-', 3], [4, 'x', 6] ].map((expression) => {
    const [ left, op, right ] = expression;
    const operator = createOperator(op);
    return operator(left, right)
});

function createAnimal(type){
    const types = { 'dog': new Dog(), 'cat': new Cat() };
    return types[type];
}
['dog', 'cat'].forEach(type => {
    const animal = createAnimal(type);
    animal.cry();
});
