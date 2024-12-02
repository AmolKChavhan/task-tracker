import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <FaBars className="navOpenBtn" onClick={openMenu} />
      <h3 className="logo">Task Tracker</h3>

      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <FaTimes className="navCloseBtn" onClick={closeMenu} />
        <li>
          <button className="nav-link">Home</button>
        </li>
        <li>
          <button className="nav-link">About Us</button>
        </li>
        <li>
          <button className="nav-link">Contact Us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
