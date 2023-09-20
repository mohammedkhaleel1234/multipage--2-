import React from 'react';
import Productarray from './Productarray';
import './App.css';

export const Product = ({ cart, setCart }) => {
  function adddetail(data) {
    alert(data.content + "Added succesfully")
    setCart([...cart, data])
  }
  return (
    <div className='jill'>
      <div className='chairbanner'>
  <div>
    <h1 className='wellcomes'>Welcome to the</h1>
    <h1 className='chairsstore'>MODERN NEW DESIGN CHAIR </h1>
    <p  className='headingchairstore'>An office chair, or desk chair, is a type of chair that is designed for use at a desk in an office. It is usually a swivel chair, with a set of wheels for mobility and adjustable height.</p>
    <button className='buynow'>BUY NOW</button>
  </div>
  <div>
    <img className='bannerimggirl2' src={require("./images/7043860_903-removebg-preview.png")} alt="" />
  </div>
</div>
      {/* <div className='productbanner'>
         <img className='comfortable' src={require("./images/grey-comfortable-armchair-isolated-white-background-removebg-preview.png")} alt="" />
      </div> */}
       <div className='fullflex container'>
      {

        Productarray.map((data) =>
         
                     <div className='subcarddesign'>
          <div class="card" >
  <img src={data.img} class="card-img-top carddimage" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{data.content}</h5>
    <div className='d-flex justify-content-between'>

    <img src={data.star} class="card-img-top" alt="..." className='widthstart'/> <p class="card-text mt-2"><small class="text-body-secondary">5.00</small></p>
    </div>
    <p class="card-text ">{data.contentone}</p>
    <p class="card-text ">Price: {data.price}</p>
    <p class="card-text "><small class="text-body-secondary">{data.line}</small></p>
    <a href="#" class="btn btn-dark "  onClick={() => adddetail(data)}>Add to cart</a>
  </div>
</div>

          </div>

         )


      } 
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

                  
           

                



                
                

                
                
           

                

                
                
                
                


                
              


      
    // import React from 'react'
// import Productarray from './Productarray'
// import './App.css'

// export const Product = ({ cart, setcart }) => {
//   function adddetail(data) {
//     setcart([...cart, data])
//   }
//   return (
    // <div>
    //   <div className='productbanner'>
    //     <div>
    //       {/* 
    //       <h1 className='productsection'>PRODUCT</h1>
    //       <p className='productparagraph'>Modern commercial furniture production may be roughly divided into groups: general furniture—bookcases, wardrobes, tables, etc.; chairs and upholstered suites; and specialized items.</p>
    //       <img className='bigsaleoffer' src={require("./images/1489416_8027-removebg-preview.png")} alt="" /> */}
          
          
    //     </div>
       

//       </div>
//       {
//         Productarray.map((data)=>
//         <div className='fullflex'>
//           <div>
//           <img className='picone' src={data.img} alt=""/>
//           </div>
     
//       <div>
//           <h1 className='kets'>Classic Chair Wodden</h1>
//           <div className='double'>
          
        
      
//           <p className='slightmove'>(1 customer review)</p>
//           </div>
//           <h1 className='numberwidth'>$66.00 $77.00</h1>
//           
//           
//           
//           
//           
//           </div>
//           <div>

//           </div>
          
          

         
      
//     </div>
    
        
        
//         )
//       }


      
  

          
//         </div>
//         )
//         }
        
       
        
        
       
        
        
        
       
        
          
