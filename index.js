const project1 = document.getElementById("project1");
const project2 = document.getElementById("project2");
const project3 = document.getElementById("project3");
const project4 = document.getElementById("project4");
const project5 = document.getElementById("project5");
const project6 = document.getElementById("project6");
const myrole = document.getElementById("myrole")
project1.addEventListener("click", (e) => {
    e.preventDefault();
    window.open('https://github.com/Taransh121/NEWSAPP', '_blank');
})
project2.addEventListener("click", (e) => {
    e.preventDefault();
    window.open('https://taransh121.github.io/Tic-Tac-toe/', '_blank');
})
project3.addEventListener("click", (e) => {
    e.preventDefault();
    window.open('https://github.com/Taransh121/TKart', '_blank');
})
project4.addEventListener("click", (e) => {
    e.preventDefault();
    window.open('https://github.com/Taransh121/inotebook', '_blank');
})
project5.addEventListener("click", (e) => {
    e.preventDefault();
    window.open('https://github.com/Taransh121/Hashgram', '_blank');
})
project6.addEventListener("click", (e) => {
    e.preventDefault();
    window.open('https://github.com/Taransh121/Chat-Application', '_blank');
})
var1 = " Web Developer.";
var2 = " Programmer.";

var Temp = true

setInterval(() => {
    myrole.innerHTML = Temp ? var1 : var2;
    Temp = !Temp
}, 2000)


// theme mode 
let toggler = document.getElementById("toggler")
let togglerSlider = document.getElementById("toggler-slider")
let mode = "light";
toggler.addEventListener("click", () => {
    if (mode === "light") {
        mode = "dark";
        document.getElementById("nav1").classList = "navbar fixed-top navbar-expand-lg bg-dark navbar-dark navbar1";
        document.getElementById("body").style.backgroundColor = "black";
        document.getElementById("body").style.color = "white";
        document.getElementById("github").style.color = "white";
        document.getElementById("my-skill-block1").style.boxShadow = "0px 0px 2px 0px rgb(184, 183, 183)";
        document.getElementById("my-skill-block2").style.boxShadow = "0px 0px 2px 0px rgb(184, 183, 183)";
        document.getElementById("my-skill-block3").style.boxShadow = "0px 0px 2px 0px rgb(184, 183, 183)";
        document.getElementById("my-skill-block4").style.boxShadow = "0px 0px 2px 0px rgb(184, 183, 183)";
        document.getElementById("my-skill-block5").style.boxShadow = "0px 0px 2px 0px rgb(184, 183, 183)";
        document.getElementById("my-skill-block6").style.boxShadow = "0px 0px 2px 0px rgb(184, 183, 183)";
        document.getElementById("project1").style.boxShadow = "0px 0px 2px 0px rgb(184, 183, 183)";
        document.getElementById("project2").style.boxShadow = "0px 0px 2px 0px rgb(184, 183, 183)";
        document.getElementById("project3").style.boxShadow = "0px 0px 2px 0px rgb(184, 183, 183)";
        document.getElementById("project4").style.boxShadow = "0px 0px 2px 0px rgb(184, 183, 183)";
        document.getElementById("project5").style.boxShadow = "0px 0px 2px 0px rgb(184, 183, 183)";
        document.getElementById("project6").style.boxShadow = "0px 0px 2px 0px rgb(184, 183, 183)";
        document.getElementById("contact-details").style.boxShadow = "0px 0px 5px 0px rgb(184, 183, 183)";
        document.getElementById("contact-details").style.color = "black";
        document.getElementById("footer").style.color = "black";
        document.getElementById("footer").style.fontWeight = "bold";
        document.getElementById("footer").style.backgroundColor = "white";
    }
    else {
        mode = "light";
        document.getElementById("nav1").classList = "navbar fixed-top navbar-expand-lg bg-light navbar-light navbar1";
        document.getElementById("body").style.backgroundColor = "white";
        document.getElementById("body").style.color = "black";
        document.getElementById("github").style.color = "black";
        document.getElementById("my-skill-block1").style.boxShadow = "0px 0px 10px 0px rgb(184, 183, 183)";
        document.getElementById("my-skill-block2").style.boxShadow = "0px 0px 10px 0px rgb(184, 183, 183)";
        document.getElementById("my-skill-block3").style.boxShadow = "0px 0px 10px 0px rgb(184, 183, 183)";
        document.getElementById("my-skill-block4").style.boxShadow = "0px 0px 10px 0px rgb(184, 183, 183)";
        document.getElementById("my-skill-block5").style.boxShadow = "0px 0px 10px 0px rgb(184, 183, 183)";
        document.getElementById("my-skill-block6").style.boxShadow = "0px 0px 10px 0px rgb(184, 183, 183)";
        document.getElementById("project1").style.boxShadow = "0px 0px 10px 0px rgb(184, 183, 183)";
        document.getElementById("project2").style.boxShadow = "0px 0px 10px 0px rgb(184, 183, 183)";
        document.getElementById("project3").style.boxShadow = "0px 0px 10px 0px rgb(184, 183, 183)";
        document.getElementById("project4").style.boxShadow = "0px 0px 10px 0px rgb(184, 183, 183)";
        document.getElementById("project5").style.boxShadow = "0px 0px 10px 0px rgb(184, 183, 183)";
        document.getElementById("project6").style.boxShadow = "0px 0px 10px 0px rgb(184, 183, 183)";
        document.getElementById("contact-details").style.boxShadow = "0px 0px 10px 0px rgb(184, 183, 183)";
        document.getElementById("footer").style.color = "white";
        document.getElementById("footer").style.backgroundColor = "black";
    }
})
