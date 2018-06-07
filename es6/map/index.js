const dogs=new Map();
dogs.set("Snickers",3);
dogs.set("Sunny",2);
dogs.set("Hugo",10);
dogs.set("Hugo",11); //会替代前面的

dogs.forEach((val,key)=>console.log(val,key)); //第一个参数一定给是值
// 所有可迭代的都可以使用 for of
for(const [key,val] of dogs){  //[key,val]用到了解构
    console.log(key,val);
}
for(const item of dogs){
    console.log(item);
}

let a=1;
let b=2;
// function swap(a,b){
//     return [a,b]=[b,a];
// }
// console.log(swap(a,b).toString());
console.log(a,b);
[a,b]=[b,a];
console.log(a,b);