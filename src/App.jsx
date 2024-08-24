import React, { useState } from 'react'

import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Shop from './Shop'
import Services from './Services'
import Contact from './Contact'
import Footer from './Footer'
import Fake from './Fake'
import './App.css'
import Cart from './Cart'
import Swal from 'sweetalert2'

const App = () => {

  const[cartitem,setcartitem]=useState([]);
  function AddToCart(product){
    let selecteditem = cartitem.find(item=>item.id==product.id);
    if(selecteditem){
      Swal.fire({
        title: " This Product Already Exite To Cart !",
        icon: "warning",
        showConfirmButton: false,
        timer:1500
    
      });
    }

    
    else{
      setcartitem([...cartitem , product])
      Swal.fire({
        title: " This Product Added  To Cart Succesfully !",
        icon: "success",
        showConfirmButton:false,
        timer:1500
        
      });
    }


    }


    function deleteproduct(product){
      setcartitem(cartitem.filter(item=> item.id != product.id))
      Swal.fire({
        title: " This Product removed  from Cart Succesfully !",
        icon: "success",
        showConfirmButton:false,
        timer:1500
        
      });
      
      
    }


  return (
    <div>
    <BrowserRouter>
    <Navbar  a={cartitem}/>
    <Routes>
    <Route path='/'  element={<Home/>}/>
    <Route path='about'  element={<About/>}/>
    <Route path='shop'  element={<Shop AddToCart={AddToCart} />}/>
    <Route path='services'  element={<Services/>}/>
    <Route path='contact'  element={<Contact/>}/>
    <Route path='fake/:id' element={<Fake/>}/>
    <Route path='cart' element={<Cart c={cartitem}  deleteproduct={deleteproduct} />}/>
    

    
    
    </Routes>
    <Footer/>
    
    </BrowserRouter>

      
    </div>
  )
}

export default App
