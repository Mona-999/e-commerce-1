import React from 'react'
import'./cart.css'

const Cart = ({c , deleteproduct}) => {
  let total=0
  return (
    <div className='cart'>
         {c.length == 0  &&  
          <h2 className ='no-product'>No Exists Product To Cart</h2>
         }
    <div>
    {c.map(function(item){
      total=total+item.price
      return(
        <div className='cart-item'>

        <img src={item.image}/>
        <h2>price: ${item.price}</h2>
        <button onClick={()=> deleteproduct(item)}>Remove Product</button> 
        </div>
      )
    })}
    </div>
     { c.length != 0 &&  <div className='total'>
     <div>
        <h3>Total: </h3>
        <h3> $ {total}</h3>
     </div>
     
      </div>
  }
     



      
    </div>
  )
}

export default Cart;
