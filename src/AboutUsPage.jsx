import { useEffect } from 'react'
import './AboutUsPage.css'
import teamimg1 from './assets/AboutUSImages/Team 1.png';
import founderImage from './assets/AboutUSImages/5.png';
function AboutUsPage() {
	const workspaceImages = [
		{ src: 'https://placehold.co/1400x900/e9f4ff/0f3d66?text=College+Campus+Block', alt: 'College campus block' },
		{ src: 'https://placehold.co/700x900/f0fff4/0a5b45?text=College+Library+Tower', alt: 'College library tower' },
		{ src: 'https://placehold.co/820x900/fff7eb/7a4200?text=Innovation+Studio', alt: 'College innovation studio' },
		{ src: 'https://placehold.co/1400x900/f3efff/4b2b87?text=Student+Activity+Zone', alt: 'Student activity zone' },
		{ src: 'https://placehold.co/1400x900/e8fffb/045b4f?text=Engineering+Corridor', alt: 'Engineering corridor' },
		{ src: 'https://placehold.co/700x900/eff6ff/1e3a8a?text=Open+Learning+Plaza', alt: 'Open learning plaza' }
	];

	// Set SEO metadata for About Us page
	useEffect(() => {
		// Set page title
		document.title = 'About | TechyGuide STEM, Robotics & AI Education Company';

		// Set or update meta description
		let metaDescription = document.querySelector('meta[name="description"]');
		if (metaDescription) {
			metaDescription.setAttribute('content', 'Learn about TechyGuide, a STEM education and technology company providing robotics kits, AI courses, coding programs, IoT solutions, and hands-on innovation learning.');
		} else {
			metaDescription = document.createElement('meta');
			metaDescription.setAttribute('name', 'description');
			metaDescription.setAttribute('content', 'Learn about TechyGuide, a STEM education and technology company providing robotics kits, AI courses, coding programs, IoT solutions, and hands-on innovation learning.');
			document.head.appendChild(metaDescription);
		}

		// Add or update canonical tag
		let canonicalLink = document.querySelector('link[rel="canonical"]');
		if (!canonicalLink) {
			canonicalLink = document.createElement('link');
			canonicalLink.setAttribute('rel', 'canonical');
			canonicalLink.setAttribute('href', 'https://techyguide.com/about-techyguide');
			document.head.appendChild(canonicalLink);
		} else {
			canonicalLink.setAttribute('href', 'https://techyguide.com/about-techyguide');
		}
	}, []);

	return (
		<div className="aboutus-page-root">
			<section className="hero">
				<div className="hero-content">
					<h1>Robotics, AI & STEM Innovators </h1>
					<p>
						TechyGuide builds robotics, AI, coding and IoT solutions, empowering students, educators and businesses through practical STEM learning and Educating .
					</p>
				</div>
			</section>

			<section className="about">
				<div className="container about-grid">
					<div>
						<h2>Who We Are</h2>
						<p>
							TechyGuide is a technology-driven company focused on advancing STEM education through robotics, AI, coding and engineering learning. We empower students, educators and innovators with hands-on tools, practical training and modern technology programs that build creativity, technical skills and real-world thinking.
						</p>
						{/* <p>
							From startups to enterprises, we partner with clients to turn ideas
							into powerful digital products.
						</p> */}
					</div>
					<img src={teamimg1} alt="Office" />
				</div>
			</section>

			<section className="values">
				<div className="container">
					<h2>Our Core Values</h2>

					<div className="values-grid">
						<div className="value-card">
							<h3>Innovation</h3>
							<p>We constantly evolve with modern technologies.</p>
						</div>
						<div className="value-card">
							<h3>Quality</h3>
							<p>Clean code, strong architecture, and reliable delivery.</p>
						</div>
						<div className="value-card">
							<h3>Transparency</h3>
							<p>Clear communication and honest collaboration.</p>
						</div>
					</div>
				</div>
			</section>

				{/* Meet the Team section — commented out
			<section className="team">
				<div className="container">
					<h2>Meet the Team</h2>

					<div className="team-grid">
						<div className="team-card">
							<img src={teamImage} alt="" />
							<h3>Rahul Sharma</h3>
							<span>Frontend Developer</span>
						</div>

						<div className="team-card">
							<img src={teamImage} alt="" />
							<h3>Anjali Verma</h3>
							<span>Backend Developer</span>
						</div>

						<div className="team-card">
							<img src={teamImage} alt="" />
							<h3>Mohit Kumar</h3>
							<span>Full Stack Engineer</span>
						</div>

						<div className="team-card">
							<img src={teamImage} alt="" />
							<h3>Pooja Singh</h3>
							<span>Project Manager</span>
						</div>
					</div>
				</div>
			</section>
			*/}

			{/* Meet our Founder */}
			<section className="founder-section">
				<div className="container about-grid">
					<div>
						<h2 style={{ color: 'orange', textAlign: 'center', fontSize: '2.64rem' }}>Meet Our Founder</h2>
						<br/>
						<p>
							<b>Pradeep Kumar Jena</b> is the visionary founder of TechyGuide, a passionate educator and technology entrepreneur who has dedicated his career to transforming STEM education across India. With a background in engineering and a deep belief in hands-on learning, he built TechyGuide from the ground up to bridge the gap between classroom theory and real-world innovation.
						</p>
						<p>
							Under his leadership, TechyGuide has empowered thousands of students and educators through robotics kits, AI programs, coding workshops, and IoT learning solutions — reaching 700+ schools across the country.
						</p>
					</div>
					<img src={founderImage} alt="Founder - Pradeep Kumar Jena" />
				</div>
			</section>

			<section className="gallery">
				<div className="container">
					<h2>Our Workspace</h2>
                    <br></br>

					<div className="workspace-gallery">
						<div className="workspace-row">
							<img src={workspaceImages[0].src} alt={workspaceImages[0].alt} loading="lazy" className="large-img" />
							<img src={workspaceImages[1].src} alt={workspaceImages[1].alt} loading="lazy" className="small-img" />
						</div>

						<div className="workspace-row reverse">
							<img src={workspaceImages[2].src} alt={workspaceImages[2].alt} loading="lazy" className="large-img" />
							<img src={workspaceImages[3].src} alt={workspaceImages[3].alt} loading="lazy" className="small-img" />
						</div>

						<div className="workspace-row">
							<img src={workspaceImages[4].src} alt={workspaceImages[4].alt} loading="lazy" className="large-img" />
							<img src={workspaceImages[5].src} alt={workspaceImages[5].alt} loading="lazy" className="small-img" />
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default AboutUsPage
