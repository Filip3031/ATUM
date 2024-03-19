import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
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
        <h3>ATUM</h3>
        <nav className={responsiveNav(isNavOpen)}>
          <a href="/#">OFERTA</a>
          <a href="/#">CENNIK</a>
          <a href="/#">GALERIA ZDJĘĆ</a>
          <a href="/#">O NAS</a>
          <a href="/#">KONTAKT</a>
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
