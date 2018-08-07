const privateData = new WeakMap();

class Person {
  constructor(name, age) {
    // this.name = name;
    // this.age = age;
    privateData.set(this, {
      name,
      age
    })
  }
  getName() {
    return privateData.get(this).name;
  }
  getAge() {
    return privateData.get(this).age;
  }
}

const p1 = new Person('Joe', 18);
console.log(p1.name);  //undefined
console.log(p1.getName()); //Joe
p1.name = 'JoeWright';

//public 属性公开