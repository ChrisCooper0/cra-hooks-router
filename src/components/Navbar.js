import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaReact } from "react-icons/fa";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div>
        <div className="navbar">
          <div className="navbar-container container">
            <Link className="navbar-logo" to="/" onClick={closeMobileMenu}>
              <FaReact className="navbar-icon" />
              REACT SITE
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  SERVICES
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  PRODUCTS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Navbar;
