import "./Titulo.css";
function Titulo() {
  // componente que muestra el titulo de la aplicación
  return (
    <div className="titulo__cont">
      <h1>Aplicacion del clima</h1>
      <p>Seleccione un pais y una ciudad validos en los inputs</p>
    </div>
  );
}

// exporto el componente
export default Titulo;
