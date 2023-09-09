import React from 'react'
import { Link } from 'react-router-dom'
import FormComponent from '../../components/formComponent'

const Website = () => {




  return (
    <div className="Blog2">
        <div className="content-left"><br/>
                <img src="assets/3.png" alt="" />
                    <div class="container-right">  
                          <h3>How is not having a website hurting your business in Addis Ababa in 2023?</h3> 
                                                                                   
                   </div>
           </div>
    <div className="detail">
     <br/><p>
    <h3> Web design is the process of creating a website.</h3> <br/>
    It involves the planning, designing, and implementation of a website.<br/>
    Web designers use a variety of skills, including graphic design, user<br/>
    experience design, and web development. <br/>
    The first step in web design is to plan the website. This involves determining<br/>
     the purpose of the website, the target audience, and the content that will be<br/>
      included. Once the plan is in place, the designer can begin to create the<br/>
       website's layout and design.<br/><br/><br/><br/>


    The layout of a website refers to the way the content is arranged on the page.<br/>
     The designer must decide how to organize the content in a way that is easy to<br/>
      read and navigate. The design of a website refers to the visual appearance<br/>
       of the website. This includes the choice of colors, fonts, and images. <br/>
    Once the layout and design are complete, the web designer can begin to<br/>
     develop the website. This involves coding the website in a programming<br/>
      language, such as HTML, CSS, or JavaScript.<br/><br/><br/><br/> 
 
 
 <h3>Here are the seven steps involved in the web design process:</h3><br/> 

 <FormComponent/>
<h4>•	Define your goals.</h4> What do you want your website to achieve?<br/>
 Do you want to sell products, provide information, or build a community?<br/>
  Once you know your goals, you can start to develop a design that will<br/>
   help you achieve them.<br/> 
<h4>•	Research your target audience.</h4> Who are you trying to reach with<br/>
 your website? What are their needs and interests? Once you know your<br/>
  target audience, you can start to develop a design that will appeal to them.<br/> 
<h4>•	Brainstorm ideas.</h4> Once you know your goals and target audience,<br/>
 you can start to brainstorm ideas for your website design. Collect inspiration<br/>
  from other websites, magazines, and even your own imagination.<br/><br/><br/><br/>


<h4>•	Create wireframes.</h4> Wireframes are low-fidelity sketches of your<br/>
 website's layout. They can help you to visualize the overall structure of<br/>
  your website and to identify any potential problems.<br/> 
<h4>•	Design the visual elements.</h4> Once you have a wireframe, you can start<br/>
 to design the visual elements of your website, such as the colors, fonts, and images.<br/> 
<h4>•	Develop the website.</h4> Once the design is complete, it's time to develop<br/>
 the website. This involves coding the website in a programming language, such as<br/>
  HTML, CSS, or JavaScript.<br/> 
<h4>•	Launch the website.</h4> Once the website is developed, it's time to launch it.<br/>
 This involves making it live on the internet so that people can visit it.<br/><br/><br/><br/> 

    </p>
           </div>
    
    
    
           <div className="content-leftt"><br/><br/>
    
           <h2>On the same theme</h2>                                     
    <div className='iimg' >
         
    <li onClick={() => window.scrollTo({top: 0,behavior: 'instant',})} >
       <Link style={{textDecoration: 'none'}} to="/branding"  rel="noreferrer">
              <div><img src="assets/brand.png" alt="" /><br/>
                       <div className="bot">   
                           <h3>Why is branding and business strategy important for your business in Addis Ababa in 2023?</h3><br/><br/>
                          </div>
              </div>
              </Link></li>
    
              <li onClick={() => window.scrollTo({top: 0,behavior: 'instant',})} >
                 <Link style={{textDecoration: 'none'}} to="/interrior"  rel="noreferrer">
              <div> <img src="assets/hakim.jpg" alt="" /><br/>
                   <div className="bot">
                       <h3>Why is interior design important for your office or home in Addis Ababa in 2023?</h3><br/><br/>
                   </div>
              </div>
              </Link></li>
    
              <li onClick={() => window.scrollTo({top: 0,behavior: 'instant',})} >
                 <Link style={{textDecoration: 'none'}} to="/digital"  rel="noreferrer">
              <div> <img src="assets/digg.jpg" alt="" /><br/>
                   <div className="bot">
                      <h3>Why is Digital marketing important for you bussines in addis abba in 2023 ?</h3><br/><br/>
                   </div>
              </div>
       </Link></li>
    </div>                 
          
              
    </div><br/><br/><br/><br/>
    
    
    
    
    </div>
      )
}

export default Website