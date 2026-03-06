import { useEffect, useRef, useState } from 'react';
import './I-BoT.css';
import heroBgLayer from '../assets/ProductI-BoTImages/5073198.jpg';
import heroPattern from '../assets/ProductI-BoTImages/10893802.png';
import heroRobot from '../assets/ProductI-BoTImages/vecteezy_ai-generated-cute-robot-kids-with-isolated-transparant_38049144.png';
import mainBoard from '../assets/ProductI-BoTImages/main board.png';
import kitImage from '../assets/ProductI-BoTImages/kit.jpg';
import homeAutomation from '../assets/ProductI-BoTImages/home automation.jpg';
import plantMonitor from '../assets/ProductI-BoTImages/plant monitor.jpg';
import smokeDetection from '../assets/ProductI-BoTImages/smoke detection.jpg';

function IBoT() {
    const projectsRef = useRef(null);
    const [activeKitSlide, setActiveKitSlide] = useState(0);
    const touchStartXRef = useRef(0);
    const touchEndXRef = useRef(0);

    useEffect(() => {
        document.title = 'i-Bot IoT & Robotics Kit | 100+ Wireless STEM Projects | Techyguide';

        const metaDescriptionText = 'Master IoT with the i-Bot Advance Kit. Build smart home systems, voice-controlled robots, and 100+ projects using the ESP32 chip.';
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
        canonical.setAttribute('href', 'https://techyguide.com/#/ibot');
    }, []);

    useEffect(() => {
        const heroImage = document.querySelector('.ibot-page-root .image-section img');
        const heroButton = document.querySelector('.ibot-page-root .btn-secondary');

        const handleButtonClick = (event) => {
            event.preventDefault();
            const target = document.getElementById('ibot-tech-focus');
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };

        const handleImgEnter = () => {
            if (heroImage) heroImage.style.filter = 'drop-shadow(0 15px 40px rgba(0,0,0,0.6))';
        };

        const handleImgLeave = () => {
            if (heroImage) heroImage.style.filter = 'drop-shadow(0 10px 30px rgba(0,0,0,0.5))';
        };

        if (heroButton) heroButton.addEventListener('click', handleButtonClick);
        if (heroImage) {
            heroImage.addEventListener('mouseenter', handleImgEnter);
            heroImage.addEventListener('mouseleave', handleImgLeave);
            heroImage.addEventListener('touchstart', handleImgEnter);
            heroImage.addEventListener('touchend', handleImgLeave);
        }

        return () => {
            if (heroButton) heroButton.removeEventListener('click', handleButtonClick);
            if (heroImage) {
                heroImage.removeEventListener('mouseenter', handleImgEnter);
                heroImage.removeEventListener('mouseleave', handleImgLeave);
                heroImage.removeEventListener('touchstart', handleImgEnter);
                heroImage.removeEventListener('touchend', handleImgLeave);
            }
        };
    }, []);

    useEffect(() => {
        const handleAnchorClick = (e) => {
            const target = e.target.closest('a[href^="#"]');
            if (target) {
                e.preventDefault();
                const id = target.getAttribute('href').slice(1);
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);

        return () => {
            document.removeEventListener('click', handleAnchorClick);
        };
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveKitSlide((prevSlide) => (prevSlide + 1) % 2);
        }, 3500);

        return () => clearInterval(timer);
    }, []);

    const goToKitSlide = (slideIndex) => {
        setActiveKitSlide(slideIndex);
    };

    const moveKitSlide = (direction) => {
        setActiveKitSlide((prevSlide) => {
            const totalSlides = 2;
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
        const container = projectsRef.current;
        if (!container) return;

        const track = container.querySelector('.ibot-scroll-track');
        if (!track) return;

        if (track.children.length && !track.classList.contains('looped')) {
            const cards = Array.from(track.children);
            cards.forEach((card) => {
                track.appendChild(card.cloneNode(true));
            });
            track.classList.add('looped');
        }

        let animationId = null;
        let stopped = false;
        let isPaused = false;

        const handleMouseEnter = () => {
            isPaused = true;
        };

        const handleMouseLeave = () => {
            isPaused = false;
        };

        const handleTouchStart = () => {
            isPaused = true;
        };

        const handleTouchEnd = () => {
            isPaused = false;
        };

        container.addEventListener('mouseenter', handleMouseEnter);
        container.addEventListener('mouseleave', handleMouseLeave);
        container.addEventListener('touchstart', handleTouchStart);
        container.addEventListener('touchend', handleTouchEnd);

        const scroll = () => {
            if (stopped) return;
            if (!isPaused) {
                container.scrollLeft += 2.9;
                const singleSetWidth = track.scrollWidth / 2;
                if (container.scrollLeft >= singleSetWidth) {
                    container.scrollLeft -= singleSetWidth;
                }
            }
            animationId = requestAnimationFrame(scroll);
        };

        animationId = requestAnimationFrame(scroll);

        return () => {
            stopped = true;
            if (animationId) cancelAnimationFrame(animationId);
            container.removeEventListener('mouseenter', handleMouseEnter);
            container.removeEventListener('mouseleave', handleMouseLeave);
            container.removeEventListener('touchstart', handleTouchStart);
            container.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);

    const heroBackgroundStyle = {
        backgroundImage: `linear-gradient(120deg, rgba(0, 130, 115, 0.25), rgba(0, 130, 115, 0.25)), url(${heroPattern}), linear-gradient(90deg, rgba(0, 130, 115, 0.6), rgba(0, 130, 115, 0.6)), url(${heroBgLayer})`,
        backgroundRepeat: 'no-repeat, no-repeat, no-repeat, no-repeat',
        backgroundPosition: 'left center, left center, left center, center center',
        backgroundAttachment: 'fixed, fixed, fixed, fixed',
        backgroundSize: 'cover, cover, cover, cover'
    };

    return (
        <div className="ibot-page-root" style={heroBackgroundStyle}>
            <div className="background-container">
                <main className="content-layout">
                    <div className="image-section">
                        <img src={heroRobot} alt="I-BoT Robot" />
                    </div>
                    <div className="info-section">
                        <h1>I-BoT Kit</h1>
                        <h2>Smart IoT robotics kit for young innovators with 50+ projects</h2>
                        <button className="btn-secondary">Explore Features</button>
                    </div>
                </main>
            </div>

            <div className="ibot-modern-page">
                
                {/* INTRODUCTION SECTION */}
                <section className="ibot-section intro-section" id="introduction">
                    <div className="container">
                        <div className="section-header">
                            <h2>Introduction to <span className="highlight-text">i-Bot Kit</span></h2>
                        </div>
                        <p className="intro-description">
                            The i-Bot Kit is a cutting-edge IoT and robotics learning platform designed for the next generation of innovators. Powered by the ultra-fast ESP32 chip with built-in Wi-Fi and Bluetooth, i-Bot enables students to create smart, connected projects ranging from basic sensor automation to advanced voice-controlled robots. With over 100+ projects and industry-grade sensors, this kit bridges classroom learning with real-world technology applications.
                        </p>
                        <div className="ibot-video-container">
                            <iframe
                                className="ibot-intro-video"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
                                title="Introduction to i-Bot Kit"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </section>

                {/* SMART WORLD CTA SECTION */}
                <section className="ibot-section smart-world-section">
                    <div className="container">
                        <h2 className="smart-world-headline">
                            Build Your Own Smart World with i-Bot – The Ultimate IoT Learning Ecosystem.
                        </h2>
                        <p className="smart-world-subheadline">
                            Empowering young innovators (Ages 7–14) to master the Internet of Things. i-Bot (TechIoT) isn't just a robot; it's a gateway to building smart homes, wireless gadgets, and connected cities.
                        </p>
                        <div className="smart-world-cta-buttons">
                            <a href="#kits" className="cta-btn cta-primary">Explore the Kits</a>
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" className="cta-btn cta-secondary">Watch i-Bot in Action</a>
                        </div>
                    </div>
                </section>
                
                {/* SECTION 1: TECHNOLOGIES AT FOCUS */}
                <section className="ibot-section tech-focus-section" id="ibot-tech-focus">
                    <div className="container">
                        <div className="section-header">
                            <h2>Technologies at Focus</h2>
                            <p>Master the core technologies shaping IoT and robotics innovation</p>
                        </div>

                        <div className="tech-grid">
                            <div className="tech-card">
                                <img src={homeAutomation} alt="Internet of Things" className="tech-image" />
                                <h3>Internet of Things (IoT)</h3>
                                <p>The core of i-Bot. Learn to send data to the cloud and control devices from your smartphone using the Blynk IoT platform.</p>
                            </div>
                            
                            <div className="tech-card">
                                <img src={mainBoard} alt="Wireless Communication" className="tech-image" />
                                <h3>Wireless Communication</h3>
                                <p>Master Wi-Fi and Bluetooth technologies for long-range remote control and automation.</p>
                            </div>
                            
                            <div className="tech-card">
                                <img src={smokeDetection} alt="Advanced Sensory Logic" className="tech-image" />
                                <h3>Advanced Sensory Logic</h3>
                                <p>Use industry-grade sensors to detect Gas (MQ2), Flame, Rain, and Soil Moisture.</p>
                            </div>
                            
                            <div className="tech-card">
                                <img src={kitImage} alt="Automation Engineering" className="tech-image" />
                                <h3>Automation Engineering</h3>
                                <p>Build complex systems like Smart Baby Cradles and Automated Sanitizer Dispensers.</p>
                            </div>
                            
                            <div className="tech-card">
                                <img src={plantMonitor} alt="Dual Programming" className="tech-image" />
                                <h3>Dual Programming</h3>
                                <p>Start with graphical block coding and graduate to professional C++ programming using Arduino IDE.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 2: i-BOT TECHNOLOGY - VERTICAL CARDS */}
                <section className="ibot-section hardware-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>i-Bot Technology: The Hardware</h2>
                            <p>Industrial-grade engineering with classroom-friendly design</p>
                        </div>

                        <div className="hardware-grid">
                            {[
                                { title: 'The Brain', desc: 'Powered by the ultra-fast ESP32 Chip (4 MB) with dual-mode Wi-Fi and Bluetooth.', image: mainBoard },
                                { title: 'All-in-One Controller', desc: 'Integrated motor drivers, buzzer, LED, and multi-sensor pinouts with no messy wiring.', image: kitImage },
                                { title: 'Safety First', desc: 'Double-layer PCB with 3-layer short circuit protection ensuring safe classroom usage.', image: smokeDetection },
                                { title: 'Power Efficiency', desc: 'Flexible power support from 3.7V to 12V with JST connectors for rechargeable batteries.', image: homeAutomation }
                            ].map((item, idx) => (
                                <div key={idx} className="hardware-card">
                                    <img src={item.image} alt={item.title} loading="lazy" className="hardware-card-image" />
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 3: WHY i-BOT IS THE BEST */}
                <section className="ibot-section why-best-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Why i-Bot is the Best</h2>
                            <p>A complete IoT learning platform built for modern educators</p>
                        </div>

                        <div className="why-grid">
                            {/* Large 100+ Projects Card */}
                            <div className="why-card large projects-card">
                                <img src={homeAutomation} alt="100+ Projects" className="why-card-image" />
                                <div className="stat-counter">100+</div>
                                <h3>Unmatched Project Variety</h3>
                                <p>From simple LED blink to advanced Human Following Robot, explore endless possibilities</p>
                            </div>

                            {/* Other Feature Cards */}
                            <div className="why-card">
                                <img src={plantMonitor} alt="Real-World Applications" className="why-card-image" />
                                <h3>Real-World Applications</h3>
                                <p>Projects simulate real industry solutions such as Smart Agriculture and IoT Wheelchairs.</p>
                            </div>

                            <div className="why-card">
                                <img src={mainBoard} alt="Modular & Scalable" className="why-card-image" />
                                <h3>Modular & Scalable</h3>
                                <p>The i-Bot board works as a universal brain compatible with Humanoid robots, Robotic Arms, and 3D printed chassis.</p>
                            </div>

                            <div className="why-card">
                                <img src={kitImage} alt="Durability & Warranty" className="why-card-image" />
                                <h3>Durability & Warranty</h3>
                                <p>Industrial-grade components backed by a 1-year manufacturing warranty.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 4: i-BOT KITS - HORIZONTAL SCROLL */}
                <section className="ibot-section kits-section" id="kits">
                    <div className="container">
                        <div className="section-header">
                            <h2>i-Bot Kits for Students</h2>
                            <p>Choose the perfect kit for your learning journey</p>
                        </div>

                        <div
                            className="kits-main-slider"
                            onTouchStart={handleKitTouchStart}
                            onTouchMove={handleKitTouchMove}
                            onTouchEnd={handleKitTouchEnd}
                        >
                            <div className="kits-slider-window">
                                <div
                                    className="kits-slider-track"
                                    style={{ transform: `translateX(-${activeKitSlide * 100}%)` }}
                                >
                                    {/* Kit 1 */}
                                    <article className="kit-main-slide">
                                        <div className="kit-scroll-card">
                                            <div className="kit-scroll-image">
                                                <img src={kitImage} alt="i-Bot Starter Kit" />
                                            </div>

                                            <div className="kit-scroll-content">
                                                <div className="kit-header">
                                                    <h3>i-Bot Starter Kit</h3>
                                                    <span className="kit-badge">Beginner</span>
                                                </div>

                                                <div className="kit-details">
                                                    <div className="kit-section">
                                                        <h4>Description</h4>
                                                        <p>The perfect entry point into smart electronics and wireless control.</p>
                                                    </div>

                                                    <div className="kit-section">
                                                        <h4>Projects</h4>
                                                        <p>20+ foundational projects focusing on sensor logic and motor control.</p>
                                                    </div>

                                                    <div className="kit-section">
                                                        <h4>Ideal For</h4>
                                                        <p>Beginners who want to understand how the Internet of Things works.</p>
                                                    </div>
                                                </div>

                                                <a href="#contact" className="kit-btn">Get Started</a>
                                            </div>
                                        </div>
                                    </article>

                                    {/* Kit 2 */}
                                    <article className="kit-main-slide">
                                        <div className="kit-scroll-card featured">
                                            <div className="kit-scroll-image">
                                                <img src={mainBoard} alt="i-Bot Advance Kit" />
                                            </div>

                                            <div className="kit-scroll-content">
                                                <div className="kit-header featured-header">
                                                    <h3>i-Bot Advance Kit</h3>
                                                    <span className="kit-badge advanced">Advanced</span>
                                                </div>

                                                <div className="kit-details">
                                                    <div className="kit-section">
                                                        <h4>Description</h4>
                                                        <p>Our most comprehensive IoT kit packed with over 45+ components.</p>
                                                    </div>

                                                    <div className="kit-section">
                                                        <h4>Projects</h4>
                                                        <p>100+ projects including IoT Home Automation, Radar Systems, Maze Solvers, and Voice-Controlled Robots.</p>
                                                    </div>

                                                    <div className="kit-section">
                                                        <h4>Featured Hardware</h4>
                                                        <ul className="hardware-list">
                                                            <li>I2C LCD Display</li>
                                                            <li>Servo Motors</li>
                                                            <li>Water Pump</li>
                                                            <li>Pulse Rate Sensor</li>
                                                            <li>Environmental Sensors (Gas, Rain, Soil)</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <a href="#contact" className="kit-btn advanced-btn">Explore Now</a>
                                            </div>
                                        </div>
                                    </article>
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
                                <button
                                    type="button"
                                    className={`kits-main-dot ${activeKitSlide === 0 ? 'active' : ''}`}
                                    aria-label="Go to i-Bot Starter Kit"
                                    onClick={() => goToKitSlide(0)}
                                />
                                <button
                                    type="button"
                                    className={`kits-main-dot ${activeKitSlide === 1 ? 'active' : ''}`}
                                    aria-label="Go to i-Bot Advance Kit"
                                    onClick={() => goToKitSlide(1)}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Projects Section */}
                <section className="ibot-section featured-projects-section" id="projects">
                    <div className="container">
                        <div className="section-header">
                            <h2>Featured i-Bot Projects</h2>
                        </div>
                        <p className="projects-intro">Explore some of our 100+ amazing projects students can build:</p>
                        <div className="projects-scroll-wrap">
                            <div className="projects-scroll-track">
                                {[
                                    { title: "Smart Home Controller", description: "Control home devices via WiFi and Bluetooth" },
                                    { title: "Weather Station", description: "Real-time environmental monitoring system" },
                                    { title: "Voice Controlled Robot", description: "Voice command-driven IoT robotics" },
                                    { title: "Plant Care System", description: "Soil moisture and temperature monitoring" },
                                    { title: "Smart Security System", description: "Motion detection with alerts via WiFi" },
                                    { title: "IoT Door Lock", description: "Secure access with wireless control" },
                                    { title: "Air Quality Monitor", description: "Track and display pollution levels" },
                                    { title: "Smart Parking", description: "Automated parking detection system" },
                                    { title: "Fire Alert System", description: "WiFi-enabled smoke and flame detection" },
                                    { title: "Smart Garden", description: "Automated watering with sensor feedback" },
                                    { title: "Traffic Light System", description: "Simulated traffic control with sensors" },
                                    { title: "Wireless Car", description: "Bluetooth and WiFi controlled vehicle" }
                                ].concat([
                                    { title: "Smart Home Controller", description: "Control home devices via WiFi and Bluetooth" },
                                    { title: "Weather Station", description: "Real-time environmental monitoring system" },
                                    { title: "Voice Controlled Robot", description: "Voice command-driven IoT robotics" },
                                    { title: "Plant Care System", description: "Soil moisture and temperature monitoring" },
                                    { title: "Smart Security System", description: "Motion detection with alerts via WiFi" },
                                    { title: "IoT Door Lock", description: "Secure access with wireless control" },
                                    { title: "Air Quality Monitor", description: "Track and display pollution levels" },
                                    { title: "Smart Parking", description: "Automated parking detection system" },
                                    { title: "Fire Alert System", description: "WiFi-enabled smoke and flame detection" },
                                    { title: "Smart Garden", description: "Automated watering with sensor feedback" },
                                    { title: "Traffic Light System", description: "Simulated traffic control with sensors" },
                                    { title: "Wireless Car", description: "Bluetooth and WiFi controlled vehicle" }
                                ]).map((project, index) => (
                                    <div key={`${project.title}-${index}`} className="project-card">
                                        <div className="project-number">{(index % 12) + 1}</div>
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}

export default IBoT;
