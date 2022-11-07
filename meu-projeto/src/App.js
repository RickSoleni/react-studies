import './App.css';
import 'semantic-ui-css/semantic.min.css'
import MenuExampleBasic from './components/Menu';
import Evento from './components/Evento';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
      <div>
        <h1>Estudos de React! Este é o Header</h1>    
      </div>

      <div>
        <MenuExampleBasic />
      </div>
      <Evento />
      </header>
      
    </div>
  );
}

export default App;
