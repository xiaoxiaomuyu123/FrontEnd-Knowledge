# 一. 基本概念

知识点：基本数据类型及判断；遇到字符串和数字相加减的操作符运算；  

### 1. 变量类型： 
 
 - 值类型（基本类型）和引用类型。引用类型：对象，数组和函数。
 - null 表示一个空对象的指针，所以用 typeof 检测 null 值，会返回 object。  
   
 ```
  var car = null;
  alert(typeof car);   // object
 ```
  
如果定义的变量在将来用于保存一个对象，那么就要把这个变量初始化成 null；这样一来，只要检测 null 值，就可以知道该变量是否已经保存了对象的引用。   

```
if(car !== null) {
    // 对 car 进行某种操作
}
```   
   
- bool 值  
“”空字符串，0，NaN，null，undefined 是 false。  
  
- Number 类型   
   
   - 不要测试两个数字之和是不是 0.3   
   因为 0.1 + 0.2 可能等于 0.30000000000000003     
   - 数值转换，把非数值转换成数值的函数 Number（str），parseInt（str），parseFloat（str）  
   
      - Number(str)函数  转换规则（一元加和 Number（str）函数的转换方法一样）：   
      1. true 变成 1，false 变成 0；undefined 变成 NaN， null 变成 0；
      2. 字符串转换成数字的规则：  
            1. 只包含数字，就直接转换成数字
            2. 空字符串转成 0，parseInt 空字符串转换成 NaN
            3. ‘123abc’ 转换成 NaN
            4. 其他形式"bule"转换成 NaN  
            5. 如果是对象，调用 obj.valueOf（）方法，返回的结果不能转换成数字，就调用 obj.toString（）方法。
      - parseInt(str)  忽略字符串前面的空格，直到找到第一个非空格字符，如果第一个字符不是数字字符或者是负号，就返回 NaN；如果是数字，就转换到第一个非数字字符为止。  
      ‘123abs’ 转换成 123，‘1.2’ 转换成 1，‘abs’ 转换成 NaN，空字符串转换成 NaN。空字符串和 Number 不一样，Number 转换成 0。  
      此外，注意 parseInt（str, base）还提供了第二个参数，用来标识第一个参数的是几进制。
      - parseFloat()    
      
     乘性操作符的操作数是非数字的时候，会将操作符先使用 Number() 函数转换成数字，再进行计算
     
转换函数|true|false|undefined|null|""|"123abc"|"1.1"|"12a.3"
:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:
Number() 一元加、乘性操作符|1|0|NaN|0|0|NaN|1.1|NaN
parseInt()|NaN|NaN|NaN|NaN|NaN|123|1|12
     
     
   - NaN 用于表示一个本来要返回数值的操作数，没有返回数值的情况。任何 NaN 的计算操作，结果都是 NaN; NaN 与任何值都不相等，包括它本身。所以 `NaN == NaN;   // false`   
   有一个 isNaN（str） 函数，属于强制转换，用于检测传入的参数是否可以被转换成数字，不是数值返回 true，是数值返回 false   
      
 ```
  isNaN(NaN);   // true
  isNaN(10);    // false
  isNaN('10');  // false  （可以被转换成 10）
  isNaN('bule');// true （不能转换成数字）
  isNaN(true);  // false  (bool 只可以被转换成 0， 1)
 ```   
    
isNaN 函数可以传入函数，首先调用函数的 valueOf（），确定该函数的返回值是否可以转换成数值，如果不行，再调用 toString（）方法，确定返回值是否可以转换成数值。  
   
- String 类型   
  
    - toString（）方法  
    除了 null 和 undefined 以外，每个值都有 toString（）方法，一般用点语法调用，不需要在 toString（）内传递参数。如果要传递参数，意思是转换成几进制的字符串。  
    
    - String（）函数  
    在不知道要转换的值是否是 null 或者 undefined 就用 String（n）函数，n 是传入到函数中需要转换成字符串的变量。如果传入的 n 的值是 undefined 或者 null，返回值就是 undefined 或 null。但是 undefined 和 null 没有 toString（）方法。  
    
#### 操作符   
  
- 加性操作符    
字符串与数字相加，得到字符串；字符串和数字相减，得到数字

###2. 变量计算里的强制转换 4 种：  

字符串拼接，==，if 语句，逻辑运算。
1. 字符串拼接： var a = 100 + "10";   //  "10010"    数字和字符串拼接，最后是字符串。

### 3. ==和===、以及Object.is的区别 

### 4.  js判断类型 ，并回答怎么判断空数组、空字符串、空对象

- 判断空数组    
`JSON.stringify(obj) === '{}';`
- 判断空对象   

    - 方法一：
`JSON.stringify(obj) === '[]'` `Object.keys(obj) === 0`   

    - 方法二：   
    
```
// 用 ES6 的方法，返回一个 keys 的数组，然后再判断这个数组的长度，长度为 0 就是空对象
Object.keys(obj)
```
    
- 判断空字符串  
   

### 5.不同数据类型的值的比较，是怎么转换的，有什么规则

### 6. null == undefined为什么

要比较相等性之前，不能将null 和 undefined 转换成其他任何值，但 null == undefined 会返回 true 。ECMAScript规范中是这样定义的。 

### 7. NaN是什么的缩写，JS的作用域类型，undefined 与 null 的区别在哪，写一个函数判断变量类型

- NaN 是 not a number 的缩写
- JS的作用域类型：全局作用域，函数作用于，闭包模拟的块级作用域
- undefined 与 null 的区别：相同点，if 判断语句中，两者都会被转换为false  
    - Number 转换的值不同，Number(null) 输出为 0, Number(undefined)输出为 NaN


# 二、变量、作用域和内存问题

## 1. js的块级作用域

ES5 只有函数作用域和全局作用域，没有块作用域，ES6 用 let 和 const 实现了块级作用域。

#### 1.1 为什么需要块级作用域？ 需要块级作用域的原因? ES5 没有块级作用域会有哪些弊端？ 

1. 内层变量可能会覆盖外层变量
2. 用来计数的循环变量泄露为全局变量

```
// 具体解释
// 1. 内层变量可能会覆盖外层变量
var tmp = new Date();

function f() {
  console.log(tmp);
  if (false) {
    var tmp = 'hello world';
  }
}

f(); // undefined

/*
上面代码的本意是，if代码块的外部使用外层的tmp变量，内部使用内层的tmp变量。  
但是，函数f执行后，输出结果为undefined，原因在于变量提升，导致内层的tmp变量覆盖了外层的tmp变量。
*/

// 2. 用来计数的循环变量泄露为全局变量
var arr = [1, 2, 3];
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

console.log(i) // 3

/* 
解释：变量 i 只是用来循环计数，但是循环结束，也就是 i 的使命结束以后， 
i 并没有消失，还可以在全局范围内访问到，这样变量 i 就泄露成了全局变量 
 */
```

#### 1.2 ES5 如何实现块作用域

ES5 用立即执行匿名函数来模拟块级作用域。  
解释： 立即执行匿名函数执行完成以后，会立即被销毁，那么定义在立即执行匿名函数里面的变量也会被销毁。这样就可以限制向全局作用域添加过多的变量和函数。       

**引申问题**：
1. 为什么要限制向全局作用域添加过多的变量和函数？
    - 若一个项目是多个人完成的，全局变量容易造成变量名冲突
    - 根据垃圾回收机制，一个变量的生命周期的结束，要等到不再使用这个变量了才会被回收，而全局变量要等到关闭浏览器的页面时才会被回收，那么全局变量和函数过多，就会导致占用过大的内存。  
    
2. ES5 除了立即执行匿名函数还有哪些方法避免全局变量命名冲突？   
https://www.cnblogs.com/moqiutao/p/7553423.html  
使用命名空间：用对象字面量的方式定义命名空间，

3. js 的垃圾回收机制：    
找出不再使用的变量，然后释放这些变量占用的内存。找出不再使用的变量，进行垃圾回收的方法有两种：标记清除和引用计数
    - 标记清除   
    标记清除是最常用的垃圾回收方式。垃圾收集器在运行的时候，会给存储在内存中的所有变量都加上标记，然后再去掉环境中的变量及被环境变量引用的变量的标记，这样，剩下的被标记的变量就是要回收的变量。然后垃圾收集器就完成内存清除工作，销毁那些带标记的值并回收他们所占用的内存空间。
    - 引用计数    
    引用计数是一种不太常用的垃圾回收策略。思想是跟踪记录所有值被引用的次数。当声明了一个变量，将一个用用类型的值赋给这个变量时，引用的次数就是 1。同一个引用类型的值，又被赋给另外一个变量，这个引用类型值得引用次数就加 1。相反，如果包含了这个值得变量取得了另外一个值，那么这个值的引用次数减 1，当这个值得引用次数变成 0 的时候，说明没有办法访问这个值了，垃圾收集器就会释放这些引用次数为 0 的值的内存空间。但是这个策略有一个缺点，对于循环引用的变量无法进行回收。
    
    ```
     function problem() {
        var a = new Object();
        var b = new Object();
        
        a.x = b;
        b.y = a;
     }
    ```
    
4. 暂时性死区 
在代码块内，使用let、const命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区” 

# 三、引用类型

知识点：Object类型；Array类型；Date类型；Function类型；基本包装类型；单体内置对象

- 以下两种情况分别运行，会怎么样

```
const obj = {a : 'test'};
obj.a = "test1";
```    
     
```
const obj = {a : 'test'};
obj = {b : “test1”}
```    

考察引用类型、基本类型和 const 定义常量的知识点。   
第一组：会把 obj 中的 a 的属性修改成 test1
第二组：会报错。第一行 obj 的值实际上是 {a : 'test'} 的内存地址。我们用了 const 声明，只要保证内存地址不变即可，不需要保证内存地址的内容也不变。显然，第一组没有修改这个内存地址，而第二组是新声明了一个对象，需要改变内存地址，就会报错了。


### 1. 数组常用方法

### 2. 数组去重

- indexOf 循环去重
- ES6 Set 去重；Array.from(new Set(array)) 
- Object 键值对去重；把数组的值存成 Object 的 key 值，比如 Object[value1] = true，在判断另一个值的时候，如果 Object[value2]存在的话，就说明该值是重复的。

```
function setArr(arr) {
    let arr0 = [];
    let obj = {};
    for (let i of arr) {
        console.log(i)
        if(!obj[i]) {
            arr0.push(i);
            obj[i] = 1;
        }
    }
    return arr0;
}
``` 

### 3. for of 和 for in 的区别

- for in是ES5标准，遍历key. 不管这个属性是原型上的还是实例上的，只要可以遍历，都可以遍历。遍历对象返回的是 key，遍历数组返回的是下标。
- for of是ES6标准，遍历value。遍历对象会报错，遍历数组会返回数组中的元素。

### 4. JS中string的startwith和indexof两种方法的区别 


# 四、面向对象的程序设计

知识点：理解对象；创建对象的几种方法，什么是原型对象，继承, this 关键字

## 1. 有哪些创建对象的方法：

回答的时候从两个方面说起：单一对象的方法和批量创建类似对象的方法。批量创建相似对象的最好方法是什么？

### 1.1 创建单一对象：   

- 使用 new 操作符，后面跟 Object 构造函数 
 
```
var person = new Object();
person.name = 'Jhon';
person.age = 23;
```

- 用对象字面量的方式

### 1.2 批量创建对象：   

工厂模式；构造函数模式；原型模式；组合使用构造函数模式和原型模式；

#### 1.2.1 工厂模式

```
function createPerson(name, age) {
    var o = new Object（）；
    o.name = name;
    o.age = age;
}

var person1 = createPerson('Jhon', 29)
```

优点：可以解决创建多个相似对象的问题   
缺点：没有解决对象识别的问题。

#### 1.2.2 构造函数模式  

```
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function （） {
        alert(this.name)
    }
}

var person2 = new Person('Jhon', 29)
```  

特点：使用 new 操作符。new 的过程：1.创建一个新的对象；2. this 指向这个新的对象； 3. 执行构造函数里面的代码，给 this 赋值；4. 返回 this 对象，并把这个对象的地址赋值给实例变量名。代码表示就是：      

```
function Person(name){
    // 1. 隐式的创建一个新的空对象, 这个空对象不是真正意义上的空对象，它继承了构造函数原型上的属性。 var this = Object.create(Person.prototype); 
    // 2. 让 this 指向这个新的对象
    // var this = {}
    
    // 3. 执行构造函数中的代码，对 this 赋值
    this.name = name;
    
    // 4. 隐式的返回 this 对象
    // return this;    
}
```      
   
具体 new 的过程：
1. 创建一个空的对象： var obj = {}；
2. 完成原型链的构建：将新对象 obj 的隐式原型设置成构造函数的显示原型，也就是指向构造函数的原型对象；
3. 执行构造函数中的代码，将 this 指向新的对象
4. 返回对象，并将这个对象赋给等号左边的变量。
      
关于 new 的过程，创建一个空的最像，怎么实现的原型链的构建，也有这种的说法：关于new一个构造函数到底发生了什么，我在前面说会隐性的新建一个空对象赋予this，还是那句话，这里的空对象并不是严格意义上的空，它还是继承了Person的原型，准确来说应该是这样。    
 
`var this = Object.create(Person.prototype);`          

优点：解决了实例对象的识别问题
缺点：因为方法是所有实例都一样的，但是方法放在构造函数里面，就导致每一次新建实例，都会新建一个方法。我们想要方法只创建一次，所有的实例共享一个义工的方法  

#### 1.2.3 原型模式  

1. 如何确定一个属性是存在实例中，还是存在原型中？   
 答：in 操作符可以判断该属性是否能被实例访问到，不管这个属性是在实例中还是在原型中，也就是不能用`"name" in person  // true` 这种方法。   
 要想判断属性在哪里，先用 in 操作符判断实例是不是能访问到这个属性，再用 `person.hasOwnProperty(name)` 来判断属性是不是在实例中。     
  
2. for-in 循环时，可以循环到实例能访问的所有可枚举的属性，不管这个属性是实例的还是原型的。  

#### 1.2.4 组合使用构造函数模式和原型模式（最好的方式）

## 2. 继承：   

原型链继承；借用构造函数；组合继承（最常用的继承模式）；  
### 2.1 原型链继承  

### 2.2 借用构造函数继承  

### 2.3 组合继承（最常用的继承模式）   

JavaScript 主要通过原型链实现继承，原型链的构建是通过将父类的实例赋值给子类构造函数的原型实现的。这样子类就能访问到父类在原型上的属性和方法。原型链的缺点是，所有实例共享所有继承的属性和方法，修改其中一个实例的属性，也会导致其他实例属性的改变。为了解决这个问题，结合使用构造函数。在子类构造函数的内部调用父类的构造函数。这样，每个实例既可以有自己的属性和方法，也可以从继承共有属性和方法。
   
分为两步进行继承：
1. 在子类的构造函数中调用父类的构造函数，继承父类的实例属性。`Super.call(this, name)`
2. 让子类的原型对象 = 父类的实例
3. 修正子类原型对象的 constructor 属性，指回子类的构造函数。   

**引申问题**  

1. object 的原型指向哪里？为什么？   
所有原型链的顶端指向object.prototype。object.prototype.__proto__ 指向 null，null 便是一个空对象，也就是 object.prototype.__proto__不存在。那么说明所有对象的隐式原型最后都指向 object 的现实原型 prototype，换句话来说，所有原型链的顶端是 object。prototype。   

2. Object.create 需要再总结一下  
Object.create 规范化了原型式继承。  

```
function create(o) {
    function F() {};
    F.prototype = o;
    return new F();
}
```

### 用 var a = {} 和 var b = Object.create({}) 和 var c = Object.create(null) 有什么区别？  

`var a = {}`
{} 创建的对象除了添加的属性之外，a还继承了Object自身的方法，如hasOwnProperty、toString等，在新对象上可以直接使用。   

`var b = Object.creat(null)`
Object.creat(null) 创建的对象除了添加的属性之外，原型链上没有任何属性，也就是没有继承Object的任何东西，比如此时如果我们调用b.toString()会报错

### 2.4 calss 和 ES5 组合继承的区别     

ES5的继承实质上是先创建子类的实例对象，然后再将父类的方法添加到this上    

ES6的继承机制实质上是先创建父类的实例对象this(所以必须先调用父类的super()方法)，然后再用子类的构造函数修改this。具体为ES6通过class关键字定义类，里面有构造方法，类之间通过extends关键字实现继承。子类必须在constructor方法中调用super方法，否则新建实例报错。因为子类没有自己的this对象，而是继承了父类的this对象，然后对其调用。如果不调用super方法，子类得不到this对象。    

注意：super关键字指代父类的实例，即父类的this对象。在子类构造函数中，调用super后，才可使用this关键字，否则报错。



## 3. Function._proto_(getPrototypeOf)是什么？  
 
## 4. 怎么获得对象上的属性：比如说通过Object.key（）    

有三种方法可以列出对象的属性：
- for（let I in obj）该方法依次访问一个对象及其原型链中所有可枚举的类型 
- object.keys:返回一个数组，包括所有可枚举的属性名称 
- object.getOwnPropertyNames:返回一个数组包含不可枚举的属性    

# 五、函数表达式   

知识点：递归；闭包；模仿块级作用域；私有变量  

## 1. 闭包   

#### 1.1 什么是闭包   

当在函数内部定义了其他函数的时候，就创建了闭包。  

#### 1.2 闭包的应用场景：   

生成块级作用域循环绑定事件；结果缓存；封装变量，收敛权限
- 生成块级作用域循环绑定事件：    

```
// 创建 10 个 a 标签，点击的时候弹出对应的序号
// 这种写法是错误的。addEventListener 中的回调函数是异步操作，当 click 事件触发时，同步操作早已结束，即循环早已结束。
// 所以 alert(i) 中的 i 顺着作用域链去找，因为 JS 没有块级作用域，那么就要去全局作用域去找 i，此时已经循环完了，
// i 总是10
// 这时他在 for 循环里面不是一个闭包。但要用 闭包 来解决这个问题。
var i, a;
for(i = 0; i < 10; i++) {
    a = document.createElement("a");
    a.innerHTML = i + '<br>';
    a.addEventListener("click", function (e) {
        e.preventDefault();
        alert(i);
    })
    document.body.appendChild(a)
}

// 用闭包解决这个问题的正确写法  写一个函数，把 for 里面的内容包进去，这样，i = 0 时，i 作为函数的一个参数，
// 传进这个立即执行的函数中，
// i 就进入了这个立即执行函数的函数作用域中，保留了 i 的作用域，“click” 的时候，就能访问到这个 i
// 实际上创建了 10 个立即执行函数，点击不同的 a 标签，就会访问到不同的 i 的值

/*
* 在闭包的作用下，定义事件函数的时候，每次循环的 i 值都被封闭起来，这样在函数执行时，会查找定义时候的作用域链，
* 这个作用域链里面的值，在每次循环的时候都被保留，因此，点击不同的 a 标签会弹出不同的值。
* */
var i, a;
for(i = 0; i < 10; i++) {
    (function (i) {
            a = document.createElement("a");
            a.innerHTML = i + '<br>';

            a.addEventListener("click", function (event) {
                event.preventDefault();
                alert(i);
            })
        document.body.appendChild(a)
    })(i)
}
```   

- 结果缓存：
们开发中会碰到很多情况，设想我们有一个处理过程很耗时的函数对象，每次调用都会花费很长时间，那么我们就需要将计算出来的值存储起来，当调用这个函数的时候，首先在缓存中查找，如果找不到，则进行计算，然后更新缓存并返回值，如果找到了，直接返回查找到的值即可。闭包正是可以做到这一点，因为它不会释放外部的引用，从而函数内部的值可以得以保留。
- 封装变量，收敛权限    

```
// 用闭包来这样做的好处是，将 _list 封装起来，外面访问不到这个变量，别人就不会篡改，提高了安全性
function isFirstLoad() {
    var _list = [];
    return function(id) {
        if(_list.indexOf(id) >= 0) {
            return false;
        } else {
            _list.push(id);
            return true;
        }
    }
}
var f1 = isFirstLoad();
f1(10);  // true
f1(10);  // false
f1(20);  // true

```   

#### 1.3 如何实现一个私有变量，用getName方法可以访问，不能直接访问      

### 2.arguments    

 arguments是类数组对象，有length属性，不能调用数组方法

可用Array.from()转换成数组     

### 3. 箭头函数获取arguments     

可用…rest参数获取 


# 六、this 指向问题    

ES5 中 this 就是属性或方法“当前”所在的对象。
- 严格模式下，this 不能指向顶层的 window 对象，否则会报错   

### 1.改变函数内部this指针的指向函数（bind，apply，call的区别）

### 2.自己实现一个bind函数     

```
Function.prototype.myBind = function(context) {
    let self = this;
    let arg = [...arguments].slice(1);
    return function() {
        let newarg = [...arg, ...arguments];
        self.apply(context, newarg)
    }
}
```

# 七、能来讲讲JS的语言特性吗     

- JavaScript是一种解释型的脚本语言,C、C++等语言先编译后执行,而JavaScript是在程序的运行过程中逐行进行解释。
- JavaScript是一种基于对象的脚本语言,它不仅可以创建对象,也能使用现有的对象。
- JavaScript语言中采用的是弱类型的变量类型,对使用的数据类型未做出严格的要求,是基于Java基本语句和控制的脚本语言,其设计简单紧凑。





前端进阶：https://muyiy.cn/question/js/2.html



