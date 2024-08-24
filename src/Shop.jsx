import React, { useEffect, useState } from 'react'
import './shop.css'
import { Link } from 'react-router-dom'


const Shop = ({AddToCart }) => {
  

  let [products, setproducts]=useState([])
  useEffect(function(){
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(function(date){
      setproducts(date)
    })
  },[] )
      

  return (
    <div className='shop'>
    <div className='title'>
    <h1>Fake Api Products</h1>
    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt architecto sint labore provident eaque mollitia aliquid ratione adipisci expedita pariatur! Corrupti sit deleniti assumenda ea accusantium molestiae nisi rerum aspernatur?</p>
  
    </div>

    <div className='products'>
    {products.map(function(product){
      return(
        <div className='product' key={product.id}>
        <img src={product.image}/>
        <h3>{product.title.slice(0,10)}</h3>
        <h3>price: ${product.price}</h3>
        <h3>{product.category}</h3>
        <h3>{product.description.slice(0,15)}</h3>
        <h4>{product.rating.count}</h4>
       
        <button onClick={()=>AddToCart(product)}>Add To Cart</button>
        
        <Link to={`/fake/${product.id}`} className='mona'>

        <button > More Detalis</button>
        
        </Link>
        
        </div>
      )



    })}


    
    
    
    </div>

      
    </div>
  )
}

export default Shop
