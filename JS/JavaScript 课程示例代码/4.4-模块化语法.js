
/*-----> export 命令 <-----*/
// circle-1.js
// 写法一
export const PI = 3.14;
export function area(r) {
  return PI * r ** 2;
}

// circle-2.js
// 写法二
// export命令写在脚本尾部是推荐用法
const PI = 3.14;
function area(r) {
  return PI * r ** 2;
}

export { PI, area };


/*-----> import 命令 <-----*/
import { PI, area } from './circle.js';
