import { useContext } from 'react';
import Navbar from "../components/navbar/navbar.jsx";
import Footer from "../components/footer/footer.jsx";
import LoginForm from "../components/pageSections/LoginForm/LoginForm.jsx";
import { UserContext } from "../context/UserContext";
import "../style/page.scss";

const Login = () => {
  const { setUser } = useContext(UserContext);

  return (
    <>
      <Navbar />
      <main className="pageDefault">
        <LoginForm setUser={setUser} />
      </main>
      <Footer />
    </>
  );
};

export default Login;
