import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Counter from './components/Counter/Counter';
import {useState} from 'react'

function App() {
  const [view , setView] = useState('manzanas')

  return (
    <div className="App">
      <div>
        <button onClick={()=> setView('manzanas')}>Manzanas</button>
        <button onClick={()=> setView('naranjas')}>Naranja</button>
        <button onClick={()=> setView('bananas')}>Bananas</button>

      </div>
        <Navbar/>
        {view =='manzanas' && <Counter title='Manzanas' min='5' max='10' />}
        {view =='naranjas' &&<Counter title='Naranja' min='1' max='20' />}
        {view =='bananas' &&<Counter title='Banana' min='1' max='20' />}
    </div>
  );
}

export default App;
