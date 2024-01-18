import "./profile.css";
import banner from "../Images/banner.jpeg";
import photo from "../Images/profile.png";
import gold from "../Images/gold.png";
import item from "../Images/item-icon.svg";
var Profile = () => {
  return (
    <div className="container">
      <img className="banner" src={banner}></img>
      <img className="profile" src={photo}></img>
      <h4 className="username">
        <a href="#">Kabilan K</a>
      </h4>
      <p>
        Tech Enthusiast | C, C++, Python, Java | Web Developer Creating Digital
        ExperiFences
      </p>
      <hr></hr>
      <h5>
        &nbsp;&nbsp;&nbsp;<a href="#">Profile viewers</a>
        <span className="profile-views">300</span>
      </h5>
      <h5>
        &nbsp;&nbsp;&nbsp;<a href="#">View all analytics</a>
      </h5>
      <br></br>
      <hr></hr>
      <div className="grow-business">
        <a>Grow your business with Premium</a>
        <br></br>
        <img src={gold}></img>
        <a className="try" href="#">
          Try for ₹0
        </a>
      </div>
      <hr></hr>
      <div className="myitems">
        <img src={item}></img>
        &nbsp;&nbsp;My items
      </div>
    </div>
  );
};
export default Profile;
