
import './contact.css'

const Contact = () => {
  return (
    <div>
        <h1 className='title'>Contact Us</h1>

        <div className='con'>
        <div className='frame' >
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d878833.2911463273!2d31.27330285327628!3d30.420055393651225!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7f147e5fe7337%3A0x27ea7767255ccbe!2z2LTYsdmD2Kkg2KjYsdin2YHZiCDZhNiq2LnZhNmK2YUg2KfZhNio2LHZhdis2Kk!5e0!3m2!1sar!2seg!4v1710586460536!5m2!1sar!2seg" width="600" height="450" ></iframe></div>

        <div className='input'>
        <input type='text' placeholder='Your Name'/>
        <input type='text' placeholder='Your Email'/>
        <input type='number' placeholder='Your Phone'/>
        <textarea placeholder='Your Message'/>
        </div>
        </div>
    </div>
  )
}

export default Contact
