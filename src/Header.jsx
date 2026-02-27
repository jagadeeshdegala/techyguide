//import './Header.css'
import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from '/src/assets/logo.png'
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [schoolsOpen, setSchoolsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const headerRef = useRef(null);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => {
    setMenuOpen(false);
    setProductsOpen(false);
    setSchoolsOpen(false);
  };
  
  const toggleProductsDropdown = (e) => {
    e.preventDefault();
    setProductsOpen(prev => !prev);
    setSchoolsOpen(false);
  };
  
  const toggleSchoolsDropdown = (e) => {
    e.preventDefault();
    setSchoolsOpen(prev => !prev);
    setProductsOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (menuOpen || productsOpen || schoolsOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen, productsOpen, schoolsOpen]);

  const handleLogoClick = () => {
    closeMenu();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePageNavigation = (path) => {
    closeMenu();
    setProductsOpen(false);
    setSchoolsOpen(false);
    
    // Always navigate and scroll to top
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  const handleAnchorClick = (e, selector) => {
    e.preventDefault();
    closeMenu();
    setProductsOpen(false);
    setSchoolsOpen(false);
    
    // Check if target exists on current page
    const target = document.querySelector(selector);
    if (target) {
      // Target exists on current page, scroll to it
      const headerEl = document.querySelector('header');
      const topBarEl = document.querySelector('.top-bar');
      const extra = 12;
      const offset = (headerEl ? headerEl.offsetHeight : 0) + (topBarEl ? topBarEl.offsetHeight : 0) + extra;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    } else {
      // Target doesn't exist on current page, navigate to home and then scroll
      navigate('/');
      setTimeout(() => {
        const targetEl = document.querySelector(selector);
        if (targetEl) {
          const headerEl = document.querySelector('header');
          const topBarEl = document.querySelector('.top-bar');
          const extra = 12;
          const offset = (headerEl ? headerEl.offsetHeight : 0) + (topBarEl ? topBarEl.offsetHeight : 0) + extra;
          const top = targetEl.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <>
      <div className="top-bar" id="home">
        <div className="container">
          <span>
            <a href="tel:+919114036376"><i className="fas fa-phone-alt"></i> +91 8197984847</a>
          </span>
          <span>
            <a href="mailto:reachus@techyguide.in"><i className="fas fa-envelope"></i> reachus@techyguide.in</a>
          </span>
        </div>
      </div>

      <header ref={headerRef}>
        <div className="container nav-container">
          <div className="logo">
            <Link to="/" className="logo-link" onClick={handleLogoClick}>
              <img src={Logo} alt="TechyGuide Logo" />
            </Link>
          </div>

          <nav>
            <ul id="nav-links" className={menuOpen ? 'active' : ''}>

              <li><a href="/" onClick={(e) => { e.preventDefault(); handlePageNavigation('/'); }}>Home</a></li>

              <li className="dropdown">
                <a href="#shop" onClick={toggleProductsDropdown}>
                  Products <i className="fas fa-chevron-down"></i>
                </a>
                <ul className={`dropdown-menu ${productsOpen ? 'active' : ''}`}>
                  <li><a href="/tebot" onClick={(e) => { e.preventDefault(); handlePageNavigation('/tebot'); }}>TeBoT</a></li>
                  <li><a href="/i-bot" onClick={(e) => { e.preventDefault(); handlePageNavigation('/i-bot'); }}>I-BoT</a></li>
                  <li><a href="/e-blox" onClick={(e) => { e.preventDefault(); handlePageNavigation('/e-blox'); }}>E- Blox</a></li>
                  <li><a href="/add-on-kits" onClick={(e) => { e.preventDefault(); handlePageNavigation('/add-on-kits'); }}>Add On Kits</a></li>
                </ul>
              </li>

              <li><a href="/courses" onClick={(e) => { e.preventDefault(); handlePageNavigation('/courses'); }}>Courses</a></li>
              
              <li className="dropdown">
                <a href="#schools" onClick={toggleSchoolsDropdown}>
                  Schools <i className="fas fa-chevron-down"></i>
                </a>
                <ul className={`dropdown-menu ${schoolsOpen ? 'active' : ''}`}>
                  <li><a href="/ai-roboticslab-cbse" onClick={(e) => { e.preventDefault(); handlePageNavigation('/ai-roboticslab-cbse'); }}>AI & Robotics Lab CBSE</a></li>
                  <li><a href="/ai-roboticslab-icse" onClick={(e) => { e.preventDefault(); handlePageNavigation('/ai-roboticslab-icse'); }}>AI & Robotics Lab ICSE</a></li>
                  <li><a href="/schools/stem-tinkering-lab" onClick={(e) => { e.preventDefault(); handlePageNavigation('/schools/stem-tinkering-lab'); }}>STEM Tinkering Lab</a></li>
                  <li><a href="/schools/composite-skill-lab" onClick={(e) => { e.preventDefault(); handlePageNavigation('/schools/composite-skill-lab'); }}>Composite Skill Lab</a></li>

                  <li><a href="/schools/stem-lab" onClick={(e) => { e.preventDefault(); handlePageNavigation('/schools/stem-lab'); }}>STEM Lab</a></li>
                  <li><a href="/schools/workshop" onClick={(e) => { e.preventDefault(); handlePageNavigation('/schools/workshop'); }}>Workshop</a></li>

                </ul>
              </li>
              
              <li><a href="/impact-program" onClick={(e) => { e.preventDefault(); handlePageNavigation('/impact-program'); }}>Impact Program</a></li>
              <li><a href="/robothrone" onClick={(e) => { e.preventDefault(); handlePageNavigation('/robothrone'); }}> Robothrone </a></li>

              <li><a href="/franchise" onClick={(e) => { e.preventDefault(); handlePageNavigation('/franchise'); }}>Franchise</a></li>
                {/* <li><a href="#contact" onClick={(e) => handleAnchorClick(e, '#contact')}>Contact</a></li> */}             
                <li><a href="/shop" className="btn-nav nav-shop-cta shop-icon" onClick={(e) => { e.preventDefault(); handlePageNavigation('/shop'); }}><i className="fas fa-cart-shopping"></i></a></li>
              <li>
               <a
                  href="https://course.techyguide.in"
                  className="btn-nav nav-shop-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                             >
                             LMS Login
                                </a>

              </li>
            </ul>

            <div className="hamburger" id="hamburger" onClick={toggleMenu}>
              <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
