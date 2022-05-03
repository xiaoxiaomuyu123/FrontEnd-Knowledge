//
class Animal {
    protected name: string;  // 子类可以访问，实例 不能访问
    constructor(name: string) {
        this.name = name
    }
    run(){
        return `${this.name} is running !`
    }
}

const snake = new Animal('lili')
// console.log(snake.run())

class Dog extends Animal {
    bark() {
        return `${this.name} is barking`
    }
}

const kuku = new Dog('kuku')
// console.log(kuku.bark())
// console.log(kuku.run())

class Cat extends Animal {
    constructor(name: string) {
        super(name);
        console.log(this.name)
    }
    run() {
        return `meao, ${super.run()}`
    }
}

const hetao = new Cat('hetao')
console.log(hetao.run())


/*
接口：抽象类的属性和方法
 */

interface Radio {
    switchRadio(): void
}

interface Battery {
    checkBatteryStatus(): void
}

interface RadioWithBattery extends Radio {
    checkBatteryStatus(): void
}


class Car implements Radio{
    switchRadio() {

    }
}

class CellPhone implements RadioWithBattery{
    switchRadio() {

    }
    checkBatteryStatus() {
    }
}



