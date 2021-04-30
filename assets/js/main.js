AOS.init();
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const sendEmailBtn = document.querySelector('#send-email-btn');

sendEmailBtn.addEventListener('click', sendEmail);


function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

// gsap animation
gsap.from(".nav-logo", {duration: 2, x: -100});
gsap.from(".nav-item", {opacity: 0, duration: 1, delay: 1.5, y: 30, stagger: 0.2});

gsap.from(".home__presentation", {opacity: 0, duration: 1, delay: 1, y: 30});
gsap.from(".home__hello", {opacity: 0, duration: 1, delay: 1.6, y: 30});
gsap.from(".home__image-box", {opacity: 0, duration: 1, delay: 1.8, y: 30});

function sendEmail(){
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const subject = document.querySelector('#subject');
    const body = document.querySelector('#body');

    window.open(`mailto:samankassoufoulla@gmail.com?name=${name}&subject=${subject}&body=${body}`);
}