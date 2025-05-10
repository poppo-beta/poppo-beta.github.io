gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector(".container");
const items = document.querySelectorAll(".js-item");

gsap.set(container, {
  width: items.length * 100 + "%"
});
gsap.set(items, {
  width: 100 / items.length + "%"
});

gsap.to(container, {
  xPercent: -100 * (items.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".wrapper",
    start: "top top",
    end: () => container.scrollWidth - window.innerWidth,
    scrub: true,
    pin: true,
    anticipatePin: 1
  }
});
