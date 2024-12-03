import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
    closeMenu();
  };

  return (
    <nav>
      <FaBars className="navOpenBtn" onClick={openMenu} />
      <h3 className="logo">Task Tracker</h3>

      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <FaTimes className="navCloseBtn" onClick={closeMenu} />
        <li>
          <button className="nav-link" onClick={() => handleNavigation("/")}>
            Home
          </button>
        </li>
        <li>
          <button className="nav-link" onClick={() => handleNavigation("/about")}>
            About Us
          </button>
        </li>
        <li>
          <button className="nav-link" onClick={() => handleNavigation("/contactus")}>
            Contact Us
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
