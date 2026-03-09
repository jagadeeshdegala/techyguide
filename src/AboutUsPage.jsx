import { useEffect } from 'react'
import './AboutUsPage.css'
import teamImage from './assets/AboutUSImages/Adorable-bear-cubs.jpg'
import teamimg1 from './assets/AboutUSImages/Team 1.png';
function AboutUsPage() {
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
						<div className="team-card">
							<img src={teamImage} alt="" />
							<h3>Pooja Singh</h3>
							<span>Project Manager</span>
						</div>
						<div className="team-card">
							<img src={teamImage} alt="" />
							<h3>Pooja Singh</h3>
							<span>Project Manager</span>
						</div>
						<div className="team-card">
							<img src={teamImage} alt="" />
							<h3>Pooja Singh</h3>
							<span>Project Manager</span>
						</div>
						<div className="team-card">
							<img src={teamImage} alt="" />
							<h3>Pooja Singh</h3>
							<span>Project Manager</span>
						</div>
						<div className="team-card">
							<img src={teamImage} alt="" />
							<h3>Pooja Singh</h3>
							<span>Project Manager</span>
						</div>
						<div className="team-card">
							<img src={teamImage} alt="" />
							<h3>Pooja Singh</h3>
							<span>Project Manager</span>
						</div>
						<div className="team-card">
							<img src={teamImage} alt="" />
							<h3>Pooja Singh</h3>
							<span>Project Manager</span>
						</div>
						<div className="team-card">
							<img src={teamImage} alt="" />
							<h3>Pooja Singh</h3>
							<span>Project Manager</span>
						</div>
						<div className="team-card">
							<img src={teamImage} alt="" />
							<h3>Pooja Singh</h3>
							<span>Project Manager</span>
						</div>
						<div className="team-card">
							<img src={teamImage} alt="" />
							<h3>Pooja Singh</h3>
							<span>Project Manager</span>
						</div>
						<div className="team-card">
							<img src={teamImage} alt="" />
							<h3>Pooja Singh</h3>
							<span>Project Manager</span>
						</div>
						<div className="team-card">
							<img src={teamImage} alt="" />
							<h3>Pooja Singh</h3>
							<span>Project Manager</span>
						</div>
						<div className="team-card">
							<img src={teamImage} alt="" />
							<h3>Pooja Singh</h3>
							<span>Project Manager</span>
						</div>
						<div className="team-card">
							<img src={teamImage} alt="" />
							<h3>Pooja Singh</h3>
							<span>Project Manager</span>
						</div>
						<div className="team-card">
							<img src={teamImage} alt="" />
							<h3>Pooja Singh</h3>
							<span>Project Manager</span>
						</div>
						<div className="team-card">
							<img src={teamImage} alt="" />
							<h3>Pooja Singh</h3>
							<span>Project Manager</span>
						</div>
					</div>
				</div>
			</section>

			<section className="gallery">
				<div className="container">
					<h2>Our Workspace</h2>
                    <br></br>

					<div className="gallery-grid">
						<img src={teamImage} alt="" />
						<img src={teamImage} alt="" />
						<img src={teamImage} alt="" />
					</div>
				</div>
			</section>
		</div>
	)
}

export default AboutUsPage
