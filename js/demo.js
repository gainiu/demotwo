window.onload=function(){
    var btn=document.getElementById("buttons");
    btn.style.left=640-84+"px";
    $(function(){
        var btnPage=$(" .container #buttons a ");
        var imgPage=$(" .container .lists img ");
        var imgSize=imgPage.length;
        var index=0;
        var t;

        btnPage.click(function(){
            index=$(this).index();
            change(index);
        });
        function change(index){
            btnPage.removeClass("on");
            btnPage.eq(index).addClass("on");
            imgPage.stop();
            imgPage.eq(index).siblings().animate({opacity:0},1000);
            imgPage.eq(index).animate({opacity:1},1000);
        }

        function autoShow(){
            index=index+1;
            if(index<=imgSize-1){
                change(index);
            }else{
                index=0;
                change(index);
            }
        }
         int=setInterval(autoShow,3000);
        function clearInt(){
            $(' #buttons a ').mouseover(function(){
                clearInterval(int);
            })
        }
        function setInt(){
            $(' #buttons a ').mouseout(function(){
                int=setInterval(autoShow,3000);
            })
        }
        clearInt();
        setInt();
    })
};/**
 * Created by Administrator on 2016/9/4 0004.
 */
