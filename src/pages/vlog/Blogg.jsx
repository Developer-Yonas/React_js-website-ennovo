import './Blogg.css'
import { Link } from 'react-router-dom'
import Form from "../../components/form/Form";
export default function Blogg() {   
    
    return(
        <div className='blog'>
                     <br/>
                     <div className="B">
                        <span> Blog</span> 
                     <p> How to grow your business and make your customers happy</p>
                     </div>
                     
                 <br/><br/><span>Interior Design</span> <br/>
                        <div className="content-left">

                        <Link style={{textDecoration: 'none'}} to="/interrior"  rel="noreferrer">
                                <img src="assets/hakim.jpg" alt="" />
                                        <div className="bot">
                                             <h3>Why is interior design important for your office<br/> or home in Addis Ababa in 2023?</h3>      
                                        </div>
                                </Link>
                                 <div class="container-right">  

                                    <br/><br/>
                                    <h3>CREATIVE ART</h3><br/><br/>
                                        <p> //to be written
                                <br/><br/><br/><br/><br/><br/><br/>
                                    <h3>OUR FAVORITES</h3><br/><br/>
                                                                //to be written<br/>                           
                                        </p>
                                                    
                                 </div>
                        </div>




                        
                        <div className="content-leftt">

                         <h2>On the same theme</h2><br/>         
                                  <div className='iimg' >
                                     <li onClick={() => window.scrollTo({top: 0,behavior: 'instant',})} >
                                       <Link style={{textDecoration: 'none'}} to="/branding"  rel="noreferrer">
                                            <div><img src="assets/brand.png" alt="" /><br/>
                                                     <div className="bot">   
                                                         <h3>Why is branding and business strategy important for your business in Addis Ababa in 2023?</h3><br/><br/>
                                                        </div>
                                            </div>
                                            </Link>
                                        </li>

                                        <li onClick={() => window.scrollTo({top: 0,behavior: 'instant',})} >
                                            <Link style={{textDecoration: 'none'}} to="/website"  rel="noreferrer">
                                            <div> <img src="assets/3.png" alt="" /><br/>
                                                 <div className="bot">
                                                     <h3>How is not having a website hurting your business in Addis Ababa in 2023 ?</h3><br/><br/>
                                                 </div>
                                            </div>
                                            </Link>
                                        </li>

                                            <li onClick={() => window.scrollTo({top: 0,behavior: 'instant',})} >
                                      <Link style={{textDecoration: 'none'}} to="/digital"  rel="noreferrer">
                                            <div> <img src="assets/digg.jpg" alt="" /><br/>
                                                 <div className="bot">
                                                    <h3>Why is Digital marketing important for you bussines in addis abba in 2023 ?</h3><br/><br/>
                                                 </div>
                                            </div>
                                     </Link>
                                            </li>


                                  </div>                 
                                        
                                            
                        </div><br/><br/><br/><br/>
                        


  
<div className="contactUs">
      <Form/>
         
</div>               

 </div>

    )

}