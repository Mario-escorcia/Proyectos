import './Counter.css'
import {useState} from 'react'

export const CountComponent = ()=>{
    const [counter, setcounter] = useState(0)

    // funcion para aumentar el contador
    function Increment() {
        setcounter( counter + 1)
    }

    // funcion para disminuir el contador

    function Decrement() {
        setcounter( counter - 1)
    }

    // funcion para reiniciar el contador

    function Reset() {
        setcounter(0)
    }

    return <div className='counter--div'>
        <h2>{counter}</h2>
        <div className="btn--div">
        <button onClick={Increment}>Aumentar Contador</button>
        <button onClick={Decrement}>Disminuir Contador</button>
        <button onClick={Reset}>Reiniciar Contador</button>
        </div>

    </div>

}