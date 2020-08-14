// function sayHello(person: string) {
//     return 'Hello, ' + person;
// }
//
// let user = 'Tom';
// console.log(sayHello(user));
//
// let decLiteral: number = 6;
// let hexLiteral: number = 0xf00d;
//
// let binaryLiteral: number = 0b1010;
//
// let notalLiteral: number = 0o774;
// let myName: string = 'Tom';
// let myAgeL: number = 25;
//
// let s: string = `hello, my name is ${myName}`;
// let u: void;
// let num: number = u;
// let id: number = undefined;
// let str: string = null;
// let isOpen: boolean = null;
// let a: number[] = [1, '1', 2];
// let tom:[string, number] = ['a', 2];
// tom.push('ds');
// let sum:(x:number, y:number) => number = function(x:number, y:number):number {
//     return x+ y;
// };
// function b (f:string = 'tom', l:string):string {
//     return f + ' ' + l;
// }
// let c = b(null, 'cat');
// function reverse(x: number | string): number | string {
//     return Number(x.toString().split(" "));
// }
// let m = 'seer';
// m = 7;
// let any;
// any = 888;
// any = 'dddd';
//
// let m = 'seven';
// m = 7;
// let x = [0, 9, null];
// x.push(true);
// x.push("string");
// function swim(value: number | string) {
//     console.log((value as string).length);
// }
// interface IPeople{
//     readonly name: string;
//     age: number;
//     [otherProp: string]: any;
// }
//
// let james:IPeople = {
//     o:true
// }
// class Greeter {
//     greeter: string;
//     constructor(message: string) {
//         this.greeting = message;
//         console.log(this.greeting);
//     }
//     greet() {
//
//     }
// }
var Dy;
(function (Dy) {
    Dy[Dy["Up"] = 0] = "Up";
    Dy[Dy["Down"] = 1] = "Down";
    Dy[Dy["Left"] = 2] = "Left";
})(Dy || (Dy = {}));
console.log(Dy[0]);
