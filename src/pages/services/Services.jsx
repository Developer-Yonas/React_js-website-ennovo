import { useState } from 'react'
import { useEffect, useRef } from 'react'
import './services.css'

export default function Services() {

    const [activeService, setActiveService] = useState('strategy')

    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)
    const ref5 = useRef(null)
    const ref6 = useRef(null)

    useEffect(() => {
        const data = {
            root: null,
            threshold : .51
        }
        const servObserver = new IntersectionObserver((entries)=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    setActiveService(entry.target.id)
                }
            })
        },data)
            
        servObserver.observe(ref1.current)
        servObserver.observe(ref2.current)
        servObserver.observe(ref3.current)
        servObserver.observe(ref4.current)
        servObserver.observe(ref5.current)
        servObserver.observe(ref6.current)
    })

    const scrollTo = (ref) =>{
        ref.current.scrollIntoView({behavior : 'smooth'})
        console.log(ref);
    }

  return (
    <div className='services' >
        <div className="servicesTitleDiv">
            <h1>Services</h1>
            <p>
            We're a full-service marketing and innovation agency that helps visionary brands create an
            uncommon future. Our award-winning team specializes in interior design, website/app design,
            brand development, and social media/digital marketing. Let us help you take your brand to the
            next level.
            </p>
        </div>

        <div className="container">
            <div className="left">
                <h2>What we do <br /> for you</h2>
                <div className="servicesNav">
                    <span style={{color: activeService  ==='strategy' ? 'black': 'white'}} onClick={()=>{scrollTo(ref1)}} >Interior Design</span>
                    <span style={{color: activeService  ==='ux' ? 'black': 'white'}} onClick={()=>{scrollTo(ref2)}} >UX design</span>
                    <span style={{color: activeService  ==='web' ? 'black': 'white'}} onClick={()=>{scrollTo(ref3)}} >Web design</span>
                    <span style={{color: activeService  ==='contents' ? 'black': 'white'}} onClick={()=>{scrollTo(ref4)}} >Contents</span>
                    <span style={{color: activeService  ==='brand' ? 'black': 'white'}} onClick={()=>{scrollTo(ref5)}} >Branding and Business strategy</span>
                    <span style={{color: activeService  ==='digital' ? 'black': 'white'}} onClick={()=>{scrollTo(ref6)}} >Digital Marketing</span>
                </div>
            </div>
            <div className="right">
                <section ref={ref1} id="strategy" className="service">
                    <div className='imgsWithAnim'>
                        <img src="assets/services/in1.png" alt="" />
                        <img src="assets/services/in2.png" alt="" />
                        <img src="assets/services/in3.png" alt="" />
                        <img src="assets/services/in4.png" alt="" />
                        <img src="assets/services/in5.png" alt="" />
                    </div>
                    <h2 className='aboutUsSectionTitile'>Let's cultivate good ideas for tomorrow</h2>
                    <p>Creating stunning, <b>functional spaces</b> that enhance your quality of life /increase your productivity and sales We work closely with you to understand <b> your vision</b> and preferences, and develop a customized plan that balances <b> aesthetics, functionality, and practicality.</b></p>
                    <p>From concept development to furniture installation, we use high-quality materials to create beautiful, timeless spaces that you'll love for years to come.</p>
                    <p><b>Contact us today</b> to learn more about how we can transform your space!</p>
                    <a href="/">Let's talk about interior design</a>
                </section>

                <section ref={ref2} id="ux" className="service">
                    <img src="assets/services/ux.png" alt="" />
                    <h2 className='aboutUsSectionTitile'>Let's cultivate good ideas for tomorrow</h2>
                    <p>It's a <b>promise</b> we keep by asking the right questions: who, before how </p>
                    <p><b>First there are the people </b> , with their needs, dreams and goals: you, your customers, and then us too</p>
                    <p><b>We are a digital marketing and communication agency </b>and our mission is to bring value and opportunities to everyone.</p>
                    <a href="/">Let's talk about ux design</a>
                </section>

                <section ref={ref3} id="web" className="service">
                    <img src="assets/services/web.png" alt="" />
                    <h2 className='aboutUsSectionTitile'>Elevate your brand's online presence with Ennovo's website design services.</h2>
                    <p>
                        We create custom websites that are visually
                        stunning and user-friendly, using the <b>latest technologies</b> and design trends. Our team of experts
                        ensures your website reflects your brand's values and engages <b>your audience.</b> From responsive
                        design to e-commerce solutions, we'll bring <b>your vision to life </b>and help your brand stand out.
                        Contact us today to get started.
                    </p>
                    <a href="/">Let's talk about web development</a>
                </section>

                <section ref={ref4} id="contents" className="service">
                    <img src="assets/services/content.png" alt="" />
                    <h2 className='aboutUsSectionTitile'>Let's cultivate good ideas for tomorrow</h2>
                    <p>It's a <b>promise</b> we keep by asking the right questions: who, before how
                    <b>First there are the people </b> , with their needs, dreams and goals: you, your customers, and then us too
                    <b>We are a digital marketing and communication agency </b>and our mission is to bring value and opportunities to everyone.</p>
                    <a href="/">Let's talk about contents</a>
                </section>

                <section ref={ref5} id="brand" className="service">
                    <img src="assets/services/brand.png" alt="" />
                    <h2 className='aboutUsSectionTitile'>Let's cultivate good ideas for tomorrow</h2>
                    <p>we craft eye-catching and <b>memorable brands</b> that stand out from the crowd. Our branding and
                        logo design services are designed to help you create a <b>unique</b> identity that captures the essence
                        of your business.
                        From brainstorming sessions to design implementation, we're dedicated to creating designs that
                        are not only aesthetically pleasing but also strategically sound. Our designs are <b>fresh, modern,
                        and consistent,</b> making sure your brand is instantly recognizable and unforgettable across all
                        platforms.
                    </p>
                    <a href="/">Let's talk about branding</a>
                </section>

                <section ref={ref6} id="digital" className="service">
                    <img src="assets/services/marketing.png" alt="" />
                    <h2 className='aboutUsSectionTitile'>Let's cultivate good ideas for tomorrow</h2>
                    <p>
                        <b>Empower your brand </b> with Ennovo's digital marketing solutions. Our team of experts uses the
                        latest technologies and creative strategiesto drive measurable results. From <b>SEO to PPC </b>
                        advertising, we'll help you reach your target audience and boost your ROI. Let us help you grow
                        your business in the digital age. Contact us today to get started.
                    </p>
                    <a href="/">Let's talk about digital marketing</a>
                </section>
            </div>
        </div>
    </div>
  )
}