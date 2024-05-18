import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer.jsx";
import LandingImageSection from "../components/pageSections/LandingImageSection/LandingImageSection";
import OurGoalsSection from "../components/pageSections/OurGoalsSection/OurGoalsSection";
import ContactUsSection from "../components/pageSections/ContactUsSection/ContactUsSection";
import FeaturedProjects from "../components/pageSections/FeaturedProjectsSection/FeaturedProjects";
import "../style/page.scss";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <main className="pageDefault">
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
