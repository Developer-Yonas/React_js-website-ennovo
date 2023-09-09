import { useEffect, useState } from 'react'
import { useRef } from 'react'
import './section4.css'
import {tardy} from '../../../../scripts/tardy'

export default function Section4() {

    const [hiddenSection, setHiddenSection] = useState(true)
    const ScrollRef = useRef(null)

    useEffect(() => {
      tardy(ScrollRef.current, setHiddenSection)
    },[])
    
  return (
    <div ref={ScrollRef} className={hiddenSection? "hiddenSection section4" : "section4"}>
        <div className="container">
            <div className="s4Left">
                {/* <h2 className='s4Title'>We specialize in branding and digital marketing Strategy,Brand Identity, Interior Design, UX design, Web development and Contents.</h2> */}
                <h2 className='s4Title'>We specialize in branding, Interior Design and web development.</h2>
                <p>We believe that a successful brand presence requires a thoughtful approach that blends creativity, technology, and strategy. That's why we work closely with our clients to understand their goals, challenges, and unique value proposition. We develop tailored strategies and solutions that align with their vision and help them stand out in a crowded digital landscape.</p>
                <h2 className='s4Ques'>Creative minds deliver effective solutions, we think outside the box for you. </h2>
                <a href="/">Let's talk about branding</a>
            </div>
            <div className="s4Right">
                <img src="assets/1.png" alt="" />
            </div>
        </div>
    </div>
  )
}