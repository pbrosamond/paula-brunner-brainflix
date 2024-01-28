import "./Comments.scss";
import Comment from "../Comment/Comment";
import avatarImage from "../../../src/assets/images/Mohan-muruge.jpg";

function Comments({ comments }) {
  return (
    <section className="comments">
      <h3 className="comments__title">3 Comments</h3>
      <div className="comments__container">
        <img
          className="comments__profile"
          src={avatarImage}
          alt="Profile"
        ></img>
        <form className="comments__form">
          <div className="comments__input">
            <label className="comments__label">JOIN THE CONVERSATION</label>
            <textarea
              className="comments__text-area"
              placeholder="Add a new comment"
              rows="4"
              required
            ></textarea>{" "}
          </div>
          <div>
            <button className="comments__button">COMMENT</button>
          </div>
        </form>
      </div>

      <div className="comment">
        {comments.map((comment) => {
          return <Comment key={comment.id} comment={comment} />;
        })}
      </div>
    </section>
  );
}
export default Comments;
