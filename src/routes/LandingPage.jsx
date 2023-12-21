import Navbar from "../components/navbar/navbar";
import LandingImageSection from "../components/pageSections/LandingImageSection/LandingImageSection";
import OurGoalsSection from "../components/pageSections/OurGoalsSection/OurGoalsSection";
import "../style/LandingPage.scss";
import ContactUsSection from "../components/pageSections/ContactUsSection/ContactUsSection";
import FeaturedProjects from "../components/pageSections/FeaturedProjectsSection/FeaturedProjects";
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
