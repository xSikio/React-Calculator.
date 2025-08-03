import "./App.css";
import freeCodeCampLogo from "./imagenes/FreeCodeCamp_logo.png"
import Boton from "./componentes/Boton";

function App() {
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
        src={freeCodeCampLogo}
        className= "frecodecamp-logo"
        alt="logo de frecodecamp" />
        </div>
        <div className="contenedor-calculadora">
          <div className="fila">
            <Boton>1</Boton>
          </div>
          <div className="fila"> <Boton>2</Boton></div>
          <div className="fila"> <Boton>3</Boton></div>
          <div className="fila"> <Boton>4</Boton></div>
          <div className="fila"> <Boton>5</Boton></div>
          <div className="fila"> <Boton>6</Boton></div>
          <div className="fila"> <Boton>7</Boton></div>
          <div className="fila"> <Boton>8</Boton></div>
          <div className="fila"> <Boton>9</Boton></div>
        
        </div>
        </div>
  );
}

export default App;
