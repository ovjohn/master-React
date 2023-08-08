import logo from './logo.svg';
import './App.css';
import { ComponenteUseEffect } from './components/ComponenteUseEffect';
import { AjaxComponent } from './components/AjaxComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponenteUseEffect />

        <AjaxComponent />

      </header>
    </div>
  );
}

export default App;
