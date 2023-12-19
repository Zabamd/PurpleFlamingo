import { useState } from "react";
import "./ContactUsSection.scss";
import messageIcon from "../../assets/icons/message.svg";

const ContactUsSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mailText, setMailText] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const validateEmail = (emailAdress) => {
    return String(emailAdress)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const onSubmit =  () => {
    console.log([email, name, mailText]);
    /*if (validateEmail(email)) {
      setUserMessage("Sending");
      try {
        const resp = await fetch(process.env.ENDPOINT_ADDRESS, {
          method: "POST",
          headers: {
            "X-Auth-Token": process.env.ENDPOINT_API_KEY,
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
    <section className="ContactUsSection">
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="contactMail"
          value={email}
          onChange={() => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          name="contactName"
          value={name}
          onChange={() => {
            setName(e.target.value);
          }}
        />
        <textarea
          name="contactMessage"
          id=""
          cols="30"
          rows="10"
          value={mailText}
          onChange={() => {
            setMailText(e.target.value);
          }}
        ></textarea>
        <button type="submit">{messageIcon} Sent</button>
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
