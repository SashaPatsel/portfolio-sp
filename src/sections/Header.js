import React, {Component} from "react";

const header = {
  backgroundImage: 'url("assets/images/sf-fog.gif")',
  backgroundSize: 'cover',
  backgroundPosition: 'top',
  height: '80rem',
  position: 'relative',
  marginBottom: '8rem'
}

const Header = (props) => (
  <section style={header} className="header">
  <div className="header__heading">

    <h1 className="header__heading--main">Sasha Patsel</h1>



    <h2 className="header__heading--sub">Software Engineer</h2>

    <a href="#portfolio">
      <i className="fa fa-angle-double-down header__scroll"></i>
    </a>
  </div>

  </section>
)

export default Header;