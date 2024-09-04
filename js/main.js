$(function(){
    $(window).scroll(function(){
        let winTop = $(this).scrollTop();
        if(winTop >=100){
            $("header").addClass("sticky");
            $(".search-area").addClass("sticky");
        }else{
            $("header").removeClass("sticky");
            $(".search-area").removeClass("sticky");
        }
    });
    $("a").click(function(e){
        e.preventDefault();
    });
    let sw=0;
    //메뉴 아이콘을 클릭하면 nav-area 영역이 열림
    $(".menu-icon").click(function(){
        $(".nav-area").fadeIn();
        $(".sitebox").animate({scrollTop:0});
        $("html, body").css("overflow", "hidden");
        if(sw==1)
            sw=0;
            $(".member ul li:last").find(".search-icon").show();
            $(".member ul li:last").find(".close-icon").hide();
            $(".search-area").fadeOut(200);
    });
    //.sitemap영역의 close버튼을 클릭하면 .nav-area 영역 사라짐
    $(".close-btn").click(function(){
        $(".sitemap").fadeOut();
        $("html, body").css("overflow", "auto");
    })
    $(".nav-area-out").click(function(){
        $(".nav-area").fadeOut();
        $("html, body").css("overflow", "auto");
    })
    //nav-area영역 안의 메뉴 옆의 -버튼을 클릭하면 서브메뉴 사라지고, +버튼을 클릭하면 서브 메뉴 나타남
    $(".menu2>ul>li>a i").click(function(){
        $(this).find(".bar2").toggle();
        $(this).parents("li").find(".sub").toggle();            
    });

    //header의 검색 버튼을 클릭하면 .search-area 영역 나타남
    
    $(".member ul li:last").click(function(){
        if(sw == 0){
            sw=1;
            $(this).find(".search-icon").hide();
            $(this).find(".close-icon").show();
            $(".search-area").fadeIn(200)
            $("html, body").css("overflow", "hidden");
        }else{
            sw=0;
            $(this).find(".search-icon").show();
            $(this).find(".close-icon").hide();
            $(".search-area").fadeOut(200);
            $("html, body").css("overflow", "auto");
        }
    });
    $(".search-area-out").click(function(){
        sw=0;
        $(".member ul li:last").find(".search-icon").show();
        $(".member ul li:last").find(".close-icon").hide();
        $(".search-area").fadeOut(200);
        $("html, body").css("overflow", "auto");

   })
    $(".input-area input").on("focusin", function(){
        $(".input-area").css("border","1px solid #333");
    });
    $(".input-area input").on("blur", function(){
        $(".input-area").css("border","1px solid #ddd");
    });
    //main swiper slide
    let swiper1 = new Swiper(".mainSwiper",{
        effect:"fade",
        fadeEffect:{
            crossFade:true
        },
        loop:true,
        autoplay:{
            delay:4000
        },
        speed:700,
        watchSlidesProgress:true,
        pagination:{
            el:".swiper-pagination",
            clickable:true,
            type:"bullets",
            renderBullet:function(index, className){
                return '<span class="'+className + '"><i></i><b></b></span>'
            }
        },
        navigation:{
            nextEl:".swiper-button-next",
            prevEl:".swiper-button-prev"
        }
    })
    //----------------------- scrollTriger(section s2) start ----------
    ScrollTrigger.create({
        trigger:".s2 .left-con",
        strat:"top 60px",
        // end:"bottom top",
        end:"=+705",
        pin:".s2 .left-con"
    });

    var gallerSlide = new Swiper(".gallerSlide", {
        slidesPerView: "auto",
        spaceBetween: 30,
        speed:1000,
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: false,
          loop:true
        },
      });
    //   s5 scrollTriger
    ScrollTrigger.create({
        trigger:".s5 .left-con",
        strat:"top 60px",
        end:"+=1662",
        pin:".s5 .left-con"
    });

    let sw2=0;
    $(".family > a").click(function(e){
        e.preventDefault();
        if(sw2==0){
            sw2=1;
            $(this).find("span").css("transform","rotateX(0deg)");
            // $(".family .sub a").show(300);;
            $(this).parent().find(".sub").slideDown(300);
        }else{
            sw2=0;
            $(this).find("span").css("transform","rotateX(180deg)");
            // $(".family .sub a").hide(300);
            $(this).parent().find(".sub").slideUp(300);
        }
    })
    // 최승현 버튼
    $(".top").click(function(){
        $("html, body").animate({scrollTop:0},1000);
    });
   
});