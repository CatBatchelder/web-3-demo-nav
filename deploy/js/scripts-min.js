$('[data-fancybox="gallery"]').fancybox({}),$(document).ready((function(){console.log($(".slides").hasClass("my-slider")),$(".slides").hasClass("my-slider")&&tns({container:".my-slider",gutter:20,edgePadding:50,controlsPosition:"bottom",navPosition:"bottom"}),$(".slides").hasClass("my-slider-2")?tns({container:".my-slider-2",gutter:20,edgePadding:50,controlsPosition:"bottom",navPosition:"bottom"}):console.log("No TinySlider found!")}));var burgerAnimationTimeLine=gsap.timeline({paused:!0});burgerAnimationTimeLine.addLabel("burgerToDownArrow").to("#burger",{duration:burgerAnimateSpeed,rotation:-90},"animateBurger").to("#bottom-line",{duration:burgerAnimateSpeed,y:-10},"animateBurger").to("#top-line",{duration:burgerAnimateSpeed,y:10},"animateBurger").to("#down-left-arrow",{duration:burgerAnimateSpeed,rotation:55},"createArrow").to("#down-right-arrow",{duration:burgerAnimateSpeed,rotation:-55},"createArrow").addLabel("burgerToDownArrowReverse").addPause().addLabel("downArrowToX").to("#top-line",{duration:burgerAnimateSpeed,rotation:45},"burgerToX").to("#bottom-line",{duration:burgerAnimateSpeed,rotation:-45},"burgerToX").to("#middle-line",{duration:burgerAnimateSpeed,alpha:0},"burgerToX").to("#down-left-arrow",{duration:burgerAnimateSpeed,rotation:0,alpha:0},"burgerToX").to("#down-right-arrow",{duration:burgerAnimateSpeed,rotation:0,alpha:0},"burgerToX").to("#up-left-arrow",{duration:burgerAnimateSpeed,alpha:0},"burgerToX").to("#up-right-arrow",{duration:burgerAnimateSpeed,alpha:0},"burgerToX").addLabel("downArrowToXReverse").addPause().addLabel("XtoUpArrow").to("#bottom-line",{duration:burgerAnimateSpeed,rotation:0},"upArrow").to("#top-line",{duration:burgerAnimateSpeed,rotation:0},"upArrow").to("#up-left-arrow",{duration:burgerAnimateSpeed,rotation:55,alpha:1},"createUpArrow").to("#up-right-arrow",{duration:burgerAnimateSpeed,rotation:-55,alpha:1},"createUpArrow").addLabel("XtoUpArrowReverse").addPause().addLabel("upArrowToBurger").to("#up-left-arrow",{duration:burgerAnimateSpeed,rotation:0,alpha:0},"backToBurger").to("#up-right-arrow",{duration:burgerAnimateSpeed,rotation:0,alpha:0},"backToBurger").to("#middle-line",{duration:burgerAnimateSpeed,alpha:1},"backToBurger").to("#top-line",{duration:burgerAnimateSpeed,y:0,rotation:0},"backToBurger").to("#bottom-line",{duration:burgerAnimateSpeed,y:0,rotation:0},"backToBurger").to("#burger",{duration:burgerAnimateSpeed,rotation:0},"backToBurger").addPause(),gsap.set("#up-left-arrow",{transformOrigin:"right center",alpha:0}),gsap.set("#up-right-arrow",{transformOrigin:"right center",alpha:0}),$("#burger").on("mouseenter",(function(){!1===canYouSeeTheMenu?burgerAnimationTimeLine.play("burgerToDownArrow"):burgerAnimationTimeLine.play("XtoUpArrow")})),$("#burger").on("mouseleave",(function(){!1===canYouSeeTheMenu?burgerAnimationTimeLine.reverse("burgerToDownArrowReverse"):burgerAnimationTimeLine.reverse("XtoUpArrowReverse")}));var canYouSeeTheMenu=!1,navHeight=$("#main-nav").outerHeight();gsap.set("#main-nav",{y:-navHeight});var mainNavTimeline=gsap.timeline({paused:!0});mainNavTimeline.to("#main-nav",{duration:.25,y:0});var burgerAnimateSpeed=.25;function hideShowMainNav(){console.log("show me the menu!"),console.log(canYouSeeTheMenu+" can you see the menu value"),!1===canYouSeeTheMenu?(burgerAnimationTimeLine.play("downArrowToX"),mainNavTimeline.play(),canYouSeeTheMenu=!0):(console.log("burger click up"),burgerAnimationTimeLine.play("upArrowToBurger"),mainNavTimeline.reverse(),canYouSeeTheMenu=!1)}gsap.set(".lines",{transformOrigin:"center"});var menuBackground=document.querySelector("#main-nav");function reportWindowSize(){console.log("test"),!1===canYouSeeTheMenu&&(console.log("can't see the main nav"),console.log($("#main-nav").outerHeight()),navHeight=$("#main-nav").outerHeight(),gsap.set("#main-nav",{y:-navHeight}))}window.onclick=function(e){e.target==menuBackground&&hideShowMainNav()},window.addEventListener("resize",reportWindowSize),$("#burger").on("click",hideShowMainNav),gsap.registerPlugin(ScrollToPlugin);var scrollItems=["#index-planning","#index-weather"];function scrollIndex(){gsap.to(window,{duration:2,scrollTo:{y:scrollItems[$("#main-nav ul li button").index(this)],offsetY:60}})}console.log(scrollItems[2]),$("#main-nav li button").on("click",hideShowMainNav),$("#main-nav li button").on("click",scrollIndex),gsap.registerPlugin(ScrollTrigger);var cardAnimationTimeLine=gsap.timeline({});cardAnimationTimeLine.addLabel("card to slide in").from("#card",{duration:1,x:150}).addLabel("logo to fade in").from("#card-logo",{duration:1,alpha:0},"-=.5").addLabel("text moving").from(".card-text",{duration:1,alpha:0,y:20}),ScrollTrigger.create({trigger:"#card",start:"top 90%",end:"bottom 50%",animation:cardAnimationTimeLine}),gsap.registerPlugin(ScrollTrigger);var logosAnimationTimeLine=gsap.timeline({});logosAnimationTimeLine.addLabel("logos to fade in").from("#index-logos-1",{duration:1,alpha:0}).from("#index-logos-2",{duration:1,alpha:0},"-=.5").from("#index-logos-3",{duration:1,alpha:0},"-=.5").from("#index-logos-4",{duration:1,alpha:0},"-=.5").from("#index-logos-5",{duration:1,alpha:0},"-=.5"),ScrollTrigger.create({trigger:"#index-brands",start:"top 90%",animation:logosAnimationTimeLine}),gsap.registerPlugin(ScrollTrigger);var weatherAnimationTimeLine=gsap.timeline({});weatherAnimationTimeLine.addLabel("logos to fade in and rotate").from("#weather-thunder",{duration:1,alpha:0,rotation:180,x:100}).from("#weather-sun",{duration:1,alpha:0,rotation:180,x:100},"-=.5").from("#weather-wind",{duration:1,alpha:0,rotation:180,x:100},"-=.5").from("#weather-snow",{duration:1,alpha:0,rotation:180,x:100},"-=.5"),ScrollTrigger.create({trigger:"#weather-start",start:"top 75%",animation:weatherAnimationTimeLine}),gsap.registerPlugin(ScrollTrigger),gsap.to("#header",{duration:.5,backgroundColor:"#124559",scrollTrigger:{trigger:"#index-hikes",toggleActions:"restart pause restart pause",end:"bottom 10%",start:"top"}}),gsap.to("#header",{duration:.5,backgroundColor:"#fff",scrollTrigger:{trigger:"#index-hero",toggleActions:"restart pause restart pause",end:"bottom 10%",start:"top 10%"}}),gsap.to("#header",{duration:.5,backgroundColor:"#124559",scrollTrigger:{trigger:"#index-brands",toggleActions:"restart pause restart pause",end:"bottom 10%",start:"top 10%"}}),gsap.to("#header",{duration:.5,backgroundColor:"#fff",scrollTrigger:{trigger:"#index-planning",toggleActions:"restart pause restart pause",end:"bottom 10%",start:"top 10%"}}),gsap.to("#header",{duration:.5,backgroundColor:"#124559",scrollTrigger:{trigger:"#index-weather",markers:!0,toggleActions:"restart pause restart pause",end:"bottom 10%",start:"top 10%"}}),$(document).ready((function(){$("#show-form-btn").on("click",(function(){$("#contact-button-section").hide(),$("#form-container").show()}))}));