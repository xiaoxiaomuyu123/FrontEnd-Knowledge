/**
* @overview 综合演示一个函数。
*/

/**
* 变量类型的枚举。
*/
const Type = {
  String: typeof '',
  Number: typeof 0,
  Boolean: typeof true,
  Object: typeof {}, // null、对象、数组
  Undefined: typeof void 0,
  Function: typeof new Function(),
  Symbol: typeof Symbol()
};

/**
* 判断一个变量是否是日期类型。
* @param {*} o 需要判断类型的变量。
* @return {Boolean} 是否是日期类型。
*/
function isDate(o){
  // 延伸学习：请考虑具体实现
}

/**
* 专门深度复制日期的方法。
* @param {Date} date 需要复制的日期。
* @return {Date} 深度复制后的新日期。
*/
function cloneDate(date){
  // 延伸学习：请考虑具体实现
}

/**
* 专门深度复制数组的方法。
* @param {Array} arr 需要复制的数组。
* @return {Array} 深度复制后的新数组。
*/
function cloneArray(arr){
  return arr.map(it => {
    // 延伸学习：出现循环引用怎么办？
    return myDeepClone(it);
  });
}

/**
* 专门深度复制简单对象的方法。
* @param {Object} obj 需要复制的简单对象。
* @return {Object} 深度复制后的简单对象。
*/
function cloneObject(obj){
  const result = {};
  // 延伸学习：Object.keys(obj)遍历对象的方案
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      result[key] = myDeepClone(obj[key])
    }
  }
  return result;
}

/**
* 复制一个变量的值。
* 对于值类型的变量，直接返回副本。
* 对于引用类型的变量，返回深度复制的副本，
* 即与不再与原值的引用指向同一实体。
* @param {*} o 待复制的原值。
* @return {*} 原值的深度拷贝。
*/
function myDeepClone(o){
  const type = typeof o;
  switch (type) {
    case Type.Undefined: // 未定义
      // 设计击穿
    case Type.String:
      // 设计击穿
    case Type.Number:
      // 设计击穿
    case Type.Boolean:
      return o; // undefined和值类型直接返回
      break;
    case Type.Function:
      return o.bind(); // 返回实现同一功能的另一个函数
      break;
    case Type.Symbol: // 延伸学习：符号类型
      break;
    case Type.Object:
      if(null === o){
        return o;
      }else if(Array.isArray(o)){ // 延伸学习：判断数组类型有什么其他方法？
        return cloneArray(o);
      // }else if(isDate(o)){ // 延伸学习：日期类型的变量怎么判断？
      //   return cloneDate(o);
      }else{ // 判断逻辑最后就是简单对象
        return cloneObject(o);
      }
      break;
    default:
      throw new Error(`不能识别的数据类型：${ type }`);
  }
}

/*
验证：
const o = {
  arr: [1, 2, 3],
  obj: { a: 'a', b: 'b', c: 'c' },
  func: function(){ return 'func'; }
}
const oc = myDeepClone(o);
console.log(oc);
o.arr === oc.arr;
o.obj === oc.obj;
o.func();
oc.func();
o.func == oc.func;
*/

export { myDeepClone };
