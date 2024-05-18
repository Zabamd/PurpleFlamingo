import { useState } from "react";
import { BiSend } from "react-icons/bi";
import "../../../style/form.scss";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [repeatEmail, setRepeatEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const calculateAge = (birthday) => {
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (email !== repeatEmail) {
      setUserMessage("Emails do not match");
      return;
    }
    if (password !== repeatPassword) {
      setUserMessage("Passwords do not match");
      return;
    }
    if (calculateAge(birthday) < 18) {
      setUserMessage("You must be at least 18 years old to sign up");
      return;
    }
    console.log(email, password, firstName, secondName, birthday);
  };

  return (
    <section className="formSection">
      <h3 className="header">Sign Up</h3>
      <form
        className="formContainer"
        onSubmit={onFormSubmit}
        style={{ height: "90%" }}
      >
        <input
          className="formInput"
          type="email"
          name="formMail"
          placeholder="Email Address:"
          value={email}
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className="formInput"
          type="email"
          name="repeatFormMail"
          placeholder="Repeat Email Address:"
          value={repeatEmail}
          required
          onChange={(event) => setRepeatEmail(event.target.value)}
        />
        <input
          className="formInput"
          type="password"
          name="formPassword"
          value={password}
          placeholder="Password:"
          required
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          className="formInput"
          type="password"
          name="repeatFormPassword"
          value={repeatPassword}
          placeholder="Repeat Password:"
          required
          onChange={(event) => setRepeatPassword(event.target.value)}
        />
        <input
          className="formInput"
          type="text"
          name="formFirstName"
          value={firstName}
          placeholder="First Name:"
          required
          onChange={(event) => setFirstName(event.target.value)}
        />
        <input
          className="formInput"
          type="text"
          name="formSecondName"
          value={secondName}
          placeholder="Second Name:"
          required
          onChange={(event) => setSecondName(event.target.value)}
        />
        <input
          className="formInput"
          type="date"
          name="formBirthday"
          value={birthday}
          placeholder="Birthday:"
          required
          onChange={(event) => setBirthday(event.target.value)}
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

export default SignupForm;
