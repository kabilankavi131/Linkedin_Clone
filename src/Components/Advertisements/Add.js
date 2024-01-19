import React, { useEffect } from "react";
import "./adds.css";
import threedot from "../Images/ellipses.svg";
import profile from "../Images/profile.png";
import add from "../Images/AddImages/img1.jpeg";
const Adds = () => {
  useEffect(() => {
    const handleScroll = () => {
      const adds = document.querySelector(".adds");
      const scrollY = window.scrollY;

      if (scrollY > 300) {
        adds.style.position = "fixed";
        adds.style.top = "100px";
      } else {
        adds.style.position = "absolute";
        adds.style.top = "52%";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="adds" className="adds">
      <p className="ad">
        Ad&nbsp;&nbsp;<img src={threedot}></img>
      </p>
      <p>Follow NephroPlus for expert insights and support on kidney care.</p>
      <br></br>
      <div className="images">
        <img className="profile" src={profile}></img>
        <img className="adimg" src={add}></img>
        <p>Join our community of renal care professionals.</p>
      </div>
      <button>Follow</button>
    </div>
  );
};

export default Adds;
