
/*-----> 狭义的对象 <-----*/
// 使用字面量定义
let o = {
  debug: false,
  language: 'JavaScript'
};

// 以数值为键名的情况
let obj = {
    1: true,
    1.2: true,
    1e3: true
}
obj;
obj['1.2'];
obj['1000'];

// 对象按引用使用的特征
let o1 = o;

// 赋值
o1.debug = true;
o1['language'] = 'TypeScript';

// 取值
o['debug'];
o.language;

// 继承的属性和方法
'toString' in o;
// 自有的属性和方法
'language' in o;

for(let key in o){
  console.log(key);
}

Object.keys(o).forEach(function(key){
  console.log(key);
});


/*-----> 数组 <-----*/
let any = [ 'hello' ];
any[1] = function(msg){
  console.log(msg);
};

let some = any;
some[0] = 'yes';

some[1](any[0]);

Object.keys(any);


/*-----> 构造函数 <-----*/
function Animal(name, voice){
  this.name = name || '动物';
  this.voice = voice || '叫声';
}
Animal.prototype = {
  cry: function(voice){
    let v = voice || this.voice || '叫的声音';
    console.log(`${ this.name } => ${ v }`);
  }
};

let a1 = new Animal();
a1.cry();

let a2 = new Animal('狗', '汪汪汪');
a2.cry();
a2.cry('呜~~汪，呜~~，汪汪汪');
