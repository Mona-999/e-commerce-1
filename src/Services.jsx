import React from 'react'
import'./services.css'
import { MdLocalShipping } from "react-icons/md";
import { MdBrowserNotSupported } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";


const Services = () => {
  return (
    <div>
    <h1 className='title'>Our Services</h1>
    <div className='services'>
  
    <div>
   <i ><MdLocalShipping/></i>
  
    <p>Free Shipping</p>
    
    </div>
    <div>
    <i ><MdBrowserNotSupported/></i>
    <p>24/7 Support.</p>
    
    </div>
    <div>
    <i ><MdOutlinePayment/></i>
    <p>Online Payment.</p>
    

    
    </div>

    <div>
    <i><GiReturnArrow/></i>
    <p>Easy Return.</p>
    
    </div>

  

    
    
    </div>

    
    
    
  

      
    </div>
  )
}

export default Services
