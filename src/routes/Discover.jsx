import { useEffect, useState } from "react";
import Navbar from "../components/navbar/navbar.jsx";
import Footer from "../components/footer/footer.jsx";
import ActionBox from "../components/actionBox/actionBox.jsx";
import "../style/Discover.scss";

const Discover = () => {
  const [actions, setActions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const actionsPerPage = 8;

  const allActionsRoute = import.meta.env.VITE_GET_ALL_ACTION;
  const authKey = import.meta.env.VITE_AUTH_TOKEN;

  useEffect(() => {
    const fetchActions = async () => {
      try {
        const response = await fetch(`${allActionsRoute}`, {
          headers: {
            "Content-Type": "application/json",
            authToken: authKey,
          },
        });
        const data = await response.json();
        if (data.statusCode === 200) {
          setActions(data.response);
        } else {
          console.error("Failed to fetch actions");
        }
      } catch (error) {
        console.error("Error fetching actions:", error);
      }
    };
    fetchActions();
    setActions(mockActions);
  }, [allActionsRoute]);

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
        <section className="discoverPage">
          <h1 className="discoverHeader">Discover Actions</h1>
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
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Discover;
