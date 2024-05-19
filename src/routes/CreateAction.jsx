import CurrencyInput from "react-currency-input-field";
import React, { useContext, useState } from "react";
import Navbar from "../components/navbar/navbar.jsx";
import Footer from "../components/footer/footer.jsx";
import "../style/page.scss";
import "../style/form.scss";
import { UserContext } from "../context/UserContext.jsx";

const CreateActionPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [goal, setGoal] = useState("");
  const [images, setImages] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [finishDate, setFinishDate] = useState("");

  const { user } = useContext(UserContext);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("goal", goal);
    formData.append("startDate", startDate);
    formData.append("finishDate", finishDate);

    images.forEach((image, index) => {
      formData.append(`image${index}`, image);
    });

    try {
      const response = await fetch("/api/actions", {
        method: "POST",
        body: {
          postData: formData,
          userID: user.userID,
        },
      });

      if (response.ok) {
        // Handle success
        console.log("Action created successfully");
      } else {
        // Handle error
        console.error("Failed to create action");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Navbar />
      <main className="pageDefault">
        <section className="formSection">
          <h3
            className="header"
            style={{ paddingBottom: "0.5rem", marginTop: "1rem" }}
          >
            Create a New Action
          </h3>
          <form
            className="formContainer"
            onSubmit={handleSubmit}
            style={{ height: "95%", marginBottom: "3rem" }}
          >
            <input
              className="formInput"
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="formInput"
              name="description"
              placeholder="Description"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
            />
            <CurrencyInput
              className="formInput"
              name="goal"
              placeholder="Goal Amount"
              decimalsLimit={2}
              value={goal}
              suffix={"zł"}
              decimalSeparator={","}
              groupSeparator={" "}
              required
              onValueChange={(value) => setGoal(value)}
            />
            <input
              className="formInput"
              type="date"
              name="startDate"
              placeholder="Start Date"
              value={startDate}
              required
              onChange={(e) => setStartDate(e.target.value)}
            />
            <input
              className="formInput"
              type="date"
              name="finishDate"
              placeholder="Finish Date"
              value={finishDate}
              required
              onChange={(e) => setFinishDate(e.target.value)}
            />
            <label
              style={{
                marginBottom: "2em",
                fontSize: "16px",
                color: "#fff",
                backgroundColor: "#b298dc",
                padding: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                width: "60%",
              }}
            >
              <span style={{ paddingBottom: "1.5rem" }}>
                Upload Images (up to 3):
              </span>
              <input
                className="formInput"
                type="file"
                multiple
                onChange={handleImageUpload}
                accept="image/*"
              />
            </label>
            <button type="submit" className="formButton">
              Submit
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CreateActionPage;
