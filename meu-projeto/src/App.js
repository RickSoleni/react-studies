import './App.css';
import HelloWorld from './components/HelloWorld';
import 'semantic-ui-css/semantic.min.css'
import MenuExampleBasic from './components/Menu';
import Imagem from './components/Imagem';

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
      </header>
      <body className='App-body'>
      <div>
          <HelloWorld />
        </div>
        
        <div>
          <Imagem />
        </div>
      </body>
    </div>
  );
}

export default App;
