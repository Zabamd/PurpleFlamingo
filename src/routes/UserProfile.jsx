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
  const mockActions = [
    {
      actionId: 1,
      title: "Clean the Beach",
      image: "https://via.placeholder.com/150",
      currentAmount: 500,
      goal: 1000,
    },
    {
      actionId: 2,
      title: "Plant Trees",
      image: "https://via.placeholder.com/150",
      currentAmount: 300,
      goal: 800,
    },
    {
      actionId: 3,
      title: "Build a Playground",
      image: "https://via.placeholder.com/150",
      currentAmount: 200,
      goal: 1500,
    },
    {
      actionId: 4,
      title: "Community Garden",
      image: "https://via.placeholder.com/150",
      currentAmount: 400,
      goal: 1000,
    },
    {
      actionId: 5,
      title: "School Supplies Drive",
      image: "https://via.placeholder.com/150",
      currentAmount: 600,
      goal: 1200,
    },
    {
      actionId: 6,
      title: "Food Bank Support",
      image: "https://via.placeholder.com/150",
      currentAmount: 700,
      goal: 1400,
    },
    {
      actionId: 7,
      title: "Animal Shelter Aid",
      image: "https://via.placeholder.com/150",
      currentAmount: 350,
      goal: 700,
    },
    {
      actionId: 8,
      title: "Park Renovation",
      image: "https://via.placeholder.com/150",
      currentAmount: 800,
      goal: 1600,
    },
    {
      actionId: 9,
      title: "Senior Center Activities",
      image: "https://via.placeholder.com/150",
      currentAmount: 450,
      goal: 900,
    },
    {
      actionId: 10,
      title: "Library Book Fund",
      image: "https://via.placeholder.com/150",
      currentAmount: 500,
      goal: 1000,
    },
    {
      actionId: 11,
      title: "Youth Sports Equipment",
      image: "https://via.placeholder.com/150",
      currentAmount: 600,
      goal: 1200,
    },
    {
      actionId: 12,
      title: "Public Art Installation",
      image: "https://via.placeholder.com/150",
      currentAmount: 750,
      goal: 1500,
    },
    {
      actionId: 13,
      title: "Homeless Shelter Support",
      image: "https://via.placeholder.com/150",
      currentAmount: 800,
      goal: 1600,
    },
    {
      actionId: 14,
      title: "Recycling Program",
      image: "https://via.placeholder.com/150",
      currentAmount: 400,
      goal: 800,
    },
    {
      actionId: 15,
      title: "Disaster Relief Fund",
      image: "https://via.placeholder.com/150",
      currentAmount: 900,
      goal: 1800,
    },
    {
      actionId: 16,
      title: "Wildlife Conservation",
      image: "https://via.placeholder.com/150",
      currentAmount: 550,
      goal: 1100,
    },
    {
      actionId: 17,
      title: "Community Theater",
      image: "https://via.placeholder.com/150",
      currentAmount: 300,
      goal: 600,
    },
    {
      actionId: 18,
      title: "Language Classes",
      image: "https://via.placeholder.com/150",
      currentAmount: 250,
      goal: 500,
    },
    {
      actionId: 19,
      title: "Tech for Seniors",
      image: "https://via.placeholder.com/150",
      currentAmount: 1000,
      goal: 2000,
    },
    {
      actionId: 20,
      title: "Music Education Program",
      image: "https://via.placeholder.com/150",
      currentAmount: 700,
      goal: 1400,
    },
  ];
  const navigate = useNavigate();
  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
    setActions(mockActions);
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
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProfilePage;
