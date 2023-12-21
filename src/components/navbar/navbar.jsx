import NavButton from "./nav-button/nav-button";
import Hamburger from "./hamburger/hamburger.jsx";
import "./navbar.scss";

const Navbar = () => {
  const location = window.location.pathname;
  const routes = [
    { name: "Sign up", path: "/signup" },
    { name: "Log in", path: "/login" },
    { name: "Discover", path: "/discover" },
    { name: "Home", path: "/" },
  ];

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
            <Hamburger routes={routes} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
