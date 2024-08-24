import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AiFillStar } from "react-icons/ai";
import'./fake.css'


const Fake = (props) => {
  
  let {id}=useParams();
  
  let [product, setproduct]=useState([])
  useEffect(function(){
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then(function(date){
      setproduct(date)
    })
  },[] )
  return (
    <div className='fake'>
    
     <img src={product.image}/>
   
     <div className='fake-del'>
     <h2>{product.category}</h2>
     <h3>{product.title}</h3>
     <div>
     <AiFillStar/>
     <AiFillStar/>
     <AiFillStar/>
     <AiFillStar/>
     <AiFillStar/>
     </div>
     <p>{product.description}</p>
     <h2> price: ${product.price}</h2>
     <button>Add To Cart</button>
     </div>
      
    </div>
  )
}

export default Fake
