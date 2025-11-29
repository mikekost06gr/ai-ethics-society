gsap.to(".title", {duration: 1.8, top: "2%", ease: "bounce"});

// split title2 into characters and animate left→right
const title2 = document.querySelector('.title2');
if (title2) {
  const txt = title2.textContent.trim();
  title2.innerHTML = txt.split('').map(ch => ch === ' ' ? '<span class="char">&nbsp;</span>' : `<span class="char">${ch}</span>`).join('');
  gsap.set('.title2 .char', {opacity: 0, x: 20, display: 'inline-block'});
  gsap.to('.title2 .char', {duration: 0.45, opacity: 1, x: 0, stagger: 0.03, ease: 'power2.out', delay: 0.6});
}

gsap.to(".title3", {duration: 2, opacity: 1, delay: 4});

gsap.to(".sphere1", {duration: 2, opacity: 1, ease: "power1.inOut"});
gsap.to(".arrow1", {duration: 2, opacity: 1, delay: 1,  ease: "power1.inOut"});
gsap.to(".sphere2", {duration: 2, opacity: 1, delay: 1.5, ease: "power1.inOut"});
gsap.to(".arrow2", {duration: 2, opacity: 1, delay: 2, ease: "power1.inOut"});
gsap.to(".sphere3", {duration: 2, opacity: 1, delay: 2.5, ease: "power1.inOut"});

gsap.to(".sphere4", {duration: 2, opacity: 1, ease: "power1.inOut"});
gsap.to(".arrow3", {duration: 2, opacity: 1, delay: 1,  ease: "power1.inOut"});
gsap.to(".sphere5", {duration: 2, opacity: 1, delay: 1.5, ease: "power1.inOut"});

gsap.to(".b1", {duration: 0.5, left: "38%", top: "155%", delay: 2});
gsap.to(".b2", {duration: 0.5, left: "38%", top: "160%", delay: 2.5});
gsap.to(".b3", {duration: 0.5, left: "38%", top: "165%", delay: 3});
gsap.to(".b4", {duration: 0.5, left: "38%", top: "170%", delay: 3.5});

gsap.to(".rectangle1", {duration: 2, left: "15%"});
gsap.to(".rectangle1 p", {duration: 2, opacity: 1, delay: 3});
gsap.to(".rectangle1 li", {duration: 2, opacity: 1, delay: 3});

gsap.to(".rectangle2", {duration: 2, right: "15%"});
gsap.to(".rectangle2 p", {duration: 2, opacity: 1, delay: 3});
gsap.to(".rectangle2 li", {duration: 2, opacity: 1, delay: 3});

gsap.to(".rectangle3", {duration: 2, opacity: 1, delay: 4});

gsap.to(".title3", {duration: 2, opacity: 1, delay: 4});