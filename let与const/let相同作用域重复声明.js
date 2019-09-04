  (function () {
    let a = 10;
    var a = 1;
    //  Identifier 'a' has already been declared
    //  a已经被声明
  }());

  function fun(arg) {
    let arg;
    // Identifier 'arg' has already been declared
  }

  //  不能再函数内部重新声明参数
  function func(arg) {
    {
      let arg;
      //  该种情况不报错
    }
  }