import logo from './logo.svg';
import './App.css';
import { EjemploComponents } from './components/EjemploComponents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <EjemploComponents />
      </header>
      
    </div>
  );
}

export default App;
