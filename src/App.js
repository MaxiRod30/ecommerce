
import './App.css';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemSomosNosotros from './components/ItemSomosNosotros/ItemSomosNosotros';
import ItemEventos from './components/ItemEventos/ItemEventos';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemContactenos from './components/ItemContactenos/ItemContactenos';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        
        <Routes>
          <Route path="/sobreNosotros" element={<ItemSomosNosotros/>}/>
          <Route path="/eventos" element={<ItemEventos/>}/>
          <Route path="/contactenos" element={<ItemContactenos/>}/>
          <Route path="/" element={<ItemListContainer greeting={'Productos'}/>}/>
          <Route path="/productos" element={<ItemListContainer greeting={'Productos'}/>}/>
          <Route path="/brand/:brandId" element={<ItemListContainer greeting={'Productos filtrados por marca'}/>}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
