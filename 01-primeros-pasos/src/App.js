import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { CuartoEventos } from './CuartoEventos';



function App() {

  let ficha_medica = {
    altura: "1,70cm",
    grupo: "ORH+",
    condicion: "Saludable"
  }

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Master en React 2023
        </p>
        <div className='componentes'>
          <MiComponente />
          <hr />
          <SegundoComponente />
          <hr />
          <TercerComponente nombre="Eva" apellido="Molina" ficha={ficha_medica}/>
        </div>
        <hr />
        <CuartoEventos />        
      </header>
    </div>
  );
}

export default App;
