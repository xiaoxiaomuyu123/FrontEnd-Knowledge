// 纯数值的相加
1 + 1;

// 纯字符串的连接
'a' + 'b';

// 存在类型转换的加法运算符
true + true;
1 + true;
1 + 'a';
false + 'a';
'3' + 4 + 5;
3 + 4 + '5';

// 对象参与的加法运算符
let o = {};
o + 2;
o + 'a';
o.valueOf = function () { return 1 };
o + 2;
o + 'a';
o.toString = function () { return 'hello' };
o + 2;
o + 'a';

// 最佳实践
let s = '1';
let n = 1;

// 数值相加
let n1 = +s;
n + n1;

// 字符串连接
let s1 = n + '';
s + s1;
