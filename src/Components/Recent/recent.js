import "./recent.css";
import profile from "../Images/recruit_wings.png";
import ai from "../Images/ai.png";
import plus from "../Images/plus-icon.svg"
var Recent = () => {
  return (
    <div id="recent" className="recent">
      <h6>Recent</h6>
      <div className="cnt1">
        <div>
          <img src={profile}></img> Recuretter Wings
        </div>
        <div>
          <img src={profile}></img> Artificial Intelligence, Machine....
        </div>
        <div>
          <img src={ai}></img> Introduction to Business Data...
        </div>
      </div>
      <br></br>
      <h6 style={{ color: "#3b84cf" }}>Groups</h6>
      <div className="group">
        <div>
          <img src={profile}></img> Recuretter Wings
        </div>
        <div>
          <img src={profile}></img> Artificial Intelligence, Machine....
        </div>
        <div>See all</div>
      </div>
      <a className="last">Events</a>
      <img className="plus" src={plus}></img>
      <br></br>
      <a className="last">Followed Hashtags</a>
      <hr></hr>
      <div className="discover">Discover More</div>
    </div>
  );
};

export default Recent;
