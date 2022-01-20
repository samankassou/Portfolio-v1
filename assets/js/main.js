AOS.init();

// gsap animation
gsap.from(".nav-logo", {
    duration: 2,
    x: -100
});
gsap.from(".nav-item", {
    opacity: 0,
    duration: 1,
    delay: 1.5,
    y: 30,
    stagger: 0.2
});

gsap.from(".home__presentation", {
    opacity: 0,
    duration: 1,
    delay: 1,
    y: 30
});
gsap.from(".home__hello", {
    opacity: 0,
    duration: 1,
    delay: 1.6,
    y: 30
});
gsap.from(".home__image-box", {
    opacity: 0,
    duration: 1,
    delay: 1.8,
    y: 30
});