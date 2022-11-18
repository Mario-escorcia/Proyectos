import './Principal.css'
// import {useState , useEffect} from 'react'


function Principal() {
    function peticion() {
            
        // setCiudad(inputCiudad.value)
        // setPais(inputPais.value)
        const ciudad = document.querySelector(".nombre_ciudad");
        const pais = document.getElementById("pais");
        const key = `db2579c0c8eafb1dda8df201dad33d93`;
        const url =`https://api.openweathermap.org/data/2.5/weather?q=${ciudad.value},${pais.value}&appid=${key}`;

       try {
        fetch(url)
        .then((api)=>{ return api.json()})
        .then((apiData)=>
        { return console.log(apiData)})
       } catch (error) {
        console.log(error)
       }

    }

        // const [ciudad, setCiudad] = useState("");
        // const [pais, setPais] = useState("");

  return (

        <div className="principal__cont">
           
            <div className="info__cont">
                <h2>
                    El clima hoy 
                </h2>
                <div className="temp__cont">
                    <h3>Temperatura actual 26°C</h3>
                    <p>Maxima 28°c</p>
                    <p>Minima 23°c</p>
                    <p>Humedad 45%</p>
                </div>
            </div>


            <div className="inputs__cont">

                <input className='nombre_ciudad'type="text" placeholder='Escriba una ciudad aquí' />

                <select name="" id="pais" >
                    <option className='opt-pais' disabled selected value="">seleccione un pais</option>
                    <option value="CO">colombia</option>
                    <option value="BR">Brasil</option>
                    <option value="MX">Mexico</option>
                    <option value="US">Estados unidos</option>
                    <option value="DEU">Alemania</option>
                    <option value="ITA">Italia</option>
                    <option value="FRA">francia</option>
                    <option value="JPN">japon</option>
                </select>

                <button onClick={peticion}>Ver Clima</button>
            </div>
        </div>

    )
}

export default Principal