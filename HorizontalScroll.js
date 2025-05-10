gsap.registerPlugin(ScrollTrigger);


const container = document.querySelectorAll(".container");
const items = document.querySelectorAll(".js-item");

gsap.set(container,{
  width: items.length * 100 + "%"
});
gsap.set(items,{
  width: 100 / items.length + "%"
});

gsap.to(".js-item", {
  xPercent: -100 * (items.length - 1),
  scrollTrigger: {
    trigger: container,
    start: "top top",
    end: container.clientWidth,
    pin: true,
    anticipatePin: 1,
    scrub: true,
  }
});
