import { MdClose } from 'react-icons/md';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css"
import { useState } from "react";

const Navbar = () => {
  const [showCloseBtn, setShowCloseBtn] = useState(false);
  const [showMenuBtn, setShowMenuBtn] = useState(true);


  const ToggleBtn = () => {
    setShowCloseBtn(!showCloseBtn);
    setShowMenuBtn(!showMenuBtn);
    console.log(showCloseBtn)
  }
  return (
    <>
      <header className="header">
        <h3 className="header-logo">Show Time</h3>
        <nav className="header-nav">
          {showCloseBtn && (
            <ul className="nav-link-list nav-menu-list">
              <li><a href="/#" className="nav-link">Term Insurance</a></li>
              <li><a href="/#" className="nav-link">Customer Service</a></li>
              <li><a href="/#" className="nav-link">About Us</a></li>
            </ul>
          )}

          {showCloseBtn && (
            <button className="nav-btns nav-close-btn" onClick={ToggleBtn}>
              <MdClose />
            </button>
          )}
        </nav>
        {showMenuBtn && (
          <button className="nav-btns" onClick={ToggleBtn}>
            <FontAwesomeIcon icon={faBars} style={{ background: "none", border: "none" }} />
          </button>
        )}
      </header>
    </>
  );
};

export default Navbar;