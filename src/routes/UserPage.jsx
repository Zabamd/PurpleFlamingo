import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await fetch(`/api/user/${userId}`);
        const userData = await userResponse.json();
        setUser(userData);

        const actionsResponse = await fetch(`/api/user/${userId}/actions`);
        const actionsData = await actionsResponse.json();
        setActions(actionsData);
      } catch (error) {
        console.error("Error fetching user data:", error);
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
          {user ? (
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
                    image={action.image}
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
          ) : (
            <div>Loading...</div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default UserPage;
