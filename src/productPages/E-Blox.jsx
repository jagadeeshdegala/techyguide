import { useEffect, useRef } from 'react';
import './E-Blox.css';

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
    const projectsContainer = useRef(null);

    useEffect(() => {
        const heroImage = document.querySelector('.eblox-page-root .image-section img');
        const heroButton = document.querySelector('.eblox-page-root .btn-secondary');

        const handleButtonClick = (event) => {
            event.preventDefault();
            const target = document.getElementById('eblox-tech-focus');
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
        const container = projectsContainer.current;
        if (!container) return;

        const track = container.querySelector('.eblox-project-track');
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
                container.scrollLeft += 2.8;
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

            <div className="eblox-modern-page">
                <section className="eblox-section eblox-tech-focus" id="eblox-tech-focus">
                    <div className="eblox-section-head">
                        <p className="eyebrow">Technologies at Focus</p>
                        <h2>Hands-on Learning with Core Engineering Concepts</h2>
                    </div>
                    <div className="eblox-tech-grid">
                        <article className="eblox-tech-card">
                            <span className="eblox-icon">🔋</span>
                            <h3>Basic Electronics</h3>
                            <p>Learn how circuits work by connecting power blocks to lights, sounds, and motors.</p>
                        </article>
                        <article className="eblox-tech-card">
                            <span className="eblox-icon">🌬️</span>
                            <h3>Renewable Energy Concepts</h3>
                            <p>Hands-on exploration of how energy can power everyday items like mini windmills.</p>
                        </article>
                        <article className="eblox-tech-card">
                            <span className="eblox-icon">🛠️</span>
                            <h3>Practical Engineering</h3>
                            <p>Build functional items such as study lamps and table lamps.</p>
                        </article>
                        <article className="eblox-tech-card">
                            <span className="eblox-icon">🧠</span>
                            <h3>Logic & Sequencing</h3>
                            <p>Understand cause and effect by using light, sound, and distance sensors.</p>
                        </article>
                    </div>
                </section>

                <section className="eblox-section eblox-tech-split">
                    <div className="eblox-split-media">
                        <img src={robot2} alt="e-Blox safe engineering components" loading="lazy" />
                    </div>
                    <div className="eblox-split-content">
                        <p className="eyebrow">e-Blox Tech</p>
                        <h2>Safe & Simple Design</h2>
                        <ul className="eblox-point-list">
                            <li>
                                <span>🟠</span>
                                <div>
                                    <h3>Child-Safe Engineering</h3>
                                    <p>Built with low-voltage, non-toxic materials safe for classrooms and homes.</p>
                                </div>
                            </li>
                            <li>
                                <span>🟠</span>
                                <div>
                                    <h3>Plug & Play Assembly</h3>
                                    <p>No soldering or complex wiring required.</p>
                                </div>
                            </li>
                            <li>
                                <span>🟠</span>
                                <div>
                                    <h3>Modular Blocks</h3>
                                    <p>Snap-together design that allows repeated building and experimentation.</p>
                                </div>
                            </li>
                            <li>
                                <span>🟠</span>
                                <div>
                                    <h3>Interactive Components</h3>
                                    <p>Blocks that respond to sound, light, and motion.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="eblox-section eblox-why">
                    <div className="eblox-section-head">
                        <p className="eyebrow">Why e-Blox</p>
                        <h2>Built to Make Young Learners Successful Faster</h2>
                    </div>
                    <div className="eblox-why-grid">
                        <article className="eblox-why-card">
                            <h3>Constructive Learning</h3>
                            <p>Encourages active building and problem solving.</p>
                        </article>
                        <article className="eblox-why-card">
                            <h3>Instant Success</h3>
                            <p>Children can build 20+ working products.</p>
                        </article>
                        <article className="eblox-why-card">
                            <h3>Foundation for STEM</h3>
                            <p>Acts as a stepping stone before moving to advanced kits like TeBot and i-Bot.</p>
                        </article>
                        <article className="eblox-why-card">
                            <h3>Durable & Reusable</h3>
                            <p>High-quality blocks built for repeated use.</p>
                        </article>
                    </div>
                </section>

                <section className="eblox-section eblox-kit-offering">
                    <div className="eblox-kit-panel">
                        <div className="eblox-kit-header">
                            <p className="eyebrow">e-Blox Kit Offering</p>
                            <h2>e-Blox Standard Kit</h2>
                            <p>A multipurpose electronics kit designed as the perfect STEM introduction for younger students.</p>
                            <p className="eblox-kit-projects"><strong>Projects:</strong> 20+ products including study lamps, table lamps, and mini windmills.</p>
                        </div>
                        <div className="eblox-kit-specs">
                            <h3>Key Components</h3>
                            <div className="eblox-spec-grid">
                                <span>Power Block</span>
                                <span>Motor Driver Blocks</span>
                                <span>Sound Blocks</span>
                                <span>Light Sensor</span>
                                <span>Distance Sensor</span>
                                <span>IR Sensor</span>
                                <span>BO Motors</span>
                                <span>Buzzer</span>
                                <span>JST Connector Wires</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="eblox-section eblox-featured-grid">
                    <div className="eblox-section-head">
                        <p className="eyebrow">Project Types</p>
                        <h2>What Students Build with e-Blox</h2>
                    </div>
                    <div className="eblox-project-grid">
                        <article><img src={robot1} alt="Study lamp project" loading="lazy" /><h3>Study Lamp Build</h3></article>
                        <article><img src={robot3} alt="Table lamp project" loading="lazy" /><h3>Table Lamp System</h3></article>
                        <article><img src={robot4} alt="Mini windmill project" loading="lazy" /><h3>Mini Windmill Model</h3></article>
                    </div>
                </section>

                <section className="eblox-section eblox-scroll-showcase">
                    <div className="eblox-section-head">
                        <p className="eyebrow">System Projects</p>
                        <h2>Continuous Build Inspiration</h2>
                    </div>
                    <div className="eblox-project-scroll" ref={projectsContainer}>
                        <div className="eblox-project-track">
                            {[
                                { title: 'Smart Monitoring System', desc: 'Multi-sensor data logging', image: robot1 },
                                { title: 'Home Automation Hub', desc: 'Centralized control system', image: robot2 },
                                { title: 'Weather Station', desc: 'Environmental data collection', image: robot3 },
                                { title: 'Access Control System', desc: 'Secure entry solution', image: robot4 },
                                { title: 'IoT Gateway', desc: 'Cloud connectivity bridge', image: robot5 },
                                { title: 'Data Visualization', desc: 'Real-time analytics display', image: hacker }
                            ].map((project, index) => (
                                <article key={`${project.title}-${index}`} className="eblox-project-card">
                                    <img src={project.image} alt={project.title} loading="lazy" />
                                    <h3>{project.title}</h3>
                                    <p>{project.desc}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="eblox-section eblox-cta-final">
                    <div className="eblox-cta-box">
                        <h2>Equip Your STEM Classroom with e-Blox</h2>
                        <p>Safe electronics, practical engineering, and reusable learning in one platform.</p>
                        <a href="/contact-us" className="eblox-cta-btn">Request e-Blox Details</a>
                    </div>
                </section>
            </div>
        </div>
    );
}
