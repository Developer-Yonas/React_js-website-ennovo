import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './portfolioHighlight.css'
import {portfolioHighlightData} from './portfolioHighlightData.js'
import {tardy} from '../../../../scripts/tardy'

export default function Portfolio() {

  const [hiddenSection, setHiddenSection] = useState(true)
    const ScrollRef = useRef(null)

    useEffect(()=>{
      tardy(ScrollRef.current, setHiddenSection)
    },[])

  return (
    <div ref={ScrollRef} className={hiddenSection? "hiddenSection portfolioHighlight" : "portfolioHighlight"} >
      <h1 className="portfolioHighlightTitle">Our projects tell you who we are and how we work.</h1>
        <div className="slider">
          <div className="slideTrack">
            {
              portfolioHighlightData.map(p=>{
                return (
                  <div key={p.id} className="slide">
                    <img src={p.img} alt="" />
                  </div>
                )
              })
            }            
          </div>
        </div>

        <Link to='/' className='seePortfolioBtn' >See our portfolio</Link>
        
    </div>
  )
}