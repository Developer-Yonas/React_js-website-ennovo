import './app.css'
import React, { useState } from "react";
import {HashRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Portfolio from './pages/portfolio/Portfolio';
import AboutUs from './pages/about/AboutUs';
import Contact from './pages/contact/Contact';
import Services from './pages/services/Services';
import NoMatch from './pages/noMatch/NoMatch';
import Blogg from './pages/vlog/Blogg';
import ReactGA from "react-ga";
import Blog2 from './pages/interrior/Blog2';
import Digital from './pages/digital/Digital';
import Website from './pages/website/Website';
import Branding from './pages/branding/Branding';


const TRACKING_ID = "UA-242757770-2";
ReactGA.initialize(TRACKING_ID);



function App() {
  const [left, setLeft] = useState(-10)
   const [top, setTop] = useState(-10)

   function moveDot(e) {
    //setting the left and top position same as the cursor position
    setLeft(e.clientX -10)
    setTop(e.clientY - 10)
  }

  return (
    
    <HashRouter >
    {/* the orangeRed circle that follows the cursor */}
      <div style={{left : `${left}px`, top : `${top }px`}} className="dotCursor"></div>

      {/* adding the div so we can add the event listner to it */}
      <div onMouseMove={(e)=>{moveDot(e)}}>
        <Nav/>
        <Routes >
          
          <Route path='/' element={<Home/>}/>
        <Route path='portfolio' element={<Portfolio/>}/>
          <Route path='about' element={<AboutUs/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='services' element={<Services/>}/>
          <Route path='vlog' element={<Blogg/>}/>
          <Route path='interrior' element={<Blog2/>}/>
          <Route path='website' element={<Website/>}/>
          <Route path='digital' element={<Digital/>}/>
          <Route path='branding' element={<Branding/>}/>
          <Route path='/*' element={<NoMatch/>}/>
          
        </Routes>
        <Footer/>
      </div>
    </HashRouter>
  )
}

export default App