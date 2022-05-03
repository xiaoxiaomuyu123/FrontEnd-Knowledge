/*
enum: 枚举.从零开始自动赋值。
三原色，星期，方位
 */
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 10] = "Up";
    Direction[Direction["Down"] = 11] = "Down";
    Direction[Direction["Left"] = 12] = "Left";
    Direction[Direction["Right"] = 13] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up);
console.log(Direction[3]);
