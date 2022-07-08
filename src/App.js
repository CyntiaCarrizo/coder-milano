
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
      </header>
     <ItemListContainer greeting ="Milano es una tienda especializada en vinos, espumantes, whiskys, bebidas blancas, cervezas y regaleria."></ItemListContainer>   
    </div>
  );
}

export default App;
