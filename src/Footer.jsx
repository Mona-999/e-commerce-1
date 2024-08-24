import React from 'react'
import "./footer.css"
import img1 from "../src/assets/55.svg"
import img2 from'../src/assets/a.png'
import img3 from'../src/assets/b.png'
import img4 from'../src/assets/c.png'
import img5 from'../src/assets/d.png'
import img6 from'../src/assets/e.png'
import img7 from'../src/assets/f.png'
import {FaFacebook , FaTwitter , FaWhatsapp, FaInstagram ,FaYoutube} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
  <div className='top-foot'>
 <div> <img src={img1}/></div>
  <div>
  <h2>Subscribe to our Newsletter</h2>
  <h3>Get all the latest information, Sales and Offers.</h3>
  </div>
  <div><input type='text' placeholder='Email Edress'/>
  <button>Subscribe</button></div>
  </div>
  <hr/>
  
  <div className='middle-foot'>
  <div className='mid'>
    <h2>Bravo Company
    </h2> 
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, voluptatibus? Inventore excepturi harum eum expedita! Cupiditate temporibus provident omnis voluptatibus libero architecto aperiam nobis, fugiat officiis cum voluptas, sequi quasi.
    </p>
  </div>
  <div className='foot-icon'>
  <h2>Useful Links</h2>
  <i><FaFacebook/></i>
  <i><FaTwitter/></i>
  <i><FaInstagram/></i>
  <i><FaWhatsapp/></i>
  <i><FaYoutube/></i>
  </div>
  <div className='media'>
<h1>  Social Media</h1>
<h4>Home</h4>
<h4>About</h4>
<h4>Services</h4>
<h4>Shop</h4>
<h4>Contact</h4>
  </div>

  </div>
  <hr/>
  <div className='bottom-foot'>
  <div><p>Copyright by@Bravo Team - 2024</p></div>
  <div className='bottom'>
  
  <img src={img2}/>
  <img src={img3}/>
  <img src={img4}/>
  <img src={img5}/>
  <img src={img6}/>
  <img src={img7}/>
  
  
  
  </div>
  
  
  
  </div>
      
    </footer>
  )
}

export default Footer
