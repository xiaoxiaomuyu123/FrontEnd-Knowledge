/*-----> 选择结构 <-----*/
let flag = true;
let age = 24;

if(flag){
  if(age > 30){
    console.log('人到中年');
  }else if(age > 15){
    console.log('青年才俊');
  }else{
    console.log('祖国花朵');
  }
}

// 性别枚举定义
const Sex = {
  Male: 1, // 男性
  Female: 2 // 女性
}

// 使用语义化的枚举，
// 不要使用不知所云的魔法数字和魔法字符串
let sex = Sex.Male;
switch (sex) {
  case Sex.Male:
    // 此处设计击穿
  case Sex.Female:
    console.log('不是小哥哥，就是小姐姐');
    break;
  default:
    console.log('泰国来的？');
}


/*-----> 循环结构 <-----*/
let i = 0;
while (i < 100) {
  console.log('i 当前为：' + i);
  i++;
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

for(let key in window){
  console.log(key);
}


/*-----> 异常处理结构 <-----*/
try{
  let json = JSON.parse('javascript');
  console.log(json);
}catch(ex){
  console.log(ex.message);
}finally{
  console.log('同志，这是我的党费！');
}
