import './Comments.scss';
import CommentList from '../CommentList/CommentList';
import avatarImage from "../../../src/assets/images/Mohan-muruge.jpg";

function Comments() {
   return (
        <section className ="comments">
            <h3 className ="comments__title">3 Comments</h3>
            <div className ="comments__container">
                <img className ="comments__profile" src={avatarImage} alt="Profile Picture" ></img>
                <form className ="comments__form">
                    <div className ="comments__input">
                        <label className ="comments__label">JOIN THE CONVERSATION</label>
                        <textarea className ="comments__text-area" placeholder="Add a new comment" rows="4" required></textarea>                    </div>
                    <div>
                        <button className ="comments__button">COMMENT</button>
                    </div>
                </form>
            </div>
            <CommentList />
        </section>
   );
 }
  export default Comments;