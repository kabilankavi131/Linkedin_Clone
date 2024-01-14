import React, { useEffect } from "react";
import "./adds.css";

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

  return <div className="adds"></div>;
};

export default Adds;
