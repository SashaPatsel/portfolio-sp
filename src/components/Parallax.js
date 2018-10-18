import React from "react";

const parallax = {
  backgroundImage: 'linear-gradient(to right bottom,rgba(84,27,161, 1), rgba(237,148,21, 1)),url("assets/images/beach.jpeg")',
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
  <div style={parallax}></div>
)

export default Parallax