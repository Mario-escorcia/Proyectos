

const searchIcon = document.getElementById("search--icon");
const query = document.getElementById("query");
const searchBtn = document.getElementById("search--btn");
const doodleBtn = document.getElementById("doodle--btn");

// funcion principal para ejecutar la busqueda
function search() {
    let url = 'https://www.google.com/search?q='+query.value;
    window.open(url,"_self"); 
}
// funcion para ir a doodles
function Lucky() {
    let  doodle = 'https://www.google.com/doodles';
    window.open(doodle,"_self"); 
}

// funcion para ejecutar la busqueda si se presiona la tecla enter
document.addEventListener("keypress",(e)=>{
    if (e.keyCode == 13) {
        search();
    }

})

// ejecuto los eventListeners
searchIcon.addEventListener("click" , search);
searchBtn.addEventListener("click",search)
doodleBtn.addEventListener("click" , Lucky);