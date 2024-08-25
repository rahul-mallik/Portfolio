function toggleMenu(){
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function toggleTheme(){
    // Get the current theme link element
    const themeLink = document.getElementById('theme-style');
    //const themeToggleImg = document.getElementById('theme-toggle');
    
    // Check the current theme and toggle accordingly
    if (themeLink.getAttribute('href') === 'style.css') {
        themeLink.setAttribute('href', 'dark.css');
        //theme logo
        document.getElementById('theme-toggle').setAttribute('src', './assets/sun.png');
        document.getElementById('github').setAttribute('src', './assets/github_light.png');
        document.getElementById('linkedin').setAttribute('src', './assets/linkedin_light.png');
        document.getElementById('linkedin1').setAttribute('src', './assets/linkedin_light.png');
        document.getElementById('experienceimg').setAttribute('src', './assets/experience_light.png');
        document.getElementById('education').setAttribute('src', './assets/education_light.png');
        document.getElementById('arrow').setAttribute('src', './assets/arrow_light.png');
        document.getElementById('arrow1').setAttribute('src', './assets/arrow_light.png');
        document.getElementById('arrow2').setAttribute('src', './assets/arrow_light.png');
        document.getElementById('check').setAttribute('src', './assets/checkmark_light.png');
        document.getElementById('check1').setAttribute('src', './assets/checkmark_light.png');
        document.getElementById('check2').setAttribute('src', './assets/checkmark_light.png');
        document.getElementById('check3').setAttribute('src', './assets/checkmark_light.png');
        document.getElementById('check4').setAttribute('src', './assets/checkmark_light.png');
        document.getElementById('check5').setAttribute('src', './assets/checkmark_light.png');
        document.getElementById('check6').setAttribute('src', './assets/checkmark_light.png');
        document.getElementById('mail').setAttribute('src', './assets/email_light.png');

    } else {
        themeLink.setAttribute('href', 'style.css');
        //theme logo
        document.getElementById('theme-toggle').setAttribute('src', './assets/moon.png');
        document.getElementById('github').setAttribute('src', './assets/github.png');
        document.getElementById('linkedin').setAttribute('src', './assets/linkedin.png');
        document.getElementById('linkedin1').setAttribute('src', './assets/linkedin.png');
        document.getElementById('experienceimg').setAttribute('src', './assets/experience.png');
        document.getElementById('education').setAttribute('src', './assets/education.png');
        document.getElementById('arrow').setAttribute('src', './assets/arrow.png');
        document.getElementById('arrow1').setAttribute('src', './assets/arrow.png');
        document.getElementById('arrow2').setAttribute('src', './assets/arrow.png');
        document.getElementById('check').setAttribute('src', './assets/checkmark.png');
        document.getElementById('check1').setAttribute('src', './assets/checkmark.png');
        document.getElementById('check2').setAttribute('src', './assets/checkmark.png');
        document.getElementById('check3').setAttribute('src', './assets/checkmark.png');
        document.getElementById('check4').setAttribute('src', './assets/checkmark.png');
        document.getElementById('check5').setAttribute('src', './assets/checkmark.png');
        document.getElementById('check6').setAttribute('src', './assets/checkmark.png');
        document.getElementById('mail').setAttribute('src', './assets/email.png');
       
    }
}

function startLoader(){
    let counterElement = document.querySelector(".counter");
    let overlayElement = document.querySelector(".overlay");
    let currentValue = 0;

    function updateCounter(){
        if(currentValue === 100){
            return;
        }

        currentValue += Math.floor(Math.random() * 10) + 1;

        if(currentValue > 100){
            currentValue = 100;
        }

        counterElement.textContent = currentValue;

        let delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCounter, delay);
    }

    updateCounter();
}

startLoader();

gsap.to(".counter", 0.25, {
    delay: 3.5,
    opacity: 0,
    onComplete: checkCompletion // Callback to check after counter fades out
});

gsap.to(".bar", 1.5, {
    delay: 3.5,
    height: 0,
    stagger: {
        amount: 0.5,
    },
    ease: "power4.inOut",
    onComplete: checkCompletion // Callback to check after bars retract
});

gsap.from(".logo",1.5, {
    delay:3.7,
    y: 700,
    stagger:{
        amount:0.5,
    },
    ease : "power4.inOut",
    onComplete: checkCompletion
});

// gsap.from(".nav-links",1.5, {
//     delay:4.05,
//     y: 700,
//     stagger:{
//         amount:0.5,
//     },
//     ease : "power4.inOut",
//     onComplete: checkCompletion
// });
gsap.from(".a1",1.5, {
    delay:3.8,
    y: 700,
    stagger:{
        amount:0.5,
    },
    ease : "power4.inOut",
    onComplete: checkCompletion
});

gsap.from(".section__pic-container",1.5, {
    delay:3.9,
    y: 700,
    stagger:{
        amount:0.5,
    },
    ease : "power4.inOut",
    onComplete: checkCompletion
});

gsap.from(".section__text",1.5, {
    delay:4,
    y: 700,
    stagger:{
        amount:0.5,
    },
    ease : "power4.inOut",
    onComplete: checkCompletion
});

// gsap.from(".icon",1.5, {
//     delay:4,
//     y: 700,
//     stagger:{
//         amount:0.5,
//     },
//     ease : "power4.inOut",
//     onComplete: checkCompletion
// });




// Function to check if all animations are completed
function checkCompletion() {
    // Get both the counter and bars
    let counterElement = document.querySelector(".counter");
    let overlayElement = document.querySelector(".overlay");
    let bars = document.querySelectorAll(".bar");

    // Check if the counter is fully transparent and bars are hidden
    if (counterElement.style.opacity === "0" && Array.from(bars).every(bar => bar.style.height === "0px")) {
        overlayElement.style.display = "none"; // Hide the overlay
        counterElement.style.display = "none"; // Hide the counter
    }
}



// window.addEventListener('load', function() {
//     // Hide the overlay when the page has fully loaded
//     const overlay = document.querySelector('.overlay');
//     overlay.style.opacity = 0;

//     // Remove the overlay after the transition ends
//     setTimeout(() => {
//         overlay.style.display = 'none';
//         document.getElementById('main-content').classList.remove('hidden-content');
//     }, 500); // Matches the transition duration
// });