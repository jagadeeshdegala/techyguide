
import './FooterSection.css';
import { useNavigate } from 'react-router-dom';

function FooterSection(){
    const navigate = useNavigate();

    const handlePageNavigation = (path) => {
        navigate(path);
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 50);
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
                        </div>
                    </div>
                    <div className="footer-col">
                        <h3>Quick Links</h3>
                        <ul className="quick-links-grid">
                            <li><a href="/">Home</a></li>
                            <li><a href="#shop">Shop</a></li>
                            <li><a href="/franchise" onClick={(e) => { e.preventDefault(); handlePageNavigation('/franchise'); }}>Franchise</a></li>
                           <li><a href="https://www.techyguide.in/robothrone/" target="_blank" rel="noopener noreferrer">Robothrone</a></li>
                            <li><a href="/courses" onClick={(e) => { e.preventDefault(); handlePageNavigation('/courses'); }}>Contact us</a></li>
                            <li><a href="/privacy-policy" onClick={(e) => { e.preventDefault(); handlePageNavigation('/privacy-policy'); }}>Privacy Policy</a></li>

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