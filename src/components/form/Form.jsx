import { useEffect, useRef, useState } from 'react'
import './form.css'
import { tardy } from '../../scripts/tardy'
import { Link } from 'react-router-dom'

export default function Form() {

    //tobeRemoved 
    const toBeRemovedState = (e) =>{
        setFormData(prev=>{
            return {
                ...prev,
                [e.target.name] : [e.target.value]
            }
        })
    }
    const [formData, setFormData] = useState({name:'',email:''})
    const [showFormMessge, setShowFormMessge] = useState(false)

    //submitting
    const tobeRemoved = (e)=>{
        e.preventDefault()
        if(formData.email === '') return;
        setShowFormMessge(true)
        setTimeout(() => {
            setFormData({name:'',email:''})
        },0)
        setTimeout(() => {
            setShowFormMessge(false)
        }, 5000);
    }
    //

    const [hiddenSection, setHiddenSection] = useState(true)
    const ScrollRef = useRef(null)

    useEffect(() => {
      tardy(ScrollRef.current, setHiddenSection)
    },[])

  return (
    <div ref={ScrollRef} className={hiddenSection? 'hiddenSection section6' : 'section6'}>
        <h2 className='s6Title'>Do you want to get to know us better?</h2>
        <div className="container">
            <div className="s6Left">
                <h2>Get inspired by our content.</h2>
            </div>
            <div className="s6Center">
                <form onSubmit={(e)=>{tobeRemoved(e)}}>
                    <label htmlFor="f_name">Your name :</label>
                    <input 
                        onChange={(e)=>{toBeRemovedState(e)}}
                        value= {formData.name}
                        name="name"
                        type="text" id="f_name" />
                     <label htmlFor="f_email">Your Email :</label>
                    <input type="email" 
                        onChange={(e)=>{toBeRemovedState(e)}}
                        value= {formData.email}
                        name="email"
                    id="f_email" />
                    <br />
                    <input type="checkbox" id="" />
                    <>I want to subscribe to the newsletter and receive information on Sinfonialab initiatives*</>
                    <br /><br />
                    <p>You can unsubscribe from these communications at any time.</p>
                    <button className='toBeRemovedBtn'>Yes, Let's get to know each other</button>
                </form>
                {/* tobeRemoved  */}
                <small style={showFormMessge? {animation: "tobeRemovedAnim 5s"}: {}} className= 'tobeRemovedForm'>Thanks for subscribing to our newsletter, {`${formData.name}`}</small>
                {/* // */}
            </div>
            <div className="s6Right">
                <div className="s6RightLinks">
                    <Link to='/contact'>Write to us <i className="fa-solid fa-arrow-right-long"></i></Link>
                    <a href="tel:+251948071877">Call us <i className="fa-solid fa-phone"></i></a>
                </div>
                <div className="social">
                    <a href="/"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="/"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="/"><i className="fa-brands fa-instagram"></i></a>
                    <a href="/"><i className="fa-brands fa-youtube"></i></a>
                </div>
            </div>
        </div>
    </div>
  )
}