// var first

consol.log(first); //  输出undefined
consol.log(second); //  报错ReferenceError

var first = 2;
//first = 2；
let second = 2;

//  使用var，会发生变量提升，脚本开始运行，变量first就已经被声明，但是没有值，所以输出 undefined
//  let不会变量提示，所以输出的时候变量second是不存在的，所以报错