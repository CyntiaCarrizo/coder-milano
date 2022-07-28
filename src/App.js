
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import "./CSSpersonal/Csspersonalizado.css"
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Cart from './components/Cart';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
          <NavBar></NavBar>
              <Routes>
                <Route path='/' element={<ItemListContainer greeting ="Milano es una tienda especializada en vinos, espumantes, whiskys, bebidas blancas, cervezas y regaleria."></ItemListContainer>}></Route>
                <Route path='/category/:idCategory' element={<ItemListContainer></ItemListContainer>}></Route>
                <Route path='/item/:idItem' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
                <Route path='/cart' element={<Cart></Cart>}></Route>
             </Routes>
      </BrowserRouter>
      
      </header>
      
    {/*<ItemListContainer greeting ="Milano es una tienda especializada en vinos, espumantes, whiskys, bebidas blancas, cervezas y regaleria."></ItemListContainer>*/} 
    {/*<ItemDetailContainer></ItemDetailContainer>*/}
    </div>
  );
}

export default App;
