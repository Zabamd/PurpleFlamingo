import NavButton from "./nav-button/nav-button";
import "./navbar.scss";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <ul className="list">
          <li className="pageLogo">
            <div className="wrapper">PurpleFlamingo</div>
          </li>
          <li className="element">
            <NavButton path="/discover" text="Discover" />
          </li>
          <li className="element">
            <NavButton path="/login" text="Log in" />
          </li>
          <li className="element">
            <NavButton path="/signup" text="Sign up" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
