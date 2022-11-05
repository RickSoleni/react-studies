import './App.css';

function App() {
  const name = "Rick"
  const url = "https://img.ifunny.co/images/0ac9a157aa48d2c3e7c120b05d849a00a37764f485549ebe832712af1160dd4c_1.webp"
  function soma(a,b){
    return a+b
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <h2>Alterando JSX</h2>
        </div>
        <div><h3>Testando a constante de nome: {name}</h3></div>
        <p> Testando função "function soma(a,b)": {soma(1,5)}</p>
        <img src={url} alt="Minha imagem" />
      </header>
    </div>
  );
}

export default App;
