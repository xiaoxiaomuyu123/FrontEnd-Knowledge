/**
* @overview 数据类型和变量声明的示例代码，JSDoc示例
*/

/* 赋值，表达式，语句，语句块
多行注释示例 */
let language = 'JavaScript';
let area = 3 * 4;
if('JavaScript' === language){ // 相等判断，单行注释示例
  console.log(language);
  console.log(area)
}

// 数据类型  -  字符串 String
let language = 'JavaScript';
language;

// 数据类型  -  数值 Number
const pai = 3.14;
pai;
let area = 3 * 4;
area;

// 数据类型  -  布尔 Boolean
const flag = true;
flag;
!0;
!null;
!!'false';

// 狭义对象、数组都是对象
typeof {};
typeof [];

// ES2015引入的Class完全是函数的语法糖
class MyPromise {
    // TODO:
}
typeof MyPromise;
MyPromise === MyPromise.prototype.constructor;

function YourPromise(){
    // TODO:
}
typeof YourPromise;
YourPromise === YourPromise.prototype.constructor;

// 值和引用
let origin = 1;
let copy = origin;
origin;
copy;

origin = 2;
copy = 3;
origin;
copy;

//
let o = { language: 'JavaScript' };
let o1 = o;
let o2 = o;
o;
o1;
o2;

o.language = 'ECMASript';
o;
o1;
o2;

o1.language = 'TypeSript';
o;
o1;
o2;

//
let o = { language: 'JavaScript' };
let o1 = o;
let o2 = o;
o1 === o2;
let o3 = { language: 'JavaScript' };
o === o3;

//
let o = { language: 'JavaScript' };
function exec(o1, o2){
    o1 = { language: 'TypeSript' };
    o2.language = 'ECMASript';
    console.log(o1);
    console.log(o2);
}

exec(o, o);
o;
