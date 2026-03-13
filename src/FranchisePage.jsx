import React, { useEffect } from 'react';
import './FranchisePage.css';
import studentsImg from './assets/franchisepageimages/students.jpg';
import testimonial1 from './assets/franchisepageimages/Partner Testimonial 1.png';
import testimonial2 from './assets/franchisepageimages/Partner Testimonial 2.png';
import testimonial3 from './assets/franchisepageimages/Partner Testimonial 3.png';
import testimonial4 from './assets/franchisepageimages/Partner Testimonial 4.png';
import testimonial5 from './assets/franchisepageimages/Partner Testimonial 5.png';
import testimonial6 from './assets/franchisepageimages/Partner Testimonial 6.png';
import testimonial7 from './assets/franchisepageimages/Partner Testimonial 7.png';
import testimonial8 from './assets/franchisepageimages/Partner Testimonial 8.png';
import testimonial9 from './assets/franchisepageimages/Partner Testimonial 9.png';
import testimonial10 from './assets/franchisepageimages/Partner Testimonial 10.png';
// What Will You Get? section images
import WhatWillYouGet1 from './assets/FranchisePageImages/What Will You Get1.jpg';
import WhatWillYouGet2 from './assets/FranchisePageImages/What Will You Get2.jpg';
import WhatWillYouGet3 from './assets/FranchisePageImages/What Will You Get3.jpg';
import WhatWillYouGet4 from './assets/FranchisePageImages/What Will You Get4.jpg';
// some snapshots section
import snapshot1 from './assets/FranchisePageImages/Some Snapshots - 1.jpg';
import snapshot2 from './assets/FranchisePageImages/Some Snapshots - 2.jpg';
import snapshot3 from './assets/FranchisePageImages/Some Snapshots - 3.jpg';
import snapshot4 from './assets/FranchisePageImages/Some Snapshots - 4.jpg';
import snapshot5 from './assets/FranchisePageImages/Some Snapshots - 5.jpg';
import snapshot6 from './assets/FranchisePageImages/Some Snapshots - 6.jpg';


function FranchisePage() {
    // SEO Configuration
    useEffect(() => {
        // Set page title
        document.title = "Start Robotics & Coding Franchise in India | STEM Business";

        // Set or update meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', 'Start a Robotics & Coding franchise in India with TechyGuide. Start a STEM learning center that delivers AI, robotics programs, DIY kits, and engaging workshops designed for young learners.');

        // Set canonical link
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', 'https://techyguide.com/robotics-coding-franchise-india');
    }, []);

    useEffect(() => {
        const counters = document.querySelectorAll('.counter');
        let started = false;

        const animateCounter = (el) => {
            const target = +el.getAttribute('data-target');
            const duration = 1600; // ms
            const start = performance.now();

            const step = (now) => {
                const progress = Math.min((now - start) / duration, 1);
                const value = Math.floor(progress * target);
                if (progress < 1) {
                    el.innerText = value.toLocaleString();
                    requestAnimationFrame(step);
                } else {
                    el.innerText = target.toLocaleString() + '+';
                }
            };
            requestAnimationFrame(step);
        };

        const runCounters = () => {
            counters.forEach(c => animateCounter(c));
        };

        const stats = document.querySelector('.stats-bar');
        if (!stats || counters.length === 0) return;

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !started) {
                    started = true;
                    runCounters();
                    obs.disconnect();
                }
            });
        }, { threshold: 1.00 });

        observer.observe(stats);

        // Parallax fallback: adjust hero background position on scroll (respects reduced-motion)
        const hero = document.querySelector('.hero');
        if (!hero) return;
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const layers = document.querySelectorAll('.parallax-layers .layer');
        let ticking = false;

        const handleScroll = () => {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(() => {
                const rect = hero.getBoundingClientRect();
                const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
                const inView = rect.bottom > 0 && rect.top < viewportHeight;

                if (inView) {
                    const heroTop = rect.top;
                    // base offset: distance hero has moved relative to viewport
                    const base = Math.max(-heroTop, 0);
                    // apply different multipliers for each layer
                    layers.forEach((layer, i) => {
                        const depth = (i + 1) * 0.15; // 0.15, 0.30, ...
                        const translateY = Math.round(base * depth);
                        layer.style.transform = `translate3d(0, ${translateY}px, 0)`;
                    });
                }

                ticking = false;
            });
        };

        // Initial position
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);

        // Button immediate-press feedback and queued animations
        const BUTTON_ANIM_DURATION = 420; // ms
        const queue = [];
        let running = false;

        function runNext() {
            if (queue.length === 0) { running = false; return; }
            running = true;
            const btn = queue.shift();
            if (!btn) { running = false; return; }
            btn.classList.add('btn-animate');
            setTimeout(() => {
                btn.classList.remove('btn-animate');
                runNext();
            }, BUTTON_ANIM_DURATION);
        }

        function enqueue(btn) {
            // ensure element still in DOM
            if (!btn || !btn.isConnected) return;
            queue.push(btn);
            if (!running) runNext();
        }

        const buttons = Array.from(document.querySelectorAll('.btn'));
        if (buttons.length === 0) return;

        buttons.forEach(btn => {
            // immediate visual feedback on pointer down
            btn.addEventListener('pointerdown', () => {
                btn.classList.add('btn-pressed');
            }, { passive: true });

            ['pointerup','pointercancel','pointerleave'].forEach(ev => {
                btn.addEventListener(ev, () => btn.classList.remove('btn-pressed'));
            });

            // enqueue a short animation when clicked; keeps order if multiple clicks occur
            btn.addEventListener('click', (e) => {
                enqueue(btn);
            });
        });

        // keyboard activation support: enqueue when user presses Enter/Space on a focused .btn
        const handleKeydown = (e) => {
            if (e.key !== ' ' && e.key !== 'Enter') return;
            const el = document.activeElement;
            if (el && el.classList && el.classList.contains('btn')) {
                e.preventDefault();
                // short pressed visual
                el.classList.add('btn-pressed');
                setTimeout(() => el.classList.remove('btn-pressed'), 160);
                enqueue(el);
            }
        };

        document.addEventListener('keydown', handleKeydown);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
            document.removeEventListener('keydown', handleKeydown);
        };
    }, []);

    const whyChooseCards = [
        {
            title: 'Proven Business Model',
            image: 'https://placehold.co/640x420/e8f0ff/123a5d?text=Proven+Business+Model',
            description: 'Launch with a field-tested franchise framework that includes curriculum, operations support, and proven enrollment strategies.'
        },
        {
            title: 'ROI within 12–18 months',
            image: 'https://placehold.co/640x420/e7fff3/0c5e4d?text=ROI+12-18+Months',
            description: 'Structured pricing, recurring course income, and optimized center operations are designed to help partners achieve faster payback.'
        },
        {
            title: 'Expanding demand in EdTech sector',
            image: 'https://placehold.co/640x420/fff5e8/6b3b00?text=Growing+EdTech+Demand',
            description: 'Leverage rising parent and school demand for robotics, coding, and AI programs aligned with future-ready education goals.'
        },
        {
            title: 'Multiple revenue streams',
            image: 'https://placehold.co/640x420/f1ecff/3f2a7a?text=Multiple+Revenue+Streams',
            description: 'Generate income from student programs, school workshops, kit sales, and innovation events under one scalable model.'
        }
    ];

    const franchiseSupportCards = [
        {
            title: 'MARKETING & BRANDING ASSISTANCE',
            image: 'https://placehold.co/1200x700/e8f4ff/0b3d66?text=Marketing+%26+Branding',
            description: 'TechyGuide provides complete marketing and branding support to franchise partners including promotional materials, digital marketing guidance, branding assets, and strategies to attract schools and students.'
        },
        {
            title: 'OPERATIONAL GUIDANCE',
            image: 'https://placehold.co/1200x700/ebfff5/065f46?text=Operational+Guidance',
            description: 'Franchise partners receive operational guidance to manage their center efficiently including setup assistance, classroom management strategies, and operational best practices.'
        },
        {
            title: 'COMPREHENSIVE TRAINING & CURRICULUM',
            image: 'https://placehold.co/1200x700/fff7eb/7c2d12?text=Training+%26+Curriculum',
            description: 'TechyGuide provides structured training programs and a well-designed curriculum covering robotics, STEM, coding, and innovation programs for different student levels.'
        },
        {
            title: 'EVENTS & COMPETITION OPPORTUNITIES',
            image: 'https://placehold.co/1200x700/f0f9ff/075985?text=Events+%26+Competitions',
            description: 'Students and franchise centers get opportunities to participate in robotics events, STEM competitions, and innovation challenges organized at school, regional, and national levels.'
        },
        {
            title: 'TECHNOLOGY & LMS INTEGRATION',
            image: 'https://placehold.co/1200x700/f5f3ff/5b21b6?text=Technology+%26+LMS',
            description: 'Franchise partners get access to TechyGuide’s technology platform and LMS which helps manage courses, track student progress, and deliver digital learning resources effectively.'
        }
    ];

    return (
        <div className="franchise-page">
            {/* ============ HEADER / HERO SECTION ============ */}
            <header className="hero" id="home">
                <div className="hero-bottom-fade"></div>
                <div className="hero-content container">
                    <p className="tagline">FOLLOW INNOVATION!</p>
                    <h1 className="kit-title">Start <span className="accent">Robotics & Coding</span> Franchise <br/>in India</h1>
                    <p className="hero-desc">Empowering Students with AI, Robotics and 21st-Century Skills </p>
                    
                    <div className="hero-buttons">
                        <a className="btn btn-orange" href="#requirements">Start Franchise</a>
                        <a className="btn btn-glass" href="#why">Learn More</a>
                    </div>
                </div>
            </header>

            
            {/* ============ WHY CHOOSE US SECTION ============ */}
            <section className="section gray-bg" id="why">
                <div className="container">
                    <h2 className="section-title">Why Choose TechyGuide?</h2>
                    <p className="lead">Join India's No.1 Robotics & Coding Learning Centre — a proven, scalable franchise model built on trust, curriculum excellence, and financial viability.</p>

                    <div className="pillars-grid">
                        {whyChooseCards.map((card) => (
                            <article className="pillar-card card" key={card.title}>
                                <img
                                    className="pillar-img"
                                    src={card.image}
                                    alt={card.title}
                                    loading="lazy"
                                />
                                <h3>{card.title}</h3>
                                <p>{card.description}</p>
                            </article>
                        ))}
                    </div>
                </div>

                {/* ============ REVENUE STREAMS SECTION ============ */}

            </section>
            <section className="revenue-section" id="revenue">
                <div className="container">
                    <h2 className="section-title">Revenue Streams</h2>
                    <p className="lead">Multiple ways to grow your business and maximize your ROI.</p>

                    <div className="revenue-grid">
                        <div className="revenue-card">
                            <img
                                className="rev-banner"
                                src="https://placehold.co/1200x650/e6f1ff/0f3d6d?text=Course+Fees"
                                alt="Course Fees"
                                loading="lazy"
                            />
                            <div className="rev-content">
                                <h3>Course Fees</h3>
                                <p>Recurring monthly income from Robotics, Coding, and AI batches (Ages 6-18).</p>
                                <span className="rev-tag">High Margin</span>
                            </div>
                        </div>

                        <div className="revenue-card">
                            <img
                                className="rev-banner"
                                src="https://placehold.co/1200x650/e8fff5/0b5e4d?text=School+Workshops"
                                alt="School Workshops"
                                loading="lazy"
                            />
                            <div className="rev-content">
                                <h3>School Workshops</h3>
                                <p>Bulk revenue through STEM workshops and Lab setup consultancy in local schools.</p>
                                <span className="rev-tag">B2B Revenue</span>
                            </div>
                        </div>

                        <div className="revenue-card">
                            <img
                                className="rev-banner"
                                src="https://placehold.co/1200x650/fff7e6/7a3e00?text=Kit+Sales"
                                alt="Kit Sales"
                                loading="lazy"
                            />
                            <div className="rev-content">
                                <h3>Kit Sales</h3>
                                <p>Direct profit from selling exclusive Techyguide Robotics & DIY Science kits.</p>
                                <span className="rev-tag">Product Sales</span>
                            </div>
                        </div>

                        <div className="revenue-card">
                            <img
                                className="rev-banner"
                                src="https://placehold.co/1200x650/f2ebff/50218d?text=Competitions"
                                alt="Competitions"
                                loading="lazy"
                            />
                            <div className="rev-content">
                                <h3>Competitions</h3>
                                <p>Revenue from organizing regional Robotics Olympiads and hackathons.</p>
                                <span className="rev-tag">Event Based</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ STATISTICS SECTION ============ */}
            <section className="stats-bar">
                <div className="stat-item">
                    <h2 className="counter" data-target="26">0</h2>
                    <p>States Covered</p>
                </div>
                <div className="stat-item">
                    <h2 className="counter" data-target="350">0</h2>
                    <p>STEM & Robotics Labs Delivered</p>
                </div>
                <div className="stat-item">
                    <h2 className="counter" data-target="1500">0</h2>
                    <p>Educators Trained</p>
                </div>
                <div className="stat-item">
                    <h2 className="counter" data-target="100000">0</h2>
                    <p>Students Impacted</p>
                </div>
            </section>

            {/* ============ REQUIREMENTS SECTION ============ */}
            <section className="section gray-bg" id="requirements">
                <div className="container">
                    <h2 className="section-title">Requirements to Start</h2>
                    <div className="requirements-grid">
                        <div className="card requirement-card">
                            <div className="icon">📍</div>
                            <h3>Space</h3>
                            <ul>
                                <li>300 – 1,000 sq. ft. in a prominent Space.</li>
                                <li>Location - Benguluru,Hyderabad,..</li>
                            </ul>
                        </div>
                        <div className="card requirement-card">
                            <div className="icon">💰</div>
                            <h3>Investment</h3>
                            <ul>
                                <li>Franchise Fee: ₹50,000 (one time)</li>
                                <li>Setup Cost: ₹2,00,000(Hardware,software& training)</li>
                                <li>Infrastructure Set Up Cost: Rs.3,00,000</li>
                                <li>Average Course Fee: ₹1,500 – ₹2,500</li>
                            </ul>
                        </div>
                        <div className="card requirement-card">
                            <div className="icon">🔌</div>
                            <h3>Infrastructure</h3>
                            <ul>
                                <li>High-speed internet & workbenches.</li>
                                <li>A LAN is a private, high-speed network that connects computers.</li>
                            </ul>
                        </div>
                        <div className="card requirement-card">
                            <div className="icon">👥</div>
                            <h3>Staffing</h3>
                            <ul>
                                <li>1-2 Instructors (Training provided).</li>
                                <li>Monthly Revenue: ₹40,000- 50,000</li>
                                <li>Considering 20 students initially.</li>
                                <li>ROI expected within 12–18 months.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            {/* ============ WHAT WILL YOU GET SECTION ============ */}
            <section className="containerbox">
                <h2 className="section-title">What Will You Get?</h2>

                <div className="box">
                    <div className="box-content">
                        <img src={WhatWillYouGet1} alt="Lab Layout" />
                        <div className="text-overlay">LAB LAYOUT & SET UP DESIGN</div>
                    </div>
                    <div className="details">
                        <p>Professional workspace planning and ergonomic design for modern labs.</p>
                    </div>
                </div>

                <div className="box">
                    <div className="box-content">
                        <img src={WhatWillYouGet2} alt="Hardware" />
                        <div className="text-overlay">HARDWARE & SOFTWARE</div>
                    </div>
                    <div className="details">
                        <p>Access to cutting-edge robotics, 3D printers, and interactive modules.</p>
                    </div>
                </div>

                <div className="box">
                    <div className="box-content">
                        <img src={WhatWillYouGet3} alt="Curriculum" />
                        <div className="text-overlay">CONTENT & CURRICULUM</div>
                    </div>
                    <div className="details">
                        <p>Comprehensive lesson plans and digital resources for all grade levels.</p>
                    </div>
                </div>

                <div className="box">
                    <div className="box-content">
                        <img src={WhatWillYouGet4} alt="Training" />
                        <div className="text-overlay">TRAINING & SUPPORT</div>
                    </div>
                    <div className="details">
                        <p>Hands-on teacher training and dedicated technical support for schools.</p>
                    </div>
                </div>
            </section>

            <section className="section franchise-support-section" id="franchise-support">
                <div className="container">
                    <h2 className="section-title">Franchise Support</h2>
                    <div className="franchise-support-grid">
                        <div className="franchise-support-row-1">
                            {franchiseSupportCards.slice(0, 2).map((card) => (
                                <article className="franchise-support-card" key={card.title}>
                                    <img src={card.image} alt={card.title} loading="lazy" className="franchise-support-image" />
                                    <div className="franchise-support-content">
                                        <h3>{card.title}</h3>
                                        <p>{card.description}</p>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <div className="franchise-support-row-2">
                            {franchiseSupportCards.slice(2).map((card) => (
                                <article className="franchise-support-card" key={card.title}>
                                    <img src={card.image} alt={card.title} loading="lazy" className="franchise-support-image" />
                                    <div className="franchise-support-content">
                                        <h3>{card.title}</h3>
                                        <p>{card.description}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ some snapshots ============ */}
            <section className="snapshot-section" id="snapshots">
                <div className="containersnapshot">
                    <h2 className="section-title">Some Snapshots</h2>
                    <div className="view">
                        <div className="block big"><img src={snapshot4} alt="Snapshot 1" /></div>
                        <div className="block small"><img src={snapshot1} alt="Snapshot 2" /></div>
                        <div className="block small"><img src={snapshot2} alt="Snapshot 3" /></div>
                        <div className="block big"><img src={snapshot5} alt="Snapshot 4" /></div>
                        <div className="block big"><img src={snapshot6} alt="Snapshot 5" /></div>
                        <div className="block small"><img src={snapshot3} alt="Snapshot 6" /></div>
                    </div>
                </div>
            </section>

            {/* ============ SUCCESS STORIES SECTION ============ */}
            <section className="section" id="stories">
                <div className="container">
                    <h2 className="section-title">Success Stories</h2>
                    
                    <div className="story-viewport">
                        <div className="story-track">
                            <div className="story-item"><img src={testimonial1} alt="Story" /></div>
                            <div className="story-item"><img src={testimonial2} alt="Story" /></div>
                            <div className="story-item"><img src={testimonial3} alt="Story" /></div>
                            <div className="story-item"><img src={testimonial4} alt="Story" /></div>
                            <div className="story-item"><img src={testimonial5} alt="Story" /></div>
                            <div className="story-item"><img src={testimonial6} alt="Story" /></div>
                            <div className="story-item"><img src={testimonial7} alt="Story" /></div>
                            <div className="story-item"><img src={testimonial8} alt="Story" /></div>
                            <div className="story-item"><img src={testimonial9} alt="Story" /></div>
                            <div className="story-item"><img src={testimonial10} alt="Story" /></div>

                             <div className="story-item"><img src={testimonial1} alt="Story" /></div>
                            <div className="story-item"><img src={testimonial2} alt="Story" /></div>
                            <div className="story-item"><img src={testimonial3} alt="Story" /></div>
                            <div className="story-item"><img src={testimonial4} alt="Story" /></div>
                            <div className="story-item"><img src={testimonial5} alt="Story" /></div>
                            <div className="story-item"><img src={testimonial6} alt="Story" /></div>
                            <div className="story-item"><img src={testimonial7} alt="Story" /></div>
                            <div className="story-item"><img src={testimonial8} alt="Story" /></div>
                            <div className="story-item"><img src={testimonial9} alt="Story" /></div>
                            <div className="story-item"><img src={testimonial10} alt="Story" /></div>
                        </div>
                    </div>
                </div>
            </section>

            
            {/* ============ ADDITIONAL INFO SECTION ============ */}
            <section className="section">
                <div className="container">
                    <div className="info-grid">
                        <div className="info-box blue-border">
                            <h3>Franchise Overview</h3>
                            <ul>
                                <li><strong>High Growth Market:</strong> Tap into STEM demand via NEP 2020.</li>
                                <li><strong>Low Risk:</strong> Scalable model with established brand equity.</li>
                                <li><strong>Social Impact:</strong> Equip kids with logic and critical thinking.</li>
                            </ul>
                        </div>
                        <div className="info-box blue-border">
                            <h3>Who Can Join</h3>
                            <ul>
                                <li><strong>Entrepreneurs:</strong> Profitable business with a social purpose.</li>
                                <li><strong>Existing Centers:</strong> Schools/Tuition centers looking to upgrade.</li>
                                <li><strong>Tech Enthusiasts:</strong> Educators passionate about hands-on learning.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FranchisePage;
