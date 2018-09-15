import React, {Component} from "react"

const Card = (props, children) => (
<div className="card">
        <div className="card__side card__side--front">
          <div className="card__picture" style={props.backGroundImg}>

            &nbsp;
    </div>



          <div className="card__about">
            <h5 className="card__about--name">{props.heading}</h5>

            {props.description}

            <p className="card__about--desc"></p>
          </div>

        </div>
        <div className="card__side card__side--back card__side--back-1">
          <div className="card__details">
            <h5 className="card__details--stack">Stack</h5>

            <ul>
           {props.children}
           </ul>

            <div className="card__details--icon-gh">
              <a href={props.github}target="_blank">
                <img className="card__details--icon-img" src="assets/images/github.png" alt="codepenlink" />
              </a>
            </div>

            <div className="card__details--icon-hr">
              <a href={props.deployed} target="_blank">
                <i className="fas fa-globe"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
)

export default Card