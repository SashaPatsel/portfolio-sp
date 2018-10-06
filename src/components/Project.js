import React, { Component } from "react";

const Project = props => (
  <div className="project" style={{backgroundImage:props.img}}>
    <div className="project__heading">
      <h3 className="project__heading--title">{props.name}</h3>
    </div>

    <div className="project__links"></div>
      <div className="card__details--icon-gh project__button">
        <a href={props.github} target="_blank">
          <img className="card__details--icon-img " src="https://png.icons8.com/metro/1600/github.png" alt="codepenlink" />
        </a>
      </div>
    {props.deployed ?  <div className="card__details--icon-hr project__button">
        <a href={props.deployed} target="_blank">
          <i className="fas fa-globe"></i>
        </a>
      </div> : null}
     
    
  </div>
)

export default Project