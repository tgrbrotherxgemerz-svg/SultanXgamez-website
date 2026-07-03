// ==========================
// SultanXGamz Official Website
// Part 3
// ==========================

// Smooth Navbar Shadow

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.background = "rgba(0,0,0,.85)";
        navbar.style.boxShadow = "0 0 20px rgba(0,150,255,.25)";

    } else {

        navbar.style.background = "rgba(0,0,0,.65)";
        navbar.style.boxShadow = "none";

    }

});

// --------------------------
// Mouse Glow Effect
// --------------------------

const glow = document.createElement("div");

glow.style.width = "18px";
glow.style.height = "18px";
glow.style.position = "fixed";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.background = "#4ea4ff";
glow.style.boxShadow = "0 0 35px #4ea4ff";
glow.style.zIndex = "999999";
glow.style.transition = "transform .05s linear";

document.body.appendChild(glow);

document.addEventListener("mousemove", (e)=>{

    glow.style.left = e.clientX - 9 + "px";
    glow.style.top = e.clientY - 9 + "px";

});

// --------------------------
// Button Animation
// --------------------------

const buttons = document.querySelectorAll(".btn,.play-btn,.contact-box a");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="scale(1.08)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="scale(1)";

    });

});

// --------------------------
// Fade Animation
// --------------------------

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{opacity:0,transform:"translateY(80px)"},

{opacity:1,transform:"translateY(0px)"}

],{

duration:900,

fill:"forwards"

});

}

});

});

sections.forEach(section=>{

observer.observe(section);

});

console.log("SultanXGamz Website Loaded Successfully!");
// ==========================
// PART 4 - EXTRA FEATURES
// SultanXGamz Upgrade
// ==========================

// Copy IP Button Feature

const playBtn = document.querySelector(".play-btn");

if(playBtn){

playBtn.addEventListener("click",()=>{

navigator.clipboard.writeText("sultansmp.softhost.fun");

playBtn.innerText = "IP COPIED!";

setTimeout(()=>{

playBtn.innerText = "PLAY NOW";

},2000);

});

}

// Smooth Scroll Fix

document.querySelectorAll("a[href^='#']").forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
});

});

});

// Page Load Effect

window.addEventListener("load",()=>{

document.body.style.opacity="0";

document.body.style.transition="1s";

setTimeout(()=>{

document.body.style.opacity="1";

},200);

});