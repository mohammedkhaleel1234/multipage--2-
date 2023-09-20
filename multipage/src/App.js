import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import { Header } from './Header';
import { Homepage } from './Homepage';
import { Product } from './Product';

import { Cart } from './Cart';
import React from "react"
import { Aboutus } from './Aboutus';
function App() {
  const [cart,setCart] = React.useState([])
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>}>
          <Route index element={<Homepage/>}></Route>
          <Route path='product' element={<Product cart={cart} setCart={setCart}/>}></Route>
          <Route path='cart' element={<Cart  cart={cart} setCart={setCart}/>}></Route>
          <Route path='aboutus' element={<Aboutus/>}></Route>
          

        </Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
