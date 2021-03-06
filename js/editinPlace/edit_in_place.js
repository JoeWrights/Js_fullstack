/*
* author JoeWright
* date 2018-4-28
* 功能:就地编辑
* 参数:@id @parent挂载的元素
* @value初始值
*/
// 不再是面向业务的流程编程
// 一上来就封装一个类
// 美好的愿望，可以以后多复用
function EditInPlace(id,parent,value){
    this.id=id;
    this.parentElement=parent; //父元素 root
    this.value=value||"default value";
    //显示name元素
    this.createElement();  
    //挂在到dom上去了,就可以为他添加事件了
    this.attachEvent();

}
EditInPlace.prototype={
    //构建html
    createElement:function(){
        this.containerElement=document.createElement("div");
        this.parentElement.appendChild(this.containerElement);
        //显示静态文字
        this.staticElement=document.createElement("span");                //js动态性
        this.staticElement.innerHTML=this.value;
        this.containerElement.appendChild(this.staticElement);

        //按钮
        // 对象的内部 this指向对象 在的原型链上 方法和属性
        this.filedElement=document.createElement("input");
        this.filedElement.type="text";
        this.filedElement.value=this.value;
        this.containerElement.appendChild(this.filedElement);
        //文字和输入框只能显示一个
        this.convertToText();
    },
    convertToText:function(){
        this.filedElement.style.display="none";
        this.staticElement.style.display="inline";
    },
    convetToEdit:function(){
        this.filedElement.style.display="inline";
        this.staticElement.style.display="none";
        this.filedElement.focus();
    },
    attachEvent:function(){
        // 作用域attachEvent函数
        // js this总会指向什么
        // 对象的方法被执行时，this指向对象
        console.log(this);
        var that=this;
        this.staticElement.addEventListener("click",function(){
            // 这个函数被执行时，并不是对象的方法，而是匿名函数，作为事件处理函数来执行，this会指向事件发生元素
            // this的指向跟函数的调用方式有关
            // this的指向问题 作用域不一样 this的指向就不一样
            // 作用域 事件的回调函数

            console.log(this);
            // alert(that.value);
            that.convetToEdit();
        },false);
        this.filedElement.addEventListener('keydown',function(evt){
            console.log(evt);
            if(evt.keyCode==13){
                that.staticElement.innerHTML=this.value;
                that.convertToText();
            }
        });
    }
}