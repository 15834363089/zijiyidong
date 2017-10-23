//无缝轮播
{
    const banner = document.querySelector(".long");
    const ban = document.querySelector(".long-box");
    const prev = document.querySelector(".left-long");
    const next = document.querySelector(".next-long");
    let num = 4;//当前banner往左边动了几格
    let dir = "right";
    let st = setInterval(move, 2000);

    function move() {
        if (dir == "right") {
            num++;
        } else {
            num--;
        }
//        console.log(num);
        banner.style.transition = "all 1s";
        banner.style.marginLeft = -num * 295 + "px";
    }

    banner.addEventListener("transitionend", function () {
        if (num == 12) {
            banner.style.transition = "none";
            banner.style.marginLeft = "-1180px";
            num = 4;
        }
        ;
        if (num == 0) {
            banner.style.transition = "none";
            banner.style.marginLeft = "-2360px";
            num = 8;
        }
        ;
        kaiguan = true;
    });
    window.onblur = ban.onmouseover = function () {
        clearInterval(st);
    };
    window.onfocus = ban.onmouseout = function () {
        st = setInterval(move, 2000);
    }
    let kaiguan = true;
    next.onclick = function () {
        dir = "right";
        if (kaiguan) {
            kaiguan = false;
            move();
        }
    }
    prev.onclick = function () {
        dir = "left";
        if (kaiguan) {
            kaiguan = false;
//            num -= 2;
            move();
        }
    }
}
//点击
{
    let jiage = document.querySelectorAll(".chongduoshao div")
    jiage.forEach(function (ele, index) {
        ele.onclick = function () {
            // alert(1)
            for (let i = 0; i < jiage.length; i++) {
                jiage[i].classList.remove("active")
            }
            jiage[index].classList.add("active")
        }
    })
}
//上下轮播
{
    const one=document.querySelectorAll(".news-one li")
    const two=document.querySelectorAll(".news-two li")
    const zuo=document.querySelector(".zuo")
    const you=document.querySelector(".you")
    let num=0
    you.onclick=function(){
        num++
        if(num==one.length){
            num=0
        }
        one.forEach(function(ele,index){
            ele.style.display="none"
            two[index].style.display="none"
        })
        one[num].style.display="block"
        two[num].style.display="block"
    }
    zuo.onclick=function(){
        num--
        if(num==-1){
            num=one.length-1
        }
        one.forEach(function(ele,index){
            ele.style.display="none"
            two[index].style.display="none"
        })
        one[num].style.display="block"
        two[num].style.display="block"
    }
    let st = setInterval(fn, 2000)
    function fn() {
            num++
            if(num==one.length){
                num=0
            }
            one.forEach(function(ele,index){
                ele.style.display="none"
                two[index].style.display="none"
            })
            one[num].style.display="block"
            two[num].style.display="block"


    }
    let da=document.querySelector(".public")
    da.onmouseover = function () {
        clearInterval(st);
    };
   da.onmouseleave = function () {
        st = setInterval(fn, 2000)
    };

}
    {
        let dians = document.querySelectorAll(".dian li")
        console.log(dians)
        let tus = document.querySelectorAll(".imges li")
        console.log(tus)
        let zuo = document.querySelector(".zuozuo")
        let you = document.querySelector(".youyou")
        let now = 0;
        let ceng = 10;
        let kaiguan = true


        let st = setInterval(fn, 2000)

        function fn(dir = "r") {
            if (dir === "r") {
                tus[now].classList.add("leftzuo")
                dians[now].classList.remove("active")
                now++;
                if (now === tus.length) {
                    now = 0;
                }
                tus[now].classList.add("rightzuo")
                dians[now].classList.add("active")
            } else if (dir === "l") {
                tus[now].classList.add("leftyou")
                dians[now].classList.remove("active")
                now--;
                if (now === -1) {
                    now = tus.length - 1
                }
                tus[now].classList.add("rightyou")
                dians[now].classList.add("active")
            }
            tus[now].style.zIndex = ceng++;
        }

        tus.forEach(function (ele) {
            window.addEventListener("animationend", function () {
                ele.className = "";
                kaiguan = true;
            })
        })
        let dakuang = document.querySelector(".box-s")
        dakuang.onmouseover = function () {
            clearInterval(st)
        }
        dakuang.onmouseout = function () {
            st = setInterval(fn, 2000)
        }
        dians.forEach(function (ele, index) {
            console.log(kaiguan)
            ele.onclick = function () {
                if (kaiguan) {
                    if (now > index) {
                        tus[now].classList.add("leftyou")
                        tus[index].classList.add("rightyou")
                    } else if (now < index) {
                        tus[now].classList.add("leftzuo")
                        tus[index].classList.add("rightzuo")
                    }
                    dians[now].classList.remove('active');
                    dians[index].classList.add('active');
                    tus[index].style.zIndex = ceng++;
                    now = index
                }
                kaiguan = false;
            }
        })
        zuo.onclick = function () {
            if (kaiguan) {
                fn("l")
                kaiguan = false
            }
        }
        you.onclick = function () {
            if (kaiguan) {
                fn("r");
                kaiguan = false;
            }
        }

    }