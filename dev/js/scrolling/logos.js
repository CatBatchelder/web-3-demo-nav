//register plugin
gsap.registerPlugin(ScrollTrigger);

//define the timeline

var logosAnimationTimeLine = gsap.timeline({});

//console.log("is the brands js working")

//start the timeline
logosAnimationTimeLine.addLabel("logos to fade in")
                    .from("#index-logos-1",{duration:1, alpha:0})
                    .from("#index-logos-2",{duration:1, alpha:0}, "-=.5")
                    .from("#index-logos-3",{duration:1, alpha:0}, "-=.5")
                    .from("#index-logos-4",{duration:1, alpha:0}, "-=.5")
                    .from("#index-logos-5",{duration:1, alpha:0}, "-=.5")
                    

//making the scroll trigger actually work when you scroll
ScrollTrigger.create({
    trigger: "#index-brands",
    start: "top 90%",
    //end: "bottom 50%",
    markers: true,
    animation: logosAnimationTimeLine
})