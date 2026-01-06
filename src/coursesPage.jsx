import './coursesPage.css';

function CoursesPage() {
  const courses = [
    {
      title: "Python Programming Basics",
      description: "Learn Python from scratch with hands-on projects and real-world applications.",
      level: "Beginner",
      duration: "8 weeks"
    },
    {
      title: "Robotics with Arduino",
      description: "Build and program robots using Arduino microcontrollers. Perfect for beginners and intermediate learners.",
      level: "Intermediate",
      duration: "10 weeks"
    },
    {
      title: "AI & Machine Learning",
      description: "Dive into artificial intelligence and machine learning concepts with practical implementations.",
      level: "Advanced",
      duration: "12 weeks"
    },
    {
      title: "IoT Development",
      description: "Create smart devices and connected systems with IoT technologies.",
      level: "Intermediate",
      duration: "10 weeks"
    },
    {
      title: "3D Printing & Design",
      description: "Master 3D design and printing technology for prototyping and manufacturing.",
      level: "Beginner",
      duration: "6 weeks"
    },
    {
      title: "Web Development",
      description: "Build responsive websites with HTML, CSS, and JavaScript. Create modern web applications.",
      level: "Beginner",
      duration: "12 weeks"
    }
  ];

  return (
    <>
      <section className="courses-hero" style={{ padding: '60px 0', background: '#f8f9fa' }}>
        <div className="container">
          <h1>Our Comprehensive Courses</h1>
          <p className="hero-subtitle">Learn STEM skills from industry experts with hands-on projects and real-world applications</p>
        </div>
      </section>

      <section className="courses-grid-section" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="courses-grid">
            {courses.map((course, index) => (
              <div key={index} className="course-card">
                <div className="course-header">
                  <h3>{course.title}</h3>
                  <span className="course-level">{course.level}</span>
                </div>
                <p className="course-description">{course.description}</p>
                <div className="course-footer">
                  <span className="course-duration">
                    <i className="fas fa-clock"></i> {course.duration}
                  </span>
                  <button className="course-btn">Enroll Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CoursesPage;