function Person(name){
    this.name=name;
}
Person.prototype.getName=function(){
    return this.name;
}

//IT工程师
// extend Person
function Coder(name,languages){
    Person.call(this,name);//父类有的都有了(把父类的name继承下来)
    //父类没有的可以加
    this.languages=languages;
}
// new Person 新的对象就是Coder的原型对象
Coder.prototype=new Person();
Coder.prototype.constructor=Coder;
Coder.prototype.getLanguages=function(){
    return this.languages;
}

var p1=new Person("Joe");
console.log(p1.name);

var p2=new Coder("Liliy",["javascript","pathon","c/c++"]);
console.log(p2.name+"  "+p2.languages.join(","));
console.log(p2.getName());
console.log(p2.getLanguages());