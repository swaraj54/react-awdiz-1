import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [name, setName] = useState(0);
  // console.log(name,"name")
  function increment(){
    setName(name+1)
  } 
  function decrement(){
    setName(name-1)
  }
  return (
    <div className="App">
      <h1>Initital Value {name} </h1>
      <button onClick={ () => increment() }>+</button>
      <button  onClick={ () => decrement() }>-</button>
    </div>
  );
}
export default App;

// npx create-react-app yourAppName
// cd yourAppName
// npm start 
