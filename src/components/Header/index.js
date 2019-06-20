import React from "react";
import "./header.css";
// import logo from "../../assets/logo/P.png";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <nav className="nav">
          <NavLink exact to={"/"}>
            <div className="nav__logo">Podcast</div>
            {/* <div className="nav__logo--image">
              <img src={logo} alt="logo" />
            </div> */}
          </NavLink>
          <div className="nav__links">
            <a
              className="nav__link"
              target="_blank"
              rel="noopener noreferrer"
              href={"https://github.com/ajaykumar1196/Podcast-App"}
            >
              Fork me on Github
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
