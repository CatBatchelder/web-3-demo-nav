//register plugin
gsap.registerPlugin(ScrollTrigger);

gsap.to("#header", {
    duration: .5,
    backgroundColor: "#124559",
    scrollTrigger: {
        trigger: "#index-hikes",
        //markers: true,
        toggleActions: "restart pause restart pause",
        end: "bottom 10%",
        start: "top"
    }
})

gsap.to("#header", {
    duration: .5,
    backgroundColor: "#fff",
    scrollTrigger: {
        trigger: "#index-hero",
        //markers: true,
        toggleActions: "restart pause restart pause",
        end: "bottom 10%",
        start: "top 10%"
    }
})

gsap.to("#header", {
    duration: .5,
    backgroundColor: "#124559",
    scrollTrigger: {
        trigger: "#index-brands",
        //markers: true,
        toggleActions: "restart pause restart pause",
        end: "bottom 10%",
        start: "top 10%"
    }
})

gsap.to("#header", {
    duration: .5,
    backgroundColor: "#fff",
    scrollTrigger: {
        trigger: "#index-planning",
        //markers: true,
        toggleActions: "restart pause restart pause",
        end: "bottom 10%",
        start: "top 10%"
    }
})

gsap.to("#header", {
    duration: .5,
    backgroundColor: "#124559",
    scrollTrigger: {
        trigger: "#index-weather",
        markers: true,
        toggleActions: "restart pause restart pause",
        end: "bottom 10%",
        start: "top 10%"
    }
})