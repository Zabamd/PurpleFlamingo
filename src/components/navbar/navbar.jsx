import NavButton from "./nav-button/nav-button";
import "./navbar.scss";
import { RoutesContext } from "../../context/RoutesContext";
import { useContext } from "react";

const Navbar = () => {
  const routes = useContext(RoutesContext);
  const location = window.location.pathname;
  return (
    <header>
      <nav className="navbar">
        <ul className="list">
          <li className="pageLogo">
            <div className="wrapper">PurpleFlamingo</div>
          </li>
          {routes.map((route, id) => {
            if (location !== route.path) {
              return (
                <li className="elementDesktop" key={id}>
                  <NavButton path={route.path} text={route.name} />
                </li>
              );
            }
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
