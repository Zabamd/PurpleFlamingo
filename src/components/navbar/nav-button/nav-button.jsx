import { useNavigate } from "react-router-dom";
import "./nav-button.scss";

const NavButton = ({ icon = null, path, text }) => {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate(path);
  };

  return (
    <button className="nav-button" onClick={routeChange}>
      {icon && <div className="icon_container">props.icon</div>}
      {text}
    </button>
  );
};
export default NavButton;
