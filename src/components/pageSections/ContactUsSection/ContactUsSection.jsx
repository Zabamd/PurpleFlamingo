import { useState } from "react";
import { BiSend } from "react-icons/bi";
import "./ContactUsSection.scss";

const ContactUsSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mailText, setMailText] = useState("");
  const [userMessage, setUserMessage] = useState("");

  /// Move to Backend
  const validateEmail = (emailAddress) => {
    return String(emailAddress)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const submitMessage = async () => {
    // event.preventDefault();
    try {
      const response = await fetch(
        import.meta.env.VITE_EMAIL_ENDPOINT_ADDRESS,
        {
          method: "POST",
          headers: {
            authToken: import.meta.env.VITE_ENDPOINT_API_KEY,
          },
          body: {
            message: "Random Text",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    /*
      setUserMessage("Sending");
      try {
        const resp = await fetch(import.meta.env.VITE_EMAIL_ENDPOINT_ADDRESS, {
          method: "POST",
          headers: {
            "authToken": import.meta.env.VITE_ENDPOINT_API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify([email, name, mailText]),
        });
        if (resp.body["status"] === "Corrent ") {
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
    */
  };

  return (
    <section className="contactUsSection" id="contactUs">
      <h3 className="header">Contact Us!</h3>
      <form className="formContainer" onSubmit="return false">
        <input
          className="contactInput"
          type="email"
          name="contactMail"
          placeholder="Email Adress:"
          value={email}
          required
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          className="contactInput"
          type="text"
          name="contactName"
          value={name}
          placeholder="Name:"
          required
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <textarea
          className="contactMessage"
          value={mailText}
          placeholder="Message:"
          required
          onChange={(event) => {
            setMailText(event.target.value);
          }}
        ></textarea>
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
    </section>
  );
};

export default ContactUsSection;
