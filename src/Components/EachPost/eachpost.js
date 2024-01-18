import "./eachpost.css";
import user1 from "../Images/Profiles/user1.jpeg";
import user1post from "../Images/Profiles/user1post.jpeg";
import like from "../Images/like-icon.svg";
import comment from "../Images/comment-icon.svg";
import repost from "../Images/repost.png";
import send from "../Images/send-icon.svg";
var EachPost = () => {
  return (
    <div id="eachpost" className="eachpost">
      <div className="container">
        <img src={user1}></img>
        <h4 className="name">
          Sheeba Shaikh <span>(She/Her) • 1st</span>
        </h4>
        <span className="bio">
          Human Resource Recruiter at IBR InfoTech | IT Talent Acquisition |
          HIRING |..... 9m •
        </span>
        <div className="message">
          <h4 style={{ color: "gray" }}>
            💪✨ Stay Strong, Keep Going, and Embrace Resilience! 💫🚀 In the
            journey of life, challenges are the stepping stones to greatness. 🌟
            Don't be disheartened by obstacles; instead, see them as
            opportunities for growth and triumph. 💼🌈 Keep going, keep
            striving, and remember that every challenge you face is shaping you
            into a stronger, wiser version of yourself. 🌱💡 The path to success
            is often paved with difficulties, but it's your perseverance that
            transforms them into triumphs. In those tough moments, summon your
            inner strength, trust the process, and keep moving forward. 💫✊
            Your greatest achievements are waiting on the other side of
            perseverance and determination. Tag someone who needs this reminder
            today and let's inspire each other to conquer challenges and reach
            new heights! 🌐👊
            <div className="hashtags">
              #StayStrong #KeepGoing #Resilience #Challenges #AchieveGreatness
              #Perseverance
            </div>
          </h4>
        </div>
      </div>
      <div className="userpost">
        <img src={user1post}></img>
      </div>
      <div className="interactions">
        <hr></hr>
        <img src={like}></img>
        <img src={comment}></img>
        <img src={repost}></img>
        <img src={send}></img>
        <div>
          <h4>Like</h4>
          <h4>Comment</h4>
          <h4>Repost</h4>
          <h4>Send</h4>
        </div>
      </div>
    </div>
  );
};
export default EachPost;
