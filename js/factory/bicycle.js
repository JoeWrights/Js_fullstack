console.log("工厂模式");
// 函数属于 对象
//函数是一等对象
// 类，简单的只有一个构造函数
// 感觉类跟函数没有区别
// js本身并没有类，只是用的人多了，给了这个实现
//js只有对象 Object原型对象的鼻祖
//就像女娲造人，根据已有的模型捏人，这个模型就相当于原型
//原型
//js 不需要传统继承，只要有个参照物就可实现原型式继承
var Bicycle = function (brand) {
    // 构造函数 constructor
    // new时执行,
    // this.brand = brand || "凤凰";
    

}
// 原型凤凰...
// 二维码
// 手机支付
// js 继承关系,不是
// 共享单车完全颠覆了自行车

Bicycle.prototype = {
    sellBicyle: function (model) {
        var bicycle = null;
        switch (model) {
            case "Giant":
                bicycle = new Giant();
                break;
            case "The Speed Ster":
                bicycle = new Speedster();
                break;
            case "UTwo":
                bicycle = new UTwo();
                break;
        }
        bicycle.assemble();
        bicycle.wash();
        bicycle.provideRepair();
        // 把车卖出去

        return bicycle;

        // console.log("卖车了...");
        // return null;
        // 面向对象们
        // 卖车：商店，很多车，维修，仓库 
    }
}
//雷速达
function Speedster() {

}
Speedster.prototype = {
    assemble:function(){
        console.log("组装完成");
    },
    wash:function(){
        console.log("清洗完成");
    },
    provideRepair:function(){
        console.log("保修三年");
    }
}

function Giant() {

}
Giant.prototype = {
    assemble:function(){
        console.log("组装完成");
    },
    wash:function(){
        console.log("清洗完成");
    },
    provideRepair:function(){
        console.log("保修两年");
    }
}

function UTwo() {
    
}
UTwo.prototype = {
    assemble:function(){
        console.log("组装完成");
    },
    wash:function(){
        console.log("清洗完成");
    },
    provideRepair:function(){
        console.log("保修一年");
    }
}
// js 基本类型
// 字符串，数字，布尔值，undefined,null
// 复杂类型 object <-prototype array function json
var bicycle = new Bicycle();
console.log(bicycle.sellBicyle("The Speed Ster"));