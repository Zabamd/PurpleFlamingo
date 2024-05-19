import { useNavigate } from "react-router-dom";
import "./ActionBox.scss";

const ActionBox = ({ actionId, title, image, currentAmount, goal }) => {
  const navigate = useNavigate();

  const openAction = () => {
    navigate(`/action/${actionId}`);
  };
  return (
    <div className="actionBox" onClick={openAction}>
      <img src={image} alt={title} className="actionBoxImage" />
      <div className="actionBoxContent">
        <h3 className="actionBoxTitle">{title}</h3>
        <p className="actionBoxAmount">Current Amount: ${currentAmount}</p>
        <p className="actionBoxGoal">Goal: ${goal}</p>
      </div>
    </div>
  );
};

export default ActionBox;
