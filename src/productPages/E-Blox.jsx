import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './E-Blox.css';

// Import images
import robotKids from '../assets/ProductE-BloxImages/vecteezy_ai-generated-cute-robot-kids-with-isolated-transparant_38049144.png';
import robot1 from '../assets/ProductE-BloxImages/robot_2582246.png';
import robot2 from '../assets/ProductE-BloxImages/robotics_12775607.png';
import robot3 from '../assets/ProductE-BloxImages/robot_3558910.png';
import robot4 from '../assets/ProductE-BloxImages/robot_4512237.png';
import robot5 from '../assets/ProductE-BloxImages/robotics_1434292.png';
import hacker from '../assets/ProductE-BloxImages/hacker_10817459.png';
import bgImage1 from '../assets/ProductE-BloxImages/9743528.png';
import bgImage2 from '../assets/ProductE-BloxImages/5073198.jpg';

export default function EBlox() {
        const navigate = useNavigate();
        const [isKitPaused, setIsKitPaused] = useState(false);
        const [kitSlideIndex, setKitSlideIndex] = useState(0);
        const ebloxKitImages = [robot5, hacker];
        const projectsContainer = useRef(null);
        const [expandedAccordion, setExpandedAccordion] = useState(0);
    const rootRef = useRef(null);

    // Kit slider auto-scroll
    useEffect(() => {
        let sliderTimeout;
        if (!isKitPaused && ebloxKitImages.length > 1) {
            const showSlides = () => {
                setKitSlideIndex((prev) => {
                    const next = prev + 1;
                    return next >= ebloxKitImages.length ? 0 : next;
                });
                sliderTimeout = setTimeout(showSlides, 3000);
            };
            sliderTimeout = setTimeout(showSlides, 3000);
        }
        return () => {
            if (sliderTimeout) clearTimeout(sliderTimeout);
        };
    }, [isKitPaused, ebloxKitImages.length]);

    useEffect(() => {
        const root = rootRef.current;

        // Accordion functionality
        if (root) {
            const accordionHeaders = root.querySelectorAll('.tg-eblox-accordion-header');
            const handleAccordionClick = (e) => {
                const headerEl = e.currentTarget;
                const itemEl = headerEl.closest('.tg-eblox-accordion-item');
                const itemIndex = Array.from(root.querySelectorAll('.tg-eblox-accordion-item')).indexOf(itemEl);
                setExpandedAccordion(expandedAccordion === itemIndex ? -1 : itemIndex);
            };

            accordionHeaders.forEach((header) => {
                header.addEventListener('click', handleAccordionClick);
            });

            // Update accordion active state based on state
            const accordionItems = root.querySelectorAll('.tg-eblox-accordion-item');
            accordionItems.forEach((item, index) => {
                if (index === expandedAccordion) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }
    }, [expandedAccordion]);

    useEffect(() => {
        const root = rootRef.current;
        const projectsContainer = root?.querySelector('#projects-scroll');
        let cleanupFn = undefined;

        // --- Seamless auto-scroll for projects-scroll (TeBoT style) ---
        if (projectsContainer) {
            // Duplicate cards for seamless loop (only once)
            if (projectsContainer.children.length && !projectsContainer.classList.contains('looped')) {
                const cards = Array.from(projectsContainer.children);
                cards.forEach(card => {
                    projectsContainer.appendChild(card.cloneNode(true));
                });
                projectsContainer.classList.add('looped');
            }
            let lastTimestamp = 0;
            let animationId = null;
            let stopped = false;
            let isPaused = false;
            projectsContainer.addEventListener('mouseenter', () => isPaused = true);
            projectsContainer.addEventListener('mouseleave', () => isPaused = false);
            projectsContainer.addEventListener('touchstart', () => isPaused = true);
            projectsContainer.addEventListener('touchend', () => isPaused = false);
            // Increase speed and smoothness
            // Use a fixed increment per frame for ultra-smooth, buttery scroll
            const pixelsPerFrame = 3.5; // adjust for desired speed (higher for faster)
            const scroll = () => {
                if (stopped) return;
                if (!isPaused) {
                    projectsContainer.scrollLeft += pixelsPerFrame;
                    const singleSetWidth = projectsContainer.scrollWidth / 2;
                    if (projectsContainer.scrollLeft >= singleSetWidth) {
                        projectsContainer.scrollLeft -= singleSetWidth;
                    }
                }
                animationId = requestAnimationFrame(scroll);
            };
            animationId = requestAnimationFrame(scroll);
            // Proper cleanup for this animation
            cleanupFn = () => {
                stopped = true;
                if (animationId) cancelAnimationFrame(animationId);
            };
        }

        // Enhanced loading animation
        const contentLayout = root?.querySelector('.content-layout');
        if (contentLayout) {
            contentLayout.style.opacity = '0';
            contentLayout.style.transform = 'translateY(50px)';
            setTimeout(() => {
                contentLayout.style.transition = 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
                contentLayout.style.opacity = '1';
                contentLayout.style.transform = 'translateY(-40px)';
            }, 300);
        }

        // Enhanced keyboard navigation
        const heroButton = root?.querySelector('.btn-secondary');
        const heroImage = root?.querySelector('.image-section img');
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

        // Enhanced touch support
        if (heroImage && 'ontouchstart' in window) {
            heroImage.addEventListener('touchstart', function() {
                this.style.filter = 'drop-shadow(0 15px 40px rgba(0,0,0,0.6))';
            });
            heroImage.addEventListener('touchend', function() {
                this.style.filter = 'drop-shadow(0 10px 30px rgba(0,0,0,0.5))';
            });
        }

        // Cleanup
        return cleanupFn;
    }, []);

    return (
        <div className="eblox-page-root" style={{
            backgroundImage: `linear-gradient(rgba(0, 255, 149, 0.267), rgba(0, 130, 115, 0.25)), url(${bgImage1}), linear-gradient(rgba(0, 130, 115, 0.6), rgba(0, 130, 115, 0.6)), url(${bgImage2})`,
            backgroundColor: '#008273',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '80% 50%',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover'
        }}>
            <div className="background-container">
                <main className="content-layout">
                    <div className="image-section">
                        <img src={robotKids} alt="E-Blox Kit" />
                    </div>
                    <div className="info-section">
                        <h1>E-Blox Kit</h1>
                        <h2>Modular electronics kit for engineering education with 20+ components</h2>
                        <button className="btn-secondary">Explore Features</button>
                    </div>
                </main>
            </div>

            <div className="tg-eblox-page" ref={rootRef}>
                {/* Introduction to E-Blox */}
                <section className="tg-eblox-introduction" id="introduction">
                    <div className="tg-eblox-intro-container">
                        <h2>Introduction to E-Blox Electronics Kit</h2>
                        <p className="tg-eblox-intro-desc">
                            The E-Blox Kit is a modular electronics platform designed to teach circuit design, electronics fundamentals, and IoT integration. With 20+ components and industry-standard connectors, E-Blox bridges the gap between theoretical learning and practical engineering applications, enabling students to build real-world projects from day one.
                        </p>
                        <div className="tg-eblox-video-wrapper">
                            <iframe
                                width="100%"
                                height="400"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
                                title="E-Blox Kit Introduction"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </section>

                {/* 2. Dynamic Feature Blocks (Staggered Layout) */}
                <section className="tg-eblox-features-staggered" id="features-staggered">
                    <div className="tg-eblox-features-container">
                        <h2 className="tg-eblox-section-title">Engineering Excellence</h2>
                        <div className="tg-eblox-staggered-blocks">
                            <div className="tg-eblox-feature-block tg-eblox-block-1">
                                <div className="tg-eblox-block-icon">⚙️</div>
                                <h3>Component Modularity</h3>
                                <p>20+ discrete modules stack seamlessly for structured learning from basic circuits to complex systems.</p>
                            </div>
                            <div className="tg-eblox-feature-block tg-eblox-block-2">
                                <div className="tg-eblox-block-icon">🔌</div>
                                <h3>Standard Connectors</h3>
                                <p>Industry-standard connectors ensure compatibility and teach proper component integration practices.</p>
                            </div>
                            <div className="tg-eblox-feature-block tg-eblox-block-3">
                                <div className="tg-eblox-block-icon">📊</div>
                                <h3>Structured Learning Path</h3>
                                <p>Progressive complexity from circuits to IoT ensures fundamental understanding before advancement.</p>
                            </div>
                            <div className="tg-eblox-feature-block tg-eblox-block-4">
                                <div className="tg-eblox-block-icon">🔍</div>
                                <h3>Real Schematics</h3>
                                <p>Full circuit diagrams and technical documentation teach electronics engineering principles directly.</p>
                            </div>
                            <div className="tg-eblox-feature-block tg-eblox-block-5">
                                <div className="tg-eblox-block-icon">💡</div>
                                <h3>Breadboard Ready</h3>
                                <p>Components work with standard breadboards for hands-on circuit prototyping and experimentation.</p>
                            </div>
                            <div className="tg-eblox-feature-block tg-eblox-block-6">
                                <div className="tg-eblox-block-icon">🏗️</div>
                                <h3>Professional Grade</h3>
                                <p>Industrial-quality components used in actual circuit design for authentic engineering experience.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Full-Width Visual Impact Section */}
                <section className="tg-eblox-visual-impact">
                    <div className="tg-eblox-impact-content">
                        <h2>Engineering the Future Through Structured Components</h2>
                        <p>E-Blox teaches circuit design principles. Students graduate as capable electronics engineers.</p>
                        <button className="tg-eblox-impact-btn" onClick={() => navigate('/impact-program')}>Learn Our Method</button>
                    </div>
                </section>

                {/* 4. Zig-Zag Capability Section */}
                <section className="tg-eblox-zigzag" id="zigzag">
                    <div className="tg-eblox-zigzag-item tg-eblox-zigzag-left">
                        <div className="tg-eblox-zigzag-text">
                            <h3>Power Management Module</h3>
                            <p>Regulated power supplies, battery management, and voltage regulation circuits for safe, stable power distribution across all components.</p>
                        </div>
                        <div className="tg-eblox-zigzag-image">
                            <img src={robot1} alt="Power Management" loading="lazy" />
                        </div>
                    </div>

                    <div className="tg-eblox-zigzag-item tg-eblox-zigzag-right">
                        <div className="tg-eblox-zigzag-image">
                            <img src={robot2} alt="Sensor Integration" loading="lazy" />
                        </div>
                        <div className="tg-eblox-zigzag-text">
                            <h3>Sensor Integration Stack</h3>
                            <p>Modular sensor boards for temperature, humidity, distance, light, and motion detection with standard interfaces.</p>
                        </div>
                    </div>

                    <div className="tg-eblox-zigzag-item tg-eblox-zigzag-left">
                        <div className="tg-eblox-zigzag-text">
                            <h3>Communication Modules</h3>
                            <p>WiFi, Bluetooth, and wired connection modules enable device-to-device and cloud integration.</p>
                        </div>
                        <div className="tg-eblox-zigzag-image">
                            <img src={robot3} alt="Communication" loading="lazy" />
                        </div>
                    </div>
                </section>

                {/* 5. Interactive Accordion / Expandable Section */}
                <section className="tg-eblox-accordion" id="accordion">
                    <div className="tg-eblox-accordion-container">
                        <h2>Module Specifications</h2>
                        <div className="tg-eblox-accordion-items">
                            {[
                                {
                                    title: 'Control & Processing',
                                    content: 'Arduino-compatible microcontroller with ATmega328P processor, 32KB flash memory, 2KB SRAM, supporting C/C++ and Python programming languages.'
                                },
                                {
                                    title: 'Sensor Array',
                                    content: 'Includes DHT11 temperature/humidity, HC-SR04 ultrasonic, LDR light, Hall effect magnetic, and force sensitive resistor modules with analog/digital interfaces.'
                                },
                                {
                                    title: 'Actuator Control',
                                    content: 'Motor drivers for DC motors, servo control modules, relay circuits, and LED display drivers for comprehensive output control.'
                                },
                                {
                                    title: 'Interface & Expansion',
                                    content: 'Standard connector system (JST, DuPont) compatible with breadboards, Arduino shields, and third-party components for unlimited expansion.'
                                }
                            ].map((item, index) => (
                                <div key={index} className="tg-eblox-accordion-item">
                                    <button className="tg-eblox-accordion-header">
                                        <span>{item.title}</span>
                                        <span className="tg-eblox-accordion-icon">+</span>
                                    </button>
                                    <div className="tg-eblox-accordion-content">
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. Horizontal Scroll Showcase */}
                <section className="tg-eblox-scroll-showcase" id="scroll-showcase">
                    <div className="tg-eblox-showcase-header">
                        <h2>System Projects</h2>
                    </div>
                    <div className="tg-eblox-showcase-scroll" ref={projectsContainer}>
                        <div className="tg-eblox-showcase-track" id="projects-scroll">
                            {[
                                { title: 'Smart Monitoring System', desc: 'Multi-sensor data logging', image: robot1 },
                                { title: 'Home Automation Hub', desc: 'Centralized control system', image: robot2 },
                                { title: 'Weather Station', desc: 'Environmental data collection', image: robot3 },
                                { title: 'Access Control System', desc: 'Secure entry solution', image: robot4 },
                                { title: 'IoT Gateway', desc: 'Cloud connectivity bridge', image: robot5 },
                                { title: 'Data Visualization', desc: 'Real-time analytics display', image: hacker }
                            ].map((project, index) => (
                                <div key={`${project.title}-${index}`} className="tg-eblox-showcase-card">
                                    <img src={project.image} alt={project.title} loading="lazy" />
                                    <h4>{project.title}</h4>
                                    <p>{project.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 7. Strong CTA Section Before Footer */}
                <section className="tg-eblox-cta-final" id="cta-final">
                    <div className="tg-eblox-cta-wrapper">
                        <h2>Equip Your Engineering Lab Today</h2>
                        <p>E-Blox: Where electronics meets education</p>
                        <button className="tg-eblox-cta-submit">Request Demo Kit</button>
                    </div>
                </section>
            </div>

        </div>
    );
}
