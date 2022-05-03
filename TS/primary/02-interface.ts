// interface 接口：定义 object 类型。
// 对对象的形状进行描述，对类进行抽象，鸭子类型
interface IPerson {
    readonly id: number;  // 只读属性
    name: string;
    age: number;
    school?: string;  // 问号表示可选属性

}

let viking: IPerson = {
    id: 0,
    name: 'viking',
    age: 20
}


