/**
 * author JoeWright
 * date 2018-5-4
 */
// 服务于任何图片元素，img幕后，再将origin_src设置过去
// function LazyLoadImage(){

// }
// LazyLoadImage.prototype={

// }
var LazyLoadImage=(function(){
    // 变量的冒泡查找
    // const a=1;
    return {            //返回的json对象
        setSrc:function(ele){
            // console.log(a);
            const url=ele.getAttribute("origin_src")?ele.getAttribute("origin_src"):"";
            if(!url) return;    //代码更健壮
            const oImg=document.createElement("img");
            document.body.appendChild(oImg);
            //opacity:0 这个会撑长页面
            oImg.style.display="none"; //不会影响页面，none会离开文档流
            //当设置了图片的src后，就会启动http请求，图片下载完成后，onload注册的事件
            //回调
            oImg.onload=function(){
                // 不会立即执行，后执行
                // console.log("图片下载完成了");
                ele.src=url;
                document.body.removeChild(this);
            };
            //先执行
            console.log("设置src");
            oImg.src=url;
        }
    }
})();
