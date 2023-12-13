import Navbar from "../components/navbar/navbar";
import LandingImageSection from "../components/LandingImageSection/LandingImageSection";
import OurGoalsSection from "../components/OurGoalsSection/OurGoalsSection";
import "../style/LandingPage.scss";
import ContactUsSection from "../components/ContactUsSection/ContactUsSection";
import FeaturedProjects from "../components/FeaturedProjectsSection/FeaturedProjects";

const LandingPage = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="LandingPageMain">
        <LandingImageSection />
        <OurGoalsSection />
        <FeaturedProjects />
        <ContactUsSection />
      </main>
    </>
  );
};

export default LandingPage;
