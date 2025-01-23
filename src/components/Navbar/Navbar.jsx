// this is for master branch
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
import "../../index.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="logo">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <ul className="menu">
          <li>Apps </li>
          <li>Static</li>
          <li>Docs</li>
          <li>Developer</li>
        </ul>
        <div className="hamburger">
          <GiHamburgerMenu fontSize={40}/>
        </div>
      </div>
      <div className="nav-right">
        <div className="searchbar">
          <input type="text" placeholder="Search for apps..." />
          <CiSearch />
        </div>
        <div className="btn-container">
          <button className="login">Login</button>
          <button className="register">
            Register <IoIosArrowRoundForward size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
