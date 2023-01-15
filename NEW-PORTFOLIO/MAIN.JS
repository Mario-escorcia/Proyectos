
// elements html

let buttonHero = document.getElementById("btn-hero");
let buttonProjects = document.getElementById("btn-projects")
let buttonknowledge = document.getElementById("btn-knowledge")
let buttonEmail = document.getElementById("btn-contact")


// funtions

function scrollPage(value1 , value2) {
    window.scroll(value1,value2)

}

function Animation(target,delay,duration,origin,distance) {

    ScrollReveal().reveal(target,{
        delay: delay,
        duration: duration,    
        origin: origin,
        distance : distance,
        reset : true
    
    });
}
// ejemplo
// Animation(navbar,500,2000,"top","70px"); 


// execute listeners

buttonHero.addEventListener("click" , ()=>{
    scrollPage(0,400)
})

buttonProjects.addEventListener("click" , ()=>{
    scrollPage(0,1000)
})

buttonknowledge.addEventListener("click" , ()=>{
    scrollPage(0,3300)
})

buttonEmail.addEventListener("click" , ()=>{
    window.open("mailto:marioescorcia003@gmail.com")
})

// animations

const navbar = document.getElementById("nav");
const hero = document.getElementById("hero")
const about = document.getElementById("about")
const projectCont = document.getElementById("projects")
const project1 = document.getElementById("project1");
const project2 = document.getElementById("project2");
const project3 = document.getElementById("project3");
const project4 = document.getElementById("project4");
const project5 = document.getElementById("project5");
const knowCont = document.getElementById("knowledge");
const contactCont = document.getElementById("contact");
const creditCont = document.getElementById("credit-cont");


Animation(navbar,400,1500,"top","50px")
Animation(hero,400,1500,"left","300px")
Animation(about,400,1500,"left","300px")
Animation(projectCont,400,1500,"left","300px")
Animation(project1,400,1500,"left","300px")
Animation(project2,400,1500,"right","300px")
Animation(project3,400,1500,"left","300px")
Animation(project4,400,1500,"right","300px")
Animation(project5,400,1500,"left","300px")
Animation(knowCont,400,1500,"left","300px")
Animation(contactCont,400,1500,"right","300px")
Animation(creditCont,400,1500,"left","300px")