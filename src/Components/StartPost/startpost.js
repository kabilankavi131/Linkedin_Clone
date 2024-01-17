import "./post.css";
import profile from "../Images/profile.png";
import down_arrow from "../Images/down-icon.svg";
import Media from "../Images/photo-icon.svg";
import Event from "../Images/event-icon.svg";
import Article from "../Images/article-icon.svg";
var StartPost = () => {
  return (
    <div className="postcontainer">
      <div className="post">
        <img className="profile" src={profile}></img>
        <button className="start_post">
          &nbsp;&nbsp;&nbsp;&nbsp; Start a Post
        </button>
        <div className="images">
          <span>
            <img src={Media}></img>
            Media
          </span>
          <span>
            <img src={Event}></img>
            Event
          </span>
          <span>
            <img src={Article}></img>
            Write article
          </span>
        </div>
      </div>
      <span className="line"></span>
      <div className="text">
        Sort by: Top <img src={down_arrow}></img>
      </div>
    </div>
  );
};
export default StartPost;
