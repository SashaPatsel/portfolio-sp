import React, { Component } from 'react';

import About from "../sections/About"
import Footer from "../sections/Footer"
import Header from "../sections/Header"
import Portfolio from "../sections/Portfolio"

import Nav from "../components/Nav"
import Parallax from "../components/Parallax"




class Main extends Component {
  render() {
    return (
      <div >
        <Nav/>
        <Parallax/>
        <Header/>
        <Portfolio/>
        <About/>
        <Footer/>
      </div>
    );
  }
}

export default Main;
