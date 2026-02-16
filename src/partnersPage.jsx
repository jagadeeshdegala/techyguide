import { useEffect, useRef } from "react";
import "./partnersPage.css";
import heroVideoSrc from "./assets/partnersPageImages/8523654-hd_1920_1080_25fps.mp4";
import academicHeightsLogo from "./assets/partnersPageImages/academic-heights-logo.png";
import agpnImage from "./assets/partnersPageImages/AGPN.jpg";
import armyGoodwillSchoolUri from "./assets/partnersPageImages/Army Goodwill School Uri.png";
import bhatkalEducationSociety from "./assets/partnersPageImages/Bhatkal Education Society.jpeg";
import cbLogo from "./assets/partnersPageImages/CB Logo.jpg";
import codeKidsTechnology from "./assets/partnersPageImages/Code Kids Technology.jpg";
import delhiCambridgeSchool from "./assets/partnersPageImages/Delhi Cambridge School.png";
import dhanraj from "./assets/partnersPageImages/Dhanraj.png";
import evergreenSchool from "./assets/partnersPageImages/Evergreen School.jpeg";
import govtGirlsHighSchoolRairangpurOdisha from "./assets/partnersPageImages/Govt. Girls High School, Rairangpur, Odisha.png";
import greenValleySchoolTebo from "./assets/partnersPageImages/Green Valley School Tebo.png";
import gurukulPublicSchoolOdisha from "./assets/partnersPageImages/Gurukul Public School, Odisha.png";
import gvLovo from "./assets/partnersPageImages/GV Lovo.png";
import harimayaInternationalSchool from "./assets/partnersPageImages/Harimaya International School.png";
import hemSheela from "./assets/partnersPageImages/HemSheela.png";
import immortalInternationalSchool from "./assets/partnersPageImages/Immortal International School.jpeg";
import jajooInternationalSchool from "./assets/partnersPageImages/Jajoo International School.png";
import jivatKashi from "./assets/partnersPageImages/Jivat-Kashi.jpg";
import kvs from "./assets/partnersPageImages/KVS.jpg";
import logoTgTagline2 from "./assets/partnersPageImages/Logo_TG_Tagline 2.png";
import magadhamInternationalSchool from "./assets/partnersPageImages/Magadham International School.png";
import montfortCentreOfEducationTuraMeghalaya from "./assets/partnersPageImages/Montfort Centre of Education, Tura, Meghalaya.png";
import motherSuhagEducationCentreFatehpur from "./assets/partnersPageImages/Mother Suhag Education Centre Fatehpur.png";
import mungiabariLogo from "./assets/partnersPageImages/Mungiabari Logo.jpg";
import nilbagan from "./assets/partnersPageImages/Nilbagan.png";
import nobleSchoolAlipur from "./assets/partnersPageImages/Noble School Alipur.png";
import northDelhiPublicSchool from "./assets/partnersPageImages/North Delhi Public School.png";
import oakLeafHighSchool from "./assets/partnersPageImages/Oak Leaf High School.jpg";
import phulbaniPublicSchool from "./assets/partnersPageImages/Phulbani Public School.jpg";
import roboticLap from "./assets/partnersPageImages/Robotic Lap.jpg";
import sanskritiTheGurukulGuwahatiAssam from "./assets/partnersPageImages/Sanskriti The Gurukul, Guwahati, Assam.png";
import santSinghSukhaSinghGroupOfSchoolsAndCollege from "./assets/partnersPageImages/Sant Singh sukha Singh Group of schools and college.jpg";
import shemfordSrSecSchoolHaldwani300x300 from "./assets/partnersPageImages/Shemford-Sr.-Sec.-School-Haldwani-300x300.jpg";
import shemrockSchoolBalaghat from "./assets/partnersPageImages/Shemrock School Balaghat.jpeg";
import shikshaBhavanMontessoriSchool from "./assets/partnersPageImages/Shiksha bhavan Montessori School_.jpg";
import shreeKunjilalGulkandiDeviPublicSchoolKagarol from "./assets/partnersPageImages/Shree Kunjilal Gulkandi Devi Public School - Kagarol.png";
import sriGuruTegBahadurPublicSchool from "./assets/partnersPageImages/Sri Guru Teg Bahadur Public School.png";
import stJoansSchools from "./assets/partnersPageImages/St Joans Schools.png";
import stMaryPublicInterCollege from "./assets/partnersPageImages/St Mary Public Inter College.png";
import stXaviersPublicSchoolChatrapur300x300 from "./assets/partnersPageImages/St.-Xaviers-Public-School-Chatrapur-300x300.jpg";

function PartnersPage() {
	const rootRef = useRef(null);
	const videoRef = useRef(null);
	const institutionalSchools = [
		{ name: "Shemrock School Balaghat", logo: shemrockSchoolBalaghat },
		{ name: "St. Joans School", logo: stJoansSchools },
		{ name: "North Delhi Public School", logo: northDelhiPublicSchool },
		{ name: "Noble School Alipur", logo: nobleSchoolAlipur },
		{ name: "Nilbagan Model School, Assam", logo: nilbagan },
		{ name: "Magadham International School", logo: magadhamInternationalSchool },
		{ name: "Jajoo International School", logo: jajooInternationalSchool },
		{ name: "Harimaya International School", logo: harimayaInternationalSchool },
		{ name: "Gurukul Public School, Odisha", logo: gurukulPublicSchoolOdisha },
		{ name: "Green Valley School Tebo", logo: greenValleySchoolTebo },
		{
			name: "Govt. Girls High School, Rairangpur, Odisha",
			logo: govtGirlsHighSchoolRairangpurOdisha,
		},
		{
			name: "Shree Kunjilal Gulkandi Devi Public School - Kagarol",
			logo: shreeKunjilalGulkandiDeviPublicSchoolKagarol,
		},
		{ name: "Delhi Cambridge School", logo: delhiCambridgeSchool },
		{ name: "Chaman Bhartiya School", logo: cbLogo },
		{ name: "Army Goodwill School Uri", logo: armyGoodwillSchoolUri },
		{ name: "Evergreen School", logo: evergreenSchool },
		{ name: "Montfort Centre of Education, Tura, Meghalaya", logo: montfortCentreOfEducationTuraMeghalaya },
		{ name: "Mother Suhag Education Centre, Fatehpur", logo: motherSuhagEducationCentreFatehpur },
		{ name: "Mungiabari School", logo: mungiabariLogo },
		{ name: "Sanskriti The Gurukul, Guwahati, Assam", logo: sanskritiTheGurukulGuwahatiAssam },
		{ name: "St Mary Public Inter College", logo: stMaryPublicInterCollege },
		{ name: "Immortal International School", logo: immortalInternationalSchool },
		{ name: "Jivat Kashi", logo: jivatKashi },
		{ name: "St. Xavier's Public School, Chatrapur", logo: stXaviersPublicSchoolChatrapur300x300 },
		{ name: "Academic Heights", logo: academicHeightsLogo },
		{ name: "Shemford Sr. Sec. School, Haldwani", logo: shemfordSrSecSchoolHaldwani300x300 },
		{ name: "Hem Sheela Model School", logo: hemSheela },
		{ name: "Sant Singh Sukha Singh Group of Schools and College", logo: santSinghSukhaSinghGroupOfSchoolsAndCollege },
		{ name: "Sri Guru Teg Bahadur Public School", logo: sriGuruTegBahadurPublicSchool },
		{ name: "Phulbani Public School", logo: phulbaniPublicSchool },
		{ name: "Shiksha Bhavan Montessori School", logo: shikshaBhavanMontessoriSchool },
		{ name: "Oak Leaf High School", logo: oakLeafHighSchool },
		{ name: "AGPN Convent", logo: agpnImage },
		{ name: "Bhatkal Education Society", logo: bhatkalEducationSociety },
		{ name: "Code Kids Technology", logo: codeKidsTechnology },
		{ name: "KVS", logo: kvs },
		{ name: "GV Lovo", logo: gvLovo },
		{ name: "Dhanraj", logo: dhanraj },
	];

	useEffect(() => {
		const root = rootRef.current;
		const videoElement = videoRef.current;
		
		if (!root || !videoElement) {
			return undefined;
		}

		const playVideo = () => {
			if (!videoElement) {
				return;
			}
			videoElement.muted = true; // Ensure muted for autoplay
			const playPromise = videoElement.play();
			if (playPromise && typeof playPromise.catch === "function") {
				playPromise.catch(() => {
					// Retry after a short delay
					setTimeout(() => {
						videoElement.play().catch(() => {});
					}, 100);
				});
			}
		};

		// Try multiple events to ensure playback
		videoElement.addEventListener("loadeddata", playVideo);
		videoElement.addEventListener("canplay", playVideo);
		videoElement.addEventListener("canplaythrough", playVideo);
		
		// Try to play immediately
		playVideo();

		const tiltElements = root.querySelectorAll("[data-tilt]");
		if (typeof window !== "undefined" && window.VanillaTilt) {
			window.VanillaTilt.init(tiltElements, {
				max: 15,
				speed: 400,
				glare: true,
				"max-glare": 0.4,
				scale: 1.05,
			});
		}

		const schools = root.querySelectorAll(".partners-school-logo-card");
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry, index) => {
					if (entry.isIntersecting) {
						setTimeout(() => {
							entry.target.style.opacity = "1";
							entry.target.style.transform = "translateY(0) scale(1)";
						}, index * 30);
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1 }
		);

		schools.forEach((school) => {
			school.style.opacity = "0";
			school.style.transform = "translateY(20px) scale(0.8)";
			school.style.transition =
				"all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
			observer.observe(school);
		});

		const anchorLinks = root.querySelectorAll('a[href^="#"]');
		const handleAnchorClick = (event) => {
			event.preventDefault();
			const targetId = event.currentTarget.getAttribute("href");
			const targetEl = root.querySelector(targetId);
			if (targetEl) {
				targetEl.scrollIntoView({ behavior: "smooth" });
			}
		};

		anchorLinks.forEach((anchor) => {
			anchor.addEventListener("click", handleAnchorClick);
		});

		return () => {
			anchorLinks.forEach((anchor) => {
				anchor.removeEventListener("click", handleAnchorClick);
			});
			if (videoElement) {
				videoElement.removeEventListener("loadeddata", playVideo);
				videoElement.removeEventListener("canplay", playVideo);
				videoElement.removeEventListener("canplaythrough", playVideo);
			}
			observer.disconnect();
			tiltElements.forEach((el) => {
				if (el.vanillaTilt) {
					el.vanillaTilt.destroy();
				}
			});
		};
	}, []);

	return (
		<div className="partners-page-root" ref={rootRef}>
			<section className="partners-hero-video-section">
				<video
					ref={videoRef}
					autoPlay
					muted
					loop
					playsInline
					className="partners-back-video"
					id="partners-hero-video"
					src={heroVideoSrc}
					preload="auto"
				>
					Your browser does not support the video tag.
				</video>

				<div className="partners-video-overlay"></div>

				<div className="partners-hero-content">
					<div className="partners-hero-label">COLLABORATIVE ECOSYSTEM</div>
					<h1>
						Empowering <br /> <span className="partners-gradient-text">India&apos;s Education</span>
					</h1>
					<p>
						We collaborate with regional leaders and prestigious institutions to
						democratize technology education. From Maharashtra to Assam, our
						network is growing.
					</p>

					<div className="partners-stat-glass-container">
						<div className="partners-stat-glass">
							<h3>50+</h3>
							<p>Schools Onboard</p>
						</div>
						<div className="partners-stat-glass">
							<h3>4+</h3>
							<p>States Covered</p>
						</div>
						<div className="partners-stat-glass">
							<h3>10k+</h3>
							<p>Students Impacted</p>
						</div>
					</div>
				</div>
			</section>

			<section id="partners" className="partners-section-spacer">
				<div className="partners-container">
					<div className="partners-section-title">
						<h2><span className="partners-heading-accent">Regional</span> Representatives</h2>
						<p>Authorized partners operating under the TechyGuide mandate.</p>
					</div>

					<div className="partners-cards-marquee">
						<div className="partners-cards-track">
							<div className="partners-cards-group">
								<div className="partners-glass-card" data-tilt>
									<div className="partners-card-badge">MAHARASHTRA</div>
									<div className="partners-card-icon">
										<i className="fas fa-city"></i>
									</div>
									<h3>EPIC Digital Labs</h3>
									<p className="partners-address">
										Tower B 444, Lodha iThink, Palava City, Dombivli East, Mumbai -
										421204.
									</p>
									<div className="partners-card-contact">
										<a href="tel:+917304425579">
											<i className="fas fa-phone"></i> +91 73044 25579
										</a>
										<a href="mailto:support@epicdigital.in">
											<i className="fas fa-envelope"></i> support@epicdigital.in
										</a>
									</div>
								</div>

								<div className="partners-glass-card" data-tilt>
									<div className="partners-card-badge">UTTARAKHAND</div>
									<div className="partners-card-icon">
										<i className="fas fa-mountain"></i>
									</div>
									<h3>TechyGuide RO</h3>
									<p className="partners-address">
										394/2, GN Pant Marg, Tikonia, Haldwani, Dist-Nainital - 263139.
									</p>
									<div className="partners-card-contact">
										<a href="tel:+917217392166">
											<i className="fas fa-phone"></i> +91 72173 92166
										</a>
										<a href="mailto:kunalr@techyguide.in">
											<i className="fas fa-envelope"></i> kunalr@techyguide.in
										</a>
									</div>
								</div>

								<div className="partners-glass-card" data-tilt>
									<div className="partners-card-badge">PUNJAB &amp; HARYANA</div>
									<div className="partners-card-icon">
										<i className="fas fa-microchip"></i>
									</div>
									<h3>NGS Integrated Technologies</h3>
									<p className="partners-address">
										S.C.O 56, Backside Sector 47-C, Chandigarh.
									</p>
									<div className="partners-card-contact">
										<a href="tel:+919888251433">
											<i className="fas fa-phone"></i> +91 98882 51433
										</a>
										<a href="http://ngse.in" target="_blank">
											<i className="fas fa-globe"></i> ngse.in
										</a>
									</div>
								</div>

								<div className="partners-glass-card" data-tilt>
									<div className="partners-card-badge">KARNATAKA</div>
									<div className="partners-card-icon">
										<i className="fas fa-network-wired"></i>
									</div>
									<h3>The Cyber Pathshala</h3>
									<p className="partners-address">
										Near RK Diagnostic Centre, Bus Stand, Dandapura, Vidisha -
										464001 (M.P.)
									</p>
									<div className="partners-card-contact">
										<a href="tel:+919685369136">
											<i className="fas fa-phone"></i> +91 96853 69136
										</a>
										<a href="tel:+919806287786">
											<i className="fas fa-phone"></i> +91 98062 87786
										</a>
									</div>
								</div>
							</div>

							<div className="partners-cards-group" aria-hidden="true">
								<div className="partners-glass-card" data-tilt>
									<div className="partners-card-badge">MAHARASHTRA</div>
									<div className="partners-card-icon">
										<i className="fas fa-city"></i>
									</div>
									<h3>EPIC Digital Labs</h3>
									<p className="partners-address">
										Tower B 444, Lodha iThink, Palava City, Dombivli East, Mumbai -
										421204.
									</p>
									<div className="partners-card-contact">
										<a href="tel:+917304425579">
											<i className="fas fa-phone"></i> +91 73044 25579
										</a>
										<a href="mailto:support@epicdigital.in">
											<i className="fas fa-envelope"></i> support@epicdigital.in
										</a>
									</div>
								</div>

								<div className="partners-glass-card" data-tilt>
									<div className="partners-card-badge">UTTARAKHAND</div>
									<div className="partners-card-icon">
										<i className="fas fa-mountain"></i>
									</div>
									<h3>TechyGuide RO</h3>
									<p className="partners-address">
										394/2, GN Pant Marg, Tikonia, Haldwani, Dist-Nainital - 263139.
									</p>
									<div className="partners-card-contact">
										<a href="tel:+917217392166">
											<i className="fas fa-phone"></i> +91 72173 92166
										</a>
										<a href="mailto:kunalr@techyguide.in">
											<i className="fas fa-envelope"></i> kunalr@techyguide.in
										</a>
									</div>
								</div>

								<div className="partners-glass-card" data-tilt>
									<div className="partners-card-badge">PUNJAB &amp; HARYANA</div>
									<div className="partners-card-icon">
										<i className="fas fa-microchip"></i>
									</div>
									<h3>NGS Integrated Technologies</h3>
									<p className="partners-address">
										S.C.O 56, Backside Sector 47-C, Chandigarh.
									</p>
									<div className="partners-card-contact">
										<a href="tel:+919888251433">
											<i className="fas fa-phone"></i> +91 98882 51433
										</a>
										<a href="http://ngse.in" target="_blank">
											<i className="fas fa-globe"></i> ngse.in
										</a>
									</div>
								</div>

								<div className="partners-glass-card" data-tilt>
									<div className="partners-card-badge">KARNATAKA</div>
									<div className="partners-card-icon">
										<i className="fas fa-network-wired"></i>
									</div>
									<h3>The Cyber Pathshala</h3>
									<p className="partners-address">
										Near RK Diagnostic Centre, Bus Stand, Dandapura, Vidisha -
										464001 (M.P.)
									</p>
									<div className="partners-card-contact">
										<a href="tel:+919685369136">
											<i className="fas fa-phone"></i> +91 96853 69136
										</a>
										<a href="tel:+919806287786">
											<i className="fas fa-phone"></i> +91 98062 87786
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="schools" className="partners-section-spacer">
				<div className="partners-container">
					<div className="partners-section-title">
						<h2><span className="partners-heading-accent">Institutional</span> Network</h2>
						<p>Proudly powering STEM Labs in these esteemed institutions.</p>
					</div>

					<div className="partners-school-glass-grid">
						{institutionalSchools.map((school) => (
							<div
								className="partners-school-logo-card"
								title={school.name}
								key={school.name}
							>
								<img src={school.logo} alt={school.name} loading="lazy" />
								<span>{school.name}</span>
							</div>
						))}
					</div>
				</div>
			</section>

			<section id="testimonials" className="partners-section-spacer">
				<div className="partners-container">
					<div className="partners-section-title">
						<h2><span className="partners-heading-accent">Voices</span> of Impact</h2>
						<p>What the community is saying about TechyGuide.</p>
					</div>
				</div>

				<div className="partners-marquee-wrapper">
					<div className="partners-marquee-content">
						<div className="partners-testimonial-glass">
							<div className="partners-quote-icon">
								<i className="fas fa-quote-left"></i>
							</div>
							<p>
								"This is an AMAZING GIFT for me! The robotics kit changed how I
								look at engineering."
							</p>
							<div className="partners-user-info">
								<div className="partners-avatar">S</div>
								<span>Student, Grade 8</span>
							</div>
						</div>
						<div className="partners-testimonial-glass">
							<div className="partners-quote-icon">
								<i className="fas fa-quote-left"></i>
							</div>
							<p>
								"TechyGuide workshops brought real innovation to our labs. The
								trainers are excellent."
							</p>
							<div className="partners-user-info">
								<div className="partners-avatar">P</div>
								<span>Principal, DPS</span>
							</div>
						</div>
						<div className="partners-testimonial-glass">
							<div className="partners-quote-icon">
								<i className="fas fa-quote-left"></i>
							</div>
							<p>
								"My daughter loved the 3D Pen activity. It really sparked her
								creativity."
							</p>
							<div className="partners-user-info">
								<div className="partners-avatar">M</div>
								<span>Parent</span>
							</div>
						</div>
						<div className="partners-testimonial-glass">
							<div className="partners-quote-icon">
								<i className="fas fa-quote-left"></i>
							</div>
							<p>"The curriculum is perfectly aligned with the NEP 2020 standards."</p>
							<div className="partners-user-info">
								<div className="partners-avatar">T</div>
								<span>Science HOD</span>
							</div>
						</div>
						<div className="partners-testimonial-glass">
							<div className="partners-quote-icon">
								<i className="fas fa-quote-left"></i>
							</div>
							<p>
								"This is an AMAZING GIFT for me! The robotics kit changed how I
								look at engineering."
							</p>
							<div className="partners-user-info">
								<div className="partners-avatar">S</div>
								<span>Student, Grade 8</span>
							</div>
						</div>
						<div className="partners-testimonial-glass">
							<div className="partners-quote-icon">
								<i className="fas fa-quote-left"></i>
							</div>
							<p>"TechyGuide workshops brought real innovation to our labs."</p>
							<div className="partners-user-info">
								<div className="partners-avatar">P</div>
								<span>Principal, DPS</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default PartnersPage;
