import { useState } from "react";
import "./hamburger.scss";

const Hamburger = ({ routes }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={isOpen ? "hamburger active" : "hamburger"}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <div className="upper"></div>
      <div className="mid"></div>
      <div className="lower"></div>
    </div>
  );
};

export default Hamburger;
