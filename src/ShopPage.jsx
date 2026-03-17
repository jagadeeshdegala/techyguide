import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ShopPage.css';

import ottoman1 from './assets/ShopPageImages/E-Blox Starter - 1.jpg';
import ottoman2 from './assets/ShopPageImages/E-Blox Starter - 2.jpg';
import ottoman3 from './assets/ShopPageImages/E-Blox Starter - 3.jpg';
import ottoman4 from './assets/ShopPageImages/E-Blox Starter - 4.jpg';

import ebloxMaker1 from './assets/ShopPageImages/E-Blox maker - 1.jpg';
import ebloxMaker2 from './assets/ShopPageImages/E-Blox maker - 2.jpg';
import ebloxMaker3 from './assets/ShopPageImages/E-Blox maker - 3.jpg';
import ebloxMaker4 from './assets/ShopPageImages/E-Blox maker - 4.jpg';

import RoboticArmKit from './assets/ShopPageImages/Robotic arm kit - 1.jpg';
import RoboticArmKit2 from './assets/ShopPageImages/Robotic arm kit - 2.jpg';
import RoboticArmKit3 from './assets/ShopPageImages/Robotic arm kit - 3.jpg';
import RoboticArmKit4 from './assets/ShopPageImages/Robotic arm kit - 4.jpg';

import pen1 from './assets/ShopPageImages/3D Pen - 1.jpg';
import pen2 from './assets/ShopPageImages/3D Pen - 2.jpg';
import pen3 from './assets/ShopPageImages/3D Pen - 3.jpg';
import pen4 from './assets/ShopPageImages/3D Pen - 4.jpg';

import TechBotElectronicsKit1 from './assets/ShopPageImages/TechBot Electronics - 1.jpg';
import TechBotElectronicsKit2 from './assets/ShopPageImages/TechBot Electronics - 2.jpg';
import TechBotElectronicsKit3 from './assets/ShopPageImages/TechBot Electronics - 3.jpg';
import TechBotElectronicsKit4 from './assets/ShopPageImages/TechBot Electronics - 4.jpg';

import TechBotArdiunoKit1 from './assets/ShopPageImages/TechBot Arduino - 1.jpg';
import TechBotArdiunoKit2 from './assets/ShopPageImages/TechBot Arduino - 2.jpg';
import TechBotArdiunoKit3 from './assets/ShopPageImages/TechBot Arduino - 3.jpg';
import TechBotArdiunoKit4 from './assets/ShopPageImages/TechBot Arduino - 4.jpg';

import TeBotChampKit1 from './assets/ShopPageImages/TeBoT Champ - 1.jpg';
import TeBotChampKit2 from './assets/ShopPageImages/TeBoT Champ - 2.jpg';
import TeBotChampKit3 from './assets/ShopPageImages/TeBoT Champ - 3.jpg';
import TeBotChampKit4 from './assets/ShopPageImages/TeBoT Champ - 4.jpg';

import TeBotBasicKit1 from './assets/ShopPageImages/TeBot Basic - 1.jpg';
import TeBotBasicKit2 from './assets/ShopPageImages/TeBot Basic - 2.jpg';
import TeBotBasicKit3 from './assets/ShopPageImages/TeBot Basic - 3.jpg';
import TeBotBasicKit4 from './assets/ShopPageImages/TeBot Basic - 4.jpg';

import TeBotAdvanceKit1 from './assets/ShopPageImages/TeBot Advance - 1.jpg';
import TeBotAdvanceKit2 from './assets/ShopPageImages/TeBot Advance - 2.jpg';
import TeBotAdvanceKit3 from './assets/ShopPageImages/TeBot Advance - 3.jpg';
import TeBotAdvanceKit4 from './assets/ShopPageImages/TeBot Advance - 4.jpg';

import IBotAdvanceKit1 from './assets/ShopPageImages/I-Bot advance - 1.jpg';
import IBotAdvanceKit2 from './assets/ShopPageImages/I-Bot advance - 2.jpg';
import IBotAdvanceKit3 from './assets/ShopPageImages/I-Bot advance - 3.jpg';
import IBotAdvanceKit4 from './assets/ShopPageImages/I-Bot advance - 4.jpg';

import IBotStarterKit1 from './assets/ShopPageImages/I-Bot Starter - 1.jpg';
import IBotStarterKit2 from './assets/ShopPageImages/I-Bot Starter - 2.jpg';
import IBotStarterKit3 from './assets/ShopPageImages/I-Bot Starter - 3.jpg';
import IBotStarterKit4 from './assets/ShopPageImages/I-Bot Starter - 4.jpg';

import humanoidKit1 from './assets/ShopPageImages/Humanoid Kit - 1.jpg';
import humanoidKit2 from './assets/ShopPageImages/Humanoid Kit - 2.jpg';
import humanoidKit3 from './assets/ShopPageImages/Humanoid Kit - 3.jpg';
import humanoidKit4 from './assets/ShopPageImages/Humanoid Kit - 4.jpg';

import ottoStarterKit1 from './assets/ShopPageImages/Otto starter - 1.jpg';
import ottoStarterKit2 from './assets/ShopPageImages/Otto starter - 2.jpg';
import ottoStarterKit3 from './assets/ShopPageImages/Otto starter - 3.jpg';
import ottoStarterKit4 from './assets/ShopPageImages/Otto starter - 4.jpg';

import ottoLeeKit1 from './assets/ShopPageImages/otto Lee - 1.jpg';
import ottoLeeKit2 from './assets/ShopPageImages/otto Lee - 2.jpg';
import ottoLeeKit3 from './assets/ShopPageImages/otto Lee - 3.jpg';
import ottoLeeKit4 from './assets/ShopPageImages/otto Lee - 4.jpg';

import ottoSpiderKit1 from './assets/ShopPageImages/Otto spider - 1.jpg';
import ottoSpiderKit2 from './assets/ShopPageImages/Otto spider - 2.jpg';
import ottoSpiderKit3 from './assets/ShopPageImages/Otto spider - 3.jpg';
import ottoSpiderKit4 from './assets/ShopPageImages/Otto spider - 4.jpg';

import roboChampCourse1 from './assets/ShopPageImages/coursesCategoryImages/Robo Champ Course-1.png';
import roboChampCourse2 from './assets/ShopPageImages/coursesCategoryImages/Robo Champ Course-2.png';
import roboChampCourse3 from './assets/ShopPageImages/coursesCategoryImages/Robo Champ Course-3.png';
import roboChampCourse4 from './assets/ShopPageImages/coursesCategoryImages/Robo Champ Course-4.png';

import pythonCodingCourse1 from './assets/ShopPageImages/coursesCategoryImages/Python Coding Course-1.png';
import pythonCodingCourse2 from './assets/ShopPageImages/coursesCategoryImages/Python Coding Course-2.png';
import pythonCodingCourse3 from './assets/ShopPageImages/coursesCategoryImages/Python Coding Course-3.png';
import pythonCodingCourse4 from './assets/ShopPageImages/coursesCategoryImages/Python Coding Course-4.png';

import graphicalCodingCourse1 from './assets/ShopPageImages/coursesCategoryImages/Graphical Coding Course-01.png';
import graphicalCodingCourse2 from './assets/ShopPageImages/coursesCategoryImages/Graphical Coding Course-02.png';
import graphicalCodingCourse3 from './assets/ShopPageImages/coursesCategoryImages/Graphical Coding Course-03.png';
import graphicalCodingCourse4 from './assets/ShopPageImages/coursesCategoryImages/Graphical Coding Course-04.png';

import webDevelopmentCourse1 from './assets/ShopPageImages/coursesCategoryImages/Web Development Course-01.png';
import webDevelopmentCourse2 from './assets/ShopPageImages/coursesCategoryImages/Web Development Course-02.png';
import webDevelopmentCourse3 from './assets/ShopPageImages/coursesCategoryImages/Web Development Course-03.png';
import webDevelopmentCourse4 from './assets/ShopPageImages/coursesCategoryImages/Web Development Course-04.png';

import appDevelopmentCourse1 from './assets/ShopPageImages/coursesCategoryImages/App Development Course-01.png';
import appDevelopmentCourse2 from './assets/ShopPageImages/coursesCategoryImages/App Development Course-02.png';
import appDevelopmentCourse3 from './assets/ShopPageImages/coursesCategoryImages/App Development Course-03.png';
import appDevelopmentCourse4 from './assets/ShopPageImages/coursesCategoryImages/App Development Course-04.png';

import internetOfThingsCourse1 from './assets/ShopPageImages/coursesCategoryImages/Internet of Things Course-01.png';
import internetOfThingsCourse2 from './assets/ShopPageImages/coursesCategoryImages/Internet of Things Course-02.png';
import internetOfThingsCourse3 from './assets/ShopPageImages/coursesCategoryImages/Internet of Things Course-03.png';
import internetOfThingsCourse4 from './assets/ShopPageImages/coursesCategoryImages/Internet of Things Course-04.png';

import artificialIntelligenceCourse1 from './assets/ShopPageImages/coursesCategoryImages/Artificial Intelligence Course-01.png';
import artificialIntelligenceCourse2 from './assets/ShopPageImages/coursesCategoryImages/Artificial Intelligence Course-02.png';
import artificialIntelligenceCourse3 from './assets/ShopPageImages/coursesCategoryImages/Artificial Intelligence Course-03.png';
import artificialIntelligenceCourse4 from './assets/ShopPageImages/coursesCategoryImages/Artificial Intelligence Course-04.png';

import stemBundleCourse1 from './assets/ShopPageImages/coursesCategoryImages/STEM Bundle Course-01.png';
import stemBundleCourse2 from './assets/ShopPageImages/coursesCategoryImages/STEM Bundle Course-02.png';
import stemBundleCourse3 from './assets/ShopPageImages/coursesCategoryImages/STEM Bundle Course-03.png';
import stemBundleCourse4 from './assets/ShopPageImages/coursesCategoryImages/STEM Bundle Course-04.png';



function ShopPage() {
    const location = useLocation();
    const products = [
        { id: 1, title: "Robotic Arm Kit", price: 3499, originalPrice: 4299, rating: 4.8, image: RoboticArmKit, description: "An  microcontroller receives control commands from the TechyGuide mobile application via Bluetooth. Each command controls one of the six servo motors, representing different joints of the robotic arm. Servo angles are adjusted incrementally to provide smooth and precise movements. Angle limits are applied to prevent over-rotation and mechanical damage. The system is suitable for pick-and-place tasks, robotics learning, and automation demonstrations.", features: ["This is a four degree of freedom robotic arm capable of picking and placing small objects."," ", "The robotic arm can fit on your table with middle-sized links."," ", "It helps to reach throughout the table and get hold of things without you to move."," ", "It provides with insights into a palletizing robotic manipulator through hands-on experience."," ", "Robotic arm teaches advanced robotics concepts like Motion Planning, Inverse Kinematics, etc."], images: [RoboticArmKit2, RoboticArmKit3, RoboticArmKit4] },
        { id: 2, title: "3D Pen", price: 899, originalPrice: 1299, rating: 4.9, category: "3D-Pen", image: pen1, description: "3D Pen is a 3D model printed using 3D printer used for educational purpose by students to design and create three-dimensional objects.", features: ["3D Pen is a 3D model printed using 3D printer used for educational purpose by students to design and create three-dimensional objects."], images: [pen2, pen3, pen4] },
        { id: 3, title: "TechBoT Electronics Kit", price: 1199, originalPrice: 1499, rating: 4.8, image: TechBotElectronicsKit1, description: "An  microcontroller receives control commands from the TechyGuide mobile application via Bluetooth. Each command controls one of the six servo motors, representing different joints of the robotic arm. Servo angles are adjusted incrementally to provide smooth and precise movements. Angle limits are applied to prevent over-rotation and mechanical damage. The system is suitable for pick-and-place tasks, robotics learning, and automation demonstrations.", features: ["This is a four degree of freedom robotic arm capable of picking and placing small objects."," ", "The robotic arm can fit on your table with middle-sized links."," ", "It helps to reach throughout the table and get hold of things without you to move."," ", "It provides with insights into a palletizing robotic manipulator through hands-on experience."," ", "Robotic arm teaches advanced robotics concepts like Motion Planning, Inverse Kinematics, etc."], images: [TechBotElectronicsKit2, TechBotElectronicsKit3, TechBotElectronicsKit4] },
        { id: 4, title: "TechBoT Arduino Kit", price: 2999, originalPrice: 3999, rating: 4.8, image: TechBotArdiunoKit1, description: "An  microcontroller receives control commands from the TechyGuide mobile application via Bluetooth. Each command controls one of the six servo motors, representing different joints of the robotic arm. Servo angles are adjusted incrementally to provide smooth and precise movements. Angle limits are applied to prevent over-rotation and mechanical damage. The system is suitable for pick-and-place tasks, robotics learning, and automation demonstrations.", features: ["This is a four degree of freedom robotic arm capable of picking and placing small objects."," ", "The robotic arm can fit on your table with middle-sized links."," ", "It helps to reach throughout the table and get hold of things without you to move."," ", "It provides with insights into a palletizing robotic manipulator through hands-on experience."," ", "Robotic arm teaches advanced robotics concepts like Motion Planning, Inverse Kinematics, etc."], images: [TechBotArdiunoKit2, TechBotArdiunoKit3, TechBotArdiunoKit4] },
        { id: 5, title: "TeBoT Champ Kit", price: 6499, originalPrice: 7999, rating: 4.8, image: TeBotChampKit1, description: "An  microcontroller receives control commands from the TechyGuide mobile application via Bluetooth. Each command controls one of the six servo motors, representing different joints of the robotic arm. Servo angles are adjusted incrementally to provide smooth and precise movements. Angle limits are applied to prevent over-rotation and mechanical damage. The system is suitable for pick-and-place tasks, robotics learning, and automation demonstrations.", features: ["This is a four degree of freedom robotic arm capable of picking and placing small objects."," ", "The robotic arm can fit on your table with middle-sized links."," ", "It helps to reach throughout the table and get hold of things without you to move."," ", "It provides with insights into a palletizing robotic manipulator through hands-on experience."," ", "Robotic arm teaches advanced robotics concepts like Motion Planning, Inverse Kinematics, etc."], images: [TeBotChampKit2, TeBotChampKit3, TeBotChampKit4] },
        { id: 6, title: "TeBoT Basic Kit", price: 4399, originalPrice: 5499, rating: 4.8, image: TeBotBasicKit1, description: "An  microcontroller receives control commands from the TechyGuide mobile application via Bluetooth. Each command controls one of the six servo motors, representing different joints of the robotic arm. Servo angles are adjusted incrementally to provide smooth and precise movements. Angle limits are applied to prevent over-rotation and mechanical damage. The system is suitable for pick-and-place tasks, robotics learning, and automation demonstrations.", features: ["This is a four degree of freedom robotic arm capable of picking and placing small objects."," ", "The robotic arm can fit on your table with middle-sized links."," ", "It helps to reach throughout the table and get hold of things without you to move."," ", "It provides with insights into a palletizing robotic manipulator through hands-on experience."," ", "Robotic arm teaches advanced robotics concepts like Motion Planning, Inverse Kinematics, etc."], images: [TeBotBasicKit2, TeBotBasicKit3, TeBotBasicKit4] },
        { id: 7, title: "TeBot Advance Kit", price: 23999, originalPrice: 29999, rating: 4.9, image: TeBotAdvanceKit1, description: "TeBot Advance Kit is an ultimate robotics learning solution designed for young innovators. It supports 50+ hands-on projects with structured course materials and integrates multiple sensors for real-world experimentation. The kit includes short-circuit protection and a 1-year manufacturing warranty on the microcontroller for safe and long-term classroom use.", features: ["☑ 50+ Robotics Projects", "☑ Multi-Sensor Integration", "☑ Inbuilt Sensors for Easy Handling", "☑ Short Circuit Protection", "☑ 1-Year Microcontroller Warranty", "☑ Reusable & Modular Components"], images: [TeBotAdvanceKit2, TeBotAdvanceKit3, TeBotAdvanceKit4] },
        { id: 8, title: "I-BoT Advance Kit", price: 6999, originalPrice: 8499, rating: 4.6, image: IBotAdvanceKit1, description: "I-BoT Advance Kit is a premium robotics platform supporting 100+ diverse projects. It integrates seamlessly with multiple sensors and is suitable for Robotics, IoT, and AI-based applications. Designed with advanced circuitry protection for reliable performance.", features: ["☑ 100+ Advanced Projects", "☑ AI & IoT Compatibility", "☑ Multi-Sensor Integration", "☑ Advanced Circuit Protection", "☑ Inbuilt Sensors", "☑ 1-Year Warranty"], images: [IBotAdvanceKit2, IBotAdvanceKit3, IBotAdvanceKit4] },
        { id: 9, title: "I-BoT Starter Kit", price: 3499, originalPrice: 4299, rating: 4.8, image: IBotStarterKit1, description: "I-BoT Starter Kit introduces students to robotics fundamentals through 20+ guided projects. It supports Robotics, IoT, and AI learning while offering modular configuration and easy sensor integration.", features: ["☑ 20+ Guided Projects", "☑ Modular Design", "☑ Sensor Integration", "☑ Short Circuit Protection", "☑ Beginner Friendly", "☑ Robotics, IoT & AI Support"], images: [IBotStarterKit2, IBotStarterKit3, IBotStarterKit4] },
        { id: 10, title: "E-Blox Starter Kit", price: 2499, originalPrice: 3499, rating: 4.5, image: ottoman1, description: "E-Blox Kit is a modular electronics learning kit that enables students to build practical projects like lamps and mini windmills. Designed with plug-and-play components and child-safe low voltage design.", features: ["☑ 20+ Electronics Projects", "☑ Plug & Play Components", "☑ Child-Safe Low Voltage", "☑ Modular Block Assembly", "☑ Renewable Energy Exploration"], images: [ottoman2, ottoman3, ottoman4] },
        { id: 11, title: "E-Blox Maker Kit", price: 2499, originalPrice: 3499, rating: 4.5, image: ebloxMaker1, description: "E-Blox Kit is a modular electronics learning kit that enables students to build practical projects like lamps and mini windmills. Designed with plug-and-play components and child-safe low voltage design.", features: ["☑ 20+ Electronics Projects", "☑ Plug & Play Components", "☑ Child-Safe Low Voltage", "☑ Modular Block Assembly", "☑ Renewable Energy Exploration"], images: [ebloxMaker2, ebloxMaker3, ebloxMaker4] },
        { id: 12, title: "Humanoid Kit", price: 899, originalPrice: 1299, rating: 4.9, category: "3D-Pen", image: humanoidKit1, description: "Humanoid Kit allows students to build a fully functional humanoid robot with Bluetooth and voice control capabilities. It supports AI integration and Google Assistant compatibility for advanced experimentation.", features: ["☑ Bluetooth Enabled", "☑ Voice Command Functionality", "☑ Google Assistant Compatible", "☑ Multi-Control Operation", "☑ AI-Based Robotics Platform"], images: [humanoidKit2, humanoidKit3, humanoidKit4] },
        { id: 13, title: "Otto Starter Kit", price: 1199, originalPrice: 1499, rating: 4.8, image: ottoStarterKit1, description: "Otto Starter Kit enables learners to assemble a mini humanoid robot capable of walking, dancing, and playing tunes. It includes guided learning materials and is ideal for beginners.", features: ["☑ Walking & Dancing Robot", "☑ Plays Music", "☑ Easy Assembly", "☑ Beginner Robotics Kit", "☑ Guided Learning Materials"], images: [ottoStarterKit2, ottoStarterKit3, ottoStarterKit4] },
        { id: 14, title: "Otto Lee Kit", price: 2999, originalPrice: 3999, rating: 4.8, image: ottoLeeKit1, description: "Otto Lee Kit is a Bluetooth-controlled humanoid robot supporting multiple configurations and dynamic movements. Designed for interactive and wireless robotics learning.", features: ["☑ Bluetooth Control", "☑ Multiple Configurations", "☑ Dynamic Robotic Movements", "☑ Wireless Operation", "☑ Educational Robotics Kit"], images: [ottoLeeKit2, ottoLeeKit3, ottoLeeKit4] },
        { id: 15, title: "Otto Spider Kit", price: 6499, originalPrice: 7999, rating: 4.8, image: ottoSpiderKit1, description: "Otto Spider Kit is a spider-inspired robot featuring 8 degrees of motion. It can perform push-ups, dance routines, and agile movements with Bluetooth control.", features: ["☑ 8 Degrees of Motion", "☑ Agile Robotic Design", "☑ Bluetooth Control", "☑ Compact Structure", "☑ Complete Learning Resources"], images: [ottoSpiderKit2, ottoSpiderKit3, ottoSpiderKit4] },
    ];

    const courses = [
        { id: 101, title: "Robo Champ Course", price: 14999, originalPrice: 19999, rating: 4.8, duration: "3 Months", level: "Beginner", mode: "Live + Recorded", image: roboChampCourse1, shortDescription: "Build strong robotics fundamentals and complete real-world robot challenges.", description: "Robo Champ Course introduces learners to robotics fundamentals through practical sessions, guided builds, and challenge-based learning. Students explore sensors, motion logic, and controller programming while creating functional robotic prototypes.", features: ["Robot assembly fundamentals", "Sensor and actuator integration", "Basic control programming", "Weekly practical challenges", "Mentor-led live sessions", "Mini project assessments"], outcomes: ["Build and test working robots", "Understand robotics workflow", "Apply logic in real scenarios", "Present a final robotics project"], certification: "Robo Champ Completion Certificate", images: [roboChampCourse2, roboChampCourse3, roboChampCourse4] },
        { id: 102, title: "Python Coding Course", price: 12999, originalPrice: 16999, rating: 4.7, duration: "2.5 Months", level: "Intermediate", mode: "Live + LMS Access", image: pythonCodingCourse1, shortDescription: "Learn Python from basics to real application projects with mentor support.", description: "Python Coding Course helps learners progress from syntax basics to structured programming and practical problem-solving. Students work on functions, loops, data structures, and simple automation use-cases with hands-on coding tasks.", features: ["Python syntax and fundamentals", "Lists, dictionaries, and functions", "File handling basics", "Problem-solving exercises", "Project-based coding practice", "LMS resources and quizzes"], outcomes: ["Write clean Python programs", "Solve logic-based tasks", "Build simple automation scripts", "Create beginner Python projects"], certification: "Python Coding Certificate", images: [pythonCodingCourse2, pythonCodingCourse3, pythonCodingCourse4] },
        { id: 103, title: "Graphical Coding Course", price: 9999, originalPrice: 13999, rating: 4.6, duration: "2 Months", level: "Beginner to Intermediate", mode: "Hybrid", image: graphicalCodingCourse1, shortDescription: "Learn coding logic visually using drag-and-drop programming blocks.", description: "Graphical Coding Course teaches computational thinking using visual coding platforms. Learners create animations, games, and logic workflows with block-based coding before transitioning to text-based programming concepts.", features: ["Block-based coding interface", "Logic and sequence building", "Conditionals and loops", "Animation and game mini projects", "Debugging through visual flow", "Guided coding missions"], outcomes: ["Understand programming logic", "Build interactive visual projects", "Improve algorithmic thinking", "Transition confidently to text coding"], certification: "Graphical Coding Certificate", images: [graphicalCodingCourse2, graphicalCodingCourse3, graphicalCodingCourse4] },
        { id: 104, title: "Web Development Course", price: 19999, originalPrice: 25999, rating: 4.9, duration: "4 Months", level: "Advanced", mode: "Live Interactive", image: webDevelopmentCourse1, shortDescription: "Create responsive websites using modern frontend development tools.", description: "Web Development Course covers frontend development from structure to deployment. Learners build responsive websites with HTML, CSS, and JavaScript, then create multi-page projects and deploy them with best-practice workflows.", features: ["HTML and semantic structure", "Modern CSS and responsive layout", "JavaScript DOM and events", "Component-based UI approach", "Website optimization basics", "Capstone web project"], outcomes: ["Build production-ready webpages", "Create responsive UI layouts", "Implement interactive features", "Deploy a complete web project"], certification: "Web Development Certificate", images: [webDevelopmentCourse2, webDevelopmentCourse3, webDevelopmentCourse4] },
        { id: 105, title: "App Development Course", price: 7999, originalPrice: 11999, rating: 4.5, duration: "2 Months", level: "Beginner", mode: "Online + Assignments", image: appDevelopmentCourse1, shortDescription: "Design and build beginner mobile apps with practical UI and logic modules.", description: "App Development Course introduces mobile application concepts including screen flow, user interface design, and app logic implementation. Learners build simple functional apps and test them through guided assignments.", features: ["Mobile app basics", "UI flow and navigation", "Input handling and validation", "Simple data management", "Assignment-driven development", "Mini app publishing guidance"], outcomes: ["Build basic mobile apps", "Design user-friendly interfaces", "Implement core app logic", "Showcase a final app prototype"], certification: "App Development Certificate", images: [appDevelopmentCourse2, appDevelopmentCourse3, appDevelopmentCourse4] },
        { id: 106, title: "Internet of Things Course", price: 17999, originalPrice: 23999, rating: 4.8, duration: "3 Months", level: "All Levels", mode: "Live + Project Based", image: internetOfThingsCourse1, shortDescription: "Build smart connected systems using sensors, controllers, and cloud connectivity.", description: "Internet of Things Course helps learners create connected devices using sensors, microcontrollers, and cloud dashboards. Students build real-time monitoring and automation projects while understanding IoT architecture and data flow.", features: ["IoT architecture fundamentals", "Sensor and microcontroller setup", "Wireless communication basics", "Cloud dashboard integration", "Smart automation projects", "Real-time data monitoring"], outcomes: ["Build connected IoT prototypes", "Collect and visualize sensor data", "Understand device-cloud communication", "Implement smart system automation"], certification: "IoT Practitioner Certificate", images: [internetOfThingsCourse2, internetOfThingsCourse3, internetOfThingsCourse4] },
        { id: 107, title: "Artificial Intelligence Course", price: 18999, originalPrice: 24999, rating: 4.9, duration: "3.5 Months", level: "Intermediate", mode: "Live + Recorded", image: artificialIntelligenceCourse1, shortDescription: "Learn AI concepts and build intelligent models with practical projects.", description: "Artificial Intelligence Course introduces key AI concepts including machine learning workflows, model training, and basic computer vision. Learners complete guided projects to understand how intelligent systems are built and evaluated.", features: ["AI and ML foundations", "Dataset preparation basics", "Model training workflow", "Prediction and evaluation", "Intro to computer vision", "Mentor-guided AI projects"], outcomes: ["Build beginner AI models", "Understand end-to-end AI pipeline", "Interpret model results", "Create an AI project portfolio"], certification: "Artificial Intelligence Certificate", images: [artificialIntelligenceCourse2, artificialIntelligenceCourse3, artificialIntelligenceCourse4] },
        { id: 108, title: "STEM Bundle Course", price: 20999, originalPrice: 27999, rating: 4.8, duration: "4 Months", level: "All Levels", mode: "Live + Project Based", image: stemBundleCourse1, shortDescription: "An integrated STEM journey across robotics, coding, AI, and IoT domains.", description: "STEM Bundle Course combines multiple technology tracks into one structured path. Learners explore robotics, coding, AI, and IoT through project-based modules, interdisciplinary challenges, and a final capstone presentation.", features: ["Robotics + coding modules", "AI and IoT fundamentals", "Hands-on STEM experiments", "Design thinking activities", "Cross-domain capstone project", "Periodic skill assessments"], outcomes: ["Build multidisciplinary STEM projects", "Strengthen analytical and creative thinking", "Apply concepts across domains", "Present a complete capstone solution"], certification: "STEM Bundle Completion Certificate", images: [stemBundleCourse2, stemBundleCourse3, stemBundleCourse4] }
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
        const params = new URLSearchParams(location.search);
        const category = params.get('category');
        if (category === 'Courses') {
            setCurrentCategory('Courses');
        }
    }, [location.search]);

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
        const course = courses.find(c => c.id === id);
        const item = product || course;
        const existing = cart.find(c => c.id === id);
        if (existing) {
            updateItemQty(id, 1);
        } else {
            setCart(prev => [...prev, { ...item, quantity: 1 }]);
        }
    };

    const handleQtyChange = (id, change) => {
        updateItemQty(id, change);
    };

    const handleBuyNow = (id) => {
        const product = products.find(p => p.id === id);
        const course = courses.find(c => c.id === id);
        const item = product || course;
        const existing = cart.find(c => c.id === id);
        
        if (!existing) {
            const updatedCart = [...cart, { ...item, quantity: 1 }];
            setCart(updatedCart);
            localStorage.setItem('techyCart', JSON.stringify(updatedCart));
        }
        
        closeModal();
        setCurrentCourse(null);
        setTimeout(() => {
            navigate('/checkout');
        }, 100);
    };

    const handleGoToCart = () => {
        closeModal();
        setCurrentCourse(null);
        setIsCartOpen(true);
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
    const cartItemInCourseModal = currentCourse ? cart.find(c => c.id === currentCourse.id) : null;

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
                                    <div className="card-img-box course-card-image">
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
                            <div className="course-modal-left">
                                <div className="course-slider-container">
                                    <button className="course-slider-btn course-prev-btn" onClick={() => setCurrentSliderIndex((prev) => (prev - 1 + currentCourse.images.length) % currentCourse.images.length)}>&#10094;</button>
                                    
                                    <div className="course-main-image-container course-slider-image">
                                        {currentCourse.images && currentCourse.images.map((url, index) => (
                                            <img
                                                key={index}
                                                src={url}
                                                alt={`${currentCourse.title} - Image ${index + 1}`}
                                                className={currentSliderIndex === index ? '' : 'hidden'}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                        ))}
                                    </div>

                                    <button className="course-slider-btn course-next-btn" onClick={() => setCurrentSliderIndex((prev) => (prev + 1) % currentCourse.images.length)}>&#10095;</button>
                                </div>
                                <div className="course-slider-dots">
                                    {currentCourse.images && currentCourse.images.map((_, index) => (
                                        <span
                                            key={index}
                                            className={`course-dot ${currentSliderIndex === index ? 'active' : ''}`}
                                            onClick={() => setCurrentSliderIndex(index)}
                                        ></span>
                                    ))}
                                </div>
                            </div>

                            <div className="course-modal-right">
                                <div className="course-header">
                                    <h1 className="course-title">{currentCourse.title}</h1>
                                    <div className="course-meta">
                                        <span className="course-rating-badge">★ <span>{currentCourse.rating}</span></span>
                                        <span className="course-review-count">124 Reviews</span>
                                    </div>
                                </div>

                                <div className="course-info-badges">
                                    <span className="course-info-badge course-info-duration">Duration: {currentCourse.duration}</span>
                                    <span className="course-info-badge course-info-level">Level: {currentCourse.level}</span>
                                    <span className="course-info-badge course-info-mode">Mode: {currentCourse.mode}</span>
                                </div>

                                <div className="course-price-block">
                                    <span className="course-price">{formatPrice(currentCourse.price)}</span>
                                    {currentCourse.originalPrice && (
                                        <div className="course-discount-block">
                                            <span className="course-original-price">{formatPrice(currentCourse.originalPrice)}</span>
                                            <span className="course-discount-tag">{Math.round((1 - currentCourse.price/currentCourse.originalPrice) * 100)}% Off</span>
                                        </div>
                                    )}
                                </div>

                                <div className="course-tabs-nav">
                                    <button className={`course-tab-btn ${activeTab === 'features' ? 'active' : ''}`} onClick={() => setActiveTab('features')}>Features</button>
                                    <button className={`course-tab-btn ${activeTab === 'description' ? 'active' : ''}`} onClick={() => setActiveTab('description')}>Description</button>
                                </div>

                                <div className="course-tab-container scrollable-content">
                                    <div className={`course-tab-content ${activeTab === 'features' ? 'active' : ''}`}>
                                        {currentCourse.features && currentCourse.features.length > 0 && (
                                            <div>
                                                <h4>Key Features</h4>
                                                <ul className="course-features-list">
                                                    {currentCourse.features.map((feature, i) => (
                                                        <li key={i}>{feature}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        {currentCourse.outcomes && currentCourse.outcomes.length > 0 && (
                                            <div>
                                                <h4>Learning Outcomes</h4>
                                                <ul className="course-outcomes-list">
                                                    {currentCourse.outcomes.map((outcome, idx) => (
                                                        <li key={idx}>{outcome}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        {currentCourse.certification && (
                                            <div>
                                                <h4>Certification</h4>
                                                <p className="course-certification-text">{currentCourse.certification}</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className={`course-tab-content ${activeTab === 'description' ? 'active' : ''}`}>
                                        <p className="course-description-text">{currentCourse.description}</p>
                                    </div>
                                </div>

                                <div className="course-modal-actions-desktop">
                                    <div style={{flex: 1}}>
                                        {cartItemInCourseModal ? (
                                            <div className="qty-controller">
                                                <button className="qty-btn" onClick={() => handleQtyChange(currentCourse.id, -1)}>−</button>
                                                <span className="qty-val">{cartItemInCourseModal.quantity}</span>
                                                <button className="qty-btn" onClick={() => handleQtyChange(currentCourse.id, 1)}>+</button>
                                            </div>
                                        ) : (
                                            <button className="action-btn btn-cart" onClick={() => handleAddClick(currentCourse.id)}>ADD TO CART</button>
                                        )}
                                    </div>
                                    <button
                                        className="btn-buy action-btn"
                                        onClick={() => (cartItemInCourseModal ? handleGoToCart() : handleBuyNow(currentCourse.id))}
                                    >
                                        {cartItemInCourseModal ? 'Go to Cart' : 'Buy Now'}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="course-mobile-bottom-actions">
                            <div style={{flex: 1}}>
                                {cartItemInCourseModal ? (
                                    <div className="qty-controller">
                                        <button className="qty-btn" onClick={() => handleQtyChange(currentCourse.id, -1)}>−</button>
                                        <span className="qty-val">{cartItemInCourseModal.quantity}</span>
                                        <button className="qty-btn" onClick={() => handleQtyChange(currentCourse.id, 1)}>+</button>
                                    </div>
                                ) : (
                                    <button className="action-btn btn-cart" onClick={() => handleAddClick(currentCourse.id)}>ADD TO CART</button>
                                )}
                            </div>
                            <button
                                className="btn-buy action-btn"
                                onClick={() => (cartItemInCourseModal ? handleGoToCart() : handleBuyNow(currentCourse.id))}
                            >
                                {cartItemInCourseModal ? 'Go to Cart' : 'Buy Now'}
                            </button>
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
                                    <button
                                        className="btn-buy action-btn"
                                        onClick={() => (cartItemInModal ? handleGoToCart() : handleBuyNow(currentProduct.id))}
                                    >
                                        {cartItemInModal ? 'Go to Cart' : 'Buy Now'}
                                    </button>
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
                            <button
                                className="btn-buy action-btn"
                                onClick={() => (cartItemInModal ? handleGoToCart() : handleBuyNow(currentProduct.id))}
                            >
                                {cartItemInModal ? 'Go to Cart' : 'Buy Now'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ShopPage;