import React, { useEffect, useState } from "react";
import ActionBox from "../../actionBox/actionBox.jsx";
import "./HighlightSection.scss";

const HighlightSection = () => {
  const [actions, setActions] = useState([]);
  const highlightedActionsRoute = import.meta.env.VITE_GET_ACTION_HIGH;

  useEffect(() => {
    const fetchHighlightedActions = async () => {
      try {
        const response = await fetch(highlightedActionsRoute);
        const data = await response.json();
        if (data.statusCode === 200) {
          setActions(data.response);
        } else {
          console.error("Failed to fetch highlighted actions");
        }
      } catch (error) {
        console.error("Error fetching highlighted actions:", error);
      }
    };
    fetchHighlightedActions();
  }, [highlightedActionsRoute]);

  return (
    <section className="highlightSection">
      <h2 className="highlightHeader">Highlighted Actions</h2>
      <div className="highlightGrid">
        {actions.map((action) => (
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
    </section>
  );
};

export default HighlightSection;
