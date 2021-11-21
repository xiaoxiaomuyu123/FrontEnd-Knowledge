interface IPerson {
    name: string,
    age: number,
    phone?: number,
    [propsName: string]: any
}

let onePerson: IPerson = {
    name: 'dahu',
    age: 18
}

let secondPerson: IPerson = {
    name: 'dahuniu',
    age: 18,
    phone: 1781092349
}

let thirdPerson: IPerson = {
    name: 'xiaohu',
    age: 1,
    address: 'peking'
}

console.log("onePerson", onePerson)
console.log(secondPerson)
console.log(thirdPerson)