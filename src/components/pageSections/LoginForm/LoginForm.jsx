import CryptoJS from "crypto-js";
import { useState } from "react";
import { BiSend } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import User from "../../../models/User";
import "../../../style/form.scss";

const LoginForm = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const navigate = useNavigate();
  const authKey = import.meta.env.VITE_AUTH_TOKEN;
  const loginRoute = import.meta.env.VITE_LOGIN_ROUTE;

  const onFormSubmit = async (event) => {
    event.preventDefault();
    const hashedPassword = CryptoJS.SHA256(password).toString();
    let response = null;
    try {
      response = await fetch(loginRoute, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authToken: authKey,
        },
        body: JSON.stringify({ reqEmail: email, reqPassword: hashedPassword }),
      });
    } catch (error) {
      setUserMessage("Server Conncetion Error");
      return;
    }
    if (response !== null && response.status === 200) {
      const user = new User(response);
      setUser(user);
      navigate("/profile");
    } else {
      setUserMessage("Invalid email or password");
    }
  };

  return (
    <section className="formSection">
      <h3 className="header">Log in</h3>
      <form className="formContainer" onSubmit={onFormSubmit}>
        <input
          className="formInput"
          type="email"
          name="forumMail"
          placeholder="Email Adress:"
          value={email}
          required
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          className="formInput"
          type="password"
          name="forumPassword"
          value={password}
          placeholder="Password:"
          required
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button type="submit" className="formButton">
          <BiSend /> Submit
        </button>
        <p
          className="inputMessage"
          style={userMessage ? { display: "block" } : { display: "none" }}
        >
          {userMessage}
        </p>
      </form>
    </section>
  );
};

export default LoginForm;
