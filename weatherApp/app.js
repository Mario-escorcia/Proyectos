// obtengo los elementos html

const form = document.getElementById("form");
const contRes = document.getElementById("info");
const tempCont = document.getElementById("temp-num");
const minCont = document.getElementById("min-temp");
const maxCont = document.getElementById("max-temp");
const cityCont = document.getElementById("name-ciudad");
const countryCont = document.getElementById("name-pais");
const cityValue = document.getElementById("ciudad");
const countryValue = document.getElementById("pais");
const errorDiv = document.getElementById("error-msg");
const get = document.getElementById("btn-sub");



// funciones.

function errorApi(msg){

// le agrego una clase a un div vacio en html y luego introduzco un html desde aca cuando los campos estan vacios haciendo una validacion 
// abajo , luego elimino el mensaje de 2 segundos con settimeout.


    errorDiv.classList.add("msg-error");
    errorDiv.innerHTML= msg;

    form.appendChild(errorDiv);

    setTimeout(
        ()=>{errorDiv.remove();},2000
    )
}
get.addEventListener("click", (e)=>{
        e.preventDefault();
        if (cityValue.value === "" || countryValue === "") {
            errorApi("escoje los valores requeridos");
        }
        request();
        
    })


    function request(){
  
    const key = `db2579c0c8eafb1dda8df201dad33d93`;
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${cityValue.value},${countryValue.value}&appid=${key}`;

    // se hace la peticion con fetch y usa then porque devuelve una promesa, en ese then lo pasamos a JSON
    // luego en el 2 thenvalido algun error 404 que pueda salir y por ultimo ejecuto  la funcion showdata para
    // mostrar en pantalla. 
        fetch(url)
            .then((data)=>{
               return data.json()}
                )
            .then((datajson)=>{
                if (datajson.cod === "404") {
                    errorApi("ciudad no encontrada");
                }
                // console.log(datajson);
                showData(datajson);
            }).catch((error)=>{
                console.log(error);
            })

    }

    function showData(dataApi){
        // toma las propiedades que vienen en el json del api y luego los muestra con el innerHTML 
        // degrees recibe como parametro las temperaturas que por defecto vienen en kelvins
        const{name,main : {temp,temp_max,temp_min}} =dataApi;

            const deg = degrees(temp);
            const max = degrees(temp_max);
            const min = degrees(temp_min);


            tempCont.innerHTML= `${deg}°c`;
            minCont.innerHTML= `Min :${min}`;
            maxCont.innerHTML = `Max :${max}`;
            cityCont.innerHTML = `${name}`;
   
    }



    function degrees(temperature){
        // toma como parametro temperaturas y hace la operacion para llevarlos a grados
        return parseInt(temperature -273.15);
    }


// 19/09/2022