// obtención de elementos html.
const user = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConf = document.getElementById("password-confirm");
const check = document.getElementById("check");
const googleAcount = document.getElementById("btn-google--login");
const createAcount = document.getElementById("btn-acount"); 
const errorCont = document.getElementById("input-cont");



// funciones para verificar que los inputs no esten vacios o con errores.

function auth(input){
    if (input.value === "") {
        errorMsg("there can be no field without completing")
        input.style.border =".3px solid #ff2631";

    }else if(input.value){
        input.style.border =".3px solid #00f3b6";
        setTimeout(()=>{
            errorCont.remove();
        },2000)
    }
    
} 


// funcion para mostrar mensaje de error

function errorMsg(msg) {
    errorCont.classList.add("error-msg");
    errorCont.innerText = msg;
}


createAcount.addEventListener("click",(e)=>{
    e.preventDefault();
    auth(user);
    auth(email);
    auth(password);
    auth(passwordConf);

})