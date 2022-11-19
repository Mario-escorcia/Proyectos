import Titulo from "./TituloComponent/Titulo"
import Principal from './ComponentePrincipal/Principal'
// este componente renderiza los otros 2 (titulo y el principal donde va tosa la información) , para exporta despues todo como 1 solo componente al index.js 
function App() {
  return (
       <>
        <Titulo></Titulo>
        <Principal></Principal>
       </>
  )
}

// exporto el componente
export default App