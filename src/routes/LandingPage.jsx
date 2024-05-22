import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer.jsx";
import LandingImageSection from "../components/pageSections/LandingImageSection/LandingImageSection";
import OurGoalsSection from "../components/pageSections/OurGoalsSection/OurGoalsSection";
import ContactUsSection from "../components/pageSections/ContactUsSection/ContactUsSection";
import HighlightSection from "../components/pageSections/HighlightSection/HighlightSection.js";
import "../style/page.scss";
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <main className="pageDefault">
        <LandingImageSection />
        <OurGoalsSection />
        <HighlightSection />
        <ContactUsSection />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
