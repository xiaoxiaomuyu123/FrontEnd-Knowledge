/*-----> 模块化机制  <-----*/
function add(x, y){}
function sub(x, y){
function multiply(x, y){}
function compute(expression){}
function createOperator(op){}

// ES6模块
export {
    add, sub, multiply,
    compute, createOperator
};
export default createOperator;

class Dog {}
class Cat {}
function createAnimal(type){}

// Node.js CommonJS模块
module.exports = {
    Dog, Cat,
    createAnimal
};
