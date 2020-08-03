//register plugin
gsap.registerPlugin(ScrollTrigger);

//define the timeline

var cardAnimationTimeLine = gsap.timeline({
    // paused: true
});

//console.log("is the card js working")

//start the timeline
cardAnimationTimeLine.addLabel("card to slide in")
                    .from("#card",{duration:1, x:150})

ScrollTrigger.create({
    trigger: "#card",
    start: "top 90%",
    end: "bottom 50%",
    markers: true,
    animation: cardAnimationTimeLine
})