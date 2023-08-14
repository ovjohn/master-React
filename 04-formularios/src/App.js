import logo from './logo.svg';
import './App.css';
import { FormularioComponets } from './components/FormularioComponents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FormularioComponets />
      </header>
    </div>
  );
}

export default App;
