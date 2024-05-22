import CryptoJS from "crypto-js";
import { useContext, useState } from "react";
import { BiSend } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import User from "../../../models/User";
import "../../../style/form.scss";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();
  const authKey = import.meta.env.VITE_AUTH_TOKEN;
  const loginRoute = import.meta.env.VITE_LOGIN_ROUTE;

  const onFormSubmit = async (event) => {
    event.preventDefault();
    const hashedPassword = CryptoJS.SHA256(password).toString();

    const params = new URLSearchParams({
      reqEmail: email,
      reqPassword: hashedPassword,
    });

    let response = null;
    try {
      response = await fetch(`${loginRoute}?${params.toString()}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authToken: authKey,
        },
      });
    } catch (error) {
      setUserMessage("Server Conncetion Error");
      return;
    }
    if (response !== null && response.ok) {
      const responseData = await response.json();
      const user = new User(
        responseData.response.userId,
        responseData.response.username
      );
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
