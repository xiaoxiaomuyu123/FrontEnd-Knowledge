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
        // console.log(`参与比较的Key：${ key }`);
        return before[key] - after[key];
    }
}
const items = [
    { name: '蛇人', age: 42 },
    { name: '大青', age: 3 },
    { name: '小青', age: 1 },
    { name: '二青', age: 2 }
];

const handlerAge = createSortHandler('age');
let itemsSortByAge = items.sort(handlerAge);
console.log(itemsSortByAge);

const handlerName = createSortHandler('name');
let itemsSortByName = items.sort(handlerName);
console.log(itemsSortByName);


