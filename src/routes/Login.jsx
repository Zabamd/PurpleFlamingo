import { useState } from "react";
import { BiSend } from "react-icons/bi";
import "../style/form.scss";
import Navbar from "../components/navbar/navbar.jsx";
import Footer from "../components/footer/footer.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  onFormSubmit = () => {
    console.log(email, password);
  };

  return (
    <>
      <Navbar />
      <main className="LoginPageMain">
        <h3 className="header">Log in</h3>
        <form className="formContainer" onSubmit={onFormSubmit}>
          <input
            className="forumInput"
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
            className="forumInput"
            type="password"
            name="forumPassword"
            value={password}
            placeholder="Password:"
            required
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <button onClick={submitMessage} className="submitButton">
            <BiSend /> Submit
          </button>
          <p
            className="inputMessage"
            style={userMessage ? { display: "none" } : { display: "block" }}
          >
            {userMessage}
          </p>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Login;
