import React from 'react'
import {  FaFacebook , FaTwitter, FaSkype  } from 'react-icons/fa'
import { FaStar } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NumberCounter from 'number-counter';
import im15 from'../src/assets/33.jpg'
import im16 from'../src/assets/333.jpg'
import im17 from'../src/assets/3333.jpg'
import im18 from'../src/assets/333333.jpg'
import im19 from'./assets/999.jpg'
import im20 from'./assets/1000.png'
import im21 from'./assets/666.webp'
import im22 from'./assets/9999.webp'
import im23 from'./assets/777.png'




import'./about.css'

const About = () => {

  var settings = {
    autoplay:100,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='About'>
    <div className='title'><h1>About Us</h1></div>

    <div className='about'>

     <div>
    <NumberCounter start={100}  end={3000} delay={5} preFix="+">
    </NumberCounter>
  
    <p>Students</p>
    </div>
   
    
     <div>
     <NumberCounter start={60}  end={1800} delay={5} preFix="+">

     </NumberCounter>
   
    <p>Instrutors</p>
 
     </div>
     <div>
    <NumberCounter start={100}  end={2000} delay={5} preFix="+">
    </NumberCounter>
    <p>Rooms</p>
    </div>
   

    <div>
     <NumberCounter start={10}  end={100} delay={5} postFix="%">
      </NumberCounter>
 
    <p>Successfully.</p>
   
    
    </div>
    </div>



    <div className='title'>
    <h1>  Our Team</h1>
    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.

    </p>
 
    </div>


    

 <div className='team'>
 <div className='te'>
  <img src={im15}/>
  <div className='tea'>
   <h2>  Amal Ibrahim</h2>
   <h3>Frontend Developer</h3>
   <div className='icon'>
   <i>  <FaFacebook/></i>
   <i> <FaTwitter/></i>
   <i> <FaSkype/></i>

 
   
   
   </div>
   </div>
 </div>
   
 <div className='te'>
 <img src={im16}/>
 <div className='tea'>
 <h2>  Sami Azab</h2>
 <h3> Backend Developer</h3>
 <div className='icon'>
 <i>  <FaFacebook/></i>
 <i> <FaTwitter/></i>
 <i> <FaSkype/></i>
 </div>
 </div>
</div>
 
<div className='te'>
<img src={im17}/>
<div className='tea'>
<h2>  Ahmed Ibrahim</h2>
<h3>Frontend Developer</h3>
<div className='icon'>
<i>  <FaFacebook/></i>
   <i> <FaTwitter/></i>
   <i> <FaSkype/></i>


</div>
</div>
</div>

<div className='te'>
<img src={im18}/>
<div className='tea'>
<h2>  Esraa Adel</h2>
<h3>Frontend Developer</h3>
<div className='icon'>
<i>  <FaFacebook/></i>
   <i> <FaTwitter/></i>
   <i> <FaSkype/></i>

</div>
</div>
</div>

   </div>


   <div className='title'><h1>Our Client Says</h1></div>




   <Slider  {...settings}>
   
   <div className='test'>
   <img src={im19}/>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, aut pariatur? Excepturi voluptatibus nobis expedita atque iusto enim quia? Eligendi blanditiis a, non est quod dolorum impedit quaerat nulla animi?
   </p>
   <div>
   <FaStar/>
   <FaStar/>
   <FaStar/>
   <FaStar/>
   <FaStar/>
   </div>
   <h2>Ahmed Samy</h2>
   <h4>Frontend Developer</h4>

   </div>

   <div className='test'>
   <img src={im20}/>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, aut pariatur? Excepturi voluptatibus nobis expedita atque iusto enim quia? Eligendi blanditiis a, non est quod dolorum impedit quaerat nulla animi?
   </p>
   <div>
   <FaStar/>
   <FaStar/>
   <FaStar/>
   <FaStar/>
   <FaStar/>
   </div>
   <h2>Esraa Ahmed</h2>
   <h4>Backend Developer</h4>

   </div>
   <div className='test'>
   <img src={im21}/>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, aut pariatur? Excepturi voluptatibus nobis expedita atque iusto enim quia? Eligendi blanditiis a, non est quod dolorum impedit quaerat nulla animi?
   </p>
   <div>
   <FaStar/>
   <FaStar/>
   <FaStar/>
   <FaStar/>
   <FaStar/>
   </div>
   <h2>Yara Tamer</h2>
   <h4>Frontend Developer</h4>

   </div>
   <div className='test'>
   <img src={im22}/>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, aut pariatur? Excepturi voluptatibus nobis expedita atque iusto enim quia? Eligendi blanditiis a, non est quod dolorum impedit quaerat nulla animi?
   </p>
   <div>
   <FaStar/>
   <FaStar/>
   <FaStar/>
   <FaStar/>
   <FaStar/>
   </div>
   <h2>Ahmed Yasser</h2>
   <h4>Web Developer</h4>

   </div>
   <div className='test'>
   <img src={im23}/>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, aut pariatur? Excepturi voluptatibus nobis expedita atque iusto enim quia? Eligendi blanditiis a, non est quod dolorum impedit quaerat nulla animi?
   </p>
   <div>
   <FaStar/>
   <FaStar/>
   <FaStar/>
   <FaStar/>
   <FaStar/>
   </div>
   <h2>Sara Ahmed</h2>
   <h4>Backend Developer</h4>

   </div>


 
   
   
   </Slider>

    
    </div>
  )
}

export default About
