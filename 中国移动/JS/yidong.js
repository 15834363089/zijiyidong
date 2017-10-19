//无缝轮播
{
    const banner=document.querySelector(".long");
    const ban=document.querySelector(".long-box");
    const prev=document.querySelector(".left-long");
    const next=document.querySelector(".next-long");
    let num=4;//当前banner往左边动了几格
    let dir="right";
    let st=setInterval(move,2000);
    function move() {
        if(dir=="right"){
            num++;
        }else {
            num--;
        }
//        console.log(num);
        banner.style.transition="all 1s";
        banner.style.marginLeft=-num*295+"px";
    }
    banner.addEventListener("transitionend",function () {
        if(num==12){
            banner.style.transition="none";
            banner.style.marginLeft="-1180px";
            num=4;
        };
        if(num==0){
            banner.style.transition="none";
            banner.style.marginLeft="-2360px";
            num=8;
        };
        kaiguan=true;
    });
    window.onblur=ban.onmouseover=function () {
        clearInterval(st);
    };
    window.onfocus=ban.onmouseout=function () {
        st=setInterval(move,2000);
    }
    let kaiguan=true;
    next.onclick=function () {
        dir="right";
        if(kaiguan){
            kaiguan=false;
            move();
        }
    }
    prev.onclick=function () {
        dir="left";
        if(kaiguan) {
            kaiguan=false;
//            num -= 2;
            move();
        }
    }
}
//点击
{
    let jiage=document.querySelectorAll(".chongduoshao div")
    jiage.forEach(function (ele,index) {
        ele.onclick=function(){
            // alert(1)
           for(let i=0;i<jiage.length;i++){
               jiage[i].classList.remove("active")
           }
            jiage[index].classList.add("active")
        }
    })
}
//上下轮播
{
    let aa=document.querySelectorAll(".public")
    function shangxiagundong(a) {
        let text=a.querySelector(".shangxia p")
        let jiantou=a.querySelector(".p-right")
        let zuo=a.querySelector(".zuo")
        let you=a.querySelector(".you")
        let num=0;
        let st=setInterval(fn,2000)
        function fn(dir="r") {
            text.style.marginTop=-36*num+"px";
            num++;
            if(dir==="r"){
                if(num==4){
                    num=0;
                }
            }else if(dir==="l"){
                num-=2;
                if(num==-1){
                    num=3;
                }
            }

        }
        jiantou.onmouseover=function () {
            clearInterval(st)
        }
        jiantou.onmouseout=function () {
            st=setInterval(fn,1000)
        }
        zuo.onclick=function () {
            fn("l")

        }
        you.onclick=function () {
            fn("r")
        }
    }
        shangxiagundong(aa)
    
}