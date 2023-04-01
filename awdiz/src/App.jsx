import { useState, useContext } from "react";
import UserContext from "./index";
import Addproducts from "./components/Addproducts";
import Home from './components/Home';
import { Route, Routes } from "react-router-dom";
import Allproducts from "./components/Allproducts";
import SingleProductPage from "./components/SingleProductPage";
import Search from "./components/Search";



function App() {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/allproducts' element={<Allproducts />} />
        <Route exact path='/allproducts/:id' element={<SingleProductPage />} />
        <Route exact path='/search/:name' element={<Search />} />
      </Routes>
    </>
  )
}
export default App