import Navbar from "../components/navbar/navbar.jsx";
import Footer from "../components/footer/footer.jsx";
import LoginForm from "../components/pageSections/LoginForm/LoginForm.jsx";
import "../style/page.scss";

const Login = () => {
  return (
    <>
      <Navbar />
      <main className="pageDefault">
        <LoginForm />
      </main>
      <Footer />
    </>
  );
};

export default Login;
