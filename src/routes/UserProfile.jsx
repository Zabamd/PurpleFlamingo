import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/navbar.jsx";
import Footer from "../components/footer/footer.jsx";
import ActionBox from "../components/actionBox/actionBox.jsx";
import "../style/page.scss";
import "../style/ProfilePage.scss";

const ProfilePage = () => {
  let { user, setUser } = useContext(UserContext);
  const [actions, setActions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const actionsPerPage = 6;

  const authKey = import.meta.env.VITE_AUTH_TOKEN;
  const geuUserActionRoute = import.meta.env.VITE_GET_USER_ACTION;

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    const fetchActions = async () => {
      let response = "";
      try {
        response = await fetch(`${geuUserActionRoute}/${user.userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authToken: authKey,
          },
        });
      } catch (error) {
        console.log(error);
      }
      const data = await response.json();
      if (data.statusCode === 200) {
        setActions(data.response);
      } else {
        setActions(null);
      }
    };
    fetchActions();
  }, [user, navigate]);

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  const indexOfLastAction = currentPage * actionsPerPage;
  const indexOfFirstAction = indexOfLastAction - actionsPerPage;
  const currentActions = actions.slice(indexOfFirstAction, indexOfLastAction);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(actions.length / actionsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <Navbar />
      <main className="pageDefault">
        <section className="profilePage">
          <div className="profileWrapper">
            <h1 className="profileHeader">{user.username}'s Profile</h1>
            <button
              className="profileButton"
              onClick={() => {
                navigate("/createaction");
              }}
            >
              Create Action
            </button>
            <button className="profileButton" onClick={handleLogout}>
              Logout
            </button>
            <h2 className="actionsHeader">Actions</h2>
            <div className="actionsGrid">
              {currentActions.map((action) => (
                <ActionBox
                  key={action.actionId}
                  actionId={action.actionId}
                  title={action.title}
                  image={action.images[0]}
                  currentAmount={action.currentAmount}
                  goal={action.goal}
                />
              ))}
            </div>
            <div className="pagination">
              {pageNumbers.map((number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`pageButton ${
                    number === currentPage ? "active" : ""
                  }`}
                >
                  {number}
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProfilePage;
