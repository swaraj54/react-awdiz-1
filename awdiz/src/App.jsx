import { useState, useContext } from "react";
import UserContext  from "./index";
import Addproducts from "./components/Addproducts";
import Home from './components/Home';



function App() {

  const userName = useContext(UserContext);
  console.log(userName,"username here")
  return (
    <>
      <h1>here - {userName}</h1>
      <Home />
    </>
  )
}
export default App