import React from 'react'



export const Cart = ({ cart, setCart, }) => {

  const [price, setPrice] = React.useState(0);

  React.useEffect(() => {
    let amount = 0;
    cart.map((productarray) => amount += (productarray.count * productarray.price))
    setPrice(amount);



  })



  const remove = (data) => {
    let removedata = cart.filter((res) => res.id !== data.id);
    alert(data.content + " removed succesfully")
    
    setCart(removedata);
  }

  const update = (datas, a) => {
    let ind = cart.indexOf(datas)
    cart[ind].count += a;
    setCart([...cart]);


    if (cart[ind].count < 0) {
      cart[ind].count = 0;

    }

  }
  return (
    <div>
      <div className='chairbanner1'>
  <div>
    <h1 className='wellcomes1'>Home / Cart</h1>
  </div>

</div>
      {

        cart.map((data) =>
  <div class=''>
    <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={data.img} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <div className='downs'>
        <h5 class="card-title">{data.content}</h5>
        </div>
        <div className='downsone'>
        <p class="card-text">{data.contentone}</p>
        </div>
        <div className='downstwo'>
        <p class="card-text">{data.price}</p>
        </div>
        <div className='downsthree'>
        <p class="card-text"><small class="text-body-secondary">{data.line}</small></p>
        </div>
        <div className='carf'>
        <div >
        <button  class="btn btn-outline-dark" onClick={() => update(data, 1)}>+</button>
        </div>
        <div className='moveleft'>
        <p  class="card-text">{data.count}</p>
        </div>
        <div className='moveleftone'>
        <button     class="btn btn-outline-dark" onClick={() => update(data, -1)}>-</button>
        </div>
        </div>
        <div className='upcart'>
        <button  class="btn btn-outline-dark" onClick={() => remove(data)}>Remove</button>
        </div>
      </div>
    </div>
  </div>
</div>
    {/* <div>
    
      <img src={data.img} class="img-fluid rounded-start" alt="..."></img>
    </div> */}
    {/* <div class="col-md-8">
      
        <h5 class="card-title"></h5>
        <p class="card-text"></p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
        <div className='buttoncart'>
                 <div>
               <button className='icre' >+</button>
               </div>
               <div className='cartsf'>
               <h1 className='ncartcolor' >{data.count}</h1>
               <button className='decre' onClick={() => update(data, -1)}>-</button>
               </div>
               </div>
               <h2 className='tcartcolor'>Total amount:  {price}</h2>
               <button className='cartremove' onClick={() => remove(data)}>Remove</button>            
    </div> */}
  </div>
          /* // <div className='cartflex'>

          //   <div>
          //     <img src={data.img} alt="" width="350px"  className='img66'/>
          //   </div>

          //   <div  >


          //     <p className='cartcolor' >{data.content}</p>






          //     <h1 className='hcartcolor' >Product <span>:</span> {data.count}</h1>
          //     <h2 className='pcartcolor'>Price <span >:</span>{data.price}</h2>


          //     <div className='buttoncart'>
          //       <div>
          //     <button className='icre' onClick={() => update(data, 1)}>+</button>
          //     </div>
          //     <div className='cartsf'>
          //     <h1 className='ncartcolor' >{data.count}</h1>
          //     <button className='decre' onClick={() => update(data, -1)}>-</button>
          //     </div>
          //     </div>






          //     <h2 className='tcartcolor'>Total amount:  {price}</h2>

          //     <button className='cartremove' onClick={() => remove(data)}>Remove</button>

          //   </div>

           
          // </div> */
          )


      }
            <h1 className='totalcart'>{price <=0 ? "" :<h1>Total Price: {price}</h1>}</h1>

    </div>
  )
}
