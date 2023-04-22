
import './App.css';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemSomosNosotros from './components/ItemSomosNosotros/ItemSomosNosotros';
import Checkout from './components/Checkout/Checkout';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemContactenos from './components/ItemContactenos/ItemContactenos';
import Footer from './components/Footer/Footer';
import ListCartConteiner from './components/ListCartContainer/ListCartContainer';
import { CartProvider } from './context/CartContext';
import { NotificationProvider } from './notification/NotificationService';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NotificationProvider>
        <CartProvider>
          <NavBar />  
          <Routes>
            <Route path="/sobreNosotros" element={<ItemSomosNosotros/>}/>
            <Route path="/contactenos" element={<ItemContactenos/>}/>
            <Route path="/" element={<ItemListContainer greeting={'Productos'}/>}/>
            <Route path="/productos" element={<ItemListContainer greeting={'Productos'}/>}/>
            <Route path="/brand/:brandId" element={<ItemListContainer greeting={'Productos filtrados por marca'}/>}/>
            <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
            <Route path="/cart" element={<ListCartConteiner />}/>
            <Route path="/checkout" element={<Checkout/> }/>
          </Routes>
          <Footer/>
          </CartProvider>
        </NotificationProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
