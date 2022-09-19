const aboutCont = document.getElementById("about");
const know = document.getElementById("know");
const cont = document.getElementById ("cont");
window.onscroll = ()=>{
    let scroll = window.scrollY;

    switch(scroll){
        case scroll = 617 :aboutCont.style.animationName ="about-animation";
        aboutCont.style.animationDuration = "1.5s"; 
        
        case scroll = 1234 : know.style.animationName ="know-animation";
        know.style.animationDuration = "1.5s";
        
        case scroll = 1386 :  cont.style.animationName ="contact-animation";
        cont.style.animationDuration = "1.5s";
    }
}


// 15/09/2022