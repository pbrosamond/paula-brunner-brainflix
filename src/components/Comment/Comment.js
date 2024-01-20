import "./Comment.scss";
import { formatTimestamp } from "../../utils/utils.js";

function Comment({ comment }) {
  return (
    <div className="comment__container">
      <div className="comment__comment">
        <div className="comment__profile" alt="Profile Picture"></div>
      </div>
      <div className="comment__subcontainer">
        <div className="comment__details">
          <p className="comment__name">{comment.name}</p>
          <p className="comment__date">
            {formatTimestamp(comment.timestamp)}
          </p>
        </div>
        <p className="comment__text">{comment.comment}</p>
      </div>
    </div>
  );
}

export default Comment;
