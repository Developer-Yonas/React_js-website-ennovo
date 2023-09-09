import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import './whatWeDo.css'
import {workData} from './whatWeDoData.js'
import {tardy} from '../../../../scripts/tardy'


export default function WhatWeDo() {

  const [hiddenSection, setHiddenSection] = useState(true)
    const ScrollRef = useRef(null)

    useEffect(() => {
      tardy(ScrollRef.current, setHiddenSection)
    },[])

  //for the 80% width
  const oneSideMargin = window.innerWidth*0.1;
  // get the half width of the section
  const halfScreen = window.innerWidth / 2;
  const [left, setLeft] = useState(0)

  function move(e) {
    //setting the left position if (mouse pointer is after the 50%
    // of the width, the image's left position will decrease to prevent overflow)
    setLeft(e.clientX <= halfScreen? e.clientX-(oneSideMargin/2) : e.clientX-(oneSideMargin*2))
  }

  return (
    <div  className="whatWeDo">
        <div ref={ScrollRef} className={hiddenSection? "hiddenSection container" : "container"}>
          <div   className= "whatWeDoHead">
            <h2>Innovative Solutions, Creative Results.</h2>
            <p>Dedicated to delivering <b>exceptional results</b> that exceed our clients' expectations. </p>
          </div>
          {workData.map(data=>{
            return (
              <Link to={data.link} key={data.id} onMouseMove={(e)=>{move(e)}} className="work">
                <h2>{data.title}</h2>
                <p>{data.detail}</p>
                <img style={{left : `${left}px`}} className="floating_img" src={data.img} alt="" />
                <span className="circleLink"><i className="fa-solid fa-arrow-right-long"></i></span>
              </Link>
            )
          })}
        </div>
    </div>
  )
}