gsap.registerPlugin(ScrollTrigger);

const isMobileView = window.matchMedia("(max-width: 900px)").matches;

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
if (isMobileView) return;

gsap.to(".rectangle1", {
  scrollTrigger: {
    trigger: ".ph3",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 2,
  left: "8%",
});

gsap.to(".title3", {
  scrollTrigger: {
    trigger: ".ph3",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 2,
  opacity: 1,
})

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
if (isMobileView) return;

gsap.to(".rectangle2", {
  scrollTrigger: {
    trigger: ".ph3",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 2,
  right: "8%",
});

gsap.to(".title4", {
  scrollTrigger: {
    trigger: ".ph3",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 2,
  opacity: 1,
})

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
  if (isMobileView) return;
  gsap.to(".b5", { duration: 0.5, opacity: 1, left: "35%" });
}

function toggleb6() {
  if (isMobileView) return;
  gsap.to(".b6", { duration: 0.5, opacity: 1, top: "38%", left: "35%" });
}

function toggleb7() {
  if (isMobileView) return;
  gsap.to(".b7", { duration: 0.5, opacity: 1, top: "53%", left: "35%" });
}

function toggleb8() {
  if (isMobileView) return;
  gsap.to(".b8", { duration: 0.5, opacity: 1, top: "68%", left: "35%" });
  gsap.to(".p4activator", { duration: 0.5, top: "70%", delay: 1, ease: "bounce.in" });  

}

function togglesquarep4() {
  if (isMobileView) return;
  gsap.to(".square", { duration: 1, right: "20.5%" });
}

const title2 = document.querySelector('.title2');
if (title2) {
  const txt = title2.textContent.trim();
  title2.innerHTML = txt.split('').map(ch => ch === ' ' ? '<span class="char">&nbsp;</span>' : `<span class="char">${ch}</span>`).join('');
  gsap.set('.title2 .char', {opacity: 0, x: 20, display: 'inline-block'});
  gsap.to('.title2 .char', {
    scrollTrigger: {
    trigger: ".ph2",
    start: "top center",
    toggleActions: "play none none none",
  }
  ,duration: 0.45, 
  opacity: 1, 
  x: 0,
  stagger: 0.06,
  ease: 'power2.out',
});
}

gsap.to(".title5", {
  scrollTrigger: {
    trigger: ".ph4",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 2,
  left: "20%",
});

gsap.to(".title6", {
  scrollTrigger: {
    trigger: ".ph5",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 2,
  left: "0%",
})

gsap.to(".b9", {
  scrollTrigger: {
    trigger: ".ph5",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 2,
  opacity: 1,
})

gsap.to(".b10", {
  scrollTrigger: {
    trigger: ".ph5",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 2,
  opacity: 1,
})

gsap.to(".b11", {
  scrollTrigger: {
    trigger: ".ph5",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 2,
  opacity: 1,
})

gsap.to(".b12", {
  scrollTrigger: {
    trigger: ".ph5",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 2,
  opacity: 1,
})

gsap.to(".b13", {
  scrollTrigger: {
    trigger: ".ph5",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 2,
  opacity: 1,
})

gsap.to(".b14", {
  scrollTrigger: {
    trigger: ".ph5",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 2,
  opacity: 1,
})

gsap.to(".footer", {
  scrollTrigger: {
    trigger: ".ph5",
    start: "mid center",
    toggleActions: "play none none none",
  },
  duration: 2,
  opacity: 1,
  bottom: "0%",
  });
