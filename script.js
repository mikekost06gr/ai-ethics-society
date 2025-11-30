gsap.registerPlugin("scrollTrigger");

gsap.to(".title", { duration: 1.8, top: "2%", ease: "bounce" });

gsap.to(".sphere1", {
  duration: 2,
  opacity: 1,
  delay: 2,
  ease: "power1.inOut",
});
gsap.to(".arrow1", {
  duration: 2,
  opacity: 1,
  delay: 2.5,
  ease: "power1.inOut",
});
gsap.to(".sphere2", {
  duration: 2,
  opacity: 1,
  delay: 3,
  ease: "power1.inOut",
});
gsap.to(".arrow2", {
  duration: 2,
  opacity: 1,
  delay: 3.5,
  ease: "power1.inOut",
});
gsap.to(".sphere3", {
  duration: 2,
  opacity: 1,
  delay: 4,
  ease: "power1.inOut",
});

gsap.to(".sphere4", {
  scrollTrigger: {
    trigger: ".ph2",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 2,
  opacity: 1,
});

gsap.to(".arrow3", {
  scrollTrigger: {
    trigger: ".ph2",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 2,
  delay: 1.5,
  opacity: 1,
});

gsap.to(".sphere5", {
  scrollTrigger: {
    trigger: ".ph2",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 2,
  delay: 1,
  opacity: 1,
});

gsap.to(".oval", {
  scrollTrigger: {
    trigger: ".ph2",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 2,
  delay: 2,
  opacity: 1,
});

function toggleRectangle1(){

gsap.to(".rectangle1", {
  scrollTrigger: {
    trigger: ".ph3",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 2,
  left: "15%",
});

gsap.to(".rectangle1 p", {
  scrollTrigger: {
    trigger: ".rectangle1",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 2,
  delay: 1,
  opacity: 1,
});

gsap.to(".rectangle1 li", {
  scrollTrigger: {
    trigger: ".rectangle1",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 2,
  delay: 1,
  opacity: 1,
});
}

function toggleRectangle2() {

gsap.to(".rectangle2", {
  scrollTrigger: {
    trigger: ".ph3",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 2,
  right: "15%",
});

gsap.to(".rectangle2 p", {
  scrollTrigger: {
    trigger: ".rectangle1",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 2,
  delay: 1,
  opacity: 1,
});

gsap.to(".rectangle2 li", {
  scrollTrigger: {
    trigger: ".rectangle2",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 2,
  delay: 1,
  opacity: 1,
});

gsap.to(".p3Deco", {
  scrollTrigger: {
    trigger: ".rectangle2",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 2,
  delay: 2,
  opacity: 1,
});
}

/*
gsap.to(".sphere4", {duration: 2, opacity: 1, ease: "power1.inOut"});
gsap.to(".arrow3", {duration: 2, opacity: 1, delay: 1,  ease: "power1.inOut"});
gsap.to(".sphere5", {duration: 2, opacity: 1, delay: 1.5, ease: "power1.inOut"});
*/


gsap.to(".b1", {
  scrollTrigger: {
    trigger: ".ph2",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 2,
  delay: 1.5,
  left: "35%",
});

gsap.to(".b2", {
  scrollTrigger: {
    trigger: ".ph2",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 2,
  delay: 1.7,
  left: "35%",
});

gsap.to(".b3", {
  scrollTrigger: {
    trigger: ".ph2",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 2,
  delay: 1.9,
  left: "35%",
});


gsap.to(".b4", {
  scrollTrigger: {
    trigger: ".ph2",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 2,
  delay: 2.2,
  left: "35%",
});



/*
gsap.to(".b1", { duration: 0.5, left: "35%", delay: 2 });
gsap.to(".b2", { duration: 0.5, left: "35%", delay: 2.5 });
gsap.to(".b3", { duration: 0.5, left: "35%", delay: 3 });
gsap.to(".b4", { duration: 0.5, left: "35%", delay: 3.5 });

gsap.to(".rectangle1", {duration: 2, left: "15%"});
gsap.to(".rectangle1 p", {duration: 2, opacity: 1, delay: 3});
gsap.to(".rectangle1 li", {duration: 2, opacity: 1, delay: 3});

gsap.to(".rectangle2", {duration: 2, right: "15%"});
gsap.to(".rectangle2 p", {duration: 2, opacity: 1, delay: 3});
gsap.to(".rectangle2 li", {duration: 2, opacity: 1, delay: 3});
*/


gsap.to(".p4Deco", {
  scrollTrigger: {
    trigger: ".ph4",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 2,
  left: "-25%",
});


function toggleb5() {
  gsap.to(".b5", { durationn: 0.5, opacity: 1, left: "35%" });
}

function toggleb6() {
  gsap.to(".b6", { durationn: 0.5, opacity: 1, top: "38%", left: "35%" });
}

function toggleb7() {
  gsap.to(".b7", { durationn: 0.5, opacity: 1, top: "53%", left: "35%" });
}

function toggleb8() {
  gsap.to(".b8", { durationn: 0.5, opacity: 1, top: "68%", left: "35%" });
  gsap.to(".p4activator", { duration: 0.5, top: "70%", delay: 1, ease: "bounce.in" });  

}

function togglesquarep4() {
  gsap.to(".square", { duration: 1, right: "20%" });
}

/*
gsap.to(".p4Deco", { duration: 0.5, left: "-15%", delay: 1 });

gsap.to(".arrow4", { duration: 0.5, opacity: 1, delay: 3 });
gsap.to(".b5", { durationn: 0.5, opacity: 1, delay: 3.5 });
gsap.to(".arrow4", { duration: 0.5, opacity: 0, delay: 4 });

gsap.to(".arrow5", { duration: 0.5, opacity: 1, delay: 4 });
gsap.to(".b6", { durationn: 0.5, opacity: 1, delay: 4.5 });
gsap.to(".arrow5", { duration: 0.5, opacity: 0, delay: 5.5 });

gsap.to(".arrow6", { duration: 0.5, opacity: 1, delay: 5.5 });
gsap.to(".b7", { durationn: 0.5, opacity: 1, delay: 6 });
gsap.to(".arrow6", { duration: 0.5, opacity: 0, delay: 7 });

gsap.to(".arrow7", { duration: 0.5, opacity: 1, delay: 7 });
gsap.to(".b8", { durationn: 0.5, opacity: 1, delay: 7.5 });
gsap.to(".arrow7", { duration: 0.5, opacity: 0, delay: 8.5 });

gsap.to(".oval2", { duration: 0.5, opacity: 1, delay: 9.5 });
gsap.to(".oval2 h3", { duration: 0.5, opacity: 1, delay: 9.5 });
*/