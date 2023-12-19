import Navbar from "../components/navbar/navbar";
import LandingImageSection from "../components/LandingImageSection/LandingImageSection";
import OurGoalsSection from "../components/OurGoalsSection/OurGoalsSection";
import "../style/LandingPage.scss";
import ContactUsSection from "../components/ContactUsSection/ContactUsSection";
import FeaturedProjects from "../components/FeaturedProjectsSection/FeaturedProjects";
import Footer from "../components/footer/footer.jsx";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <main className="LandingPageMain">
        <LandingImageSection />
        <OurGoalsSection />
        <FeaturedProjects />
        <ContactUsSection />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
