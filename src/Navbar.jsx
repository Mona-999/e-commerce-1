import React from 'react'
import { Link } from 'react-router-dom'
import { BsCart4 } from "react-icons/bs";

import { FaBagShopping } from "react-icons/fa6";


import './navbar.css'


const Navbar = ({a}) => {
  return (
    <div className='nav'>
    <div className='navbar'>
    <BsCart4 />
    </div>
    <div className='midde-nav'>
    <Link to ='/'> Home</Link>
    <Link to ='about'> About</Link>
    <Link to ='shop'> Shop</Link>
    <Link to ='services'> Services</Link>
    <Link to ='contact'> Contact</Link>
    </div>
    <div className='right-nav'>
    <Link to='./cart' className='car'>  
      <FaBagShopping />
      <p>{a.length}</p>
    </Link>

    
    
   
    
   
    </div>  
    </div>
  )
}

export default Navbar
