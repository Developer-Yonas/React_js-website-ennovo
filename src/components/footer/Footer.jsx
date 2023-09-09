import './footer.css'

export default function Footer() {
  return (
    <div id="footer" className='footer'>
        <div className="forGradiant"></div>
        <div className="container">
            <div>
                <h3>Ennovo</h3>
                <p>A boutique digital and creative <br></br>agency based in Addis Ababa, Ethiopia</p>
            </div>
            <address>
                <h3>Address</h3>
                <p>Bole in front of the</p>
                <p>Ramada hotel sentayew</p>
                <p>belay building 8th 802</p>
            </address>
            <div>
                <h3>Contact</h3>
                <p>+251948071877</p>
                <p>+251910071877</p>
                <p>ennovocreative@gmail.com</p>
            </div>
        </div>
        <div className="social">
            <a href="/"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="/"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="/"><i className="fa-brands fa-instagram"></i></a>
            <a href="/"><i className="fa-brands fa-youtube"></i></a>
        </div>
    </div>
  )
}
