import "./Principal.css";

// componente
function Principal() {


// funcion que realiza la petición una vez que se da click 
  function peticion() {

    // obtengo el valor de los inputs de ciudad y pais  y se lo paso a la API junto con la KEY
    const ciudad = document.querySelector(".nombre_ciudad");
    const pais = document.getElementById("pais");
    const key = `db2579c0c8eafb1dda8df201dad33d93`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad.value},${pais.value}&appid=${key}`;

    // ejecuto la peticion con fetch y obtengo la data y la muestro por pantalla con unas funciones que se definen mas adelante

    try {
      fetch(url)
        .then((api) => {
          return api.json();
        })
        .then((apiData) => {
            // primero valido si hay un error 404 y si es asi ejecuto una funcion sencilla de error que se define mas abajo en el codigo
            if (apiData.cod === "404") {
                errorApi()
            }else{

                // si no hay ningun error  muestro la información en pantalla con la función apiResolve que recibe la información de apiData como parametro
                return apiResolve(apiData);
            }
        });
    } catch (error) {

        // si nisiquiera se realiza la peticion me muestra en consola que pasa
      console.log(error);
    }
  }

  function apiResolve(infoApi) {
    // obtengo los elementos en los que voy a mostrar la información
    const nombreCiudad = document.querySelector(".nombre__ciudad");
    const actual = document.querySelector(".temp__actual");
    const maxima = document.querySelector(".temp__maxima");
    const minima = document.querySelector(".temp__minima");
    const humedadF = document.querySelector(".humedad__actual");


    // aplico la destructuración y obtengo el name , la temp etc en una constante , esta info viene del parametro de esta función (el parametro es el apiData del 2 .then del fetch)
    const {
      name,
      main: { temp, temp_min, temp_max, humidity },
    } = infoApi;


    // asignos los valores a unas variables y paso las temperaturas por una función que los pasa de kelvin a centigrados
    const nombre = name;
    const temperaturaActual = centigrados(temp);
    const temperaturaMinima = centigrados(temp_min);
    const temperaturaMaxima = centigrados(temp_max);
    const humedad = humidity;


    // muestro por pantalla la información con los elementos obtenido al principio de esta función
    nombreCiudad.innerHTML = nombre;
    actual.innerHTML = "temperatura : " + temperaturaActual + "°C";
    maxima.innerHTML = "Maxima : " + temperaturaMaxima + "°C";
    minima.innerHTML = " Minima : " + temperaturaMinima + "°C";
    humedadF.innerHTML = "Humedad : " + humedad + "%";
  }


    // pasa los grados kelvin a centigrados
  function centigrados(temperature) {
    // toma como parametro temperaturas y hace la operacion para llevarlos a grados
    return parseInt(temperature - 273.15);
  }


    // en caso de error 404 muestra un alert con un mensaje      
  function errorApi() {
    alert("Error , asegurate que la ciudad este bien escrita o coincida con el pais ")
  }

//   aqui retorna la interfaz de este componente
  return (
    // contenedor principal con los elementos
    <div className="principal__cont">
        {/* en este contenedor va la información que se va a mostrar */}
      <div className="info__cont">
        <h2 className="nombre__ciudad">elegir ciudad</h2>
        <div className="temp__cont">
          <h3 className="temp__actual">Temperatura actual 0°C</h3>
          <p className="temp__maxima">Maxima : 0°c</p>
          <p className="temp__minima">Minima : 0°c</p>
          <p className="humedad__actual">Humedad: 0%</p>
        </div>
      </div>

        {/* contenedor con los inputs y el botón*/}
      <div className="inputs__cont">
        <input
          className="nombre_ciudad"
          type="text"
          placeholder="Escriba una ciudad aquí"
        />

        <select name="" id="pais">
          <option className="opt-pais" disabled selected value="">
            seleccione un pais
          </option>
          <option value="CO">colombia</option>
          <option value="BR">Brasil</option>
          <option value="MX">Mexico</option>
          <option value="US">Estados unidos</option>
          <option value="DEU">Alemania</option>
          <option value="ITA">Italia</option>
          <option value="FRA">francia</option>
          <option value="JPN">japon</option>
        </select>

        {/* este botón ejecuta la petición */}
        <button onClick={peticion}>Ver Clima</button>
      </div>
    </div>
  );
}

// exporto el componente
export default Principal;
