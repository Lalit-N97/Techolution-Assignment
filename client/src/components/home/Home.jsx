import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      Welcome,
      <div className="message">
        This React app is the assignment given by <span>Techolution</span>{" "}
        company as a screening test for a role of{" "}
        <span>UI Developer Intern</span>.
      </div>
      <div className="instruction">
        <span>NOTE : </span>To see the solutions Click on the Student Result tab
        and Admission Form Tab
      </div>
    </div>
  );
};

export default Home;
