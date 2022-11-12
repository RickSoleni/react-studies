import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Form from './components/Form';
import Evento from './components/Evento';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
      <div>
        <h1>Estudos de React! Este é o Header</h1>    
      </div>
      

      
      </header>
      <div>
      <Evento />
      <Form />
      </div>
    </div>
  );
}

export default App;
