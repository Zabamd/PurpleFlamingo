import { Link } from "react-router-dom";
import "./nav-button.scss";

const NavButton = ({ path, text }) => {
  return (
    <Link className="nav-button" to={path}>
      {text}
    </Link>
  );
};
export default NavButton;
