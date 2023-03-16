import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useState } from 'react';
import Register from './components/Register';
import Effect from './components/Effect';

function App() {

  // var myNumber = 10;
  // myNumber = 20;

  // const [name, setName] = useState("true");
  // console.log(name, "name")
  // function increment() {
  //   setName(name + 1)
  // }
  // function decrement() {
  //   setName(name - 1)
  // }
  // function toChange() {
  //   setName("false");
  // }
  return (
    <div className="App">
      {/* <h1>Initital Value {name} </h1>
      {/* <button onClick={ () => increment() }>+</button>
      <button  onClick={ () => decrement() }>-</button> */}
      {/* <button onClick={() => toChange()}>Change to False</button> */} 
      {/* <Register/> */}
      <Effect/>
    </div>
  );
}
export default App;

// npx create-react-app yourAppName
// cd yourAppName
// npm start 
