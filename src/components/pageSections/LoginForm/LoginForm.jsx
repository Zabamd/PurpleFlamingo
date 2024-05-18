import { useState } from "react";
import { BiSend } from "react-icons/bi";
import "../../../style/form.scss";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
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
