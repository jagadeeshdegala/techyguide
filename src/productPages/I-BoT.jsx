import { useEffect, useRef } from 'react';
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
                <section className="ibot-section ibot-tech-focus" id="ibot-tech-focus">
                    <div className="ibot-section-head">
                        <p className="ibot-eyebrow">Technologies at Focus</p>
                        <h2>Future-Ready IoT and Robotics Learning Stack</h2>
                    </div>
                    <div className="ibot-hex-grid">
                        <article className="ibot-hex-card">
                            <span>🌐</span>
                            <h3>Internet of Things (IoT)</h3>
                            <p>Send data to the cloud and control devices using smartphone apps.</p>
                        </article>
                        <article className="ibot-hex-card">
                            <span>📶</span>
                            <h3>Wireless Communication</h3>
                            <p>Learn Wi-Fi and Bluetooth automation.</p>
                        </article>
                        <article className="ibot-hex-card">
                            <span>🧪</span>
                            <h3>Advanced Sensors</h3>
                            <p>Detect gas, flame, rain, and soil moisture.</p>
                        </article>
                        <article className="ibot-hex-card">
                            <span>⚙️</span>
                            <h3>Automation Engineering</h3>
                            <p>Build projects such as smart baby cradles and sanitizer dispensers.</p>
                        </article>
                        <article className="ibot-hex-card">
                            <span>💻</span>
                            <h3>Dual Programming</h3>
                            <p>Start with block coding and progress to Arduino C++.</p>
                        </article>
                    </div>
                </section>

                <section className="ibot-section ibot-technology">
                    <div className="ibot-section-head">
                        <p className="ibot-eyebrow">i-Bot Technology</p>
                        <h2>Engineered for Reliable Classroom-to-Prototype Learning</h2>
                    </div>
                    <div className="ibot-alt-stack">
                        {[
                            {
                                title: 'ESP32 Chip Brain',
                                description: 'Ultra-fast microcontroller with Wi-Fi and Bluetooth.',
                                image: mainBoard
                            },
                            {
                                title: 'All-in-One Controller',
                                description: 'Integrated motor drivers, LED, buzzer, and sensor ports.',
                                image: kitImage
                            },
                            {
                                title: 'Safety Design',
                                description: 'Double-layer PCB with short circuit protection.',
                                image: smokeDetection
                            },
                            {
                                title: 'Flexible Power',
                                description: 'Supports 3.7V–12V rechargeable batteries.',
                                image: homeAutomation
                            }
                        ].map((item, index) => (
                            <article key={item.title} className={`ibot-alt-item ${index % 2 ? 'reverse' : ''}`}>
                                <img src={item.image} alt={item.title} loading="lazy" />
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="ibot-section ibot-why">
                    <div className="ibot-section-head">
                        <p className="ibot-eyebrow">Why i-Bot</p>
                        <h2>Industrial-Grade Platform for 21st Century STEM</h2>
                    </div>
                    <div className="ibot-stat-grid">
                        <article className="ibot-stat-card main">
                            <p className="stat-number">100+</p>
                            <h3>Projects</h3>
                            <p>From LED blinking to human-following robots.</p>
                        </article>
                        <article className="ibot-stat-card">
                            <h3>Real-World Applications</h3>
                            <p>Projects replicate smart agriculture and automation systems.</p>
                        </article>
                        <article className="ibot-stat-card">
                            <h3>Modular System</h3>
                            <p>Compatible with robotic arms, humanoid robots, and 3D printed parts.</p>
                        </article>
                        <article className="ibot-stat-card">
                            <h3>Durable Hardware</h3>
                            <p>Industrial-grade components with 1-year warranty.</p>
                        </article>
                    </div>
                </section>

                <section className="ibot-section ibot-kits">
                    <div className="ibot-section-head">
                        <p className="ibot-eyebrow">i-Bot Kits</p>
                        <h2>Choose the Right Build Journey</h2>
                    </div>
                    <div className="ibot-kit-compare">
                        <article className="ibot-kit-card">
                            <h3>i-Bot Starter Kit</h3>
                            <p><strong>Description</strong><br />Entry-level IoT robotics kit.</p>
                            <p><strong>Projects</strong><br />20+ projects focused on sensors and motors.</p>
                            <p><strong>Ideal For</strong><br />Beginners learning the Internet of Things.</p>
                        </article>
                        <article className="ibot-kit-card highlight">
                            <h3>i-Bot Advance Kit</h3>
                            <p><strong>Description</strong><br />Advanced IoT robotics kit with 45+ components.</p>
                            <p><strong>Projects</strong><br />100+ IoT systems including home automation and radar projects.</p>
                            <p><strong>Hardware Includes</strong><br />I2C LCD Display<br />Servo Motors<br />Water Pump<br />Pulse Rate Sensor<br />Environmental Sensors (Gas, Rain, Soil)</p>
                        </article>
                    </div>
                </section>

                <section className="ibot-section ibot-feature-panels">
                    <div className="ibot-section-head">
                        <p className="ibot-eyebrow">Build Domains</p>
                        <h2>Applied IoT Learning Tracks</h2>
                    </div>
                    <div className="ibot-panel-grid">
                        <article><img src={homeAutomation} alt="Smart home systems" loading="lazy" /><h3>Smart Home Systems</h3></article>
                        <article><img src={plantMonitor} alt="Agriculture automation" loading="lazy" /><h3>Smart Agriculture</h3></article>
                        <article><img src={smokeDetection} alt="Safety automation" loading="lazy" /><h3>Safety Automation</h3></article>
                    </div>
                </section>

                <section className="ibot-section ibot-scroll-showcase">
                    <div className="ibot-section-head">
                        <p className="ibot-eyebrow">Featured Projects</p>
                        <h2>Continuous Project Inspiration</h2>
                    </div>
                    <div className="ibot-scroll-wrap" ref={projectsRef}>
                        <div className="ibot-scroll-track">
                            {[
                                { title: 'Home Automation', desc: 'App-controlled appliances', image: homeAutomation },
                                { title: 'Radar Bot', desc: 'Obstacle scanning and alerts', image: mainBoard },
                                { title: 'Smart Irrigation', desc: 'Soil-based watering', image: plantMonitor },
                                { title: 'Fire Alert System', desc: 'Flame and gas safety', image: smokeDetection },
                                { title: 'Sanitizer Dispenser', desc: 'Touchless automation', image: kitImage }
                            ].map((project, index) => (
                                <article key={`${project.title}-${index}`} className="ibot-scroll-card">
                                    <img src={project.image} alt={project.title} loading="lazy" />
                                    <h3>{project.title}</h3>
                                    <p>{project.desc}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="ibot-section ibot-cta-final">
                    <div className="ibot-cta-box">
                        <h2>Launch Advanced IoT Learning with i-Bot</h2>
                        <p>From beginner control logic to 100+ connected automation builds.</p>
                        <a href="/contact-us" className="ibot-cta-btn">Request i-Bot Details</a>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default IBoT;
