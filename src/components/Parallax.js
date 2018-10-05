import React from "react";

const parallax = {
  backgroundImage: 'linear-gradient(),url("assets/images/beach.jpeg")',
  position: 'fixed',
  height: '100vh',
  width: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'top',
  backgroundBlendMode: 'screen',
  position: 'fixed',
  zIndex: -2
}

const Parallax = (props) => (
  <div className="parallax"></div>
)

export default Parallax