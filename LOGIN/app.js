// obtención de elementos html.
const user = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConf = document.getElementById("password-confirm");
const check = document.getElementById("check");
const googleAcount = document.getElementById("btn-google--login");
const createAcount = document.getElementById("btn-acount"); 
const errorCont = document.getElementById("error-msg");
const inputsCont = document.getElementById("input-cont");


// funcion para mostrar mensaje de error

function errorMsg(msg) {
    errorCont.innerText = msg;
    
}


// funciones para verificar que los inputs no esten vacios o con errores.

function auth(input){
    if (input.value === "") {
        errorMsg("there can be no field without completing")
        input.style.border =".3px solid #ff2631";
         

    }else if(input.value){
        input.style.border =".3px solid #00f3b6";
         errorCont.remove();
    }
    
} 

//función para validar que los campos password sea iguales

function passAuth(pass , pass2) {
    if (pass.value !== pass2.value ) {
       
    //    elimino el contenedor donde va el error y lo vuelvo a crear ya que entra en conflicto con el 
    // remove de la funcion auth.
        errorCont.remove();
        let msgPass = document.createElement("div");
        msgPass.classList.add("error-msg");
        inputsCont.appendChild(msgPass)
        msgPass.innerText = "Passwords do not match";
        
        pass.style.border = ".3px solid #ff2631";
        pass2.style.border = ".3px solid #ff2631";


        setTimeout(()=>{
            msgPass.remove()
        }, 4000)



    }
}


createAcount.addEventListener("click",(e)=>{
    e.preventDefault();
    auth(user);
    auth(email);
    auth(password);
    auth(passwordConf);

    passAuth(password,passwordConf);

})


// 3/10/20223/10/2022