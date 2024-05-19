import { Link } from "react-router-dom";
import "./footer.scss";
import { RoutesContext } from "../../context/RoutesContext";
import { useContext } from "react";

const Footer = () => {
  const routes = useContext(RoutesContext);

  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerNav">
          {routes.map((route, id) => (
            <Link key={id} to={route.path} className="footerLink">
              {route.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
