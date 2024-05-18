import Navbar from "../components/navbar/navbar.jsx";
import Footer from "../components/footer/footer.jsx";
import "../style/page.scss";

const UserProfile = () => {
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

export default UserProfile;
