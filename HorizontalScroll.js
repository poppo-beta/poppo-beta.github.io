window.addEventListener("load", function(){

  //プラグインを定義
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".js-item", {
 xPercent: -100 * (items.length - 1),
 scrollTrigger: {
   trigger: container,
   start: "top top",
   end: container.clientWidth,
   pin: true,
   scrub: true,
   anticipatePin: 1,
 }
});
});
