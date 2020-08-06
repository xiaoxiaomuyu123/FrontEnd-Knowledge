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
        return type(before[key] - after[key]);
    }
}

const items = [
    { name: '蛇人', age: 42, id: 1 },
    { name: '大青', age: 3, id: 2 },
    { name: '小青', age: 1, id: 4 },
    { name: '二青', age: 2, id: 3 }
];

const type1 = (a, b) => {
    console.log("a", a, "b", b);
    return a - b;
}

// 没有成功！
const handleAge = createSortHandler("age", type1);
const itemsSortAge = items.sort(handleAge);
console.log(itemsSortAge);