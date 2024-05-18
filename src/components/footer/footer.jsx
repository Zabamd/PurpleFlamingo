import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  const routes = [
    { name: "Sign up", path: "/signup" },
    { name: "Log in", path: "/login" },
    { name: "Discover", path: "/discover" },
    { name: "Home", path: "/" },
  ];
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
