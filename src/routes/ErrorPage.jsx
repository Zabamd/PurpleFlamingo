import Navbar from "../components/navbar/navbar.jsx";
import Footer from "../components/footer/footer.jsx";
import "../style/ErrorPage.scss";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <main className="ErrorPageMain">
        <div className="errorContainer">
          <h1 className="errorCode">404</h1>
          <h2 className="errorMessage">Page Not Found</h2>
          <p className="errorDescription">
            Sorry, the page you are looking for does not exist.
          </p>
          <Link href="/" className="errorButton">Go to Home</Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ErrorPage;