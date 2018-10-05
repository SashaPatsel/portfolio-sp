import React, { Component } from "react";
import Card from "../components/Card"
import Project from "../components/Project"

const cards = {
  "3": {
    backgroundImage: 'url("assets/images/bamazon-demo.gif")'
  },
  "4": {
    backgroundImage: 'url("assets/images/demo.gif")'
  },
  "5": {
    backgroundImage: 'url("assets/images/hq-demo.png")'
  },
  "11": {
    backgroundImage: 'url("assets/images/rate-a-restaurant.png")'
  },
  "12": {
    backgroundImage: 'url("assets/images/hogwarts.png")'
  }

}

const stack = {
  html: "https://cdn0.iconfinder.com/data/icons/HTML5/512/HTML_Logo.png",
  css: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/2000px-CSS.3.svg.png",
  sass: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2000px-Sass_Logo_Color.svg.png",
  js: "https://quintagroup.com/cms/js/js-image/javascript-logo.png/image_preview",
  react: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png",
  jquery: "http://pluspng.com/img-png/jquery-logo-png-jquery-320.png",
  firebase: "http://www.stickpng.com/assets/images/5847f40ecef1014c0b5e488a.png",
  node: "https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png",
  express: "https://rishabh.io/recipes/img/004-express-js.png",
  mysql: "http://www.pngall.com/wp-content/uploads/2016/05/MySQL-Logo.png",
  sequelize: "https://cdn.freebiesupply.com/logos/large/2x/sequelize-logo-png-transparent.png",
  mongo: "https://static1.squarespace.com/static/513914cde4b0f86e34bbb954/t/58d2c758725e25221a20ed53/1490208601230/mongodb-logo.png",
  mongoose: "https://nesoy.github.io/assets/posts/20170602/1.PNG",
  passport: "https://cdn.glitch.com/project-avatar/0d184ee3-fd8d-4b94-acf4-b4e686e57375.png",
  handlebars: "https://i0.wp.com/blog.fossasia.org/wp-content/uploads/2017/07/handlebars-js.png?resize=500%2C500&ssl=1"
}

const Portfolio = (props) => (
  <section className="portfolio" id="portfolio">
    <h3 className="portfolio__heading">My Stack</h3>

    <div className="row jumbotron">


      <div className="col-1-of-2">
        <div className="jumbotron__stack-details">
          <h5 className="jumbotron__stack-details--stack">Front-End</h5>

          <ul>
            <li>
              <img className="jumbotron__stack-details--logo" src={stack.html} /> HTML
    </li>
            <li>
              <img className="jumbotron__stack-details--logo" src={stack.css} />CSS</li>
            <li>
              <img className="jumbotron__stack-details--logo" src={stack.sass} />sass</li>
            <li>
              <img className="jumbotron__stack-details--logo" src={stack.js} />Javascript</li>
            <li>
              <img className="jumbotron__stack-details--logo" src={stack.react} />react</li>
            <li>
              <img className="jumbotron__stack-details--logo" src={stack.jquery} />JQuery</li>
            <li>
              <img className="jumbotron__stack-details--logo" src={stack.firebase} />Firebase</li>
          </ul>
        </div>
      </div>




      <div className="col-1-of-2">
        <div className="jumbotron__stack-details">
          <h5 className="jumbotron__stack-details--stack">Back-End</h5>

          <ul>
            <li>
              <img className="jumbotron__stack-details--logo" src={stack.node} /> Node
    </li>
            <li>
              <img className="jumbotron__stack-details--logo" src={stack.express} /> Express
    </li>

            <li>
              <img className="jumbotron__stack-details--logo" src={stack.mysql} />mysql</li>
            <li>
              <img className="jumbotron__stack-details--logo" src={stack.sequelize} />sequelize</li>
            <li>
              <img className="jumbotron__stack-details--logo" src={stack.mongo} />mongo</li>
            <li>
              <img className="jumbotron__stack-details--logo" src={stack.mongoose} />mongoose</li>
            <li>
              <img className="jumbotron__stack-details--logo" src={stack.passport} />passport</li>
            <li>
              <img className="jumbotron__stack-details--logo" src={stack.handlebars} />handlebars</li>
          </ul>
        </div>

      </div>
    </div>

    <h3 className="portfolio__heading">Projects</h3>
    <br />
    <h4 className="portfolio__heading portfolio__heading-sub">Code Drills</h4>

    <div className="row jumbotron jumbotron-cd">
      <h4 className="jumbotron--heading">About</h4>
      <p>
        One of my favorite things to work on is designing original code drills. They are at once created to accompany the curriculum of
        the
        &nbsp;<a target="_blank" href="https://www.trilogyed.com/">Trilogy</a> full-stack sotware engineering curriculum, and at the same as a resource for software engineers in training
                          to enhance and practice their skills. These code drills are used nation-wide as a part of Trilogy's Full-Stack software engineering program.
  </p>
      <p>
        People of all skill levels can find useful practice in these code drills. From those who have just started building static web-pages with HTML and CSS, to those looking to build full-stack apps, all can find exercises in these code drills to improve their skills.
  </p>
      <p>

        They contain a mixture of algorithms and project-based exercises. You can use the algorithms within to practice for your next interview,
        or make projects you can add to your own portfolio. Projects include, but are not limited to:
  </p>



      <ul>
        <li>
          <a target="_blank" href="https://github.com/SashaPatsel/coding-drills/tree/master/ajax/yelp">
            An original yelp search engine
  </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/SashaPatsel/coding-drills/tree/master/node/zombie-game/01">
            A command line zombie game
  </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/SashaPatsel/coding-drills/tree/master/MySQL">
            An interactive TV show database
  </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/SashaPatsel/coding-drills">
            and many more...
  </a>
        </li>
      </ul>




      <h4 className="jumbotron--heading">Student Projects</h4>
      <h5 className="jumbotron--heading-sub">Here are some demos of full stack projects students completing these code drills will build.</h5>

      <div className="col-1-of-2">
        <Card
          backgroundImg={cards["11"]}
          heading={"rate-a-restaurant app"}
          desc1={"Rate-a-restaurant is about learning how to create a full-stack app with a node-mysql backend and a jquery front-end. The basics of RESTful routing are covered as well. Rate-a-restaurant is great practice for CRUD operatons! "}
          desc2={"Rate-a-restaurant allows a user to input a restaurant of their choice, which is then saved in a database. The user can then update the ratings of the restaurant, which are also stored and maintained."}
          github={"https://github.com/SashaPatsel/coding-drills/tree/master/express/rate-a-restaurant"}
          deployed={"https://rate-a-restaurant-app.herokuapp.com/"}
        >
          <li>
            <img className="card__details--logo" src={stack.mysql} /> mysql
        </li>
          <li>
            <img className="card__details--logo" src={stack.express} />Express</li>
          <li>
            <img className="card__details--logo" src={stack.jquery} />jquery</li>
          <li>
            <img className="card__details--logo" src={stack.node} />Node</li>

        </Card>
      </div>


      <div className="col-1-of-2">

        <Card
          backgroundImg={cards["12"]}
          heading={"Pass The O.W.L.s"}
          desc1={"Hogwarts is a great way to learn the fundamentals of express. Students learn to use API routes to keep track of user interactions with the application"}
          desc2={"In the Hogwarts app, students enter information for a new student, and then click on skills for the students to aquire on their way to graduating."}
          github={"https://github.com/SashaPatsel/coding-drills/tree/master/express/hogwarts"}
          deployed={"https://hogwarts-415.herokuapp.com/"}
        >
          <li>
            <img className="card__details--logo" src={stack.node} />Node</li>
          <li>
            <img className="card__details--logo" src={stack.express} />Express</li>


          <li>
            <img className="card__details--logo" src={stack.jquery} />jquery</li>

        </Card>

      </div>

    </div>


    <h4 className="portfolio__heading portfolio__heading-sub">Personal Projects</h4>

    <div className="row">

      <div className="col-1-of-3">
        <Project name="Hangman" github="https://github.com/SashaPatsel/Hangman-Game" deployed="https://sashapatsel.github.io/Hangman-Game/" />
      </div>



    </div>







  </section>
)

export default Portfolio;