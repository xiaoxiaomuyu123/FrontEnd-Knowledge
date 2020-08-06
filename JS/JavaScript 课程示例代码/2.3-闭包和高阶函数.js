
/*-----> 闭包 <-----*/
// 全局作用域D
function create(){ // 函数作用域C
    let captured = 0;
    return function(){ // 函数作用域B
        captured++;
        console.log(captured);
    }
}

const increase = create();
increase();
increase();
increase();


/*-----> 闭包的示例  <-----*/
/**
* 创建可配置的排序比较函数。
* @param {String} key 参与比较的Key。
* @return {Function} 比较函数。
*/
// 全局作用域D
function createSortHandler(key){ // 函数作用域C
    /**
    * 排序比较函数。
    * @param {Object} before
    * @param {Object} after
    * @return {Number}
    */
    return function(before, after){ // 函数作用域B
        // TODO: 功能实现
        console.log(`参与比较的Key：${ key }`);
    }
}

const handler = createSortHandler('age');
handler();

const SortType = {
  ASC: 'asc',
  DESC: 'desc'
}

const items = [
    { name: '蛇人', age: 42 },
    { name: '大青', age: 3 },
    { name: '小青', age: 1 },
    { name: '二青', age: 2 }
];

/**
* 创建可配置的排序比较函数。
* @param {String} key 参与比较的Key。
* @param {SortType} type 排序类型。
* @return {Function} 比较函数。
*/
function createSortHandler(key, type){
    /**
    * 排序比较函数。
    * @param {Object} before
    * @param {Object} after
    * @return {Number}
    */
    return function(before, after){
        // TODO: 功能实现
    }
}

/**
* 创建可配置的排序比较函数。
* @param {String | Function} key 参与比较的Key。
* @param {SortType | Function} type 排序类型。
* @return {Function} 比较函数。
*/
function createSortHandler(key, type){
    /**
    * 排序比较函数。
    * @param {Object} before
    * @param {Object} after
    * @return {Number}
    */
    return function(before, after){
        // TODO: 功能实现
    }
}

// 封装对象的私有属性和私有方法
function createPerson(){
  let firstName = '';
  let lastName = '';
  function setName(first, last){
    firstName = first;
    lastName = last;
  }
  function getName(){
    return `${ firstName } ${ lastName }`;
  }
  return {
    setName,
    getName
  }
}

const person = createPerson();
person.setName('培公', '周');
person.getName();

/*-----> 高阶函数  <-----*/
/*-----> 一等公民 <-----*/
function multiply(x, y){
    return x * y;
}

// 将函数作为参数和返回值
function complexFun(func){
  return function(x, y){
      return func(x, y);
  }
}

complexFun(multiply)(2, 3);

/**
* 生成令牌
* @return {String} Token
*/
function createStringToken(){
    return Math.floor(Math.random() * 1e5).toString(16).toUpperCase();
}
/**
* 生成令牌
* @return {String} Token
*/
function createNumberToken(){
    return Math.floor(Math.random() * 1e5);
}
/**
* 创建令牌生成器。
* @param {Function} create 生成令牌密码的函数。
* @return {Function} RSA生成器。
*/
function createRSA(create){
  let token = create();
  setInterval(() => {
    token = create();
  }, 6e4);
  return function(){
    return token;
  }
}

const getStringToken = createRSA(createStringToken);
getStringToken();

const getNumberToken = createRSA(createNumberToken);
getNumberToken();
