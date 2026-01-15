import { useState, useEffect } from 'react';
import './ScrollToTop.css';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

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

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    // Hide on school routes
    if (isSchoolRoute()) return;

    // Scroll to absolute top of document for reliable behavior
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // track hash/path changes (HashRouter) and regular navigation
    const onLocationChange = () => setCurrentPath(getPath());
    window.addEventListener('hashchange', onLocationChange);
    window.addEventListener('popstate', onLocationChange);

    if (isSchoolRoute()) return () => {
      window.removeEventListener('hashchange', onLocationChange);
      window.removeEventListener('popstate', onLocationChange);
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('hashchange', onLocationChange);
      window.removeEventListener('popstate', onLocationChange);
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [currentPath]);

  if (isSchoolRoute()) return null;

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Back to top"
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
}

export default ScrollToTop;
