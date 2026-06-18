//script.js

// GSAP Animations for Mamma Mia Landing Page

// Landing Page Load Animation
// Animates the page elements sequentially for an engaging entry.
const tl = gsap.timeline();

tl.from(".title", {
    duration: 1.5,
    opacity: 0,
    y: -100,
    rotation: 10,
    ease: "elastic.out(1, 0.5)"
})
.from(".tagline", {
    duration: 1,
    opacity: 0,
    y: 30,
    ease: "power3.out"
}, "-=1")
.from(".description p", {
    duration: 1,
    opacity: 0,
    y: 30,
    ease: "power3.out"
}, "-=0.5")
.from(".login-form", { 
    duration: 2, 
    opacity: 0, 
    scale: 0.8,
    ease: "back.out(1.7)"
}, "-=1.5");

// Input Fields Animation
// Staggered fade-in effect for the login input fields.
gsap.from(".login-input", {
    duration: 1,
    opacity: 0,
    y: 20,
    ease: "power2.out",
    stagger: 0.2
});

// Button Hover and Click Animations
// Adds scale, color transitions, and click interaction to the login button.
const loginButton = document.querySelector(".login-button");

loginButton.addEventListener("mouseenter", () => {
    gsap.to(loginButton, {
        duration: 0.3,
        scale: 1.1,
        backgroundColor: "#FFA500",
        ease: "power1.out"
    });
});

loginButton.addEventListener("mouseleave", () => {
    gsap.to(loginButton, {
        duration: 0.3,
        scale: 1,
        backgroundColor: "#FFD700",
        ease: "power1.out"
    });
});

loginButton.addEventListener("click", () => {
    gsap.to(loginButton, {
        duration: 0.2,
        scale: 0.95,
        ease: "power1.out",
        yoyo: true,
        repeat: 1
    });
});

// Parallax Effect
// Adds subtle parallax movement to the page background on mouse move.
document.addEventListener("mousemove", (event) => {
    const x = (event.clientX / window.innerWidth) - 0.5;
    const y = (event.clientY / window.innerHeight) - 0.5;
    
    gsap.to("body::before", {
        duration: 1,
        x: x * 20,
        y: y * 20,
        ease: "power2.out"
    });
});

// Repeated Tagline Animation
// Subtle pulsing effect for the tagline to draw attention.
gsap.to(".tagline", {
    duration: 2,
    scale: 1.05,
    color: "#FF69B4",
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

// Floating Animation
// Creates a gentle floating motion for the login form.
gsap.to(".login-form", {
    duration: 3,
    y: -10,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

// Shine Effect
// Adds a looping shine effect to the title and subtitle.
function addShineEffectToElement(selector) {
    const shine = document.createElement("div");
    shine.className = "shine";
    document.querySelector(selector).appendChild(shine);
    
    gsap.to(`${selector} .shine`, {
        duration: 1,
        x: "100%",
        opacity: 0.5,
        repeat: -1,
        repeatDelay: 5,
        ease: "power2.inOut"
    });
}

addShineEffectToElement(".title");
addShineEffectToElement(".subtitle");

// Wobble Animations
// Adds a playful wobble effect to the title and subtitle.
gsap.to(".title", {
    duration: 2,
    rotation: 5,
    yoyo: true,
    repeat: -1,
    ease: "elastic.inOut(1, 0.5)",
    delay: 3,
    repeatDelay: 5
});

gsap.to(".subtitle", {
    duration: 2,
    rotation: 3,
    yoyo: true,
    repeat: -1,
    ease: "elastic.inOut(1, 0.5)",
    delay: 3.5,
    repeatDelay: 5
});

// Input Field Focus Effect
// Highlights input fields with a glow on focus and removes it on blur.
document.querySelectorAll(".login-input").forEach(input => {
    input.addEventListener("focus", () => {
        gsap.to(input, {
            duration: 0.5,
            boxShadow: "0 0 8px rgba(255, 215, 0, 0.6)",
            ease: "power2.out"
        });
    });
    
    input.addEventListener("blur", () => {
        gsap.to(input, {
            duration: 0.5,
            boxShadow: "none",
            ease: "power2.out"
        });
    });
});

// Subtle Button Pulse
// Adds a continuous pulse effect to the login button.
gsap.to(".login-button", {
    duration: 2,
    scale: 1.05,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

// Feature Items Animation
// Staggered fade-in for feature list items on the page.
gsap.from(".feature-item", {
    duration: 1,
    opacity: 0,
    y: 20,
    stagger: 0.3,
    ease: "power2.out"
});

// Falling Leaves Effect
// Generates and animates falling leaves with random properties.
function animateLeaf() {
    const leafContainer = document.querySelector('.leaf-container');
    const leaf = document.createElement('img');
    leaf.src = 'images/bougainvillea-leaf.png';
    leaf.classList.add('leaf');
    leafContainer.appendChild(leaf);

    gsap.set(leaf, {
        width: `${Math.random() * 40 + 60}px`,
        left: `${Math.random() * window.innerWidth}px`,
        opacity: 0.8
    });

    gsap.to(leaf, {
        duration: Math.random() * 5 + 12,
        x: window.innerWidth + 100,
        y: Math.random() * -50 - 20,
        rotation: Math.random() * 40 - 20,
        opacity: 0.8,
        ease: "power2.inOut",
        onComplete: () => leaf.remove()
    });
}

setInterval(animateLeaf, 1500);
