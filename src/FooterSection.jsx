
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
  {/* Map Preview */}
  <div
    className="map-box"
    onClick={() =>
      window.open(
        "https://www.google.com/maps/d/viewer?mid=1qtGl_MVXXa3y3qnzDehhWhRfeW4_Zac",
        "_blank"
      )
    }
    role="link"
    aria-label="Open all TechyGuide offices in Maps"
  >
    <iframe
      title="TechyGuide Offices Map"
      src="https://www.google.com/maps/d/embed?mid=1qtGl_MVXXa3y3qnzDehhWhRfeW4_Zac"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
    <span>Our Offices (Odisha & Bangalore)</span>
  </div>

  {/* Buttons */}
  <div className="map-buttons">
    <button
      onClick={() =>
        window.open(
          "https://maps.app.goo.gl/DFFaPgpLexm2tggD8",
          "_blank"
        )
      }
    >
      Open Odisha in Maps
    </button>

    <button
      onClick={() =>
        window.open(
          "https://maps.app.goo.gl/vJEWcwmuaNF6xK3H8",
          "_blank"
        )
      }
    >
      Open Bangalore in Maps
    </button>
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