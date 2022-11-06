import './App.css';
import 'semantic-ui-css/semantic.min.css'
import MenuExampleBasic from './components/Menu';
import Pessoa from './components/Pessoa';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <div>
        <br></br>
        <h1>Estudos de React! Este é o Header</h1>
        <br></br>
      </div>

      <div>
        <MenuExampleBasic />
        <br></br>
      </div>

      </header>
      
      <body className='App-body'>

      <div>
        <Pessoa nome="Ricardo" idade="29" profissao="Dev BackEnd" foto="https://scontent.fqcj4-1.fna.fbcdn.net/v/t39.30808-6/314344423_5901843416533859_6628306785693738524_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGcvhqA8KeuxLH-ZBj9rKnMNJ3Ro8J0l4w0ndGjwnSXjNy6iwmN42Bc2EVdCdfRvX8_AMYh6TuFdunl4S7-Rnne&_nc_ohc=Djh89VR8NoQAX9HC3Tv&_nc_ht=scontent.fqcj4-1.fna&oh=00_AfBm14O4LAyn5o8ZVL0s6Lo8qZGpXKXFBnpNZm0tCsUXuA&oe=636D1336" />
      </div>

      </body>
    </div>
  );
}

export default App;
