import {useState } from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'


export default function Nav() {
  //show links when device width is below 960px
  const [showLinks, setShowLinks] = useState(false)
  // const [darkMode, setDarkMode] = useState(false)

  //darkmode
  // const toggleDarkMode = () =>{
  //   setDarkMode(prev => !prev);
  //   document.documentElement.setAttribute("--color-primary", 'red')
  // }
  
  return (
    <div className='nav' >
        <div className="container">
            <NavLink onClick={()=>{setShowLinks(false)}} to='/' ><img className='logo' src="assets/logo3.png" alt="" /></NavLink>
            <div  className={showLinks? 'showLinks navLinks': 'navLinks'}>
              
                <NavLink onClick={()=>{setShowLinks(false)}} to='/portfolio' >Portfolio</NavLink>
                <NavLink onClick={()=>{setShowLinks(false)}} to='/services' >Services</NavLink>
                <a href='https://ennovohub.com'>ennovohub</a>
                <NavLink onClick={()=>{setShowLinks(false)}} to='/about' >About us</NavLink>
                <NavLink onClick={()=>{setShowLinks(false)}} to='/contact' >Contact us</NavLink>
                <NavLink onClick={()=>{setShowLinks(false)}} to='/vlog' >Blog</NavLink>

                {/* <div onClick={()=>{toggleDarkMode()}} style={{justifyContent: darkMode? 'right': 'left'}} className="darkMode"><div className="darkModeBall"></div></div> */}
            </div>
            <div onClick={()=>{setShowLinks(prev=>(!prev))}} className={showLinks? 'closeBar menuBar': 'menuBar'}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
        </div>
    </div>
  )
}
