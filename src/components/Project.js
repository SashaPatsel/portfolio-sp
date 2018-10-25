import React, { Component } from "react";

const Project = props => (
  <div className="project">
    <div className="project__heading">
      <h3 className="project__heading--title">{props.name}</h3>
    </div>
    <img className="project__img" src={props.img}/>
    <div className="project__about">
    <div className="project__links">
      <div className=" project__button">
        <a href={props.github} target="_blank">
        <svg class="project__icon">
          <use xlinkHref="assets/images/sprite.svg#icon-github">
          </use>
        </svg>
        </a>
      </div>
    {props.deployed ?  <div className="project__button">
        <a href={props.deployed} target="_blank">
        <svg class="project__icon">
          <use xlinkHref="assets/images/sprite.svg#icon-sphere">
          </use>
        </svg>
        </a>
      </div> : null}
      </div>
    </div>
  </div>
)

export default Project

// style={{backgroundImage:props.img}}