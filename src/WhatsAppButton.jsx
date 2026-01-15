import { useState, useEffect } from 'react';
import './WhatsAppButton.css';

function WhatsAppButton() {
  const [isShifted, setIsShifted] = useState(false);

  const schoolKeywords = ['ai-roboticslab', 'stem-tinkering', 'composite-skill', 'composite-skill-lab', 'workshop'];

  const getPath = () => {
    const hash = window.location.hash || '';
    if (hash.startsWith('#')) return hash.slice(1);
    return window.location.pathname || '';
  };

  const [currentPath, setCurrentPath] = useState(getPath());

  const isSchoolRoute = (path = currentPath) => {
    if (!path) return false;
    const lower = path.toLowerCase();
    return schoolKeywords.some(k => lower.includes(k));
  };

  if (isSchoolRoute()) return null;

  const togglePosition = () => {
    if (window.pageYOffset > 300) {
      setIsShifted(true);
    } else {
      setIsShifted(false);
    }
  };

  useEffect(() => {
    const onLocationChange = () => setCurrentPath(getPath());
    window.addEventListener('hashchange', onLocationChange);
    window.addEventListener('popstate', onLocationChange);
    window.addEventListener('scroll', togglePosition);
    return () => {
      window.removeEventListener('hashchange', onLocationChange);
      window.removeEventListener('popstate', onLocationChange);
      window.removeEventListener('scroll', togglePosition);
    };
  }, []);

  return (
    <a
      href="https://wa.me/919114036376"
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-button ${isShifted ? 'shifted' : ''}`}
      aria-label="Chat with us on WhatsApp"
      title="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
}

export default WhatsAppButton;
