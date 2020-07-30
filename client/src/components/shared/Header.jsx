import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <Link class="brand" to="/">
        Home
      </Link>
      <Link className="header-links" to="/result">
        Student Result Board
      </Link>
      <Link className="header-links" to="/admission">
        Admission Form
      </Link>
    </header>
  );
};

export default Header;
