import { useState } from "react";
import "./ContactUsSection.scss";
import { BiSend } from "react-icons/bi";

const ContactUsSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mailText, setMailText] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const validateEmail = (emailAddress) => {
    return String(emailAddress)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const submitMessage = async (event) => {
    event.preventDefault();
    /* if(validateEmail(email)) {
      setUserMessage("Sending");
      try {
        const resp = await fetch(import.meta.env.VITE_EMAIL_ENDPOINT_ADDRESS, {
          method: "POST",

          headers: {
            "X-Auth-Token": import.meta.env.VITE_ENDPOINT_API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify([email, name, mailText]),
        });
        if (resp.status === 200) {
          setEmail("");
          setName("");
          setMailText("");
          setUserMessage("Email sent");
        } else {
          setUserMessage("Server Connection Error");
        }
      } catch (err) {
        console.log(err);
        setUserMessage("Server Connection Error");
      }
    } else {
      setUserMessage("Incorrect email address");
    }*/
  };

  return (
    <section className="ContactUsSection" id="contactus">
      <form>
        <input
          className="contactInput"
          type="email"
          name="contactMail"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          className="contactInput"
          type="text"
          name="contactName"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <textarea
          name="contactMessage"
          id=""
          cols="30"
          rows="10"
          value={mailText}
          onChange={(event) => {
            setMailText(event.target.value);
          }}
        ></textarea>
        <button onClick={submitMessage}>
          <BiSend /> Sent
        </button>
        <p
          className="inputMessage"
          style={userMessage ? { display: "none" } : { display: "block" }}
        >
          {userMessage}
        </p>
      </form>
    </section>
  );
};

export default ContactUsSection;
