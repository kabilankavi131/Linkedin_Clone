import "./news.css";
import dot from "../Images/feed-icon.svg";
var News = () => {
  return (
    <div className="news">
      <h3>LinkedIn News </h3>
      <img className="dot" src={dot}></img>
      <ul>
        <li>
          • Citigroup to cut 20,000 jobs{" "}
          <span>
            <br></br>3d ago • 4,911 readers
          </span>
        </li>
        <li>
          • The 25 fastest-growing jobs in India
          <span>
            <br></br>Top news • 2,548 readers
          </span>
        </li>
        <li>
          • A woman's path to financial freedom{" "}
          <span>
            <br></br>2d ago • 881 readers
          </span>
        </li>
        <li>
          • How 2024 looks for the EV sector{" "}
          <span>
            <br></br>2d ago • 153 readers
          </span>
        </li>
      </ul>
    </div>
  );
};

export default News;
