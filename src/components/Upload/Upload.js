import { Link } from "react-router-dom";
import "./Upload.scss";
import thumbnail from "../../../src/assets/images/Upload-video-preview.jpg";

function Upload() {
  return (
    <section className="upload">
      <h1 className="upload__title">Upload Video</h1>

      <div className="upload__section">
        <h2 className="upload__subtitle">VIDEO THUMBNAIL</h2>
        <img className="upload__image" src={thumbnail} alt="Thumbnail"></img>
      </div>

      <form className="upload__form">
        <div className="upload__container">
          <label className="upload__label">TITLE YOUR VIDEO</label>
          <input
            className="upload__input"
            type="text"
            id="title-input"
            placeholder="Add a title to your video"
          ></input>
        </div>

        <div className="upload__container">
          <label className="upload__label">ADD A VIDEO DESCRIPTION</label>
          <textarea
            className="upload__text-area"
            placeholder="Add a description to your video"
            rows="4"
            required
          ></textarea>
        </div>

        <button className="upload__button">PUBLISH</button>
      </form>

      <Link to="/">
        <button className="upload__button--cancel">CANCEL</button>
      </Link>
    </section>
  );
}

export default Upload;
