import { useEffect, useRef, useState } from 'react'
import Form from '../../components/form/Form'
import { tardy } from '../../scripts/tardy'
import './aboutUs.css'

export default function AboutUs() {
    
    const [hide1, setHide1] = useState(true)
    const [hide2, setHide2] = useState(true)
    const [hide3, setHide3] = useState(true)
    const [hide4, setHide4] = useState(true)
    const [hide5, setHide5] = useState(true)
    const [hide6, setHide6] = useState(true)
    const [hide7, setHide7] = useState(true)
    const aboutRef1 = useRef(null)
    const aboutRef2 = useRef(null)
    const aboutRef3 = useRef(null)
    const aboutRef4 = useRef(null)
    const aboutRef5 = useRef(null)
    const aboutRef6 = useRef(null)
    const aboutRef7 = useRef(null)

    useEffect(() => {
      tardy(aboutRef1.current, setHide1, "fromAbout")
      tardy(aboutRef2.current, setHide2, "fromAbout")
      tardy(aboutRef3.current, setHide3, "fromAbout")
      tardy(aboutRef4.current, setHide4, "fromAbout")
      tardy(aboutRef5.current, setHide5, "fromAbout")
      tardy(aboutRef6.current, setHide6, "fromAbout")
      tardy(aboutRef7.current, setHide7, "fromAbout")
    },[])

  return (
    <div className='aboutUs'>
        <div className="aboutUsTitleDiv">
            <h1>About Us</h1>
            <p>Ennovo is a dynamic agency founded by a team of highly skilled creative professionals from
                Ethiopia and Kenya, who came together with a shared vision to exceed expectations and deliver
                world-class experiences. With offices in Addis Ababa and Nairobi, our unique combination of
                Ethiopian charm and Kenyan expertise fuels our ambition to help brands tell their story in an
                authentic and unforgettable way
            </p>
        </div>

        <div ref={aboutRef1} className="aboutUsSection textFirstSection">
            <div className="container">
                <div className={hide1? "hiddenAboutLeft textSide" : "textSide"}>
                    <h2 className='aboutUsSectionTitile'>Our mission:</h2>
                    <p>To provide results-oriented digital marketing, branding and business solutions designed to meet our client's objectives and excelling at customer
                        service. We stive to become an integral part of our client’s success,
                    </p>
                </div>
                
                <div className={hide1? "hiddenAboutRight imageSide" : "imageSide"}>
                    <img src="assets/about/e.gif" alt="" />
                </div>
            </div>
        </div>

        <div ref={aboutRef2} className="aboutUsSection">
            <div className="container">
                <div className={hide2? "hiddenAboutLeft imageSide" : "imageSide"}>
                    <img src="assets/about/d.png" alt="" />
                </div>
                <div className={hide2? "hiddenAboutRight textSide" : "textSide"}>
                    <h2 className='aboutUsSectionTitile'>Our vision:</h2>
                    <p>To provide results-oriented digital marketing, branding and business solutions designed to meet our client's objectives and excelling at customer
                        service. We stive to become an integral part of our client’s success, collaborating with
                        them to achieve their strategic objectives whilst creating long lasting business value
                        through the delivery and management of their marketing process
                    </p>
                </div>
            </div>
        </div>

        <div ref={aboutRef3} className="aboutUsSection textFirstSection">
            <div className="container">
                <div className={hide3? "hiddenAboutLeft textSide" : "textSide"}>
                    <h2 className='aboutUsSectionTitile'>The beauty of digital is people</h2>
                    <p>
                    We understand that a strong brand identity is essential for building trust, establishing
                    credibility, and standing out in a competitive market. That's why we take a collaborative
                    approach, working closely with our clients to understand their values, vision, and target
                    audience. From there, we develop a customized branding strategy that reflects your
                    brand's unique personality and resonates with your ideal customers.
                    </p>
                </div>
                <div className={hide3? "hiddenAboutRight imageSide" : "imageSide"}>
                    <img src="assets/about/c.png" alt="" />
                </div>
            </div>
        </div>

        <div ref={aboutRef4} className="aboutUsSection">
            <div className="container">
                <div className={hide4? "hiddenAboutLeft imageSide" : "imageSide"}>
                    <img src="assets/about/c.png" alt="" />
                </div>
                <div className={hide4? "hiddenAboutRight textSide" : "textSide"}>
                    <h2 className='aboutUsSectionTitile'>The beauty of digital is people</h2>
                    <p>Our branding and logo design services cover everything from market research and
                    concept development to design implementation and brand guidelines. We're dedicated
                    to creating designs that not only look great but also communicate your brand's values
                    and message effectively.
                    </p>
                </div>
            </div>
        </div>

        <div ref={aboutRef5} className="aboutUsSection textFirstSection">
            <div className="container">
                <div className={hide5? "hiddenAboutLeft textSide" : "textSide"}>
                    <h2 className='aboutUsSectionTitile'>The beauty of digital is people</h2>
                    <p>At Ennovo, we believe that a successful brand is one that is authentic, memorable, and
                    consistent. That's why we take the time to understand your business and develop
                    designs that are tailored to your unique needs and goals. Whether you're a startup or an
                    established business, we have the expertise and creativity to help you create a brand
                    that stands out from the competition.
                    </p>
                </div>
                <div className={hide5? "hiddenAboutRight imageSide" : "imageSide"}>
                    <img src="assets/about/c.png" alt="" />
                </div>
            </div>
        </div>

        <div className="aboutUsCallToAction">
            <h1>PLANNING AND MILESTONE</h1>
            <p> 
                <br /> Analysis <i className="fa-solid fa-arrow-right-long"></i> Strategy and planning <i className="fa-solid fa-arrow-right-long"></i> design
            </p>
        </div>

        <div ref={aboutRef6} className="aboutUsSection">
            <div className="container">
                <div className={hide6? "hiddenAboutLeft imageSide" : "imageSide"}>
                    <img src="assets/about/b.png" alt="" />
                </div>
                <div className={hide6? "hiddenAboutRight textSide" : "textSide"}>
                    <h2 className='aboutUsSectionTitile'>Our Values:</h2>
                    <p>
                        <b>Commitment</b><br />
                        Be accountable, work together as a
                        team and communicate clearly.
                        <br /><b>Innovation</b><br />
                        Think outside the box, challenge constructively and act before others do.
                        <br /><b>Community</b><br />
                        Creating a positive place to work and
                        supporting ethical initiatives.
                        <br /><b>Excellence</b><br />
                        Always deliver exceptional quality
                        results, accomplish, and improve.
                    </p>
                </div>
            </div>
        </div>

        <div ref={aboutRef7} className="aboutUsSection textFirstSection">
            <div className="container">
                <div className={hide7? "hiddenAboutLeft textSide" : "textSide"}>
                <h2 className='aboutUsSectionTitile'>we stand by this for all the service we produce</h2>
                    <p><span className="miniTitle">Collaborate</span> The best work is done when everyone works together. Whether it's an opinion of a designer, developer, or our client - the more we know & consider the better the product will be.</p><br />
                    <p><span className="miniTitle">Have fun</span> Hey, we live once. Doesn't make sense to suffer at work. You got to love what you do and have fun doing it.</p><br />
                    <p><span className="miniTitle">Don't just be good. Be the best.</span> Being “good enough” doesn't get you anywhere in life. We came here because we want to be the best. Through passion and hard work we're grinding our way.</p><br />
                    <p><span className="miniTitle">Trust and respect</span> No team can be built without trust and respect. It's important to always respect each other, even when opinions are different, and be able to trust that your teammate will do the right thing.</p><br />
                    <p><span className="miniTitle">Know your shit</span> The tone is no mistake. If you come to work you got to know what you're doing and do it right. Learn, grow and improve your skills constantly</p><br />
                    <p><span className="miniTitle">Focus on the solution</span> No matter how hard the task may seem always focus on finding a solution. Don't say something is impossible and focus on solving the problem at hand instead of finding reasons why it can't be done</p><br />
                </div>
                <div className={hide7? "hiddenAboutRight imageSide" : "imageSide"}>
                    <img src="assets/about/a.png" alt="" />
                </div>
            </div>
        </div>
        <Form/>
    </div>
  )
}
