import "./LandingImageSection.scss";
import LandingImage from "../../assets/images/landingPage.svg";
import { useNavigate } from "react-router-dom";

const LandingImageSection = () => {
  const navigation = useNavigate();
  const changeRoute = () => {
    navigation("/discover");
  };

  return (
    <section className="landingPageImage">
      <img
        className="imageWrapper"
        alt="A man standing to the left of large screen with data columns on it."
        src={LandingImage}
      />
      <div className="infoWrapper">
        <button onClick={changeRoute} className="landingImageButton">
          Start Your Dream Today
        </button>
        <p className="landingImageText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  );
};

export default LandingImageSection;
