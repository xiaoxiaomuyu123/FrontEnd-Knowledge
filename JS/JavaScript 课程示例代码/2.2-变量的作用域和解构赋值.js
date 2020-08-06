
/*-----> 作用域 <-----*/
// 全局作用域D
// 函数bar定义在全局作用域对象window中
function bar(){ // 函数作用域C
    var g = 'window'; // Node.js中全局作用域对象是global
    console.log(`C眼看D处的函数bar：${ bar.name }`);
    // Uncaught ReferenceError: k is not defined
    // console.log(`C眼看B处的变量k：${ k }`);
    for(let k in window){ // 块级作用域B
        console.log(`全局作用域对象${ g }的属性：${ k }`);
        if('bar' === k){ // 块级作用域A
            console.log(`A眼看D处的函数bar：${ bar.name }`);
            console.log(`A眼看C处的变量g：${ g }`);
            console.log('====================================> 我函数bar定义在全局作用域对象window中，我是一等公民哦！');
        }
    }
}
console.log(`D眼看C处的变量g：${ g }`);
console.log(`D眼看B处的变量k：${ k }`);
bar();

/*-----> 函数作用域 <-----*/
// 全局作用域D
var v = 'v1';
let l = 'l1';
function c(){ // 函数作用域C
    v = 'v2';
    l = 'l2';
    console.log(`C处重新赋值：${ v } / ${ l }`);
    console.log(`C眼看C处的函数b：${ b.name }`);
    // Uncaught ReferenceError: a is not defined
    // console.log(`C眼看B处的函数a：${ a.name }`);
    function b() { // 函数作用域B
        var v = 'v3';
        let l = 'l3';
        console.log(`B处重新定义：${ v } / ${ l }`);
        function a(){ // 函数作用域A
            console.log(`A处看外界：${ v } / ${ l }`);
        }
        a();
    }
    b();
    console.log(`C处观察点：${ v } / ${ l }`);
}
console.log(`D处初始值：${ v } / ${ l }`);
c();
console.log(`D处观察点：${ v } / ${ l }`);

/*-----> 块级作用域 <-----*/
if(true){
    let l = 'l1';
    let l = 'l2';
}
if(true){
    const c = 'c1';
    const c = 'c2';
}
if(true){
    const c = 'c1';
    c = 'c2';
}
if(true){
    const o = { language: 'JavaScript' };
    o.language = 'ECMASript';
    o.language;
}
if(true){
    const c1 = 'c1';
    let l1 = 'l1';
    let l2 = 'l2';
    console.log(`${ c1 } / ${ l1 } / ${ l2 }`);
    if(true){
        const c1 = 'c11';
        let l1 = 'l11';
        l2 = 'l22';
        console.log(`${ c1 } / ${ l1 } / ${ l2 }`);
    }
    console.log(`${ c1 } / ${ l1 } / ${ l2 }`);
}

if(true){
    if(true){
        function f(){
            console.log('this is a function.');
        }
        f();
    }
    f();
}

/*-----> 数组的解构赋值 <-----*/
// 普通赋值
let v01 = 1;
let v02 = 2;
let v03 = 3;

console.log(v01, v02, v03);

// 解构赋值
let [ v11, v12, v13 ] = [ 4, 5, 6 ];

console.log(v11, v12, v13);


/*-----> 对象的解构赋值 <-----*/
let { a, b, c } = { b: 'bbb', a: 'aaa', c: 'ccc' };
console.log(a, b, c);

let { a: v21 } = { a: 'aaaa' };
console.log(v21);
