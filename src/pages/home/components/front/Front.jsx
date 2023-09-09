import { useRef } from 'react'
import  './front.css'
export default function Front() {
  const scrollToSelfRef = useRef(null)
  const scrollToSelf = () =>{
    scrollToSelfRef.current.scrollIntoView({behavior : 'smooth'})
  }
  return (
    <div className='front'>
      <div className="front_container">
        <div className="left">
          {/* <h1>Design with purpose, <span className="frontFocus"><span>Innovate</span></span> with Ennovo. We bring <span className="frontFocus"><span>your ideas</span></span> to life</h1> */}
          {/* <h1><span className="frontFocus"><span>Design</span></span> with purpose, Innovate <span className="frontFocus"><span>with Ennovo</span></span>.</h1> */}
          {/* <h1>We specialize in branding, Interior Design and web development</h1> */}
          <h1>Innovative, Exquisite,</h1><h1> <span className="frontFocus"><span>Functional</span></span> Designs . Helping</h1><h1> visionary <span className="frontFocus"><span>brands</span></span> create an</h1><h1> uncommon future.</h1>
          
          <a href="tel:+251948071877" >Contact us <i className="fa-solid fa-phone"></i></a>
        </div>

        <div className="right">
          <img  src="assets/logo2.png" alt="" />
        </div>

        {/* scrolls to itself so it seems it scrolled to the portfolio section */}
        <span onClick={scrollToSelf} ref={scrollToSelfRef} className="goDown"><i className="fa-solid fa-arrow-down-long"></i></span>
      </div>
    </div>
  )
}