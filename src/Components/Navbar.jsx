import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import "./NavbarStyle.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [icon, setIcon] = useState("fa-solid fa-bars");
  const [navmenubar, setNavmenubar] = useState("nav-menu");

  const toggleMenu = () => {
    setNavmenubar(navmenubar === "nav-menu" ? "nav-menu active" : "nav-menu");
  };

  const handleClick = () => {
    setIcon(
      icon === "fa-solid fa-bars" ? "fa-solid fa-xmark" : "fa-solid fa-bars"
    );
    setTimeout(() => {
      toggleMenu();
    }, 0);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Trypii</h1>

      <div className="menu-icons">
        <i className={icon} onClick={() => handleClick()}></i>
      </div>

      <ul className={navmenubar}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}
        <Link to="/signup">
        <button >Sign Up</button>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
