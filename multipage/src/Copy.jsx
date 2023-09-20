import React from 'react';
import Productarray from './Productarray';
import './App.css';

export const Copy = ({ cart, setCart }) => {
  function adddetail(data) {
    setCart([...cart, data])
  }
  return (
    <div className='jill'>
      {/* <div className='productbanner'>
         <img className='comfortable' src={require("./images/grey-comfortable-armchair-isolated-white-background-removebg-preview.png")} alt="" />
      </div> */}
      
      {

        Productarray.map((data) =>
          <div className='fullflex'>
          
            <div>
              <img src={data.img} alt="" width="500px" />
            </div>
            <div className='fullflexone'>
              <div>
              <h1></h1>
              <p className='datacontent'>{data.content}</p>
              <div className='dataflex'>
              <img className='datastar'  src={data.star}  alt="" width="100px"   />
              <p className='paracustomer'>(1 customer review)</p>
              </div>
              <p className='dataline'>{data.line}</p>
              <div className='datapriceflex'>
              <h1 className='classprice'>Price:</h1>
              <p className='dataprice'> {data.price}</p>
              </div> 
              <p className='what'>{data.contentone} </p>
              <div className='grouptable'>
           <div className='tripple'>
           <p className='Qty'>Qty</p>
          <p className='Qtyone'>CROWN SUMMIT BACKPACK</p>
          <p className='qtyp'>$295.00</p>
           </div>
           <div className='trippleone'>
           <p className='Qtytwo'>Qty</p>
           <p className='Qtythree'>Qty  1       Vestibulum suscipit      $140.00</p>
           <p className='Qty'>$295.00</p>
         </div>
           </div>
           <div>
             <button className='addsstocart' onClick={() => adddetail(data)}>ADD TO CART</button>

           </div>
           <div>
             <button className='ifs'> <img className='heartattack' src={require("./images/download__9_-removebg-preview.png")} alt="" />Add to Wishlist</button>
             <button className='ifsone'>Compare</button>
           </div>
           <div className='line'>

           </div>
           <div className='swing'>
             <h1 className='cate'>CATEGORIES:</h1>
             <p className='acceele'>Accessories, Electronics</p>
           </div>
           <div>
                  <p className='free'>Free Delivery </p>
                  <p className='topbrand'>Top Brand</p>
                  <p className='bankoffer'>Bank Offer</p>
          </div>
          <div className='logoflex'>
             <h1 className='sharethis'>SHARE THIS PRODUCT</h1>
             <img className='logos' src={require("./images/images__6_-removebg-preview.png")} alt="" />
           </div>      
           </div>
            </div>
          </div>)


      }      
      <div className='modernroomone'>
          <div className='real'>
             <h1 className='subscribe'>Subscribe Our Newsletter</h1>
             <p className='save'>Subscribe Today for free and save 10% <br /> on your first purchase.</p>
          </div>
          <div className='realone'>
            <input className='box' type="text" placeholder='Enter Your Email Address Here...           |         SUBSCRIBE! ' />
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
            <h1 className='footerheadingthree'>234 Antony Street <br /> Berlin, BC-1198</h1>
            <p className='footerpfifteen'>demo@example.com</p>
            <h1 className='footerheadingfour'>+0123456789</h1>
          </div>

         </div>
         
         <div className='footers'>
          <div>
          <p className='paraheart'>© 2021 Nelson Made with <img className='heart' src={require("./images/heart-removebg-preview.png")} alt="" /> by HasThemes.</p>
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
        
       
        
        
       
        
        
        
       
        
          
