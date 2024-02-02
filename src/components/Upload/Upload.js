import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Upload.scss";
import thumbnail from "../../../src/assets/images/Upload-video-preview.jpg";
import axios from "axios";

function Upload() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const publishData = async () => {
    try {
      await axios.post(`http://localhost:5050/videos`, formData);
      alert("Upload Successful");
      navigate("/");
    } catch (error) {
      console.error("The error is in the publishData:", error);
    }
  };
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log()
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const HandleClick = () => {
    if (formData.title && formData.description) {
      publishData();
    } else {
      console.error("Please input both video title and description.");
    }
  };

  return (
    <section className="upload">
      <h1 className="upload__title">Upload Video</h1>

      <div className="upload__main">
        <div className="upload__section">
          <h2 className="upload__subtitle">VIDEO THUMBNAIL</h2>
          <img className="upload__image" src={thumbnail} alt="Thumbnail" />
        </div>

        <form className="upload__form" id="uploadForm">
          <div className="upload__container">
            <label htmlFor="title-input" className="upload__label">
              TITLE YOUR VIDEO
            </label>
            <input
              className="upload__input"
              type="text"
              name="title"
              id="title-input"
              placeholder="Add a title to your video"
              onChange={handleInputChange}
            />
          </div>

          <div className="upload__container">
            <label htmlFor="description-input" className="upload__label">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              className="upload__text-area"
              id="description-input"
              placeholder="Add a description to your video"
              rows="4"
              name="description"
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
        </form>
      </div>

      <div className="upload__buttons">
        <button
          onClick={HandleClick}
          id="uploadForm"
          type="button"
          className="upload__button"
        >
          PUBLISH
        </button>

        <Link to="/">
          <button className="upload__button--cancel">CANCEL</button>
        </Link>
      </div>
    </section>
  );
}

export default Upload;
