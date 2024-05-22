import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/navbar/navbar.jsx";
import Footer from "../components/footer/footer.jsx";
import ActionBox from "../components/actionBox/actionBox.jsx";
import "../style/UserPage.scss";

const UserPage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [actions, setActions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const actionsPerPage = 6;

  const authKey = import.meta.env.VITE_AUTH_TOKEN;
  const getUserRoute = import.meta.env.VITE_GET_USER;
  const getUserActionRoute = import.meta.env.VITE_GET_USER_ACTION;

  const navigate = useNavigate();
  useEffect(() => {
    const fetchUserData = async () => {
      let userResponse = "";
      try {
        userResponse = await fetch(`${getUserRoute}/${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authToken: authKey,
          },
        });
      } catch (error) {
        navigate("/error");
      }
      const userData = await userResponse.json();
      if (userData.statusCode === 200) {
        setUser(userData.response);
      } else {
        navigate("/error");
      }

      let actionsResponse = "";
      try {
        actionsResponse = await fetch(`${getUserActionRoute}/${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authToken: authKey,
          },
        });
      } catch (error) {
        navigate("/error");
      }
      const actionsData = await actionsResponse.json();
      if (actionsData.statusCode === 200) {
        setActions(actionsData.response);
      } else {
        navigate("/error");
      }
    };

    fetchUserData();
  }, [userId]);

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
        <section className="userPage">
          <div className="userWrapper">
            <h1 className="userHeader">{user.username}'s Profile</h1>
            <h2 className="actionsHeader">Actions</h2>
            <div
              className={`actionsGrid ${transition ? "fade-out" : "fade-in"}`}
            >
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

export default UserPage;
