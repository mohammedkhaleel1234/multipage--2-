import React from 'react'
import Productarray from './Productarray';
import './App.css';

export const Aboutus = () => {
  return ( 
    <div >
<div className='chairbanner'>
  <div>
    <h1 className='wellcomes'>Welcome to the</h1>
    <h1 className='chairsstore'>MODERN AND COMFORTABLE </h1>
    <p  className='headingchairstore'>A chair is a type of seat, typically designed for one person and consisting of one or more legs, a flat or slightly angled seat and a back-rest.</p>
    <button className='buynow'>BUY NOW</button>
  </div>
  <div>
    <img className='bannerimggirl1' src={require("./images/7043857_900-removebg-preview.png")} alt="" />
  </div>
</div>
 <div className='container'>
  
 
<div>
<div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={require("./images/still-life-minimalist-lifestyle.jpg")}  class="imgsss" alt="..."></img>
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <h5 class="cardsss">Classic Chair Wodden</h5>
        <p class="cardsstet ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus consequatur culpa repudiandae rerum quisquam exercitationem, ad consectetur earum eos cumque repellat ea quasi cupiditate vitae, vel illo et dolores expedita Teak wood is one of the best wood for furniture in India and most commonly used types of wood for furniture that is available locally </p>
        <p className='cardsstetone'>The Box Chair is one of our original armchair designs, a sure favourite at the Mr and Mrs White headquarters. A simple yet classic design of intricate details and proportions, this armchair will be loved for both its quality,</p>
        <p>Adjustable height, lumbar support and high-quality material are all characteristics of good office chairs and play an important role in keeping us sitting correctly at work. Poor posture can lead to neck, back, shoulder and leg strain, which can lead to low morale and additional health costs.</p>
        <p>While folding and stacking chairs are abundant due to their functionality and convenience, dining chairs, specifically the side chair </p>
      </div>
    </div>
  </div>
</div>
</div>

<div className='flexabout'>
  <div className='aboutleft'>
  <h5 class="carddining">Dining Table</h5>
        <p class="card-text ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus consequatur culpa repudiandae rerum quisquam exercitationem, ad consectetur earum eos cumque repellat ea quasi cupiditate vitae, vel illo et dolores expedita?</p>
        <p>How should I sit in my chair?
Sitting positions: Posture and back health
Best sitting position

keeping the feet flat or resting them on the floor or a footrest. avoiding crossing the knees or ankles. maintaining a small gap between the back of the knees and the chair. positioning the knees at the same height or slightly lower than the hips.</p>
<p>Round tables fit perfectly and look good in compact rooms and square dining areas. They offer flexible seating, can be mixed and matched with any kind of chairs and accommodate many people. Rectangular tables provide limited seating because of the uncomfortable leg placement.</p>

  </div>
  <div>
  
        <img className='aboutimg' src={require("./images/view-beautifully-decorated-green-kitchen.jpg")}></img>
  </div>
</div>
</div>  

<div className='modernroomone'>
          <div className='real'>
             <h1 className='subscribe'>Subscribe Our Newsletter</h1>
             <p className='save'>Subscribe Today for free and save 10% <br /> on your first purchase.</p>
          </div>
          <div className='realone'>
            <input className='box' type="text" placeholder='Enter Your Email Address Here...           |      SUBSCRIBE! ' />
          </div>
         </div>
         <div className='footer'>
          <div>
            <h1 className='footerheading'>Opening Time</h1>
            <p className='footerp'>Mon – Fri: 8AM – 10PM</p>
            <p className='footerpone'>Sat: 9AM-8PM</p>
            <p className='footerptwo'>Sun: Closed</p>
            <p className='footerpthree'>We Work All The Holidays</p>
          </div>
          <div>
          <h1 className='footerheadingone'>Quick Link</h1>
            <p className='footerpfour'>My Account</p>
            <p className='footerpfive'>Wishlist</p>
            <p className='footerpsix'>Order Tracking</p>
            <p className='footerpseven'>Privacy Policy</p>
            <p className='footerpeight'>Shipping information</p>
          </div>
          <div>
          <h1 className='footerheadingtwo'>Information</h1>
            <p className='footerpnine'>About Us</p>
            <p className='footerpten'>Shopping Guide</p>
            <p className='footerpeleven'>Delivery Information</p>
            <p className='footerptwelve'>Privacy Policy</p>
            <p className='footerpthirteen'>Our Store</p>
          </div>
          <div>
          <h1 className='footerheadingtwo'>Our Details</h1>
          <p className='footerpnine'>234 Antony Street Berlin, BC-1198</p>
            {/* <h1 className='footerheadingthree'>234 Antony Street Berlin, BC-1198</h1> */}
            <p className='footerpnine'>Email:</p>
            <p className='footerpfifteen'>demo@example.com</p>
            <p className='footerpnine'>Phone Number:</p>
            <h1 className='footerheadingfour'>+0123456789</h1>
          </div>

         </div>

         <div className='footers'>
          <div>
          <p className='paraheart'>© 2023 Khaleel Made with <img className='heart' src={require("./images/heart-removebg-preview.png")} alt="" /> by HasThemes.</p>
          </div>
          <div>
            <img className='visa' src={require("./images/images__11_-removebg-preview.png")} alt="" />
          </div>
         </div>


    </div>
    
   
      
                   
  
    
    
  )
}


