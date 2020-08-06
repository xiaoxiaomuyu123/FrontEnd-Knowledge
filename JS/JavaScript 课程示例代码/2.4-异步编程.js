/*-----> 异步的世界 <-----*/
// 同步示例
function syncTask1(){
    console.log(`同步任务1：${ Date.now() }`);
}
function syncTask2(){
    console.log(`同步任务2：${ Date.now() }`);
}

syncTask1();
syncTask2();

// 串行示例
function serialTask1(callback){
    console.log(`串行任务1：${ Date.now() }`);
    // 示例可以设想为从数据库、文件或网络读取数据
    setTimeout(function(){
        callback();
    }, 100);
}
function serialTask2(){
    console.log(`串行任务2：${ Date.now() }`);
}

serialTask1(serialTask2);


/*-----> 回调函数 <-----*/
// 参数和返回值由调用者约定。调用者传入约定参数调用回调函数，回调函数返回约定的数据（或约定不返回）。
// 在过去的时代，回调函数的流程控制是由专门的工具库处理的。好在，现在可以略去不提了。

function calling(callback){
    if(typeof(callback) !== 'function'){
        callback = function(){};
    }
    console.log('我是调用方，我是101，我是101！');
    const answer = callback('101');
    console.log(answer);
}

function column4(caller){
    return `${ caller }，${ caller }，我是塔山，我是塔山！`;
}

calling(column4);

// 分离式回调函数
$.ajax({
  url: '/',
  success: function(res){
    console.log(res);
  },
  error: function(err){
    console.log(err);
  }
});

// error-first回调函数
const fs = require('fs');
const path = require('path');
fs.readFile(path.join(__dirname, 'test.js'), 'utf-8', function(err, content){
// fs.readFile('./conf.json', function(err, content){
  if(err){
    console.log(err.message);
  }
  console.log(content);
});


/*-----> Promise <-----*/
function f(){
    return new Promise(function(resolve, reject){
        // TODO:
    });
}

// 使用了回调函数
// 可以直接使用 { success: resolve, error: reject }
function f(){
  return new Promise(function(resolve, reject){
    // fetch('/').then(resolve).catch(reject);
    $.ajax({
      url: '/',
      success: function(res){
        resolve(res);
      },
      error: function(err){
        reject(err);
      }
    });
  });
}

f()
.then(function(data){ // 成功回调
  console.log(data);
})
.catch(function(err){  // 异常处理
  console.error(err.message);
});

// 通过.then().then()连写，可以使请求串行
fetch('./conf.json')
.then((res) => {
  // 读配置中的url的伪代码
  const url = res.url;
  return fetch(url);
})
.then((data) => {
  // 读取第二个文件内容的伪代码
  console.log(data);
})
.catch(function(err){ // 异常处理
  console.error(err.message);
});

// 通过Promise.all()方法可以使请求并行
const promises = [
  '/url1',
  '/url2',
  '/url3'
].map(url => fetch(url))
Promise.all(promises)
.then(contents => {
  console.log(contents[0]);
  console.log(contents[1]);
  console.log(contents[2]);
})
.catch(function(err){ // 异常处理
  console.error(err.message);
});


/*-----> async await <-----*/
// Promise写法
fetch('/url')
.then(res => console.log(res))
.catch(err => console.error(err.message));

// async await写法
try{
  const res = await fetch('/url');
  console.log(res);
}catch(ex){
  console.error(ex.message);
}

// 串行的异步
async function f1(){
  try{
    const res1 = await fetch('/url1');
    console.log(res1);
    const res2 = await fetch('/url2');
    console.log(res2);
    const res3 = await fetch('/url3');
    console.log(res3);
  }catch(ex){
    console.error(ex.message);
  }
}
f1();

// 并行的异步
async function f2(){
  try{
    const res1 = fetch('/url1');
    const res2 = fetch('/url2');
    const res3 = fetch('/url3');

    console.log(await res1);
    console.log(await res2);
    console.log(await res3);
  }catch(ex){
    console.error(ex.message);
  }
}
f2();

/**
 * @callback PromiseCallback
 * @param {Function} resolve
 * @param {Function} reject
 */
/**
 * 实现一个ES5的Promise类。
 * @param {PromiseCallback} callback - Promise构造函数的回调函数。
 * @class
 */
function ES5Promise(callback) {
    // TODO:
}
/**
 * @callback ThenCallback
 * @param {*} data 传递给then回调函数的参数。
 * @return {*} 传递给下一个then方法的数据。
 */
/**
* @param {ThenCallback} callback - then方法的回调函数。
* @return {ES6Promise} this.
* @public
*/
ES5Promise.prototype.then = function(handler){
    // TODO:
}

/**
 * 实现一个ES6的Promise类。
 */
class ES6Promise {
    /**
     * @callback PromiseCallback
     * @param {Function} resolve
     * @param {Function} reject
     */
    /**
     * 创建Promise类。
     * @param {PromiseCallback} callback - Promise构造函数的回调函数。
     */
    constructor(callback) {
        // TODO:
    }

    /**
     * @callback ThenCallback
     * @param {*} data 传递给then回调函数的参数。
     * @return {*} 传递给下一个then方法的数据。
     */
    /**
     * @param {ThenCallback} callback - then方法的回调函数。
     * @return {ES6Promise} this.
     */
    then(handler) {
        // TODO:
    }
}

// 调用示例
function testPromise(){
    // 此处将Promise替换为ES5Promise或ES6Promise
    return new Promise(function(resolve, reject){
        console.log(`new Promise@${ Date.now() }`);
        setTimeout(function(){
            resolve(`resolve@${ Date.now() }`)
        }, 100);
    });
}

testPromise()
.then(function(data){
    console.log(data);
});
