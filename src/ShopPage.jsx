import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ShopPage.css';

import techIot1 from './assets/ShopPageImages/TechIoT Advance Kit-1.webp';
import techIot2 from './assets/ShopPageImages/TechIoT Advance Kit-2.webp';
import roboticArmMain from './assets/ShopPageImages/Robotic-Arm-Kit-Box-550.webp';
import roboticArmAlt from './assets/ShopPageImages/Robotic-Arm-Kit-Project-2.webp';
import roboticArmBox from './assets/ShopPageImages/Robotic-Arm-Box-1.webp';
import ottoman1 from './assets/ShopPageImages/Ottoman Kit 1.webp';
import ottoman2 from './assets/ShopPageImages/Ottoman Kit 2.webp';
import ottoman3 from './assets/ShopPageImages/Ottoman Kit 3.webp';
import pen1 from './assets/ShopPageImages/3d pen 1.webp';
import pen2 from './assets/ShopPageImages/3d pen 2.webp';
import pen3 from './assets/ShopPageImages/3d pen 3.webp';

function ShopPage() {
    const products = [
        { id: 1, title: "STEM Bundle", price: 23999, originalPrice: 29999, rating: 4.9, image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", description: "It is a 5 in 1 stem kit of Robotics, 3D Printing, IoT, Artificial Intelligence and Coding . In this course we provide 90 Live Classes along with Lifetime Access to Course ID. In this course you will be regularly tested in the forms of assignment. It's a unique learning opportunity for the kids and will enable them to succeed in the fields of Stem technology.", features: ["☑ 90 Live Classes", "☑ Lifetime Access to Course ID", "☑ Certificate", "☑ Assignment", "☑ 2 in 1 STEM Kit"], images: ["https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", "https://www.youtube.com/watch?v=wlkCQXHEgjA"] },
        { id: 2, title: "TechBot Advanced Kit", price: 7499, originalPrice: 8999, rating: 4.7, image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", description: "This Robotic Kit is suitable for kids age 10 and above which will reduce the screen timing and increase the curiosity for innovation.Using this kit, children can make various projects which will solve real life problems.", features: ["1. Easy-to-build breadboard basic electronic circuit model and basics of coding."," ", "2. Blend of fun and learning to build electronic DIY circuits."," ","3. Hands-on experience in building 25 different types of projects."," ", "4. No soldering required, appropriate for age 9 years and above."," ", "5. Engaging educational kit for young explorers."], images: ["https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", "https://videos.pexels.com/video-files/856247/856247-hd_1920_1080_30fps.mp4"] },
        { id: 3, title: "TechIoT Advance Kit", price: 6999, originalPrice: 8499, rating: 4.6, image: techIot1, description: "The IoT Advanced kit has activities related to advanced learning of IoT using concepts of various IoT sensors like IR sensor, soil moisture sensor etc, IoT frameworks and the microcontrollers used in IoT medium that will help any child to learn about IoT concepts in a detailed way by doing activities practically.", features: ["1. The ultimate IoT kit for kids and beginners to understand the concept of Internet of Things."," ", "2. It contains a variety of IoT sensors, WiFi module, and other components."," ", "3. Free project-making app allowing access to inbuilt Smartphone sensors."," ", "4. Supports both Arduino IDE and graphical programming."," ","5. Getting kids involved with IoT devices can be loads of fun for them!"], images: [techIot1, techIot2, "https://www.youtube.com/watch?v=9pEqyr_uT-k"] },
        { id: 4, title: "Robotic Arm Kit", price: 3499, originalPrice: 4299, rating: 4.8, image: roboticArmMain, description: "An  microcontroller receives control commands from the TechyGuide mobile application via Bluetooth. Each command controls one of the six servo motors, representing different joints of the robotic arm. Servo angles are adjusted incrementally to provide smooth and precise movements. Angle limits are applied to prevent over-rotation and mechanical damage. The system is suitable for pick-and-place tasks, robotics learning, and automation demonstrations.", features: ["This is a four degree of freedom robotic arm capable of picking and placing small objects."," ", "The robotic arm can fit on your table with middle-sized links."," ", "It helps to reach throughout the table and get hold of things without you to move."," ", "It provides with insights into a palletizing robotic manipulator through hands-on experience."," ", "Robotic arm teaches advanced robotics concepts like Motion Planning, Inverse Kinematics, etc."], images: [roboticArmMain, roboticArmAlt, "https://www.youtube.com/watch?v=HXHphpDJ9T0&list=RDHXHphpDJ9T0&start_radio=1"] },
        { id: 5, title: "Ottoman Kit", price: 2499, originalPrice: 3499, rating: 4.5, image: ottoman1, description: "Build-it-yourself analog synthesizer.", features: ["True Analog VCO", "Moog-style ladder filter"], images: [ottoman2, ottoman3, "https://www.youtube.com/watch?v=8-5w56VxRVg"] },
        { id: 6, title: "3D Pen", price: 899, originalPrice: 1299, rating: 4.9, category: "3D-Pen", image: pen1, description: "3D Pen is a 3D model printed using 3D printer used for educational purpose by students to design and create three-dimensional objects.", features: ["3D Pen is a 3D model printed using 3D printer used for educational purpose by students to design and create three-dimensional objects."], images: [pen2, pen3, "https://www.youtube.com/watch?v=S2kymv60ndQ"] },
        { id: 7, title: "TechBoT Electronics Kit", price: 1199, originalPrice: 1499, rating: 4.8, image: roboticArmAlt, description: "An  microcontroller receives control commands from the TechyGuide mobile application via Bluetooth. Each command controls one of the six servo motors, representing different joints of the robotic arm. Servo angles are adjusted incrementally to provide smooth and precise movements. Angle limits are applied to prevent over-rotation and mechanical damage. The system is suitable for pick-and-place tasks, robotics learning, and automation demonstrations.", features: ["This is a four degree of freedom robotic arm capable of picking and placing small objects."," ", "The robotic arm can fit on your table with middle-sized links."," ", "It helps to reach throughout the table and get hold of things without you to move."," ", "It provides with insights into a palletizing robotic manipulator through hands-on experience."," ", "Robotic arm teaches advanced robotics concepts like Motion Planning, Inverse Kinematics, etc."], images: [roboticArmAlt, roboticArmMain, techIot1] },
        { id: 8, title: "TechBoT Arduino Kit", price: 2999, originalPrice: 3999, rating: 4.8, image: roboticArmBox, description: "An  microcontroller receives control commands from the TechyGuide mobile application via Bluetooth. Each command controls one of the six servo motors, representing different joints of the robotic arm. Servo angles are adjusted incrementally to provide smooth and precise movements. Angle limits are applied to prevent over-rotation and mechanical damage. The system is suitable for pick-and-place tasks, robotics learning, and automation demonstrations.", features: ["This is a four degree of freedom robotic arm capable of picking and placing small objects."," ", "The robotic arm can fit on your table with middle-sized links."," ", "It helps to reach throughout the table and get hold of things without you to move."," ", "It provides with insights into a palletizing robotic manipulator through hands-on experience."," ", "Robotic arm teaches advanced robotics concepts like Motion Planning, Inverse Kinematics, etc."], images: [roboticArmBox, roboticArmMain, techIot2] },
        { id: 9, title: "TeBoT Champ Kit", price: 6499, originalPrice: 7999, rating: 4.8, image: ottoman2, description: "An  microcontroller receives control commands from the TechyGuide mobile application via Bluetooth. Each command controls one of the six servo motors, representing different joints of the robotic arm. Servo angles are adjusted incrementally to provide smooth and precise movements. Angle limits are applied to prevent over-rotation and mechanical damage. The system is suitable for pick-and-place tasks, robotics learning, and automation demonstrations.", features: ["This is a four degree of freedom robotic arm capable of picking and placing small objects."," ", "The robotic arm can fit on your table with middle-sized links."," ", "It helps to reach throughout the table and get hold of things without you to move."," ", "It provides with insights into a palletizing robotic manipulator through hands-on experience."," ", "Robotic arm teaches advanced robotics concepts like Motion Planning, Inverse Kinematics, etc."], images: [ottoman2, ottoman3, roboticArmBox] },
        { id: 10, title: "TeBoT Basic Kit", price: 4399, originalPrice: 5499, rating: 4.8, image: pen2, description: "An  microcontroller receives control commands from the TechyGuide mobile application via Bluetooth. Each command controls one of the six servo motors, representing different joints of the robotic arm. Servo angles are adjusted incrementally to provide smooth and precise movements. Angle limits are applied to prevent over-rotation and mechanical damage. The system is suitable for pick-and-place tasks, robotics learning, and automation demonstrations.", features: ["This is a four degree of freedom robotic arm capable of picking and placing small objects."," ", "The robotic arm can fit on your table with middle-sized links."," ", "It helps to reach throughout the table and get hold of things without you to move."," ", "It provides with insights into a palletizing robotic manipulator through hands-on experience."," ", "Robotic arm teaches advanced robotics concepts like Motion Planning, Inverse Kinematics, etc."], images: [pen2, pen3, techIot1] },
        { id: 11, title: "TeBot Advance Kit", price: 23999, originalPrice: 29999, rating: 4.9, image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", description: "TeBot Advance Kit is an ultimate robotics learning solution designed for young innovators. It supports 50+ hands-on projects with structured course materials and integrates multiple sensors for real-world experimentation. The kit includes short-circuit protection and a 1-year manufacturing warranty on the microcontroller for safe and long-term classroom use.", features: ["☑ 50+ Robotics Projects", "☑ Multi-Sensor Integration", "☑ Inbuilt Sensors for Easy Handling", "☑ Short Circuit Protection", "☑ 1-Year Microcontroller Warranty", "☑ Reusable & Modular Components"], images: ["https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", "https://www.youtube.com/watch?v=wlkCQXHEgjA"] },
        { id: 12, title: "TeBot Champ Kit", price: 7499, originalPrice: 8999, rating: 4.7, image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", description: "TeBot Champ Kit is designed for young innovators ready for advanced robotics exploration. It supports 40+ engaging projects with structured learning resources and wide sensor compatibility. Built with durable components and enhanced safety protection.", features: ["☑ 40+ Structured Projects", "☑ Wide Sensor Compatibility", "☑ Durable Build Quality", "☑ Short Circuit Protection", "☑ Inbuilt Sensors", "☑ 1-Year Warranty"], images: ["https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", "https://videos.pexels.com/video-files/856247/856247-hd_1920_1080_30fps.mp4"] },
        { id: 13, title: "I-BoT Advance Kit", price: 6999, originalPrice: 8499, rating: 4.6, image: techIot1, description: "I-BoT Advance Kit is a premium robotics platform supporting 100+ diverse projects. It integrates seamlessly with multiple sensors and is suitable for Robotics, IoT, and AI-based applications. Designed with advanced circuitry protection for reliable performance.", features: ["☑ 100+ Advanced Projects", "☑ AI & IoT Compatibility", "☑ Multi-Sensor Integration", "☑ Advanced Circuit Protection", "☑ Inbuilt Sensors", "☑ 1-Year Warranty"], images: [techIot1, techIot2, "https://www.youtube.com/watch?v=9pEqyr_uT-k"] },
        { id: 14, title: "I-BoT Starter Kit", price: 3499, originalPrice: 4299, rating: 4.8, image: roboticArmMain, description: "I-BoT Starter Kit introduces students to robotics fundamentals through 20+ guided projects. It supports Robotics, IoT, and AI learning while offering modular configuration and easy sensor integration.", features: ["☑ 20+ Guided Projects", "☑ Modular Design", "☑ Sensor Integration", "☑ Short Circuit Protection", "☑ Beginner Friendly", "☑ Robotics, IoT & AI Support"], images: [roboticArmMain, roboticArmAlt, "https://www.youtube.com/watch?v=HXHphpDJ9T0&list=RDHXHphpDJ9T0&start_radio=1"] },
        { id: 15, title: "E-Blox Kit", price: 2499, originalPrice: 3499, rating: 4.5, image: ottoman1, description: "E-Blox Kit is a modular electronics learning kit that enables students to build practical projects like lamps and mini windmills. Designed with plug-and-play components and child-safe low voltage design.", features: ["☑ 20+ Electronics Projects", "☑ Plug & Play Components", "☑ Child-Safe Low Voltage", "☑ Modular Block Assembly", "☑ Renewable Energy Exploration"], images: [ottoman2, ottoman3, "https://www.youtube.com/watch?v=8-5w56VxRVg"] },
        { id: 16, title: "Humanoid Kit", price: 899, originalPrice: 1299, rating: 4.9, category: "3D-Pen", image: pen1, description: "Humanoid Kit allows students to build a fully functional humanoid robot with Bluetooth and voice control capabilities. It supports AI integration and Google Assistant compatibility for advanced experimentation.", features: ["☑ Bluetooth Enabled", "☑ Voice Command Functionality", "☑ Google Assistant Compatible", "☑ Multi-Control Operation", "☑ AI-Based Robotics Platform"], images: [pen2, pen3, "https://www.youtube.com/watch?v=S2kymv60ndQ"] },
        { id: 17, title: "Otto Starter Kit", price: 1199, originalPrice: 1499, rating: 4.8, image: roboticArmAlt, description: "Otto Starter Kit enables learners to assemble a mini humanoid robot capable of walking, dancing, and playing tunes. It includes guided learning materials and is ideal for beginners.", features: ["☑ Walking & Dancing Robot", "☑ Plays Music", "☑ Easy Assembly", "☑ Beginner Robotics Kit", "☑ Guided Learning Materials"], images: [roboticArmAlt, roboticArmMain, techIot1] },
        { id: 18, title: "Otto Lee Kit", price: 2999, originalPrice: 3999, rating: 4.8, image: roboticArmBox, description: "Otto Lee Kit is a Bluetooth-controlled humanoid robot supporting multiple configurations and dynamic movements. Designed for interactive and wireless robotics learning.", features: ["☑ Bluetooth Control", "☑ Multiple Configurations", "☑ Dynamic Robotic Movements", "☑ Wireless Operation", "☑ Educational Robotics Kit"], images: [roboticArmBox, roboticArmMain, techIot2] },
        { id: 19, title: "Otto Spider Kit", price: 6499, originalPrice: 7999, rating: 4.8, image: ottoman2, description: "Otto Spider Kit is a spider-inspired robot featuring 8 degrees of motion. It can perform push-ups, dance routines, and agile movements with Bluetooth control.", features: ["☑ 8 Degrees of Motion", "☑ Agile Robotic Design", "☑ Bluetooth Control", "☑ Compact Structure", "☑ Complete Learning Resources"], images: [ottoman2, ottoman3, roboticArmBox] },
        { id: 20, title: "3D Printer", price: 4399, originalPrice: 5499, rating: 4.8, image: pen2, description: "This high-resolution 3D Printer enables students to explore additive manufacturing concepts and transform creative ideas into tangible models. Supports multiple materials and beginner-friendly setup.", features: ["☑ High-Resolution Printing", "☑ Multi-Material Support", "☑ Beginner-Friendly Operation", "☑ SD Card Compatibility", "☑ Educational Prototyping"], images: [pen2, pen3, techIot1] },
    ];

    const courses = [
        { id: 101, title: "Robo Champ Course", price: 14999, originalPrice: 19999, rating: 4.8, duration: "3 Months", level: "Beginner", mode: "Live + Recorded", image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", shortDescription: "Build strong robotics fundamentals and complete real-world robot challenges.", description: "Robo Champ Course introduces learners to robotics fundamentals through practical sessions, guided builds, and challenge-based learning. Students explore sensors, motion logic, and controller programming while creating functional robotic prototypes.", features: ["Robot assembly fundamentals", "Sensor and actuator integration", "Basic control programming", "Weekly practical challenges", "Mentor-led live sessions", "Mini project assessments"], outcomes: ["Build and test working robots", "Understand robotics workflow", "Apply logic in real scenarios", "Present a final robotics project"], certification: "Robo Champ Completion Certificate" },
        { id: 102, title: "Python Coding Course", price: 12999, originalPrice: 16999, rating: 4.7, duration: "2.5 Months", level: "Intermediate", mode: "Live + LMS Access", image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", shortDescription: "Learn Python from basics to real application projects with mentor support.", description: "Python Coding Course helps learners progress from syntax basics to structured programming and practical problem-solving. Students work on functions, loops, data structures, and simple automation use-cases with hands-on coding tasks.", features: ["Python syntax and fundamentals", "Lists, dictionaries, and functions", "File handling basics", "Problem-solving exercises", "Project-based coding practice", "LMS resources and quizzes"], outcomes: ["Write clean Python programs", "Solve logic-based tasks", "Build simple automation scripts", "Create beginner Python projects"], certification: "Python Coding Certificate" },
        { id: 103, title: "Graphical Coding Course", price: 9999, originalPrice: 13999, rating: 4.6, duration: "2 Months", level: "Beginner to Intermediate", mode: "Hybrid", image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", shortDescription: "Learn coding logic visually using drag-and-drop programming blocks.", description: "Graphical Coding Course teaches computational thinking using visual coding platforms. Learners create animations, games, and logic workflows with block-based coding before transitioning to text-based programming concepts.", features: ["Block-based coding interface", "Logic and sequence building", "Conditionals and loops", "Animation and game mini projects", "Debugging through visual flow", "Guided coding missions"], outcomes: ["Understand programming logic", "Build interactive visual projects", "Improve algorithmic thinking", "Transition confidently to text coding"], certification: "Graphical Coding Certificate" },
        { id: 104, title: "Web Development Course", price: 19999, originalPrice: 25999, rating: 4.9, duration: "4 Months", level: "Advanced", mode: "Live Interactive", image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", shortDescription: "Create responsive websites using modern frontend development tools.", description: "Web Development Course covers frontend development from structure to deployment. Learners build responsive websites with HTML, CSS, and JavaScript, then create multi-page projects and deploy them with best-practice workflows.", features: ["HTML and semantic structure", "Modern CSS and responsive layout", "JavaScript DOM and events", "Component-based UI approach", "Website optimization basics", "Capstone web project"], outcomes: ["Build production-ready webpages", "Create responsive UI layouts", "Implement interactive features", "Deploy a complete web project"], certification: "Web Development Certificate" },
        { id: 105, title: "App Development Course", price: 7999, originalPrice: 11999, rating: 4.5, duration: "2 Months", level: "Beginner", mode: "Online + Assignments", image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", shortDescription: "Design and build beginner mobile apps with practical UI and logic modules.", description: "App Development Course introduces mobile application concepts including screen flow, user interface design, and app logic implementation. Learners build simple functional apps and test them through guided assignments.", features: ["Mobile app basics", "UI flow and navigation", "Input handling and validation", "Simple data management", "Assignment-driven development", "Mini app publishing guidance"], outcomes: ["Build basic mobile apps", "Design user-friendly interfaces", "Implement core app logic", "Showcase a final app prototype"], certification: "App Development Certificate" },
        { id: 106, title: "Internet of Things Course", price: 17999, originalPrice: 23999, rating: 4.8, duration: "3 Months", level: "All Levels", mode: "Live + Project Based", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", shortDescription: "Build smart connected systems using sensors, controllers, and cloud connectivity.", description: "Internet of Things Course helps learners create connected devices using sensors, microcontrollers, and cloud dashboards. Students build real-time monitoring and automation projects while understanding IoT architecture and data flow.", features: ["IoT architecture fundamentals", "Sensor and microcontroller setup", "Wireless communication basics", "Cloud dashboard integration", "Smart automation projects", "Real-time data monitoring"], outcomes: ["Build connected IoT prototypes", "Collect and visualize sensor data", "Understand device-cloud communication", "Implement smart system automation"], certification: "IoT Practitioner Certificate" },
        { id: 107, title: "Artificial Intelligence Course", price: 18999, originalPrice: 24999, rating: 4.9, duration: "3.5 Months", level: "Intermediate", mode: "Live + Recorded", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", shortDescription: "Learn AI concepts and build intelligent models with practical projects.", description: "Artificial Intelligence Course introduces key AI concepts including machine learning workflows, model training, and basic computer vision. Learners complete guided projects to understand how intelligent systems are built and evaluated.", features: ["AI and ML foundations", "Dataset preparation basics", "Model training workflow", "Prediction and evaluation", "Intro to computer vision", "Mentor-guided AI projects"], outcomes: ["Build beginner AI models", "Understand end-to-end AI pipeline", "Interpret model results", "Create an AI project portfolio"], certification: "Artificial Intelligence Certificate" },
        { id: 108, title: "STEM Bundle Course", price: 20999, originalPrice: 27999, rating: 4.8, duration: "4 Months", level: "All Levels", mode: "Live + Project Based", image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", shortDescription: "An integrated STEM journey across robotics, coding, AI, and IoT domains.", description: "STEM Bundle Course combines multiple technology tracks into one structured path. Learners explore robotics, coding, AI, and IoT through project-based modules, interdisciplinary challenges, and a final capstone presentation.", features: ["Robotics + coding modules", "AI and IoT fundamentals", "Hands-on STEM experiments", "Design thinking activities", "Cross-domain capstone project", "Periodic skill assessments"], outcomes: ["Build multidisciplinary STEM projects", "Strengthen analytical and creative thinking", "Apply concepts across domains", "Present a complete capstone solution"], certification: "STEM Bundle Completion Certificate" }
    ];

    const [cart, setCart] = useState([]);
    const [currentProduct, setCurrentProduct] = useState(null);
    const [currentCategory, setCurrentCategory] = useState('All');
    const [currentCourse, setCurrentCourse] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [filteredCourses, setFilteredCourses] = useState(courses);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [currentSliderIndex, setCurrentSliderIndex] = useState(0);
    const [currentMediaList, setCurrentMediaList] = useState([]);
    const [activeTab, setActiveTab] = useState('features');
    const [headerOffset, setHeaderOffset] = useState(113);
    const navigate = useNavigate();

    const formatPrice = (price) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);

    const getYoutubeId = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    useEffect(() => {
        const saved = localStorage.getItem('techyCart');
        if (saved) setCart(JSON.parse(saved));

        const openCart = localStorage.getItem('openCartOnLoad');
        if (openCart === 'true') {
            setIsCartOpen(true);
            localStorage.removeItem('openCartOnLoad');
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('techyCart', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        const handlePageFocus = () => {
            const saved = localStorage.getItem('techyCart');
            if (saved) {
                setCart(JSON.parse(saved));
            }
        };

        window.addEventListener('focus', handlePageFocus);
        return () => window.removeEventListener('focus', handlePageFocus);
    }, []);

    useEffect(() => {
        filterProducts();
    }, [searchTerm, currentCategory]);

    useEffect(() => {
        const fallbackHeaderOffset = 113;

        const updateHeaderOffset = () => {
            const headerElement = document.querySelector('header');
            if (!headerElement) {
                setHeaderOffset(fallbackHeaderOffset);
                return;
            }

            const headerBottom = Math.round(headerElement.getBoundingClientRect().bottom);
            const computedOffset = headerBottom > 0 ? headerBottom : (headerElement.offsetHeight || fallbackHeaderOffset);
            setHeaderOffset(computedOffset);
        };

        updateHeaderOffset();
        window.addEventListener('resize', updateHeaderOffset);

        return () => {
            window.removeEventListener('resize', updateHeaderOffset);
        };
    }, []);

    // Handle course modal scroll lock and keyboard close
    useEffect(() => {
        if (!currentCourse) return;

        // Lock body scroll
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        // ESC key to close
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setCurrentCourse(null);
            }
        };

        window.addEventListener('keydown', handleEscape);

        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener('keydown', handleEscape);
        };
    }, [currentCourse]);

    useEffect(() => {
        if (!isModalOpen || currentMediaList.length === 0) return;
        
        // Check if current slide is a video or YouTube - if so, don't auto-scroll
        const currentMedia = currentMediaList[currentSliderIndex];
        const isVideo = currentMedia && (currentMedia.includes('.mp4') || currentMedia.includes('video'));
        const isYoutube = currentMedia && (currentMedia.includes('youtube.com') || currentMedia.includes('youtu.be'));
        
        if (isVideo || isYoutube) {
            return; // Don't auto-scroll for videos
        }
        
        const interval = setInterval(() => {
            changeSlide(1);
        }, 3000);

        return () => clearInterval(interval);
    }, [isModalOpen, currentSliderIndex, currentMediaList.length]);

    const filterProducts = () => {
        if (currentCategory === 'Courses') {
            let filtered = courses;
            if (searchTerm) {
                filtered = filtered.filter(c => c.title.toLowerCase().includes(searchTerm.toLowerCase()));
            }
            setFilteredCourses(filtered);
        } else {
            let filtered = products;
            if (searchTerm) {
                filtered = filtered.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()));
            }
            setFilteredProducts(filtered);
        }
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const updateItemQty = (id, change) => {
        setCart(prev => {
            const updated = prev.map(item => {
                if (item.id === id) {
                    const newQty = item.quantity + change;
                    return { ...item, quantity: newQty };
                }
                return item;
            }).filter(item => item.quantity > 0);
            return updated;
        });
    };

    const handleAddClick = (id) => {
        const product = products.find(p => p.id === id);
        const existing = cart.find(c => c.id === id);
        if (existing) {
            updateItemQty(id, 1);
        } else {
            setCart(prev => [...prev, { ...product, quantity: 1 }]);
        }
    };

    const handleQtyChange = (id, change) => {
        updateItemQty(id, change);
    };

    const handleBuyNow = (id) => {
        const product = products.find(p => p.id === id);
        const existing = cart.find(c => c.id === id);
        
        if (!existing) {
            const updatedCart = [...cart, { ...product, quantity: 1 }];
            setCart(updatedCart);
            localStorage.setItem('techyCart', JSON.stringify(updatedCart));
        }
        
        closeModal();
        setTimeout(() => {
            navigate('/checkout');
        }, 100);
    };

    const handleProceedToCheckout = () => {
        if (cart.length === 0) return;
        setIsCartOpen(false);
        navigate('/checkout');
    };

    const openProductModal = (id) => {
        const product = products.find(p => p.id === id);
        if (!product) return;
        setCurrentProduct(product);
        setCurrentMediaList(product.images || []);
        setCurrentSliderIndex(0);
        setIsModalOpen(true);
        setActiveTab('features');
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentProduct(null);
        setCurrentMediaList([]);
        setCurrentSliderIndex(0);
    };

    const changeSlide = (direction) => {
        if (currentMediaList.length === 0) return;
        let newIndex = currentSliderIndex + direction;
        if (newIndex < 0) newIndex = currentMediaList.length - 1;
        if (newIndex >= currentMediaList.length) newIndex = 0;
        setCurrentSliderIndex(newIndex);
    };

    const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const cartItemInModal = currentProduct ? cart.find(c => c.id === currentProduct.id) : null;

    const renderMedia = (url, index) => {
        if (!url) return null;
        const isVideo = url.includes('.mp4') || url.includes('video');
        const isYoutube = url.includes('youtube.com') || url.includes('youtu.be');
        
        if (isYoutube) {
            const videoId = getYoutubeId(url);
            return (
                <iframe
                    key={index}
                    src={`https://www.youtube.com/embed/${videoId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={currentSliderIndex === index ? '' : 'hidden'}
                />
            );
        } else if (isVideo) {
            return (
                <video
                    key={index}
                    controls
                    loop
                    muted
                    playsInline
                    className={currentSliderIndex === index ? '' : 'hidden'}
                >
                    <source src={url} type="video/mp4" />
                </video>
            );
        } else {
            return (
                <img
                    key={index}
                    src={url}
                    alt="Product"
                    className={currentSliderIndex === index ? '' : 'hidden'}
                />
            );
        }
    };

    return (
        <div className="shop-page-wrapper">
            <div className="search-header">
                <div className="header-content">
                    <div className="search-wrapper">
                        <span className="search-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </span>
                        <input
                            type="text"
                            id="searchInput"
                            placeholder="Search for AI kits, robotics..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="cart-container">
                        <button className="header-cart-btn" onClick={toggleCart}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                            <span className="cart-badge">{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
                <div className="cart-header">
                    <h3>Your Cart</h3>
                    <button onClick={toggleCart} className="close-cart">&times;</button>
                </div>
                
                <div className="cart-items-container">
                    {cart.length === 0 ? (
                        <div className="empty-cart-msg">Your cart is empty.</div>
                    ) : (
                        cart.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.title} />
                                <div className="cart-item-details">
                                    <div className="cart-item-title">{item.title}</div>
                                    <div className="cart-item-price">{formatPrice(item.price)}</div>
                                    <div className="cart-item-qty">
                                        <button className="mini-qty-btn" onClick={() => updateItemQty(item.id, -1)}>−</button>
                                        <span className="mini-qty-val">{item.quantity}</span>
                                        <button className="mini-qty-btn" onClick={() => updateItemQty(item.id, 1)}>+</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
            
                </div>

                <div className="cart-footer">
                    <div className="cart-total">
                        <span>Total:</span>
                        <span>{formatPrice(cartTotal)}</span>
                    </div>
                    {cart.length === 0 ? (
                        <button className="btn-checkout" onClick={() => setIsCartOpen(false)}>Add items to cart</button>
                    ) : (
                        <button className="btn-checkout" onClick={handleProceedToCheckout}>PROCEED TO BUY</button>
                    )}
                </div>
            </div>
            <div className={`cart-overlay ${isCartOpen ? 'open' : ''}`} onClick={toggleCart}></div>

            <div className="shop-layout">
                <div className="mobile-filter-bar">
                    <button className="mobile-cat-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        <span>{currentCategory === 'All' ? 'Select Category' : currentCategory}</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </button>
                </div>

                <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                    <h3 className="sidebar-title">Categories</h3>
                    <ul className="category-list">
                        {['All', 'Courses'].map(cat => (
                            <li
                                key={cat}
                                className={`category-item ${currentCategory === cat ? 'active' : ''}`}
                                onClick={() => {
                                    setCurrentCategory(cat);
                                    setIsSidebarOpen(false);
                                }}
                            >
                                {cat === 'All' ? 'All Products' : cat}
                            </li>
                        ))}
                    </ul>
                </aside>

                <main className="main-content">
                    <div className="content-header">
                        <h2 className="section-title">{currentCategory === 'All' ? 'All Products' : 'Courses'}</h2>
                        <span className="product-count">{currentCategory === 'Courses' ? filteredCourses.length : filteredProducts.length} items</span>
                    </div>
                    <div className="product-grid">
                        {currentCategory === 'Courses' ? (
                            filteredCourses.map(course => (
                                <div key={course.id} className="product-card" onClick={() => setCurrentCourse(course)}>
                                    <div className="card-img-box">
                                        <img src={course.image} alt={course.title} />
                                        <div className="card-overlay">
                                            <button className="view-btn">View Details</button>
                                        </div>
                                    </div>
                                    <div className="card-details">
                                        <h3 className="card-title">{course.title}</h3>
                                        <div className="card-badges course-card-badges">
                                            <span className="course-card-badge course-card-badge-duration">{course.duration}</span>
                                            <span className="course-card-badge course-card-badge-level">{course.level}</span>
                                            <span className="course-card-badge course-card-badge-mode">{course.mode}</span>
                                        </div>
                                        <p className="course-short-description">{course.shortDescription}</p>
                                        <div className="card-price">{formatPrice(course.price)} <span className="original">{formatPrice(course.originalPrice)}</span></div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            filteredProducts.map(product => (
                                <div key={product.id} className="product-card" onClick={() => openProductModal(product.id)}>
                                    <div className="card-img-box">
                                        <img src={product.image} alt={product.title} />
                                        <div className="card-overlay">
                                            <button className="view-btn">View Details</button>
                                        </div>
                                    </div>
                                    <div className="card-details">
                                        <h3 className="card-title">{product.title}</h3>
                                        <div className="card-price">{formatPrice(product.price)} <span className="original">{formatPrice(product.originalPrice)}</span></div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    {currentCategory === 'Courses' ? (
                        filteredCourses.length === 0 && (
                            <div className="no-results"><h3>No courses found.</h3></div>
                        )
                    ) : (
                        filteredProducts.length === 0 && (
                            <div className="no-results"><h3>No products found.</h3></div>
                        )
                    )}
                </main>
            </div>

            {currentCourse && (
                <div
                    className="course-modal-overlay"
                    onClick={() => setCurrentCourse(null)}
                    style={{ top: `${headerOffset}px`, height: `calc(100vh - ${headerOffset}px)` }}
                >
                    <div className="course-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="course-modal-close-btn" onClick={() => setCurrentCourse(null)} aria-label="Close modal">✕</button>

                        <div className="course-modal-body">
                            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                                <img src={currentCourse.image} alt={currentCourse.title} style={{ maxWidth: '300px', height: 'auto', borderRadius: '12px' }} />
                            </div>

                            <div>
                                <h2>{currentCourse.title}</h2>
                                <div className="rating-section">
                                    <span className="stars">{'★'.repeat(Math.floor(currentCourse.rating))}{'☆'.repeat(5 - Math.floor(currentCourse.rating))}</span>
                                    <span className="rating-number">({currentCourse.rating})</span>
                                </div>

                                <div className="course-badges">
                                    <span className="course-badge course-badge-duration">
                                        Duration: {currentCourse.duration}
                                    </span>
                                    <span className="course-badge course-badge-level">
                                        Level: {currentCourse.level}
                                    </span>
                                    <span className="course-badge course-badge-mode">
                                        Mode: {currentCourse.mode}
                                    </span>
                                </div>

                                <div className="price-section">
                                    <span className="final-price">{formatPrice(currentCourse.price)}</span>
                                    {currentCourse.originalPrice && (
                                        <span className="original-price">{formatPrice(currentCourse.originalPrice)}</span>
                                    )}
                                </div>

                                <div className="description-section">
                                    <h4>About This Course</h4>
                                    <p>{currentCourse.description}</p>
                                </div>

                                {currentCourse.features && currentCourse.features.length > 0 && (
                                    <div className="features-section">
                                        <h4>Key Features</h4>
                                        <ul>
                                            {currentCourse.features.map((feature, idx) => (
                                                <li key={idx}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {currentCourse.outcomes && currentCourse.outcomes.length > 0 && (
                                    <div className="outcomes-section">
                                        <h4>Learning Outcomes</h4>
                                        <ul>
                                            {currentCourse.outcomes.map((outcome, idx) => (
                                                <li key={idx}>{outcome}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {currentCourse.certification && (
                                    <div className="certification-section">
                                        <h4>Certification</h4>
                                        <p>{currentCourse.certification}</p>
                                    </div>
                                )}

                                <div className="course-actions">
                                    <button className="action-btn btn-buy" onClick={() => setCurrentCourse(null)}>ENROLL NOW</button>
                                    <button className="action-btn btn-cart" onClick={() => setCurrentCourse(null)}>Learn More</button>
                                </div>

                                <div className="mobile-bottom-actions">
                                    <button className="action-btn btn-buy course-enroll-mobile" onClick={() => setCurrentCourse(null)}>ENROLL NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {isModalOpen && currentProduct && (
                <div className="modal">
                    <button className="close-modal" onClick={closeModal}>&times;</button>
                    
                    <div className="modal-overlay" onClick={closeModal}></div>
                    
                    <div className="modal-content fade-in-up">
                        <div className="modal-body">
                            <div className="modal-left">
                                <div className="slider-container">
                                    <button className="slider-btn prev-btn" onClick={() => changeSlide(-1)}>&#10094;</button>
                                    
                                    <div className="main-image-container">
                                        {currentMediaList.map((url, index) => renderMedia(url, index))}
                                    </div>

                                    <button className="slider-btn next-btn" onClick={() => changeSlide(1)}>&#10095;</button>
                                </div>
                                <div className="slider-dots">
                                    {currentMediaList.map((_, index) => (
                                        <span
                                            key={index}
                                            className={`dot ${currentSliderIndex === index ? 'active' : ''}`}
                                            onClick={() => setCurrentSliderIndex(index)}
                                        ></span>
                                    ))}
                                </div>
                            </div>

                            <div className="modal-right">
                                <div className="pd-header">
                                    <h1 className="pd-title">{currentProduct.title}</h1>
                                    <div className="pd-meta">
                                        <span className="rating-badge">★ <span>{currentProduct.rating}</span></span>
                                        <span className="review-count">124 Reviews</span>
                                    </div>
                                </div>
                                <div className="pd-price-block">
                                    <span className="pd-price">{formatPrice(currentProduct.price)}</span>
                                    <div className="pd-discount-block">
                                        <span className="pd-original-price">{formatPrice(currentProduct.originalPrice)}</span>
                                        <span className="pd-discount-tag">{Math.round((1 - currentProduct.price/currentProduct.originalPrice) * 100)}% Off</span>
                                    </div>
                                </div>
                                
                                <div className="pd-tabs-nav">
                                    <button className={`tab-btn ${activeTab === 'features' ? 'active' : ''}`} onClick={() => setActiveTab('features')}>Key Features</button>
                                    <button className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`} onClick={() => setActiveTab('description')}>Description</button>
                                </div>
                                
                                <div className="pd-tab-container scrollable-content">
                                    <div className={`tab-content ${activeTab === 'features' ? 'active' : ''}`}>
                                        <ul className="pd-features-list">
                                            {currentProduct.features.map((feature, i) => (
                                                <li key={i}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className={`tab-content ${activeTab === 'description' ? 'active' : ''}`}>
                                        <p className="pd-description-text">{currentProduct.description}</p>
                                    </div>
                                </div>
                                
                                <div className="modal-actions-desktop">
                                    <div style={{flex: 1}}>
                                        {cartItemInModal ? (
                                            <div className="qty-controller">
                                                <button className="qty-btn" onClick={() => handleQtyChange(currentProduct.id, -1)}>−</button>
                                                <span className="qty-val">{cartItemInModal.quantity}</span>
                                                <button className="qty-btn" onClick={() => handleQtyChange(currentProduct.id, 1)}>+</button>
                                            </div>
                                        ) : (
                                            <button className="action-btn btn-cart" onClick={() => handleAddClick(currentProduct.id)}>ADD TO CART</button>
                                        )}
                                    </div>
                                    <button className="btn-buy action-btn" onClick={() => handleBuyNow(currentProduct.id)}>Buy Now</button>
                                </div>
                            </div>
                        </div>

                        <div className="mobile-bottom-actions">
                            <div style={{flex: 1}}>
                                {cartItemInModal ? (
                                    <div className="qty-controller">
                                        <button className="qty-btn" onClick={() => handleQtyChange(currentProduct.id, -1)}>−</button>
                                        <span className="qty-val">{cartItemInModal.quantity}</span>
                                        <button className="qty-btn" onClick={() => handleQtyChange(currentProduct.id, 1)}>+</button>
                                    </div>
                                ) : (
                                    <button className="action-btn btn-cart" onClick={() => handleAddClick(currentProduct.id)}>ADD TO CART</button>
                                )}
                            </div>
                            <button className="btn-buy action-btn" onClick={() => handleBuyNow(currentProduct.id)}>Buy Now</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ShopPage;