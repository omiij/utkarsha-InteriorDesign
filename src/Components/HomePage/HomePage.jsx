import React from "react";
import "./HomePage.scss";
import interiorBg from "../../Images/1.png";
function HomePage() {
  return (
    <div
      className="home_page_container"
      style={{ backgroundImage: `url(${interiorBg})` }}
    >
      <div className="left">
        <h1>INTERIOR DESIGN</h1>
        <p>
          At Home Dynamics, we believe that every space tells a story. Our
          passion for design, creativity, and functionality allows us to
          transform homes and commercial spaces into stunning, personalized
          environments.
        </p>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default HomePage;
