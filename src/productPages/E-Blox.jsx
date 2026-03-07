import { useEffect, useState } from 'react';
import './E-Blox.css';

import robotKids from '../assets/ProductE-BloxImages/vecteezy_ai-generated-cute-robot-kids-with-isolated-transparant_38049144.png';
import robot1 from '../assets/ProductE-BloxImages/robot_2582246.png';
import robot2 from '../assets/ProductE-BloxImages/robotics_12775607.png';
import robot3 from '../assets/ProductE-BloxImages/robot_3558910.png';
import robot4 from '../assets/ProductE-BloxImages/robot_4512237.png';
import bgImage1 from '../assets/ProductE-BloxImages/9743528.png';
import bgImage2 from '../assets/ProductE-BloxImages/5073198.jpg';

export default function EBlox() {
    const [activeKitSlide, setActiveKitSlide] = useState(0);
    
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


    useEffect(() => {
        const kitTimer = setInterval(() => {
            setActiveKitSlide((prevSlide) => (prevSlide + 1) % 2);
        }, 3500);

        return () => clearInterval(kitTimer);
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

            <div className="eblox-page">
                {/* Introduction Section */}
                <section className="eblox-page-section eblox-intro-section">
                    {/* <div className="eblox-intro-container"> */}
                        <h2 className="eblox-intro-title">Introduction to <span className="eblox-highlight">e-Blox Kit</span></h2>
                        <p className="eblox-intro-text">
                            The e-Blox Kit is a revolutionary electronics learning platform designed specifically for young learners (ages 5-10). With its safe, low-voltage components and innovative snap-together design, e-Blox makes hands-on engineering education accessible and engaging. Students can build 20+ practical projects including study lamps, table lamps, and mini windmills while learning fundamental concepts in electronics, renewable energy, and logic systems. By combining playful design with solid STEM fundamentals, e-Blox creates the perfect foundation for future innovators.
                        </p>
                        <div className="eblox-video-container">
                            <iframe
                                className="eblox-intro-video"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
                                title="Introduction to e-Blox Kit"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                 {/* </div> */}
                </section>

                {/* Technologies at Focus - 2 columns */}
                <section className="eblox-page-section eblox-focus" id="eblox-tech-focus">
                    <h2 className="eblox-section-title orange-title"><span style={{color: '#008273'}}>Technologies</span> at Focus</h2>
                    <br/>
                    <div className="eblox-focus-grid-2col">
                        <article className="eblox-focus-card-v2">
                            <div className="eblox-focus-image-v2">
                                <img src={robot1} alt="Basic Electronics" loading="lazy" />
                            </div>
                            <h3>Basic Electronics</h3>
                            <p>Learn how circuits work by connecting power blocks to lights, sounds, and motors.</p>
                        </article>
                        <article className="eblox-focus-card-v2">
                            <div className="eblox-focus-image-v2">
                                <img src={robot2} alt="Renewable Energy Concepts" loading="lazy" />
                            </div>
                            <h3>Renewable Energy Concepts</h3>
                            <p>Hands-on exploration of how energy can power everyday items like mini windmills.</p>
                        </article>
                        <article className="eblox-focus-card-v2">
                            <div className="eblox-focus-image-v2">
                                <img src={robot3} alt="Practical Engineering" loading="lazy" />
                            </div>
                            <h3>Practical Engineering</h3>
                            <p>Build functional items your child can actually use, such as study lamps and table lamps.</p>
                        </article>
                        <article className="eblox-focus-card-v2">
                            <div className="eblox-focus-image-v2">
                                <img src={robot4} alt="Logic & Sequencing" loading="lazy" />
                            </div>
                            <h3>Logic & Sequencing</h3>
                            <p>Understand "cause and effect" by using light, sound, and distance sensors to trigger different blocks.</p>
                        </article>
                    </div>
                    <br/>
                </section>

                {/* e-Blox Tech - 2 columns with image and data under */}
                <section className="eblox-page-section eblox-tech-design">
                    <h2 className="eblox-section-title">e-Blox Tech <span style={{color: '#000000'}}>(Safe & Simple Design)</span></h2>
                                        <br/>
                                        <br/>


                    <div className="eblox-tech-grid-2col">
                        <article className="eblox-tech-card-v2">
                            <div className="eblox-tech-image-v2">
                                <img src={robot2} alt="Child-safe engineering for e-Blox" loading="lazy" />
                            </div>
                            <h3>Child-Safe Engineering</h3>
                            <p>Built with low-voltage, non-toxic materials that are 100% classroom and home-safe.</p>
                        </article>

                        <article className="eblox-tech-card-v2">
                            <div className="eblox-tech-image-v2">
                                <img src={robot3} alt="Plug and play assembly for e-Blox" loading="lazy" />
                            </div>
                            <h3>Plug & Play Assembly</h3>
                            <p>No soldering or complex wiring required. Ready-to-use components enable instant setup and frustration-free learning.</p>
                        </article>

                        <article className="eblox-tech-card-v2">
                            <div className="eblox-tech-image-v2">
                                <img src={robot1} alt="Modular blocks in e-Blox" loading="lazy" />
                            </div>
                            <h3>Modular Blocks</h3>
                            <p>The snap-together design encourages repeated assembly, allowing children to rebuild and innovate multiple times.</p>
                        </article>

                        <article className="eblox-tech-card-v2">
                            <div className="eblox-tech-image-v2">
                                <img src={robot4} alt="Interactive components in e-Blox" loading="lazy" />
                            </div>
                            <h3>Interactive Components</h3>
                            <p>Features specialized blocks for sound, light, and motion that respond to the child's touch and environment.</p>
                        </article>
                    </div>
                                        <br/>

                </section>

                {/* Why is e-Blox Best - with images and reduced width */}
                <section className="eblox-page-section eblox-why-best">
                    <h2 className="eblox-section-title orange-title">Why is <span style={{color: '#008273'}}>e-Blox</span> the Best for <span style={{color: '#008273'}}>Early Learners</span>?</h2>
                                        <br/>
                    <br/>

                    <div className="eblox-why-grid-v2">
                        <article className="eblox-why-card-v2">
                            <div className="eblox-why-image-v2">
                                <img src={robot1} alt="Constructive Learning" loading="lazy" />
                            </div>
                            <h3>Constructive Learning</h3>
                            <p>Unlike passive toys, e-Blox encourages active building and problem solving.</p>
                        </article>
                        <article className="eblox-why-card-v2">
                            <div className="eblox-why-image-v2">
                                <img src={robot2} alt="Instant Success" loading="lazy" />
                            </div>
                            <h3>Instant Success</h3>
                            <p>Children can build 20+ exciting products and see immediate results.</p>
                        </article>
                        <article className="eblox-why-card-v2">
                            <div className="eblox-why-image-v2">
                                <img src={robot3} alt="Foundation for STEM" loading="lazy" />
                            </div>
                            <h3>Foundation for STEM</h3>
                            <p>Perfect stepping stone before moving to advanced kits like TeBot or i-Bot.</p>
                        </article>
                        <article className="eblox-why-card-v2">
                            <div className="eblox-why-image-v2">
                                <img src={robot4} alt="Durable & Reusable" loading="lazy" />
                            </div>
                            <h3>Durable & Reusable</h3>
                            <p>High-quality blocks built to withstand heavy play and repeated use.</p>
                        </article>
                    </div>
                </section>

                {/* e-Blox Kit Offerings */}
                <section className="eblox-page-section eblox-kit-offerings">
                    <h2 className="eblox-section-title">E-Blox <span style={{color: '#000000'}}>Kit Offerings</span></h2>
                    <br/>
                    
                    <div className="eblox-kits-main-slider">
                        <button
                            className="eblox-kits-arrow eblox-kits-arrow-left"
                            onClick={() => moveKitSlide(-1)}
                            aria-label="Previous kit"
                        >
                            ❮
                        </button>

                        <div className="eblox-kits-slider-window">
                            <div
                                className="eblox-kits-slider-track"
                                style={{ transform: `translateX(-${activeKitSlide * 100}%)` }}
                            >
                                {/* Kit Slide 1 */}
                                <article className="eblox-kit-main-slide">
                                    <div className="eblox-kit-scroll-card">
                                        <div className="eblox-kit-scroll-image">
                                            <img src={robot4} alt="The e-Blox Standard Kit" loading="lazy" />
                                        </div>
                                        <div className="eblox-kit-scroll-content">
                                            <h3>The E-Blox Standard Kit</h3>
                                            <p>A multi-purpose electronics kit that serves as the perfect introduction to STEM for younger grades.</p>

                                            <h4>Projects:</h4>
                                            <p>Includes materials to build 20+ practical products such as:</p>
                                            <ul className="eblox-list">
                                                <li>Study lamps</li>
                                                <li>Table lamps</li>
                                                <li>Mini windmills</li>
                                            </ul>

                                            <h4>Key Components</h4>

                                            <div className="eblox-components-grid">
                                                <div className="eblox-component-group-v2">
                                                    <h5>Power & Control</h5>
                                                    <ul className="eblox-list">
                                                        <li>Power Block</li>
                                                        <li>Motor Driver Blocks</li>
                                                        <li>Sound Blocks</li>
                                                    </ul>
                                                </div>

                                                <div className="eblox-component-group-v2">
                                                    <h5>Smart Sensors</h5>
                                                    <ul className="eblox-list">
                                                        <li>Light Sensor Block</li>
                                                        <li>Sound Sensor Block</li>
                                                        <li>Distance Sensor Block</li>
                                                        <li>IR Sensor Block</li>
                                                    </ul>
                                                </div>

                                                <div className="eblox-component-group-v2">
                                                    <h5>Mechanical Parts</h5>
                                                    <ul className="eblox-list">
                                                        <li>I-Shape BO Motors</li>
                                                        <li>Wires with JST connectors</li>
                                                        <li>Buzzer</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>

                                {/* Kit Slide 2 - Duplicate for now */}
                                <article className="eblox-kit-main-slide">
                                    <div className="eblox-kit-scroll-card featured">
                                        <div className="eblox-kit-scroll-image">
                                            <img src={robot4} alt="The e-Blox Standard Kit" loading="lazy" />
                                        </div>
                                        <div className="eblox-kit-scroll-content">
                                            <h3>The E-Blox Standard Kit</h3>
                                            <p>A multi-purpose electronics kit that serves as the perfect introduction to STEM for younger grades.</p>

                                            <h4>Projects:</h4>
                                            <p>Includes materials to build 20+ practical products such as:</p>
                                            <ul className="eblox-list">
                                                <li>Study lamps</li>
                                                <li>Table lamps</li>
                                                <li>Mini windmills</li>
                                            </ul>

                                            <h4>Key Components</h4>

                                            <div className="eblox-components-grid">
                                                <div className="eblox-component-group-v2">
                                                    <h5>Power & Control</h5>
                                                    <ul className="eblox-list">
                                                        <li>Power Block</li>
                                                        <li>Motor Driver Blocks</li>
                                                        <li>Sound Blocks</li>
                                                    </ul>
                                                </div>

                                                <div className="eblox-component-group-v2">
                                                    <h5>Smart Sensors</h5>
                                                    <ul className="eblox-list">
                                                        <li>Light Sensor Block</li>
                                                        <li>Sound Sensor Block</li>
                                                        <li>Distance Sensor Block</li>
                                                        <li>IR Sensor Block</li>
                                                    </ul>
                                                </div>

                                                <div className="eblox-component-group-v2">
                                                    <h5>Mechanical Parts</h5>
                                                    <ul className="eblox-list">
                                                        <li>I-Shape BO Motors</li>
                                                        <li>Wires with JST connectors</li>
                                                        <li>Buzzer</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>

                        <button
                            className="eblox-kits-arrow eblox-kits-arrow-right"
                            onClick={() => moveKitSlide(1)}
                            aria-label="Next kit"
                        >
                            ❯
                        </button>
                    </div>

                    <div className="eblox-kits-nav-dots">
                        <button
                            className={`eblox-kits-dot ${activeKitSlide === 0 ? 'active' : ''}`}
                            onClick={() => goToKitSlide(0)}
                            aria-label="Kit 1"
                        ></button>
                        <button
                            className={`eblox-kits-dot ${activeKitSlide === 1 ? 'active' : ''}`}
                            onClick={() => goToKitSlide(1)}
                            aria-label="Kit 2"
                        ></button>
                    </div>
                </section>

                {/* Projects Showcase with Horizontal Scroll */}
                <section className="eblox-page-section eblox-projects-section">
                    <h2 className="eblox-section-title orange-title">Featured <span style={{color: '#008273'}}>E blox Projects</span></h2>
                    <p className="eblox-projects-intro">Explore some of our 50+ amazing projects students can build:</p>
                    <div className="eblox-projects-scroll-wrap">
                        <div className="eblox-projects-track">
                            {[...projectsList, ...projectsList].map((project, index) => (
                                <article key={`${project.title}-${index}`} className="eblox-project-card">
                                    <div className="eblox-project-number">{(index % projectsList.length) + 1}</div>
                                    <h4>{project.title}</h4>
                                    <p>{project.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
