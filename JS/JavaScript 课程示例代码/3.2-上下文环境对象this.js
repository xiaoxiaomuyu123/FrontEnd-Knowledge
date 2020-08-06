/*-----> 误解和证伪 <-----*/
// 误解一：指向自身
function f1(){
    console.log(`自身的name：${ f1.name }`);
    console.log(`this是否指向全局对象window：${ this === window }`);
}
f1();

// 误解二：指向函数的作用域
// 全局作用域D
function c(){ // 函数作用域C
    console.log(`全局作用域D中的c函数:${ this.c.name }`);
    function b() { // 函数作用域B
        console.log(`函数作用域C中b函数:${ typeof this.b }`);
    }
    b();
}
c();

// 误解三：this指向类实例
class Bird {
    constructor(name) {
        this.name = name;
    }
    sing(){
        console.log(this.name);
    }
}

let bird = new Bird('bird');
bird.sing();

var name = 'window全局上下文对象';
bird.sing.call(this);

bird.sing.call({ name: 'dog' });


/*-----> 上下文对象 <-----*/
var name = 'window全局上下文对象';
// 临时充当上下文环境的对象
const dog = { name: 'dog' };
const cat = { name: 'cat' };

// 独立的函数
function yell(){
  // "use strict";
  console.log(this.name);
}

yell();
yell.call(dog);
yell.apply(cat);
yell.bind({ name: 'balabala' })();

// 函数写在构造函数内部
function Bird(name){
  this.name = name;
  this.sing = function(){
    console.log(this.name);
  }
}

const bird = new Bird('bird');
bird.sing();
bird.sing.call(dog);
bird.sing.apply(cat);
bird.sing.bind({ name: 'balabala' })();

// 函数写在构造函数的prototype中
function Animal(name){
  this.name = name;
}
Animal.prototype.cry = function(){
  console.log(this.name);
};

const animal = new Animal('animal');
animal.cry();
animal.cry.call(dog);
animal.cry.apply(cat);
animal.cry.bind({ name: 'balabala' })();

[{ name: 'it' }].forEach(function(item){
    console.log(this);
});

/*-----> 上下文环境 <-----*/
// JavaScript的this设计，跟内存里面的数据结构有关系。
// 函数是一等公民，与其他数据类型享有同等的国民待遇。
// 函数是独立的值，可以在不同的环境（即上下文）中运行。
// this就是在函数内部，指代函数当前运行环境的对象。

/*-----> 固定this的中间变量 <-----*/
// that、oThis、self、me，这几个中间变量，你觉得哪个比较好？
function Demo(){
  const that = this;
  this.name = 'demo';
  this.log = function(){
    console.log(`that.name: ${ that.name }`);
    console.log(`this.name: ${ this.name }`);
  };
}
const demo = new Demo();
demo.log.call({ name: 'sample' });
