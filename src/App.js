import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ItemListContainer from './Components/ItemListContainer';

import ItemDetailContainer from './Components/ItemDetailContainer';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import CartWidget from './Components/CartWidget';


function App() {
  return (
    <BrowserRouter>
    <div className='container-fluid fondo_oscuro'>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
      <Route path='/item/:detalleId' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<CartWidget/>}/>
    </Routes>
    <hr/>
    <Footer/>
    </div>
   </BrowserRouter>
  );
}

export default App;
