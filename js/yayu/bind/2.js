//bind函数的两个特点：
//1.返回一个函数，高阶函数 return function(){ bar() }
//2.可以传参

var foo = {
  value: 1
};
function bar() {
  console.log(this.value);
}
function fuc() {
  console.log(this.value);
}
// bar();  //undefined（此时this指向window）
// bar.call(foo);
// bar.apply(foo);
// bar.bind(foo)();   //bind返回的是一个函数，需要调用
// const bar2 = bar.bind(foo);
// bar2();

// 手动实现bind？
Function.prototype.bind2 = function(context) {
  // console.log(this);  //bar
  var that = this;
  return function(){
    // ? bar是谁，然后调用apply方法就搞定了
    //?.apply(context);
    console.log(context);
    // console.log(that);
    that.apply(context);
  }
}

const bar2 = bar.bind2(foo);
bar2();


