import './Principal.css'
function Principal() {
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

                <input type="text" placeholder='Seleccione una ciudad' />

                <select name="" id="pais" >
                    <option class="opt-pais" disabled selected value="">seleccione un pais</option>
                    <option value="CO">colombia</option>
                    <option value="BR">Brasil</option>
                    <option value="MX">Mexico</option>
                    <option value="US">Estados unidos</option>
                    <option value="DEU">Alemania</option>
                    <option value="ITA">Italia</option>
                    <option value="FRA">francia</option>
                    <option value="JPN">japon</option>
                </select>

                <button>Ver Clima</button>
            </div>
        </div>

    )
}

export default Principal