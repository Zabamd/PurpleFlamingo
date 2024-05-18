import NavButton from "./nav-button/nav-button";
import "./navbar.scss";
import routes from "../../utilities/_routes";
const Navbar = () => {
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
          <li className="elementMobile">
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
