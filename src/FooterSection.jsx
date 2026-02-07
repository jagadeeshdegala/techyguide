
import './FooterSection.css';
import { Link } from 'react-router-dom';

function FooterSection(){
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return(
        <>
            <footer>
                <div className="container footer-content">
                    <div className="footer-col">
                        <h3>TechyGuide</h3>
                        
                        <div className="contact-info">
                            <p><a href="tel:+919114036376"><i className="fas fa-phone-alt"></i> +91 8197984847</a></p>
                            <p><a href="mailto:reachus@techyguide.in"><i className="fas fa-envelope"></i> reachus@techyguide.in</a></p>
                            <p>
                                <i className="fas fa-map-marker-alt"></i> Serving students & schools across India 
                            </p>
 

<div className="footer-maps-single">
  <div className="maps-grid">
    {/* Bangalore Location */}
    <div
  className="map-box"
  onClick={() =>
    window.open(
      "https://maps.app.goo.gl/DnJKoVwhpUKaxcPGA",
      "_blank"
    )
  }
>
  <iframe
    title="Bangalore Office"
    src="https://www.google.com/maps?q=TechyGuide%20Bangalore&output=embed"
    loading="lazy"
  />
  <span>Bangalore Office</span>
</div>

    {/* Odisha Location */}
    <div
  className="map-box"
  onClick={() =>
    window.open(
      "https://maps.app.goo.gl/LCWgjAsz1PrJ5tAK9",
      "_blank"
    )
  }
>
  <iframe
    title="Odisha Headquarters"
    src="https://www.google.com/maps?q=TechyGuide%20Odisha&output=embed"
    loading="lazy"
  />
  <span>Odisha Headquarters</span>
</div>
  </div>
</div>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h3>Quick Links</h3>
                        <ul className="quick-links-grid">
                            <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
                            <li><Link to="/shop" onClick={scrollToTop}>Shop</Link></li>
                            <li><Link to="/franchise" onClick={scrollToTop}>Franchise</Link></li>
                            <li><Link to="/robothrone" onClick={scrollToTop}> Robothrone </Link></li>
                            <li><Link to="/open-resources" onClick={scrollToTop}>Open Resources</Link></li>
                            <li><Link to="/about-us" onClick={scrollToTop}>About Us</Link></li>
                            <li><a href="https://www.techyguide.in/contact/" target="_blank" onClick={scrollToTop}>Contact us</a></li>
                            <li><Link to="/privacy-policy" onClick={scrollToTop}>Privacy Policy</Link></li>

                        </ul>
                    </div>
                        <div className="footer-col">
                            <h3>Our Offerings</h3>
                            <ul className="offerings-list">
                                <li><a href="#">Robotics Products</a></li>
                                <li className="hide-mobile"><a href="#">IoT Solutions</a></li>
                                <li><a href="#">AI Courses</a></li>
                                <li><a href="#">Coding Courses</a></li>
                                <li><a href="#">3D Printing</a></li>
                            </ul>
                        </div>
                </div>
                <div className="bottom-bar">
                    <p>&copy; 2021 TechyGuide Private Limited. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default FooterSection;