import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar/navbar.jsx";
import Footer from "../components/footer/footer.jsx";
import "../style/ActionPage.scss";

const ActionPage = () => {
  const { actionId } = useParams();
  const [action, setAction] = useState(null);

  useEffect(() => {
    const fetchAction = async () => {
      try {
        const response = await fetch(`/api/actions/${actionId}`);
        const data = await response.json();
        setAction(data);
      } catch (error) {
        console.error("Error fetching action:", error);
      }
    };
    setAction({
      title: "title",
      description: "description",
      currentAmount: "currentAmount",
      goal: "goal",
      username:"username"
    });
    // fetchAction();
  }, [actionId]);

  return (
    <>
      <Navbar />
      <main className="pageDefault">
        <section className="actionPage">
          <h1 className="actionTitle">{action.title}</h1>
          <p className="createdBy">Created by {action.username}</p>
          <div className="actionImages">
            {action.images &&
              action.images.map((img, index) => (
                <img key={index} src={img} alt={`Action ${index + 1}`} />
              ))}
          </div>
          <div className="actionDescription">
            <p>{action.description}</p>
          </div>
          <div className="actionFunding">
            <p>Current Amount: ${action.currentAmount}</p>
            <p>Goal: ${action.goal}</p>
            <button className="supportButton">Support</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ActionPage;
