
/*-----> 函数的声明 <-----*/
function add(x, y){
  return x + y;
}

const sub = function(x, y){
  return x - y;
};

function multiply(x, y){
    return x * y;
}

/*-----> 参数的默认值 <-----*/
function execES5(items){
    items = items || [];
    console.log(items);
    items.map(console.log)
}
execES5();
execES5([1, 2]);

/*-----> ES2015的函数默认值 <-----*/
function execES6(items = []){
    console.log(items);
    items.map(console.log)
}
execES6();
execES6([1, 2]);

execES5(0);
execES6(0);
execES5(null)
execES6(null)

/*-----> 一等公民 <-----*/
function multiply(x, y){
    return x * y;
}

// 将函数赋值给一个变量
const operator = multiply;

// 将函数作为参数和返回值
function complexFun(func){
  return function(x, y){
      return func(x, y);
  }
}

complexFun(operator)(2, 3);

const o = { operator: null };
o.operator = operator;
o.operator(3, 4);
