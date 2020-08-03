//register plugin
gsap.registerPlugin(ScrollTrigger);

//define the timeline

var weatherAnimationTimeLine = gsap.timeline({});

//console.log("is the weather js working")

//start the timeline
weatherAnimationTimeLine.addLabel("logos to fade in and rotate")
                    .from("#weather-thunder",{duration:1, alpha:0, rotation:180, x:100})
                    .from("#weather-sun",{duration:1, alpha:0, rotation:180, x:100}, "-=.5")
                    .from("#weather-wind",{duration:1, alpha:0, rotation:180, x:100}, "-=.5")
                    .from("#weather-snow",{duration:1, alpha:0, rotation:180, x:100}, "-=.5")
                    

//making the scroll trigger actually work when you scroll
ScrollTrigger.create({
    trigger: "#weather-start",
    start: "top 75%",
    //end: "bottom 50%",
    //markers: true,
    animation: weatherAnimationTimeLine
})