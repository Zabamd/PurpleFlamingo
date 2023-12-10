import NavButton from "./nav-button/nav-button";

const Navbar = () => {
  return (
    <>
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
    </>
  );
};

export default Navbar;
