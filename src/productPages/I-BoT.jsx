import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    const rootRef = useRef(null);
    const testimonialsRef = useRef(null);
    const projectsRef = useRef(null);
    const navigate = useNavigate();
    const [currentKitIndex, setCurrentKitIndex] = useState(0);
    const [isKitPaused, setIsKitPaused] = useState(false);
    const [expandedAccordion, setExpandedAccordion] = useState(0);

    const ibotKitData = [
        {
            image: kitImage,
            imageAlt: "I-BoT Kit Contents",
            title: "Everything You Need to Get Started",
            description: "The I-BoT kit includes 29 essential components designed to teach robotics and IoT concepts from beginner to advanced levels.",
            components: [
                {
                    title: "Controllers & Boards",
                    items: ["TechIoT ESP32 Board", "2-Channel Relay Module", "I2C OLED Display", "LCD Display"]
                },
                {
                    title: "Sensors & Actuators",
                    items: ["PIR Motion Sensor", "Ultrasonic Sensor", "IR Sensor", "Temperature & Humidity (DHT11)", "Pressure Sensor (BMP180)"]
                },
                {
                    title: "Motors & Mechanics",
                    items: ["BO Motors with Wheels", "Servo Motors", "Motor Driver Module", "Water Pump Module"]
                },
                {
                    title: "Power & Connectivity",
                    items: ["12V Rechargeable Battery", "Battery Charger", "JST Connectors", "Built-in WiFi"]
                }
            ]
        },
        {
            image: mainBoard,
            imageAlt: "I-BoT Main Board",
            title: "Advanced Control System",
            description: "TechIoT ESP32-based controller with WiFi connectivity and multiple sensor interfaces for sophisticated IoT projects.",
            components: [
                {
                    title: "Controllers & Boards",
                    items: ["TechIoT ESP32 Board", "2-Channel Relay Module", "I2C OLED Display", "LCD Display"]
                },
                {
                    title: "Sensors & Actuators",
                    items: ["PIR Motion Sensor", "Ultrasonic Sensor", "IR Sensor", "Temperature & Humidity (DHT11)", "Pressure Sensor (BMP180)"]
                },
                {
                    title: "Motors & Mechanics",
                    items: ["BO Motors with Wheels", "Servo Motors", "Motor Driver Module", "Water Pump Module"]
                },
                {
                    title: "Power & Connectivity",
                    items: ["12V Rechargeable Battery", "Battery Charger", "JST Connectors", "Built-in WiFi"]
                }
            ]
        }
    ];

    useEffect(() => {
        let sliderTimeout;
        if (!isKitPaused && ibotKitData.length > 1) {
            const showSlides = () => {
                setCurrentKitIndex((prev) => {
                    const next = prev + 1;
                    return next >= ibotKitData.length ? 0 : next;
                });
                sliderTimeout = setTimeout(showSlides, 3000);
            };
            sliderTimeout = setTimeout(showSlides, 3000);
        }
        return () => {
            if (sliderTimeout) clearTimeout(sliderTimeout);
        };
    }, [isKitPaused, ibotKitData.length]);

    useEffect(() => {
        const root = rootRef.current;
        if (!root) return;

        // Accordion functionality
        const accordionHeaders = root.querySelectorAll('.tg-ibot-accordion-header');
        const handleAccordionClick = (e) => {
            const headerEl = e.currentTarget;
            const itemEl = headerEl.closest('.tg-ibot-accordion-item');
            const itemIndex = Array.from(root.querySelectorAll('.tg-ibot-accordion-item')).indexOf(itemEl);
            setExpandedAccordion(expandedAccordion === itemIndex ? -1 : itemIndex);
        };

        accordionHeaders.forEach((header) => {
            header.addEventListener('click', handleAccordionClick);
        });

        // Update accordion active state based on state
        const accordionItems = root.querySelectorAll('.tg-ibot-accordion-item');
        accordionItems.forEach((item, index) => {
            if (index === expandedAccordion) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        let stopFns = [];
        
        return () => {
            accordionHeaders.forEach((header) => {
                header.removeEventListener('click', handleAccordionClick);
            });
            stopFns.forEach(stop => stop?.());
        };
    }, [expandedAccordion]);

    useEffect(() => {
        const root = rootRef.current;
        if (!root) return;

        let stopFns = [];

        // Hero-specific interactions (scoped)
        const heroRoot = root.querySelector('.ibot-hero-root');
        const heroImageEl = heroRoot ? heroRoot.querySelector('.image-section img') : null;
        const heroTitleEl = heroRoot ? heroRoot.querySelector('.info-section h1') : null;
        const heroButtonEl = heroRoot ? heroRoot.querySelector('.btn-secondary') : null;

        const smoothScrollTo = (element, duration = 1000) => {
            if (!element) return;
            const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 20;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            let startTime = null;

            const easeInOutCubic = (t, b, c, d) => {
                let time = t / (d / 2);
                if (time < 1) return (c / 2) * time * time * time + b;
                time -= 2;
                return (c / 2) * (time * time * time + 2) + b;
            };

            const animation = (currentTime) => {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            };

            requestAnimationFrame(animation);
        };

        if (heroImageEl) {
            const handleImgEnter = () => { heroImageEl.style.filter = 'drop-shadow(0 15px 40px rgba(0,0,0,0.6))'; };
            const handleImgLeave = () => { heroImageEl.style.filter = 'drop-shadow(0 10px 30px rgba(0,0,0,0.5))'; };
            const handleImgClick = () => {
                heroImageEl.style.filter = 'drop-shadow(0 20px 50px rgba(0,0,0,0.7))';
                setTimeout(() => { heroImageEl.style.filter = 'drop-shadow(0 10px 30px rgba(0,0,0,0.5))'; }, 300);
            };
            heroImageEl.addEventListener('mouseenter', handleImgEnter);
            heroImageEl.addEventListener('mouseleave', handleImgLeave);
            heroImageEl.addEventListener('click', handleImgClick);
            heroImageEl.addEventListener('touchstart', handleImgEnter);
            heroImageEl.addEventListener('touchend', handleImgLeave);
            stopFns.push(() => {
                heroImageEl.removeEventListener('mouseenter', handleImgEnter);
                heroImageEl.removeEventListener('mouseleave', handleImgLeave);
                heroImageEl.removeEventListener('click', handleImgClick);
                heroImageEl.removeEventListener('touchstart', handleImgEnter);
                heroImageEl.removeEventListener('touchend', handleImgLeave);
            });
        }

        if (heroTitleEl) {
            const handleTitleEnter = () => {
                heroTitleEl.style.color = '#00d4ff';
                heroTitleEl.style.textShadow = '0 0 20px rgba(0, 212, 255, 0.5)';
            };
            const handleTitleLeave = () => {
                heroTitleEl.style.color = 'rgb(255, 153, 0)';
                heroTitleEl.style.textShadow = 'none';
            };
            heroTitleEl.addEventListener('mouseenter', handleTitleEnter);
            heroTitleEl.addEventListener('mouseleave', handleTitleLeave);
            stopFns.push(() => {
                heroTitleEl.removeEventListener('mouseenter', handleTitleEnter);
                heroTitleEl.removeEventListener('mouseleave', handleTitleLeave);
            });
        }

        if (heroButtonEl) {
            const handleBtnClick = (e) => {
                e.preventDefault();
                heroButtonEl.style.transform = 'translateY(-1px)';
                setTimeout(() => {
                    heroButtonEl.style.transform = 'translateY(-2px)';
                    const introSection = root.querySelector('#introduction');
                    smoothScrollTo(introSection, 1200);
                }, 150);
            };
            heroButtonEl.addEventListener('click', handleBtnClick);
            stopFns.push(() => heroButtonEl.removeEventListener('click', handleBtnClick));
        }

        // Smooth scroll for anchor links (scoped to this page only)
        const handleAnchorClick = (e) => {
            const target = e.target.closest('a[href^="#"]');
            if (target && root.contains(target)) {
                e.preventDefault();
                const selector = target.getAttribute('href');
                const element = selector ? root.querySelector(selector) : null;
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        root.addEventListener('click', handleAnchorClick);

        // Intersection Observer for fade-in animations (scoped)
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        const elements = root.querySelectorAll('.feature-item, .tech-card, .project-card, .testimonial-card');
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease-out';
            observer.observe(el);
        });

        // Auto-scroll projects and testimonials with true circular infinite loop
        const projectsContainer = projectsRef.current;
        const testimonialsContainer = testimonialsRef.current;
        
        // True infinite circular scroll with dynamic measurement and proper cleanup
        const createAutoScroll = (container, pixelsPerFrame = 3.5) => {
            if (!container) return null;

            let animationId = null;
            let stopped = false;
            let isPaused = false;

            // Add pause on hover/touch
            const handleMouseEnter = () => isPaused = true;
            const handleMouseLeave = () => isPaused = false;
            const handleTouchStart = () => isPaused = true;
            const handleTouchEnd = () => isPaused = false;

            container.addEventListener('mouseenter', handleMouseEnter);
            container.addEventListener('mouseleave', handleMouseLeave);
            container.addEventListener('touchstart', handleTouchStart);
            container.addEventListener('touchend', handleTouchEnd);

            const scroll = () => {
                if (stopped) return;
                if (!isPaused) {
                    container.scrollLeft += pixelsPerFrame;

                    // Measure half of the total content width (first set width)
                    const singleSetWidth = container.scrollWidth / 2;
                    if (container.scrollLeft >= singleSetWidth) {
                        container.scrollLeft -= singleSetWidth;
                    }
                }

                animationId = requestAnimationFrame(scroll);
            };

            animationId = requestAnimationFrame(scroll);

            // Return a stopper to cleanup correctly
            return () => {
                stopped = true;
                if (animationId) cancelAnimationFrame(animationId);
                container.removeEventListener('mouseenter', handleMouseEnter);
                container.removeEventListener('mouseleave', handleMouseLeave);
                container.removeEventListener('touchstart', handleTouchStart);
                container.removeEventListener('touchend', handleTouchEnd);
            };
        };
        
        // Start scrolling after delay
        const timeoutId = setTimeout(() => {
            if (projectsContainer) {
                const stop = createAutoScroll(projectsContainer, 3.5);
                if (stop) stopFns.push(stop);
            }

            if (testimonialsContainer) {
                const stop = createAutoScroll(testimonialsContainer, 3.2);
                if (stop) stopFns.push(stop);
            }
        }, 1500);

        return () => {
            clearTimeout(timeoutId);
            stopFns.forEach(stop => stop());
            root.removeEventListener('click', handleAnchorClick);
            observer.disconnect();
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

            <div className="tg-ibot-page" ref={rootRef}>
                {/* Introduction to I-Bot */}
                <section className="tg-ibot-introduction" id="introduction">
                    <div className="tg-ibot-intro-container">
                        <h2>Introduction to I-BoT Advance Kit</h2>
                        <p className="tg-ibot-intro-desc">
                            The I-BoT Advance Kit is the ultimate toolkit for ambitious young innovators. It integrates a vast array of high-tech sensors including WiFi, Bluetooth, and IoT modules, enabling students to execute 50+ professional-grade projects. From building autonomous robots to smart home systems, this kit is designed for those who want to master Robotics, IoT, and AI in one comprehensive package.
                        </p>
                        <div className="tg-ibot-video-wrapper">
                            <iframe
                                width="100%"
                                height="400"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
                                title="Introduction to I-BoT Advance Kit"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </section>

                {/* 2. Dynamic Feature Blocks (Staggered Layout) */}
                <section className="tg-ibot-features-staggered" id="features-staggered">
                    <div className="tg-ibot-features-container">
                        <h2 className="tg-ibot-section-title">Why I-BoT?</h2>
                        <div className="tg-ibot-staggered-blocks">
                            <div className="tg-ibot-feature-block tg-ibot-block-1">
                                <div className="tg-ibot-block-icon">🎯</div>
                                <h3>50+ Real Projects</h3>
                                <p>From LED patterns to autonomous robots, students execute industry-ready projects that build practical skills.</p>
                            </div>
                            <div className="tg-ibot-feature-block tg-ibot-block-2">
                                <div className="tg-ibot-block-icon">🔧</div>
                                <h3>Reusable Components</h3>
                                <p>Modular design lets students deconstruct, modify, and rebuild for endless creative possibilities.</p>
                            </div>
                            <div className="tg-ibot-feature-block tg-ibot-block-3">
                                <div className="tg-ibot-block-icon">🚀</div>
                                <h3>WiFi Connected</h3>
                                <p>Built-in ESP32 with WiFi enables IoT projects, cloud connectivity, and smart home automation.</p>
                            </div>
                            <div className="tg-ibot-feature-block tg-ibot-block-4">
                                <div className="tg-ibot-block-icon">⚡</div>
                                <h3>Beginner to Pro</h3>
                                <p>Scratch programming for newbies, C++ for advanced learners—one kit scales with their journey.</p>
                            </div>
                            <div className="tg-ibot-feature-block tg-ibot-block-5">
                                <div className="tg-ibot-block-icon">🎨</div>
                                <h3>RGB LED Display</h3>
                                <p>40 NeoPixel LEDs create vibrant visual feedback, emojis, and lighting effects for engaging projects.</p>
                            </div>
                            <div className="tg-ibot-feature-block tg-ibot-block-6">
                                <div className="tg-ibot-block-icon">🛡️</div>
                                <h3>Safety Certified</h3>
                                <p>Non-toxic, low-voltage materials with 1-year warranty built for classroom environments.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Full-Width Visual Impact Section */}
                <section className="tg-ibot-visual-impact">
                    <div className="tg-ibot-impact-content">
                        <h2>Transform Learning with Hands-On Technology</h2>
                        <p>Trusted by 350+ schools, I-BoT has trained over 100,000 students in robotics, IoT, and AI.</p>
                        <button className="tg-ibot-impact-btn" onClick={() => navigate('/impact-program')}>Explore Our Impact</button>
                    </div>
                </section>

                {/* 4. Zig-Zag Capability Section */}
                <section className="tg-ibot-zigzag" id="zigzag">
                    <div className="tg-ibot-zigzag-item tg-ibot-zigzag-left">
                        <div className="tg-ibot-zigzag-text">
                            <h3>Smart Sensors</h3>
                            <p>PIR motion detection, ultrasonic distance sensing, temperature & humidity monitoring, and IR receiver module for complete environmental perception.</p>
                        </div>
                        <div className="tg-ibot-zigzag-image">
                            <img src={mainBoard} alt="Smart Sensors" loading="lazy" />
                        </div>
                    </div>

                    <div className="tg-ibot-zigzag-item tg-ibot-zigzag-right">
                        <div className="tg-ibot-zigzag-image">
                            <img src={kitImage} alt="Motor Control" loading="lazy" />
                        </div>
                        <div className="tg-ibot-zigzag-text">
                            <h3>Powerful Motors</h3>
                            <p>Dual BO motors with wheels, servo motors for precise control, and a water pump module for automation experiments.</p>
                        </div>
                    </div>

                    <div className="tg-ibot-zigzag-item tg-ibot-zigzag-left">
                        <div className="tg-ibot-zigzag-text">
                            <h3>Wireless Control</h3>
                            <p>Bluetooth connectivity and WiFi module enable remote control, telemetry data streaming, and IoT cloud integration.</p>
                        </div>
                        <div className="tg-ibot-zigzag-image">
                            <img src={homeAutomation} alt="Wireless Control" loading="lazy" />
                        </div>
                    </div>
                </section>

                {/* 5. Interactive Accordion / Expandable Section */}
                <section className="tg-ibot-accordion" id="accordion">
                    <div className="tg-ibot-accordion-container">
                        <h2>Technical Specifications</h2>
                        <div className="tg-ibot-accordion-items">
                            {[
                                {
                                    title: 'Processing Power',
                                    content: 'Powered by Raspberry Pi Pico W with dual-core ARM Cortex M0+, 264KB SRAM, WiFi 802.11b/g/n, and 2MB Flash storage for sophisticated multi-threaded applications.'
                                },
                                {
                                    title: 'Sensor Suite',
                                    content: 'Includes PIR motion, ultrasonic distance, IR receiver, DHT11 temperature/humidity, BMP180 pressure, dual MPU6050 motion, and RFID modules with unlimited expansion.'
                                },
                                {
                                    title: 'Power & Battery',
                                    content: '3.7V 500mAh rechargeable Li-ion battery with integrated charging circuit, protection from over-discharge and short-circuit, lasting up to 6 hours per charge.'
                                },
                                {
                                    title: 'Display & Output',
                                    content: '8x5 RGB NeoPixel LED array, I2C OLED display, 16x2 LCD interface, and buzzer for visual and audio feedback in projects.'
                                }
                            ].map((item, index) => (
                                <div key={index} className="tg-ibot-accordion-item">
                                    <button className="tg-ibot-accordion-header">
                                        <span>{item.title}</span>
                                        <span className="tg-ibot-accordion-icon">+</span>
                                    </button>
                                    <div className="tg-ibot-accordion-content">
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. Horizontal Scroll Showcase */}
                <section className="tg-ibot-scroll-showcase" id="scroll-showcase">
                    <div className="tg-ibot-showcase-header">
                        <h2>Featured Projects</h2>
                    </div>
                    <div className="tg-ibot-showcase-scroll" ref={projectsRef}>
                        <div className="tg-ibot-showcase-track">
                            {[
                                { title: 'Line Follower Robot', desc: 'Autonomous navigation', image: mainBoard },
                                { title: 'Smart Home Hub', desc: 'IoT control center', image: homeAutomation },
                                { title: 'Plant Monitor', desc: 'Soil moisture tracking', image: plantMonitor },
                                { title: 'Flame Detector', desc: 'Fire safety system', image: smokeDetection },
                                { title: 'Door Lock', desc: 'RFID access control', image: kitImage },
                                { title: 'Obstacle Avoider', desc: 'Autonomous robot', image: mainBoard }
                            ].concat([
                                { title: 'Line Follower Robot', desc: 'Autonomous navigation', image: mainBoard },
                                { title: 'Smart Home Hub', desc: 'IoT control center', image: homeAutomation },
                                { title: 'Plant Monitor', desc: 'Soil moisture tracking', image: plantMonitor },
                                { title: 'Flame Detector', desc: 'Fire safety system', image: smokeDetection },
                                { title: 'Door Lock', desc: 'RFID access control', image: kitImage },
                                { title: 'Obstacle Avoider', desc: 'Autonomous robot', image: mainBoard }
                            ]).map((project, index) => (
                                <div key={`${project.title}-${index}`} className="tg-ibot-showcase-card">
                                    <img src={project.image} alt={project.title} loading="lazy" />
                                    <h4>{project.title}</h4>
                                    <p>{project.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 7. Strong CTA Section Before Footer */}
                <section className="tg-ibot-cta-final" id="cta-final">
                    <div className="tg-ibot-cta-wrapper">
                        <h2>Ready to Inspire the Next Generation of Innovators?</h2>
                        <p>Join 350+ schools already transforming STEM education with I-BoT</p>
                        <button className="tg-ibot-cta-submit">Get I-BoT for Your School</button>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default IBoT;
