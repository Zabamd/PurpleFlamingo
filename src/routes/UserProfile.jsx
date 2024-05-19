import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import Navbar from "../components/navbar/navbar.jsx";
import Footer from "../components/footer/footer.jsx";
import "../style/page.scss";
import "../style/ProfilePage.scss";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  let { user, setUser } = useContext(UserContext);
  const [actions, setActions] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    if (user=== null) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };
  return (
    <>
      <Navbar />
      <main className="pageDefault">
        <section className="profilePage">
          <div className="profileWrapper">
            <h1 className="profileHeader">{user.username}'s Profile</h1>
            <button className="profileButton" onClick={handleLogout}>
              Logout
            </button>
            <h2 className="actionsHeader">Actions</h2>
            <ul className="actionsList">
              {actions.map((action) => (
                <li key={action.actionId} className="actionItem">
                  <h3 className="actionTitle">{action.title}</h3>
                  <p className="actionDescription">{action.description}</p>
                  <p className="actionStatus">Status: {action.status}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProfilePage;
