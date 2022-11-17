// CDN de la libreria para las animaciones ⬇️ 
// <script src="https://unpkg.com/scrollreveal"></script>


function Animation(target,delay,duration,origin,distance) {

    // letra S del inicio en mayuscula (no encontraba el error)
    ScrollReveal().reveal(target,{
        delay: delay,
        duration: duration,    
        origin: origin,
        distance : distance,
        reset : true
    
    });
}

// section 1 animation
const navbar = document.querySelector(".navbar")
const heroText = document.querySelector(".hero--text")
const heroImg = document.querySelector(".hero--img")
Animation(navbar,500,2000,"top","70px");
Animation(heroText,500,2000,"left","70px");
Animation(heroImg,500,2000,"right","70px");


// section 2 animation
const stadistic = document.querySelector(".stadistics")
const textSect2 = document.querySelector(".text--sect2")
const cardsSect2 = document.querySelector(".cards--sect2")
Animation(stadistic,300,2000,"left","70px");
Animation(textSect2,600,2000,"left","70px");
Animation(cardsSect2,800,2000,"right","70px");


// section 3 animation
const imgContSec3 = document.querySelector(".img--cont")
const infoTextSec3 = document.querySelector(".info--cont")
Animation(infoTextSec3,300,2000,"right","70px");
Animation(imgContSec3,300,2000,"left","70px");


// section 4 animation
const infoTextSec4 = document.querySelector(".info--sect4-cont")
const imgcontSec4 = document.querySelector(".img--sect4-cont")
Animation(infoTextSec4,300,2000,"left","70px");
Animation(imgcontSec4,300,2000,"right","70px");

// section 5 animation

const infoTextSec5 = document.querySelector(".text--sect5-cont")
const cardsSect5 = document.querySelector(".cards--sect5-cont")
const companyImgContSec5 = document.querySelector(".company--sect5-cont")
Animation(infoTextSec5,300,2000,"top","70px");
Animation(cardsSect5,300,2000,"right","150px");
Animation(companyImgContSec5,300,2000,"bottom","70px");


// section 6 animation

const callActionSec6 = document.querySelector(".call-action--cont")


Animation(callActionSec6,300,2000,"top","70px");