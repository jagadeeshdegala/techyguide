import './AboutUsPage.css'
import teamImage from './assets/AboutUSImages/Adorable-bear-cubs.jpg'

function AboutUsPage() {
	return (
		<div className="aboutus-page-root">
			<section className="hero">
				<div className="hero-content">
					<h1>We Build Digital Experiences</h1>
					<p>
						A team of passionate engineers, designers, and problem-solvers creating
						scalable, secure, and user-focused solutions.
					</p>
				</div>
			</section>

			<section className="about">
				<div className="container about-grid">
					<div>
						<h2>Who We Are</h2>
						<p>
							We are a technology-driven company focused on delivering high-quality
							web and software solutions. Our mission is to help businesses grow
							through innovation and reliable engineering.
						</p>
						<p>
							From startups to enterprises, we partner with clients to turn ideas
							into powerful digital products.
						</p>
					</div>
					<img src={teamImage} alt="Office" />
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
