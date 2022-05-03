/*
enum: 枚举.从零开始自动赋值。
三原色，星期，方位
 */

enum Direction {
    Up = 'Up',
    Down = 'DOWM',
    Left = 'LEFT',
    Right = 'RIGHT'
}

console.log(Direction.Up)
console.log(Direction[3])

const value = 'Up'
if(value === Direction.Up) {
    console.log('go up!')
}