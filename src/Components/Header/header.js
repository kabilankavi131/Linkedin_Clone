import React, { useState } from "react";
import "./header.css";
import logo from "./Images/linkedin_logo.png";
import search_logo from "./Images/search-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import network from "./Images/nav-network.svg";
import job from "./Images/nav-jobs.svg";
import message from "./Images/nav-messaging.svg";
import notification from "./Images/nav-notifications.svg";
import profile from "./Images/profile.png";
import down_arrow from "./Images/down-icon.svg";
import four_dot from "./Images/nav-work.svg";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
var Header = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Function to handle input focus
  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };
  var call = () => {
    document.getElementById("btn").addEventListener("click", () => {
      var height = document.getElementById("suggestionBox");
      if (height.style.height == "300px") {
        height.style.height = "0px";
      } else {
        height.style.height = "300px";
      }
    });
  };
  return (
    <header>
      <div className="first_part">
        <img className="logo" src={logo}></img>
        <div className="search_container">
          <img src={search_logo}></img>
          <input onClick={call} id="btn" placeholder="Search"></input>
          <div id="suggestionBox" className="suggestionBox"></div>
        </div>
        <div className="second_part">
          <img className="second-part-images" src={search_logo}></img>
          <span>Search</span>
          <FontAwesomeIcon
            className="second-part-images home"
            icon={faHouse}
          ></FontAwesomeIcon>
          <span>Home</span>
          <img className="second-part-images" src={network}></img>
          <span>My Network</span>
          <img className="second-part-images" src={job}></img>
          <span>Jobs</span>
          <img className="second-part-images" src={message}></img>
          <span>Messaging</span>
          <img className="second-part-images" src={notification}></img>
          <span>Notifications</span>
          <img className="second-part-images" src={profile}></img>
          <img className="down_arrow" src={down_arrow}></img>
          <span>Me</span>

          <img className="third-part-images" src={four_dot}></img>
          <span>For Business</span>
          <a href="#">Try Premium for ₹0</a>
        </div>
      </div>
    </header>
  );
};
export default Header;
