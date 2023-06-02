import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul className="navbar__nav">
          <li className="nav__item">
            <Link className="nav-link" to={"/react-portfolio"}>
              家
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav-link" to={"/react-portfolio/about"}>
              だいたい
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav-link" to={"/react-portfolio/projects"}>
              プロジェクト
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav-link" to={"/react-portfolio/contact"}>
              コンタクト
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
