import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
        <NavBar />
        <ItemListContainer greeting={"Bienvenido a ElectroMax!"}/>
    </div>
  );
}

export default App;
