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
bar();  //undefined（此时this指向window）
bar.call(foo);
bar.apply(foo);
bar.bind(foo)();   //bind返回的是一个函数，需要调用
const bar2 = bar.bind(foo);
bar2();
