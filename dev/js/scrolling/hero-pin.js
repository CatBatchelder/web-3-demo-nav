//register plugin
gsap.registerPlugin(ScrollTrigger);

// gsap.to("#index-brands", {
//     yPercent: -100,
//     //alpha: 0,

//     scrollTrigger: {
//         trigger: "#index-hero",
//       start: "top top",
//       end: "bottom 300px",
//       pin: "#index-hero",
//       pinSpacing: false,
//       scrub: 1,
//       markers: true
//     }

//   });

  gsap.to("#index-hero", {
     //yPercent: -100,
   

    scrollTrigger: {
      trigger: "#index-hero",
      start: "top top",
      end: "bottom 200px",
      pin: "#index-hero", 
      pinSpacing: false, 
      scrub: 1
      //markers: true
    }

  });



