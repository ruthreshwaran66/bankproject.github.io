import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#/home" className="nav-link">
            HOME
          </a>
        </li>
        <li className="nav-item">
          <a href="#/login/" className="nav-link">
            CREATE ACCOUNT
          </a>
        </li>
        <li className="nav-item">
          <a href="#/deposit" className="nav-link">
            DEPOSIT
          </a>
        </li>
        <li className="nav-item">
          <a href="#/withdraw/" className="nav-link">
            WITHDRAW
          </a>
        </li>
        <li className="nav-item">
          <a href="#/AllData/" className="nav-link">
            ALLDATA
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
