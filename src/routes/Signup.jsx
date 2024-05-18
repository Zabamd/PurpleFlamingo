import Navbar from "../components/navbar/navbar.jsx";
import Footer from "../components/footer/footer.jsx";
import SignupForm from "../components/pageSections/SignupForm/SignupForm.jsx";
import "../style/page.scss";

const Signup = () => {
  return (
    <>
      <Navbar />
      <main className="pageDefault">
        <SignupForm />
      </main>
      <Footer />
    </>
  );
};

export default Signup;
