import logo from './logo.svg';
import './App.css';
import { MiPrimerEstado } from './components/MiPrimerEstado';
import { EjercicioUno } from './components/EjercicioUno';

function App() {

  const today = new Date();
  let year = today.getFullYear();
  console.log(year);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Estados en React - Hoos useState</h1>

        <div className='componentes'>
          <MiPrimerEstado />
          <hr/>
          <hr/>
          <EjercicioUno fechaActual = {year}/>
        </div>

        
      </header>
      
    </div>
  );
}

export default App;
