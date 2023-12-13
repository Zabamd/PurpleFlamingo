import "./OurGoalsSection.scss";
import { useNavigate } from "react-router-dom";

const OurGoalsSection = () => {
  const navigation = useNavigate();
  const changeRoute = () => {
    navigation("/discover");
  };

  return (
    <section className="ourGoalsSection">
      <div className="AboutUs">
        <h3>
          Help People
          <br /> Achive their dreams
        </h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <button onClick="#contact">Contact US</button>
      </div>
      <div className="OurGoals">
        <div className="goalsWrapper">
          <ul>
            <li>Goal_1</li>
            <li>Goal_2</li>
            <li>Goal_3</li>
          </ul>
          <ul>
            <li>Goal_4</li>
            <li>Goal_5</li>
            <li>Goal_8</li>
          </ul>
        </div>
        <button onClick={changeRoute}>Discover projects</button>
      </div>
    </section>
  );
};

export default OurGoalsSection;
