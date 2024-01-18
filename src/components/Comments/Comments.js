import './Comments.scss';
import CommentList from '../CommentList/CommentList';
import avatarImage from "../../../src/assets/images/Mohan-muruge.jpg";

function Comments() {
   return (
        <section class="comments">
            <h3 class="comments__title">3 Comments</h3>
            <div class="comments__container">
                <img class="comments__profile" src={avatarImage} alt="Profile Picture" ></img>
                <form class="comments__form">
                    <div class="comments__input">
                        <label class="comments__label">JOIN THE CONVERSATION</label>
                        <textarea class="comments__text-area" placeholder="Add a new comment" rows="4" required></textarea>                    </div>
                    <button class="comments__button">COMMENT</button>
                </form>
            </div>
            <CommentList />
        </section>
   );
 }
  export default Comments;