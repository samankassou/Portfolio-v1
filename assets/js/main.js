AOS.init();
const hamburger    = document.querySelector(".hamburger");
const navMenu      = document.querySelector(".nav-menu");
const navLink      = document.querySelectorAll(".nav-link");
const sendEmailBtn = document.querySelector('#send-email-btn');
const name         = document.querySelector('#name');
const email        = document.querySelector('#email');
const subject      = document.querySelector('#subject');
const body         = document.querySelector('#body');

name.addEventListener('input', removeError);
email.addEventListener('input', removeError);
subject.addEventListener('input', removeError);
body.addEventListener('input', removeError);
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

function sendEmail(e){
    e.preventDefault();
    let result = validateForm();

    //if the form has any error
    if(result.status === false){
        displayErrors(result.errors);
        return;
    }
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const subject = document.querySelector('#subject').value;
    const body = document.querySelector('#body').value;

    // reset contact form after send email
    resetForm();

    //window.open(`mailto:samankassoufoulla@gmail.com?name=${name}&subject=${subject}&body=${body}`);
}

function validateForm(){
    let errors = [];
    let status = true;
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const subject = document.querySelector('#subject').value;
    const body = document.querySelector('#body').value;

    if(name.length === 0){
        errors['name'] = "Veuillez remplir le champ Nom";
        status = false;
    }
    if(email.length === 0){
        errors['email'] = "Veuillez remplir le champ Email";
        status = false;
    }
    if(subject.length === 0){
        errors['subject'] = "Veuillez remplir le champ Sujet";
        status = false;
    }
    if(body.length === 0){
        errors['body'] = "Veuillez remplir le champ Message";
        status = false;
    }
    return {status, errors};
}

function resetForm(){
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const subject = document.querySelector('#subject');
    const body = document.querySelector('#body');
    
    // clear inputs and text-area
    name.value = "";
    email.value = "";
    subject.value = "";
    body.value = "";

    // remove red border of inputs abd text-area
    name.classList.remove('is-invalid');
    email.classList.remove('is-invalid');
    subject.classList.remove('is-invalid');
    body.classList.remove('is-invalid');

    // clear error messages
    document.getElementById('name-error').innerText = "";
    document.getElementById('email-error').innerText = "";
    document.getElementById('subject-error').innerText = "";
    document.getElementById('body-error').innerText = "";
}

function displayErrors(errors){
    for(key in errors){
        document.getElementById(key).classList.add('is-invalid');
        document.getElementById(key + '-error')
         .innerText = errors[key];
    }
}

// clear the input or the text-area when the user enter new value
function removeError(e){
    let elt = e.target;
    elt.classList.remove('is-invalid');
    document.getElementById(elt.id + '-error').innerText = "";
}