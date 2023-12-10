import NavButton from "./nav-button/nav-button";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavButton path="/discover" text="Discover" />
          </li>
          <li>
            <NavButton path="/login"  text="Log in" />
          </li>
          <li>
            <NavButton path="/signup" text="Sign up"  />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
