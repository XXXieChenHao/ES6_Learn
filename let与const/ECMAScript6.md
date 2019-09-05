# Es6 学习      

> 2019-9-04





## 一、`let`和`const`命令



### `let`的基本用法

***

#### 使用`let` 声明变量

- 类似与`var`，但`let`只在命令所在的代码块有效

```javascript
{
    let a = 10;
    var b = 1;
}

console.log(a)		// 	ReferenceError: a is not defined
console.log(b)		//	1
//	a有效 b报错 说明 let 声明只在它所在代码块有效
```

- `for` 循环的计数器适合于let命令

```javascript
for (let i = 0; i < arr.length; i++) {}
console.log(i);		//	ReferenceError: i is not defined
// 使用let只在for循环体内有效
```

- `var`与`let`的比较参见 let与var作用域对比.js 代码文件

***

#### 不存在变量提升

- 预解析

  - 在当前作用域下,js运行之前，会把带有`var`和`function`关键字的事先声明，（可以理解成提升到执行顺序的最顶端）并在内存中安排好。然后再从上到下执行js语句。
  - `let` 则不会像`var`那样发生变量提升现象，所以变量必须声明后使用

- 效果对比参见    let与var变量提升对比.js

***

#### 暂时性死区

- 参见代码 	let的暂时性死区.js

  - 如果区块中存在`let`和`const`命令，这个区块对这些命令声明的变量从一开始就形成<b>封闭作用域</b>凡是在声明之前使用这些变量都会报错。

  ```javascript
  if (true) {
      //	暂时性死区开始
      temp = 'abc';
      console.log(temp);		// Cannot access 'temp' before initialization
      let temp；
      //	暂时性死区结束
      console.log(temp)		//	undifened   只声明没有赋值
      
      temp = 123;
      console.log(temp)		// 123
  }
  ```


- `let`和`const`设置<b>暂时性死区</b>和<b>没有变量提升</b>，为了减少运行错误，防止变量声明前就使用这个变量，从而导致意外

***

#### 不允许重复声明

- let不允许再相同作用域内，重复声明同一个变量
  - 代码详见		let相同作用域重复声明.js

***

### 块级作用域

### ES5的问题

> <u>ES5只有全局作用域和函数作用域</u>

- 内层变量可能覆盖外层变量

  ```javascript
  var temp = new Date();
  
  function fun () {
      console.log(temp);
      if(false) {
          var temp = "123";
      }
  }
  
  fun()   // undefined
  //	输出结果 undefined，声明语句变量提升导致内层temp覆盖了外层的temp
  ```

- 计数循环循环变量泄露

  ```javascript
  var str = "hello";
  for(var i = 0; i < ate.length; i++) {
      console.log(s[i]);
  }
  
  console.log(i)     //	5
  //	循环虽然已经结束了，但是变量并没有消失，而是泄露成了全局变量
  ```

### ES6块级作用域

> `let`为JavaScript增加了<b>块级作用域</b>

```javascript
function fun() {
    let n = 5;
    if(true) {
        let n = 10;
    }
    console.log(n)	//5
}
// 外层代码不受内层代码块的影响 
```

