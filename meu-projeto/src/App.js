import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Form from './components/Form';
import Evento from './components/Evento';
import MenuHeader from './components/MenuHeader';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
      <div>
        <h1>Estudos de React! Este é o Header</h1>    
      </div>
      <div>
      <MenuHeader />
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
