import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='header'>
      <ul className='flexone'>
       {/* <img className='img' src={require("./images/9905009_4263339-removebg-preview.png")} alt="" /> */}
    
       <div>
       <h1 className='logo'>Khaleel.</h1>
       </div>
       <div className='headtwo'>
       <Link className='home' to="/">Home</Link>
       <Link className='aboutus' to="/aboutus">About</Link>

       <Link className='product' to="/product">Product</Link>
     
       {/* <Link className='aboutus' to="/aboutus">Aboutus</Link> */}
       <Link className='carts' to="/cart"><img className='cartsimg' src={require("./images/shopping-cart.png")} alt="" /></Link>
       <img className='searchheight' src={require("./images/loupe.png")} alt="" />
       <img className='profileheight' src={require("./images/user-image-with-black-background.png")} alt="" />
       {/* <input className='input' type="text" placeholder='Search'/> */}
       
       {/* <img className='imgone' src={require("./images/basket-cart-icon-27.png")} alt="" /> */}
       
       </div>
       
       </ul>
       

       <Outlet/>


       
    </div>
  )
}
