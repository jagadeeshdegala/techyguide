import { useEffect, useRef, useState } from 'react';
import './TeBoT.css';
//hero image
import heroImage from '../assets/ProductTeBoTImages/HERO Section Boy with Kit.png';
// Explore, Create, and Innovate with TeBot section images
import ReusableLearning from '../assets/ProductTeBoTImages/Reusable Learning.png';
import ComprehensiveProjects from '../assets/ProductTeBoTImages/Comprehensive Projects.png';
import IndustryAligned from '../assets/ProductTeBoTImages/Industry Aligned.png';
//Master the Technologies of Tomorrow images
import RoboticsEngineering from '../assets/ProductTeBoTImages/Robotics & Engineering.png';
import CodingProgramming from '../assets/ProductTeBoTImages/Coding & Programming.png';
//The Advanced Tech Inside TeBot image
import TheAdvancedTechInsideTeBot from '../assets/ProductTeBoTImages/The Advanced Tech Inside TeBot.png';
//Why TeBot is the Ultimate Learning Choice images
import ChildSafeDurable from '../assets/ProductTeBoTImages/Child Safe & Durable.png';
import PlugPlaySimplicity from '../assets/ProductTeBoTImages/Plug & Play Simplicity.png';
import ProvenImpact from '../assets/ProductTeBoTImages/Proven Impact.png';
import GuaranteedQuality from '../assets/ProductTeBoTImages/Guaranteed Quality.png';







import bgImage1 from '../assets/ProductTeBoTImages/9743539.png';
import bgImage2 from '../assets/ProductTeBoTImages/5073198.jpg';
import tebotWebsiteImage from '../assets/ProductTeBoTImages/Website Tebt.png';
import tebotComponentsImage from '../assets/ProductTeBoTImages/robotics_1434292.png';
import tebotProjectsImage from '../assets/ProductTeBoTImages/robot_2582246.png';
import tebotChampImage from '../assets/ProductTeBoTImages/robot_4512237.png';
import tebotChampProjectImage from '../assets/ProductTeBoTImages/robotics_12775607.png';
import tebotAdvanceImage from '../assets/ProductTeBoTImages/pexels-photo-35542404.jpeg';
// import ZohoBiginForm from '../components/ZohoBiginForm';
//hero image

function TeBoT() {
    const [activeKitSlide, setActiveKitSlide] = useState(0);
    const touchStartXRef = useRef(0);
    const touchEndXRef = useRef(0);

    useEffect(() => {
        document.title = 'TeBOT Robotics Kit for Classrooms | 50+ STEM Projects';

        const metaDescriptionText = 'TeBOT is a robotics and IoT learning kit designed for school classrooms in India. Students can build 50+ hands-on STEM projects using safe, reusable components.';
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', metaDescriptionText);

        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', 'https://techyguide.com/tebot-robotics-kit-for-schools/');
    }, []);

    const projectsList = [
        { title: "Button Games", description: "Interactive gaming with button controls" },
        { title: "LED Patterns", description: "Creative light pattern programming" },
        { title: "Smart Bridge", description: "Automated bridge infrastructure control" },
        { title: "Line Follower", description: "Precision navigation using sensor paths" },
        { title: "Flame Detector", description: "Automated fire safety and alert system" },
        { title: "Smart Garden", description: "Soil and moisture monitoring for plants" },
        { title: "Obstacle Avoider", description: "Autonomous navigation around obstacles" },
        { title: "Gesture Controlled Car", description: "Hand gesture-based vehicle control" },
        { title: "RFID Door Lock", description: "Secure access with RFID technology" },
        { title: "Voice Controlled Car", description: "Voice command-driven robotics" },
        { title: "Smart Home Automation", description: "Connected home devices control" },
        { title: "Motion Sensing System", description: "Advanced motion detection and tracking" }
    ];

    const kitOfferings = [
        {
            number: "1️⃣",
            name: "TeBot Basic Kit",
            description: "The ideal entry-level robotics kit for beginners to build a solid STEM foundation.",
            projects: "10+ interactive projects",
            image: ChildSafeDurable,
            imageAlt: 'TeBot Basic Kit visual'
        },
        {
            number: "2️⃣",
            name: "TeBot Champ Kit",
            description: "An advanced robotics kit designed for young innovators ready for more complexity and sensor experimentation.",
            projects: "40+ engaging projects",
            image: PlugPlaySimplicity,
            imageAlt: 'TeBot Champ Kit visual'
        },
        {
            number: "3️⃣",
            name: "TeBot Advance Kit",
            description: "The flagship innovator's toolkit. It combines advanced Robotics, IoT, and AI capabilities into one package, featuring professional modules like RFID and Bluetooth.",
            projects: "50+ high-level projects",
            image: ProvenImpact,
            imageAlt: 'TeBot Advance Kit visual'
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveKitSlide((prevSlide) => (prevSlide + 1) % kitOfferings.length);
        }, 3500);

        return () => clearInterval(timer);
    }, []);

    const goToKitSlide = (slideIndex) => {
        setActiveKitSlide(slideIndex);
    };

    const moveKitSlide = (direction) => {
        setActiveKitSlide((prevSlide) => {
            const totalSlides = kitOfferings.length;
            return (prevSlide + direction + totalSlides) % totalSlides;
        });
    };

    const handleKitTouchStart = (event) => {
        touchStartXRef.current = event.touches[0].clientX;
    };

    const handleKitTouchMove = (event) => {
        touchEndXRef.current = event.touches[0].clientX;
    };

    const handleKitTouchEnd = () => {
        const distance = touchStartXRef.current - touchEndXRef.current;
        const swipeThreshold = 50;

        if (Math.abs(distance) > swipeThreshold) {
            if (distance > 0) {
                moveKitSlide(1);
            } else {
                moveKitSlide(-1);
            }
        }
    };

    useEffect(() => {
        console.log('TeBoT page loaded successfully');
        
        const root = document.getElementById('tebot-root');
        const heroImage = document.querySelector('.tebot-page-root .image-section img');
        const heroTitle = document.querySelector('.tebot-page-root .info-section h1');
        const heroButton = document.querySelector('.tebot-page-root .btn-secondary');

        function smoothScrollTo(element, duration = 1000) {
            const targetPosition = element.offsetTop - 20;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            let startTime = null;

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }

            function easeInOutCubic(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t * t + b;
                t -= 2;
                return c / 2 * (t * t * t + 2) + b;
            }

            requestAnimationFrame(animation);
        }

        // Hero section interactions with no zoom effects
        if (heroImage) {
            heroImage.addEventListener('mouseenter', function() {
                this.style.filter = 'drop-shadow(0 15px 40px rgba(0,0,0,0.6))';
            });
            
            heroImage.addEventListener('mouseleave', function() {
                this.style.filter = 'drop-shadow(0 10px 30px rgba(0,0,0,0.5))';
            });
            
            heroImage.addEventListener('click', function() {
                this.style.filter = 'drop-shadow(0 20px 50px rgba(0,0,0,0.7))';
                setTimeout(() => {
                    this.style.filter = 'drop-shadow(0 10px 30px rgba(0,0,0,0.5))';
                }, 300);
            });
        }
        
        if (heroTitle) {
            heroTitle.addEventListener('mouseenter', function() {
                this.style.color = '#00d4ff';
                this.style.textShadow = '0 0 20px rgba(0, 212, 255, 0.5)';
            });
            
            heroTitle.addEventListener('mouseleave', function() {
                this.style.color = 'rgb(255, 153, 0)';
                this.style.textShadow = 'none';
            });
        }
        
        if (heroButton) {
            const handleButtonClick = function(e) {
                e.preventDefault();
                this.style.transform = 'translateY(-1px)';
                setTimeout(() => {
                    this.style.transform = 'translateY(-2px)';
                    const introSection = document.getElementById('introduction');
                    if (introSection) {
                        smoothScrollTo(introSection, 1200);
                    }
                }, 150);
            };
            heroButton.addEventListener('click', handleButtonClick);
        }

        const handleAnchorClick = (e) => {
            const target = e.target.closest('a[href^="#"]');
            if (target && root && root.contains(target)) {
                e.preventDefault();
                const selector = target.getAttribute('href');
                const element = selector ? document.querySelector(selector) : null;
                if (element) {
                    smoothScrollTo(element, 1000);
                }
            }
        };

        if (root) {
            root.addEventListener('click', handleAnchorClick);
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, { 
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        const elements = document.querySelectorAll(
            '.tebot-page-root .reveal-card, ' +
            '.tebot-page-root .section-header'
        );
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            observer.observe(el);
        });

        const form = document.getElementById('inquiry-form');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
                let isValid = true;
                
                inputs.forEach((input, index) => {
                    setTimeout(() => {
                        if (!input.value.trim()) {
                            input.style.borderColor = '#ff4444';
                            input.style.boxShadow = '0 0 10px rgba(255, 68, 68, 0.3)';
                            isValid = false;
                        } else {
                            input.style.borderColor = '#4caf50';
                            input.style.boxShadow = '0 0 10px rgba(76, 175, 80, 0.3)';
                            setTimeout(() => {
                                input.style.borderColor = '#e0e0e0';
                                input.style.boxShadow = 'none';
                            }, 1000);
                        }
                    }, index * 50);
                });
                
                setTimeout(() => {
                    if (isValid) {
                        const schoolName = form.querySelector('input[name="school_name"]').value;
                        const contactPerson = form.querySelector('input[name="contact_person"]').value;
                        const email = form.querySelector('input[name="email"]').value;
                        const phone = form.querySelector('input[name="phone"]').value;
                        const message = form.querySelector('textarea[name="message"]').value;
                        
                        const whatsappMessage = `*New Inquiry from TeBot Product Page*%0A%0A` +
                            `*School Name:* ${encodeURIComponent(schoolName)}%0A` +
                            `*Contact Person:* ${encodeURIComponent(contactPerson)}%0A` +
                            `*Email:* ${encodeURIComponent(email)}%0A` +
                            `*Phone:* ${encodeURIComponent(phone)}%0A` +
                            `*Message:* ${encodeURIComponent(message)}%0A%0A` +
                            `*Page:* TeBot Product Page`;
                        
                        const whatsappNumber = '918197984847';
                        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
                        
                        const button = form.querySelector('.form-btn');
                        const originalText = button.textContent;
                        button.style.transform = 'translateY(-1px)';
                        setTimeout(() => {
                            button.textContent = '✅ Opening WhatsApp...';
                            button.style.background = 'linear-gradient(135deg, #4caf50 0%, #45a049 100%)';
                            button.style.transform = 'translateY(-2px)';
                            
                            window.open(whatsappUrl, '_blank');
                        }, 150);
                        
                        setTimeout(() => {
                            button.textContent = originalText;
                            button.style.background = 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)';
                            form.reset();
                        }, 3000);
                    } else {
                        form.style.animation = 'shake 0.5s ease-in-out';
                        setTimeout(() => {
                            form.style.animation = '';
                        }, 500);
                    }
                }, inputs.length * 50 + 100);
            });
        }

        const contentLayout = document.querySelector('.tebot-page-root .content-layout');
        if (contentLayout) {
            contentLayout.style.opacity = '0';
            contentLayout.style.transform = 'translateY(50px)';
            
            setTimeout(() => {
                contentLayout.style.transition = 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
                contentLayout.style.opacity = '1';
                contentLayout.style.transform = 'translateY(-40px)';
            }, 300);
        }

        const handleKeyDown = function(e) {
            if (e.key === 'Enter' && e.target === heroButton) {
                heroButton.click();
            }
            
            if (e.key.toLowerCase() === 'r' && heroImage) {
                heroImage.style.transition = 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)';
                heroImage.style.transform = 'rotate(360deg)';
                setTimeout(() => {
                    heroImage.style.transform = 'rotate(0deg)';
                    setTimeout(() => {
                        heroImage.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                    }, 1000);
                }, 1000);
            }
        };
        
        document.addEventListener('keydown', handleKeyDown);

        if (heroImage && 'ontouchstart' in window) {
            heroImage.addEventListener('touchstart', function() {
                this.style.filter = 'drop-shadow(0 15px 40px rgba(0,0,0,0.6))';
            });
            
            heroImage.addEventListener('touchend', function() {
                this.style.filter = 'drop-shadow(0 10px 30px rgba(0,0,0,0.5))';
            });
        }

        return () => {
            if (root) {
                root.removeEventListener('click', handleAnchorClick);
            }
            document.removeEventListener('keydown', handleKeyDown);
            observer.disconnect();
        };
    }, []);

    return (
        <div className="tebot-page-root" style={{
            background: `
                linear-gradient(rgba(0, 255, 149, 0.267), rgba(0, 130, 115, 0.25)),
                url(${bgImage1}),
                linear-gradient(rgba(0, 130, 115, 0.6), rgba(0, 130, 115, 0.6)),
                url(${bgImage2}),
                #008273
            `,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '60% 30%',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover'
        }}>
            {/* ===== HERO SECTION - EXACTLY PRESERVED ===== */}
            <div className="background-container">
                <main className="content-layout">
                    <div className="image-section">
                        <img src={heroImage} alt="TEBOT Robot" />
                    </div>
                    <div className="info-section">
                        <h1>TeBOT Kit</h1>
                        <h2>TeBOT Robotics Kit for Young Innovators – Build 50+ Projects </h2>
                        <button className="btn-secondary">Explore Features</button>
                    </div>
                </main>
            </div>

            {/* ===== CONTENT SECTIONS ===== */}
            <div className="ibot-page" id="tebot-root">

                {/* Introduction Section */}
                <section className="intro-section section-block section-soft" id="introduction">
                    <div className="intro-container section-container">
                        <div className="section-header">
                            <h2>Introduction to <span>TeBot Advance Kit</span></h2>
                        </div>
                        <p className="intro-description">
                          The TeBot Advance Kit is a robotics and IoT learning toolkit designed for young innovators. It includes sensors such as RFID, Bluetooth, and soil moisture modules, allowing students to build 50+ practical STEM projects. From smart security systems to voice-controlled vehicles, TeBOT helps students explore coding, electronics, and automation through hands-on learning, making it ideal for modern STEM education in schools. 
                        </p>
                        <div className="tebot-video-container reveal-card">
                            <iframe
                                className="tebot-intro-video"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
                                title="Introduction to TeBot Advance Kit"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </section>

                {/* Explore, Create, Innovate Section */}
                <section className="explore-section section-block section-plain" id="explore">
                    <div className="explore-container section-container">
                        <div className="section-header">
                            <h2><span style={{color: '#008273'}}>Explore, Create, and Innovate</span> with TeBot</h2>
                        </div>
                        <p className="explore-tagline">Your Gateway to the Future of Tech</p>
                        <p className="explore-subheading">
                            TeBot is an all-in-one robotics kit for students that turns learners into tech creators. From LED projects to AI robots, TeBot helps students explore coding, electronics, and STEM through Practical learning. 
                        </p>
                        <ul className="explore-list">
                            <li className="explore-point reveal-card">
                                <img
                                    className="explore-image"
                                    src={ReusableLearning}
                                    alt="Reusable Learning"
                                    loading="lazy"
                                />
                                <div className="explore-content">
                                    <h3>Reusable Learning</h3>
                                    <p>Use, rebuild, and innovate—again and again with a modular design.</p>
                                </div>
                            </li>
                            <li className="explore-point reveal-card">
                                <img
                                    className="explore-image"
                                    src={ComprehensiveProjects}
                                    alt="Comprehensive Projects"
                                    loading="lazy"
                                />
                                <div className="explore-content">
                                    <h3>Comprehensive Projects</h3>
                                    <p>Dive into 50+ hands-on projects across Robotics, IoT, and AI.</p>
                                </div>
                            </li>
                            <li className="explore-point reveal-card">
                                <img
                                    className="explore-image"
                                    src={IndustryAligned}
                                    alt="Industry Aligned"
                                    loading="lazy"
                                />
                                <div className="explore-content">
                                    <h3>Industry Aligned</h3>
                                    <p>Bridge the gap between classroom theory and real-world technology.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Technologies at Focus Section */}
                <section className="technologies-section section-block section-mist" id="technologies">
                    <div className="tech-container section-container">
                        <div className="section-header">
                            <h2>Master the <span style={{color: '#008273'}}>Technologies of Tomorrow</span></h2>
                        </div>
                        <div className="tech-grid">
                            <div className="tech-card reveal-card">
                                <div className="tech-icon">
                                    <img src={RoboticsEngineering} alt="Robotics & Engineering" />
                                </div>
                                <h3>Robotics & Engineering</h3>
                                <p>Build autonomous machines like Line Followers, Obstacle Avoiders, and Gesture Controlled Cars.</p>
                            </div>
                            <div className="tech-card reveal-card">
                                <div className="tech-icon">
                                    <img src={CodingProgramming} alt="Coding & Programming" />
                                </div>
                                <h3>Coding & Programming</h3>
                                <p>Master logic using Scratch (Graphical) for beginners and C++ (Arduino IDE) for advanced mastery.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Hardware Specifications Section */}
                <section className="specs-section section-block section-soft" id="specifications">
                    <div className="specs-container section-container">
                        <div className="section-header">
                            <h2>The Advanced Tech Inside <span style={{color: '#008273'}}>TeBot</span></h2>
                        </div>
                        <div className="specs-card reveal-card">
                            <div className="specs-image-wrap">
                                <img src={TheAdvancedTechInsideTeBot} alt="TeBot advanced components" loading="lazy" />
                            </div>
                            <div className="specs-points-wrap">
                                <ul className="specs-points-list">
                                    <li><strong>🤖 Microcontroller:</strong> Powered by the high-performance Raspberry Pi Pico W</li>
                                    <li><strong>📡 Inbuilt Sensors:</strong> Dual IR Sensors, MPU6050 Motion Sensor, Speaker, and 2 Input Buttons</li>
                                    <li><strong>💡 Visual Display:</strong> 8x5 (40) RGB NeoPixel LED lines for emojis, patterns, and indicators</li>
                                    <li><strong>🔗 Connectivity:</strong> Bluetooth Slot, Ultrasonic Slot, and Edge Connector for unlimited sensor expansion</li>
                                    <li><strong>🔋 Power System:</strong> 3.7V 500mAh Li-ion battery with integrated charging and short-circuit protection</li>
                                    <li><strong>🛡️ Durability:</strong> Built with non-toxic, low-voltage materials, making it classroom-safe and ready for heavy reuse</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why TeBot Section */}
                <section className="why-tebot-section section-block section-plain" id="why-tebot">
                    <div className="why-container section-container">
                        <div className="section-header">
                            <h2>Why <span style={{color: '#008273'}}>TeBot</span> is the <span style={{color: '#008273'}}>Ultimate Learning Choice</span></h2>
                        </div>
                        <div className="benefits-grid">
                            <div className="benefit-item reveal-card">
                                <div className="benefit-icon">
                                    <img src={ChildSafeDurable} alt="Child Safe and Durable icon" loading="lazy" />
                                </div>
                                <h3>Child Safe & Durable</h3>
                                <p>Built with non-toxic, low-voltage materials, making it classroom-safe and ready for heavy reuse.</p>
                            </div>
                            <div className="benefit-item reveal-card">
                                <div className="benefit-icon">
                                    <img src={PlugPlaySimplicity} alt="Plug and Play Simplicity icon" loading="lazy" />
                                </div>
                                <h3>Plug & Play Simplicity</h3>
                                <p>Ready-to-use components and inbuilt sensors ensure quick setup—start coding in minutes.</p>
                            </div>
                            <div className="benefit-item reveal-card">
                                <div className="benefit-icon">
                                    <img src={ProvenImpact} alt="Proven Impact icon" loading="lazy" />
                                </div>
                                <h3>Proven Impact</h3>
                                <p>Developed by Techyguide, a pioneer with 350+ AI/Robotics labs and over 100,000 students trained across India.</p>
                            </div>
                            <div className="benefit-item reveal-card">
                                <div className="benefit-icon">
                                    <img src={GuaranteedQuality} alt="Guaranteed Quality icon" loading="lazy" />
                                </div>
                                <h3>Guaranteed Quality</h3>
                                <p>Every TeBot includes a 1-year manufacturing warranty on the microcontroller.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Kit Offerings Section */}
                <section className="kits-offerings-section section-block section-mist" id="kits">
                    <div className="kits-container section-container">
                        <div className="section-header">
                            <h2><span style={{color: '#008273'}}>TeBot Kits</span> for Students</h2>
                        </div>
                        <div
                            className="kits-main-slider reveal-card"
                            onTouchStart={handleKitTouchStart}
                            onTouchMove={handleKitTouchMove}
                            onTouchEnd={handleKitTouchEnd}
                        >
                            <div className="kits-slider-window">
                                <div
                                    className="kits-slider-track"
                                    style={{ transform: `translateX(-${activeKitSlide * 100}%)` }}
                                >
                                    {kitOfferings.map((kit, index) => (
                                        <article
                                            key={index}
                                            className={`kit-main-slide ${index % 2 === 1 ? 'is-reverse' : ''} ${kit.name === 'TeBot Advance Kit' ? 'is-advance' : ''}`}
                                        >
                                            <div className="kit-main-image-card">
                                                <img src={kit.image} alt={kit.imageAlt} loading="lazy" />
                                            </div>
                                            <div className="kit-main-content-card">
                                                <div className="kit-number">{kit.number}</div>
                                                <h3>{kit.name}</h3>
                                                <p className="kit-description">{kit.description}</p>
                                                <div className="projects-badge">
                                                    📚 <strong>{kit.projects}</strong>
                                                </div>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>

                            <button
                                type="button"
                                className="kits-main-arrow prev"
                                aria-label="Previous kit"
                                onClick={() => moveKitSlide(-1)}
                            >
                                ‹
                            </button>
                            <button
                                type="button"
                                className="kits-main-arrow next"
                                aria-label="Next kit"
                                onClick={() => moveKitSlide(1)}
                            >
                                ›
                            </button>

                            <div className="kits-main-dots">
                                {kitOfferings.map((kit, slideIndex) => (
                                    <button
                                        key={kit.name}
                                        type="button"
                                        className={`kits-main-dot ${activeKitSlide === slideIndex ? 'active' : ''}`}
                                        aria-label={`Go to ${kit.name}`}
                                        onClick={() => goToKitSlide(slideIndex)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Projects Section */}
                <section className="featured-projects-section section-block section-soft" id="projects">
                    <div className="projects-container section-container">
                        <div className="section-header">
                            <h2>Featured <span style={{color: '#008273'}}>TeBot Projects</span></h2>
                        </div>
                        <p className="projects-intro">Explore some of our 50+ amazing projects students can build:</p>
                        <div className="projects-scroll-wrap">
                            <div className="projects-scroll-track">
                                {[...projectsList, ...projectsList].map((project, index) => (
                                    <div key={`${project.title}-${index}`} className="project-card reveal-card">
                                        <div className="project-number">{(index % projectsList.length) + 1}</div>
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Inquiry Form Section
                <section className="form-section section-block" id="interest-form">
                    <div className="form-container section-container">
                        <div className="section-header">
                            <h2>Get TeBot Advance for Your School! 📬</h2>
                        </div>
                        <p>Join the STEM revolution with 50+ hands-on projects</p>
                        <form className="inquiry-form" id="inquiry-form">
                            <div className="form-row">
                                <input type="text" name="school_name" placeholder="School Name" required />
                                <input type="text" name="contact_person" placeholder="Contact Person Name" required />
                            </div>
                            <div className="form-row">
                                <input type="email" name="email" placeholder="Email Address" required />
                                <input type="tel" name="phone" placeholder="Phone Number" required />
                            </div>
                            <textarea name="message" placeholder="Tell us how we can help your students innovate with TeBot..." rows="3" required></textarea>
                            <button type="submit" className="form-btn">📧 Send Inquiry Now</button>
                        </form>
                    </div>
                </section> */}

                {/* ===== ZOHO BIGIN CRM PROPOSAL FORM SECTION ===== */}
                {/* <ZohoBiginForm /> */}

            </div>
        </div>
    );
}

export default TeBoT;
