import { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
//import reactLogo from './assets/react.svg'
import viteLogo from '/TG-Square-Logo 3.png'
//import './App.css'
import Header from './Header.jsx'
import HeroSection from './HeroSection'
import ImpactProgram from './ImpactProgram.jsx'
import IBoT from './productPages/I-BoT.jsx'
import FranchisePage from './FranchisePage.jsx'
import AboutSection from './AboutSection'
import ShopSection from './ShopSection'
import SchoolSection from './SchoolSection'
import CollaborationSection from './CollaborationSection'
import FranchiseSection from './FranchiseSection'
import RobothroneSection from './RobothroneSection.jsx'
import RobothronePage from './RobothronePage.jsx'
import GallerySection from './GallerySection.jsx'
import CommunitySection from './CommunitySection.jsx'
import FooterSection from './FooterSection.jsx'
import WhatsAppButton from './WhatsAppButton.jsx'
//import SocialMediaIcons from './SocialMediaIcons.jsx'
import AIRoboticsLabCBSE from './ForschoolsPages/AI-RoboticLabCBSE.jsx'
import AIRoboticLabICSE from './ForschoolsPages/AI-RoboticLabICSE.jsx'
import StemTinkeringLab from './ForschoolsPages/StemTinkeringLab.jsx'
import StemLab from './ForschoolsPages/StemLab.jsx'
import CompositeSkillLab from './ForschoolsPages/CompositeSkillLab.jsx'
import WorkshopPage from './ForschoolsPages/WorkshopPage.jsx'
import CoursesPage from './coursesPage.jsx'
import ShopPage from './ShopPage.jsx'
import CheckOutPage from './CheckOutPage.jsx'
import PrivacyPolicyPage from './privacyPolicypage.jsx'
import TeBoT from './productPages/TeBoT.jsx'
import EBlox from './productPages/E-Blox.jsx'
import EAddOnKit from './productPages/AddOnKit.jsx'
// import OpenResources from './OpenResources.jsx' // Commented out - Coming Soon
import AboutUsPage from './AboutUsPage.jsx'
import PartnersPage from './partnersPage.jsx'
import ContactUs from './contactUs.jsx'
import CareersPage from './CareersPage.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

function App() {
  const [count, setCount] = useState(0)

 return (
  <>
    <ScrollToTop />
    {/* <SocialMediaIcons /> */}
    <Header/>
    <Routes>
      <Route path="/" element={<Navigate to="/ai-robotics-stem-education-india" replace />} />
      <Route path="/ai-robotics-stem-education-india" element={<HomePage />} />
      <Route path="/government-csr-stem-robotics-education-initiatives" element={<ImpactProgram />} />
      <Route path="/impact-program" element={<Navigate to="/government-csr-stem-robotics-education-initiatives" replace />} />
      <Route path="/i-bot-iot-robotics-kit-for-students/" element={<IBoTPage />} />
      <Route path="/ibot" element={<Navigate to="/i-bot-iot-robotics-kit-for-students/" replace />} />
      <Route path="/i-bot" element={<Navigate to="/i-bot-iot-robotics-kit-for-students/" replace />} />
      <Route path="/tebot-robotics-kit-for-schools" element={<TeBoTPage />} />
      <Route path="/tebot" element={<Navigate to="/tebot-robotics-kit-for-schools" replace />} />
      <Route path="/e-blox-modular-electronics-kit-for-kids/" element={<EBloxPage />} />
      <Route path="/e-blox" element={<Navigate to="/e-blox-modular-electronics-kit-for-kids/" replace />} />
      <Route path="/add-on-robotics-kits-for-students" element={<EAddOnKitPage />} />
      <Route path="/add-on-kits" element={<Navigate to="/add-on-robotics-kits-for-students" replace />} />
      <Route path="/robothrone" element={<RobothronePageWrapper />} />
      <Route path="/cbse-ai-robotics-lab-setup-nep-2020" element={<AIRoboticsLabCBSEPage />} />
      <Route path="/ai-roboticslab-cbse" element={<Navigate to="/cbse-ai-robotics-lab-setup-nep-2020" replace />} />
      <Route path="/ai-robotics-lab-icse-schools-india" element={<AIRoboticLabICSEPage />} />
      <Route path="/ai-roboticslab-icse" element={<Navigate to="/ai-robotics-lab-icse-schools-india" replace />} />
      <Route path="/stem-labs-for-schools" element={<StemLabPage />} />
      <Route path="/schools/stem-lab" element={<Navigate to="/stem-labs-for-schools" replace />} />
      <Route path="/stem-tinkering-lab-for-schools-india" element={<StemTinkeringLabPage />} />
      <Route path="/schools/stem-tinkering-lab" element={<Navigate to="/stem-tinkering-lab-for-schools-india" replace />} />
      <Route path="/cbse-composite-skill-lab-setup-for-schools-india" element={<CompositeSkillLabPage />} />
      <Route path="/schools/composite-skill-lab" element={<Navigate to="/cbse-composite-skill-lab-setup-for-schools-india" replace />} />
      <Route path="/stem-robotics-workshops-for-schools-india" element={<WorkshopPageWrapper />} />
      <Route path="/schools/workshop" element={<Navigate to="/stem-robotics-workshops-for-schools-india" replace />} />
      <Route path="/robotics-coding-franchise-india" element={<FranchisePageWrapper />} />
      <Route path="/franchise" element={<Navigate to="/robotics-coding-franchise-india" replace />} />
      <Route path="/courses" element={<CoursesPageWrapper />} />
      <Route path="/shop" element={<ShopPageWrapper />} />
      <Route path="/checkout" element={<CheckOutPage />} />
      {/* <Route path="/open-learning-library-stem-resources" element={<OpenResourcesWrapper />} /> */}
      {/* <Route path="/open-resources" element={<Navigate to="/open-learning-library-stem-resources" replace />} /> */}
      {/* OpenResources routes commented out -this page is Coming Soon */}
      <Route path="/about-techyguide" element={<AboutUsPageWrapper />} />
      <Route path="/about-us" element={<Navigate to="/about-techyguide" replace />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPageWrapper />} />
      <Route path="/techyguide-partners-stem-education-india" element={<PartnersPageWrapper />} />
      <Route path="/partners" element={<Navigate to="/techyguide-partners-stem-education-india" replace />} />
      <Route path="/contact-techyguide/" element={<ContactUsPageWrapper />} />
      <Route path="/contact-us" element={<Navigate to="/contact-techyguide/" replace />} />
      <Route path="/careers-techyguide-stem-education-jobs" element={<CareersPageWrapper />} />
      <Route path="/careers" element={<Navigate to="/careers-techyguide-stem-education-jobs" replace />} />
    </Routes>
    <WhatsAppButton/>
  </>
)
}

function HomePage() {
  useEffect(() => {
    // Set page title
    document.title = 'AI Robotics STEM Education India | Labs, Kits & Courses';

    // Set or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore AI, Robotics & STEM education in India with TechyGuide. Build innovation labs, DIY kits, workshops & courses for schools and students.');
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', 'Explore AI, Robotics & STEM education in India with TechyGuide. Build innovation labs, DIY kits, workshops & courses for schools and students.');
      document.head.appendChild(metaDescription);
    }

    // Add or update canonical tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', 'https://techyguide.com/ai-robotics-stem-education-india');
      document.head.appendChild(canonicalLink);
    }
  }, []);

  return (
    <>
    <HeroSection/>
    <AboutSection/>
    <ShopSection/>
    <SchoolSection/>
    <CollaborationSection/>
    <FranchiseSection/>
    <RobothroneSection/>
    <GallerySection/>
    <CommunitySection/>
    <FooterSection/>
    </>
  )
}

function IBoTPage() {
  return (
    <>
      <IBoT />
      <FooterSection />
    </>
  );
}

function TeBoTPage() {
  return (
    <>
      <TeBoT />
      <FooterSection />
    </>
  );
}

function EBloxPage() {
  return (
    <>
      <EBlox />
      <FooterSection />
    </>
  );
}

function FranchisePageWrapper() {
  return (
    <>
      <FranchisePage />
      <FooterSection />
    </>
  );
}

function AIRoboticsLabCBSEPage() {
  return (
    <>
      <AIRoboticsLabCBSE />
      <FooterSection />
    </>
  );
}

function AIRoboticLabICSEPage() {
  return (
    <>
      <AIRoboticLabICSE />
      <FooterSection />
    </>
  );
}

function StemTinkeringLabPage() {
  return (
    <>
      <StemTinkeringLab />
      <FooterSection />
    </>
  );
}

function StemLabPage() {
  return (
    <>
      <StemLab />
      <FooterSection />
    </>
  );
}

function CompositeSkillLabPage() {
  return (
    <>
      <CompositeSkillLab />
      <FooterSection />
    </>
  );
}

function WorkshopPageWrapper() {
  return (
    <>
      <WorkshopPage />
      <FooterSection />
    </>
  );
}

function CoursesPageWrapper() {
  return (
    <>
      <CoursesPage />
      <FooterSection />
    </>
  );
}

function ShopPageWrapper() {
  return (
    <>
      <ShopPage />
      <FooterSection />
    </>
  );
}

function PrivacyPolicyPageWrapper() {
  return (
    <>
      <PrivacyPolicyPage />
      <FooterSection />
    </>
  );
}

function EAddOnKitPage() {
  return (
    <>
      <EAddOnKit />
      <FooterSection />
    </>
  );
}

function RobothronePageWrapper() {
  return (
    <>
      <RobothronePage />
      <FooterSection />
    </>
  );
}

// OpenResourcesWrapper commented out - Coming Soon
// function OpenResourcesWrapper() {
//   return (
//     <>
//       <OpenResources />
//       <FooterSection />
//     </>
//   );
// }

function AboutUsPageWrapper() {
  return (
    <>
      <AboutUsPage />
      <FooterSection />
    </>
  );
}

function PartnersPageWrapper() {
  return (
    <>
      <PartnersPage />
      <FooterSection />
    </>
  );
}

function ContactUsPageWrapper() {
  return (
    <>
      <ContactUs />
      <FooterSection />
    </>
  );
}

function CareersPageWrapper() {
  return (
    <>
      <CareersPage />
      <FooterSection />
    </>
  );
}

export default App
