import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import CurrencyInput from "react-currency-input-field";
import Navbar from "../components/navbar/navbar.jsx";
import Footer from "../components/footer/footer.jsx";
import "../style/ActionPage.scss";

const ActionPage = () => {
  const { actionId } = useParams();
  const [action, setAction] = useState(null);
  const [amount, setAmount] = useState(0);

  const stripePromise = loadStripe(import.meta.VITE_STRIPE_KEY);

  const authKey = import.meta.env.VITE_AUTH_TOKEN;
  const getActionRoute = import.meta.env.VITE_GET_ACTION;
  const checkoutRoute = import.meta.env.VITE_CHECKOUT;

  useEffect(() => {
    let response = "";
    const fetchAction = async () => {
      try {
        response = await fetch(`${getActionRoute}/${actionId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authToken: authKey,
          },
        });
      } catch (error) {
        console.error("Error fetching action:", error);
        navigate("/error");
      }
      const data = await response.json();
      if (data.statusCode === 200) {
        setAction(data.response);
      } else {
        navigate("/error");
      }
    };

    fetchAction();
  }, [actionId, authKey, getActionRoute, navigate]);

  const handleSupport = async () => {
    const stripe = await stripePromise;
    const response = await fetch(`${checkoutRoute}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authToken: authKey,
      },
      body: JSON.stringify({ actionId, amount }),
    });
    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  };

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
            <p>Current Amount: {action.currentAmount}</p>
            <p>Goal: ${action.goal}</p>
            <CurrencyInput
              className="formInput"
              name="goal"
              placeholder="Goal Amount"
              decimalsLimit={2}
              value={amount}
              suffix={"zł"}
              decimalSeparator={","}
              groupSeparator={" "}
              onValueChange={(value) => setAmount(value)}
              required
            />
            <button className="supportButton" onClick={handleSupport}>
              Support
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ActionPage;
