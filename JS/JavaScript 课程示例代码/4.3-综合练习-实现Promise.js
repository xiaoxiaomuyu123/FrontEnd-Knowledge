/**
* @overview 综合演示一个面向对象的类和一个实例方法
*/

/**
* 空函数
*/
function noop() {}

/**
* 检查对象。
* 如果自身是函数，则返回自身。
* 如果不是函数，就返回一个空函数。
* @param {Function | undefined | null} func 待检查的函数。
* @return {Function} 可执行的函数。
*/
function def(func){
  if(typeof func === 'function'){
    return func;
  }else{
    return noop;
  }
}

/**
* Promise状态枚举。
*/
const State = {
  // 进行中
  Pending: 0,
  // 已成功
  Fulfilled: 1,
  // 已失败
  Rejected: 2
};

/**
* 实现一个ES6的Promise类。
* 延伸学习：使用ES6的class语法实现
* @constructor
* @param {Function} executor 带有resolve和reject两个参数的函数。
* Promise构造函数执行时立即调用executor函数，resolve和reject两个函数作为参数传递给executor
* （executor 函数在Promise构造函数返回所建promise实例对象前被调用）。
* resolve和reject函数被调用时，分别将promise的状态改为fulfilled（完成）或rejected（失败）。
* executor内部通常会执行一些异步操作，一旦异步操作执行完毕(可能成功/失败)，
* 要么调用resolve函数来将promise状态改成fulfilled，要么调用reject函数将promise的状态改为rejected。
* 如果在executor函数中抛出一个错误，那么该promise状态为rejected。
* executor函数的返回值被忽略。
* @example
* const promise = new ES5Promise(function(resolve, reject) {...});
* ...
* promise.then((data) => {}).catch((err) => {});
*/
function ES5Promise(executor){
  if(!(this instanceof ES5Promise)){
    throw new TypeError('ES5Promise构造函数需要使用new生成实例，不能直接调用。');
  }
  if(typeof executor !== 'function'){
    throw new TypeError('ES5Promise构造函数的参数必须是一个函数。');
  }
  // Promise的状态
  this.state = State.Pending;
  this.value = void(0);
  // 状态改变时，需要执行的回调函数队列
  this.queues = [];
  doResolve(executor, this);
}

function doResolve(executor, context) {
  var done = false;
  try {
    executor(
      function(value) {
        if (done) return;
        done = true;
        resolve(context, value);
      },
      function(reason) {
        if (done) return;
        done = true;
        reject(context, reason);
      }
    );
  } catch (ex) {
    if (done) return;
    done = true;
    reject(context, ex);
  }
}

function resolve(context, val) {
  try {
    if (val === context){
      throw new TypeError('完成的值不能是当前对象本身');
    }
    // 延伸学习：如果完成值是另一个Promise对象，怎么办？
    context.state = State.Fulfilled;
    context.value = val;
    finale(context);
  }catch(ex) {
    reject(context, ex);
  }
}

function reject(context, val) {
  context.state = State.Rejected;
  context.value = val;
  finale(context);
}

function finale(context){
  let o = context.queues.shift();
  while(o) {
    const { onFulfilled, onRejected } = o;
    switch (context.state) {
      case State.Fulfilled:
        onFulfilled(context.value);
        break;
      case State.Rejected:
        onRejected(context.value);
        break;
      case State.Pending:
        // 设计击穿
      default:
        // 延伸学习：讨论此处是否应该抛出异常？
    }
    o = context.queues.shift();
  }
}

// 实例方法
ES5Promise.prototype.catch = function(onRejected){
  return this.then(null, onRejected);
};
ES5Promise.prototype.then = function(onFulfilled, onRejected){
  onFulfilled = def(onFulfilled);
  onRejected = def(onRejected);
  this.queues.push({ onFulfilled, onRejected });
  switch (this.state) {
    case State.Fulfilled:
      // 设计击穿
    case State.Rejected:
      finale(this);
      break;
    case State.Pending:
    default:
  }
  return this;
};
ES5Promise.prototype.finally = function(onFinally){/*延伸学习*/};

// 延伸学习：学习Promise静态方法的接口契约及用途
ES5Promise.all = function(iterable){};
ES5Promise.race = function(iterable){};
ES5Promise.reject = function(reason){};
ES5Promise.resolve = function(value){};

/*
function ft(){
  return new ES5Promise(function(resolve, reject){
    setTimeout(() => {
      resolve('一切顺利！');
    }, 1e3)
  });
}
ft().then(data => console.log(data)).catch(err => console.log(err.message));

function fc(){
  return new ES5Promise(function(resolve, reject){
    setTimeout(() => {
      reject(new Error('变天了...'));
    }, 2e3)
  });
}
fc().then(data => console.log(data)).catch(err => console.log(err.message));
*/

export { ES5Promise };
export default ES5Promise;
