import React, {Component} from "react";

const Nav = (props) => (
<nav className="nav">

<div className="nav__logo-box">
  <img src="assets/images/sp-logo3.png" alt="sp-logo" className="nav__logo" />
  <div className="nav__logo-wrap"></div>
</div>

<ul>
  <li>
    <a className="nav__links" href="#portfolio">Portfolio</a>
  </li>
  <li>
    <a className="nav__links" href="#about">About Me</a>
  </li>
  <li>
    <a className="nav__links" href="#footer">Contact</a>
  </li>

</ul>
</nav>

)

export default Nav