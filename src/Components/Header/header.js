import React, { useState } from "react";
import "./header.css";
//import React from "react";
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
var Header = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Function to handle input focus
  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };
  return (
    <header>
      <img id="logo" src={logo} />
      <div className="search_container">
        <input
          id="ss"
          placeholder="Search"
          onFocus={handleSearchFocus}
          onBlur={() => setIsSearchFocused(false)}
        />
        <img className="search_logo" src={search_logo}></img>
      </div>
      <br></br>
      <div className="navigations">
        <FontAwesomeIcon className="navs house" icon={faHouse} />
        <img className="navs" src={network} />
        <img className="navs" src={job} />
        <img className="navs" src={message} />
        <img className="navs" src={notification} />
        <img width="25px" className="navs" src={profile} />
        <img className="down_arrow" src={down_arrow}></img>
        <div className="navs_texts">
          <h7>Home</h7>
          <h7>My Network</h7>
          <h7>Jobs</h7>
          <h7>Messaging</h7>
          <h7>Notifications</h7>
          <h7>Me</h7>
        </div>
        <div className="vertical-line"></div>
      </div>
      <span className="pro">
        <img className="business" src={four_dot}></img>
        <h7 className="business_text">For Business</h7>
        <img className="down_arrow2" src={down_arrow}></img>
        <a href="#">
          <h6>
            Unlock 1 month of <br></br>Preminum
          </h6>
        </a>
      </span>
      {/* <span>Network Smarter, Try Premium Free</span> */}

      {/* -----------------------------Search Linkedin  Container----------------------------- */}
      <div
        id="search_linkedin"
        className={isSearchFocused ? "search_linkedin show" : "search_linkedin"}
      ></div>
    </header>
  );
};
export default Header;
