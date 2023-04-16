import { useState, useContext } from "react";
import UserContext from "./index";
import Addproducts from "./components/Addproducts";
import Home from './components/Home';
import { Route, Routes } from "react-router-dom";
import Allproducts from "./components/Allproducts";
import SingleProductPage from "./components/SingleProductPage";
import Search from "./components/Search";
import Test from "./components/Test";
import Callback from "./components/Callback";
import Reducer from "./components/Reducer";
import DecrementAge from "./components/DecrementAge";



function App() {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/dec-age' element={<DecrementAge />} />
        <Route exact path='/red' element={<Reducer />} />
        <Route exact path='/allproducts' element={<Allproducts />} />
        <Route exact path='/allproducts/:id' element={<SingleProductPage />} />
        <Route exact path='/search/:name' element={<Search />} />
        <Route exact path='/test' element={<Test />} />
        <Route exact path='/callback' element={<Callback />} />
      </Routes>
    </>
  )
}
export default App