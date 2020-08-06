/**
* @overview 综合演示一个静态方法。
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
* @param {*} json 需要判断类型的变量。
* @return {Boolean} 是否是日期类型。
*/
function isDate(json){
  // 延伸学习：请考虑具体实现
}

/**
* 专门序列化日期的方法。
* @param {Date} date 需要序列化的日期。
* @return {Date} 序列化后的新日期。
*/
function stringifyDate(date){
  // 延伸学习：请考虑具体实现
}

/**
* 专门序列化数组的方法。
* @param {Array} arr 需要序列化的数组。
* @return {Array} 序列化后的新数组。
*/
function stringifyArray(arr){
  const arrStr = arr.map(it => {
    // 延伸学习：出现循环引用怎么办？
    return stringify(it);
  }).filter(it => (it !== Type.Undefined));
  return `[${ arrStr.join(',') }]`;
}

/**
* 专门序列化简单对象的方法。
* @param {Object} obj 需要序列化的简单对象。
* @return {Object} 序列化后的简单对象。
*/
function stringifyObject(obj){
  const arrObjStr = Object.keys(obj).map(key => {
    const val = stringify(obj[key]);
    if(Type.Undefined === val){
      return Type.Undefined;
    }else{
      return `"${ key }":${ val }`;
    }
  }).filter(it => (it !== Type.Undefined));
  return `{${ arrObjStr.join(',') }}`;
}

/**
* 将一个JavaScript值(对象或者数组)转换为一个 JSON字符串，
* 如果指定了replacer是一个函数，则可以选择性的替换值，
* 或者如果指定了replacer是一个数组，可选择性的仅包含数组指定的属性。
* @param {*} json 将要序列化成 一个JSON 字符串的值。
* @param {Function | Array | null | undefined} replacer 如果该参数是一个函数，
* 则在序列化过程中，被序列化的值的每个属性都会经过该函数的转换和处理；
* 如果该参数是一个数组，则只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中；
* 如果该参数为null或者未提供，则对象所有的属性都会被序列化；
* @param {Number | String | null | undefined} space 指定缩进用的空白字符串，用于美化输出（pretty-print）；
* 如果参数是个数字，它代表有多少的空格；上限为10。该值若小于1，则意味着没有空格；
* 如果该参数为字符串(字符串的前十个字母)，该字符串将被作为空格；
* 如果该参数没有提供（或者为null）将没有空格。
* @return {String} 一个表示给定值的JSON字符串。
*/
function stringify(json, replacer, space){
  // 延伸学习：教学示例不实现此特性，请思考如何实现。
  replacer = replacer || function(val){ return val };
  // 延伸学习：教学示例不实现此特性，请思考如何实现。
  space = space || 0;

  const type = typeof json;
  switch (type) {
    case Type.Undefined: // 未定义
      // 设计击穿
    case Type.Function:
      // 设计击穿
    case Type.Symbol:
      return Type.Undefined; // 返回不进行序列化的特殊标记
      break;
    case Type.String:
      return `"${ json }"`;
      break;
    case Type.Number:
      // 设计击穿
    case Type.Boolean:
      return json.toString();
      break;
    case Type.Object:
      if(null === json){
        return 'null';
      }else if(Array.isArray(json)){ // 延伸学习：判断数组类型有什么其他方法？
        return stringifyArray(json);
      // }else if(isDate(json)){ // 延伸学习：日期类型的变量怎么判断？
      //   return stringifyDate(json);
      }else{ // 判断逻辑最后就是简单对象
        return stringifyObject(json);
      }
      break;
    default:
      throw new Error(`不能识别的数据类型：${ type }`);
  }
}

/**
* 模拟JSON静态类。
*/
const MyJSON = {
  stringify
};

/*
验证：
const json = {
  arr: [1, 2, 3],
  obj: { a: 'a', b: 'b', c: 'c' },
  func: function(){ return 'func'; }
}
MyJSON.stringify(json);
*/

export { MyJSON };
export default MyJSON;
