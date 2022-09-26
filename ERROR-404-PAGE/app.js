// obtencióon de elementos html

const content_req = document.getElementById("cont-req");
const btn_snd = document.getElementById("snd");



// funciones a ejecutar.

 function cleanHTML(){
    content_req.remove();
};

function errorPage (){
    const htmlCode = `<div class="cont">
    <img src="img/404 error with a landscape-bro.svg" alt="">
        <p>The page or information you are looking for has not been found.</p>
        <a href="">contact technical support team and customer service.</a>
        <button>Back to top</button>
    </div>`;
    
   const  newDiv = document.createElement("div");

   newDiv.innerHTML = htmlCode;

}

const req = function (){
    
    const key = `db2579c0c8eafb1dda8df201dad33d93`;
    const url =`https://api.openweathermap.org/data/2.5/weather?q=bogotaa,colombia,&appid=${key}`;


    fetch(url)
    .then((data)=>{return data.json();})
        .then((dataResolve)=>{
            if (dataResolve.cod === "404") {
                cleanHTML();
            }
        })
}


// ejecto la funcion

btn_snd.addEventListener("click",req);


