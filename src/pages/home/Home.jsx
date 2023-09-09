import React, {  useEffect  } from 'react'
import Form from "../../components/form/Form";
import Front from "./components/front/Front";
import PortfolioHighlight from "./components/portfolioHighlight/portfolioHighlight";
import Section4 from "./components/section4/Section4";
import WhatWeDo from "./components/whatWeDo/WhatWeDo";
import './home.css'
import ReactGA from "react-ga";
export default function Home() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);


  ReactGA.event({
    
    action: "text action",
    label: "test label",
    
  });
  


  return (
    <div>
        <Front/>
        <PortfolioHighlight/>
        <WhatWeDo/>
        <Section4/>
        <Form/>
    </div>
  )
}
