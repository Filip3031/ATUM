import React, { useState } from "react";
import { FaBars, FaTimes, FaPhoneSquareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const showNavbar = (btnType) => {
    if (btnType === "toggle") {
      setIsNavOpen(!isNavOpen);
    } else if (btnType === "close") {
      setIsNavOpen(false);
    }
  };

  const responsiveNav = (isOpen) =>
    `bookmarks ${isOpen ? "responsive-nav" : ""}`;

  return (
    <section id="nav">
      <div className={"navbar" + (isNavOpen ? " hide" : "")}>
        <nav className={responsiveNav(isNavOpen)}>
          <div className="links">
            <h3 className="logo">
              <Link to={"/"}>ATUM</Link>
            </h3>
            <a href="/#offer">OFERTA</a>

            <Link to="/gallery">GALERIA ZDJĘĆ</Link>

            <a href="/#header">O NAS</a>
            <a href="/#contact">KONTAKT</a>
            <div className="phone">
              <a href="tel:+48790319878">
                <FaPhoneSquareAlt size={20} />
                <p>790 319 878</p>
              </a>
            </div>
          </div>

          <button
            className="nav-btn nav-close-btn"
            onClick={() => showNavbar("close")}
          >
            <FaTimes />
          </button>
        </nav>
        <button
          className="nav-btn nav-open-btn"
          onClick={() => showNavbar("toggle")}
        >
          <FaBars />
        </button>
      </div>
    </section>
  );
};

export default Navbar;
