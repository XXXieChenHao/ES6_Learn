    var a = [];
    for (let i = 0; i < 10; i++) {
      a[i] = function () {
        console.log(i);
      };
    }
    a[6]();   // 输出 6
    // let 只在其所在代码块有效  代码执行完毕后 i就变成了一个新的值

    var b = [];
    for (var i = 0; i < 10; i++) {
      b[i] = function () {
        console.log(i);
      };
    }
    b[6]();     // 输出 10
    //  var 在全局有效，每一次循环 i 的值都会覆盖旧值，输出最后一次循环的值