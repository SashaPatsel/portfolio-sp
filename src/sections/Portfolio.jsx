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

// const stack = {
//   html: "https://cdn0.iconfinder.com/data/icons/HTML5/512/HTML_Logo.png",
//   css: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/2000px-CSS.3.svg.png",
//   sass: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2000px-Sass_Logo_Color.svg.png",
//   js: "https://quintagroup.com/cms/js/js-image/javascript-logo.png/image_preview",
//   react: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png",
//   jquery: "http://pluspng.com/img-png/jquery-logo-png-jquery-320.png",
//   firebase: "http://www.stickpng.com/assets/images/5847f40ecef1014c0b5e488a.png",
//   node: "https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png",
//   express: "https://rishabh.io/recipes/img/004-express-js.png",
//   mysql: "http://www.pngall.com/wp-content/uploads/2016/05/MySQL-Logo.png",
//   sequelize: "https://cdn.freebiesupply.com/logos/large/2x/sequelize-logo-png-transparent.png",
//   mongo: "https://static1.squarespace.com/static/513914cde4b0f86e34bbb954/t/58d2c758725e25221a20ed53/1490208601230/mongodb-logo.png",
//   mongoose: "https://nesoy.github.io/assets/posts/20170602/1.PNG",
//   passport: "https://cdn.glitch.com/project-avatar/0d184ee3-fd8d-4b94-acf4-b4e686e57375.png",
//   handlebars: "https://i0.wp.com/blog.fossasia.org/wp-content/uploads/2017/07/handlebars-js.png?resize=500%2C500&ssl=1"
// }

const languages = [
  {
    name: "Python",
    src: "assets/images/logos/python.png"
  },
  {
    name: "javascript",
    src: "assets/images/logos/javascript.png"
  },
  {
    name: "html",
    src: "assets/images/logos/html.png"
  },
  {
    name: "css",
    src: "assets/images/logos/css.png"
  },
]

const frameworks = [
  {
    name: "Django",
    src: "assets/images/logos/django.jpg"
  },
  {
    name: "react",
    src: "assets/images/logos/react.png"
  },
  {
    name: "sass",
    src: "assets/images/logos/sass.png"
  },
  {
    name: "Flask",
    src: "assets/images/logos/flask.png"
  },
  {
    name: "jquery",
    src: "assets/images/logos/jquery.png"
  },
  {
    name: "node",
    src: "assets/images/logos/node.png"
  },
]

const libraries = [
  {
    name: "GDAL",
    src: "assets/images/logos/gdal.png"
  },
  {
    name: "express.js",
    src: "assets/images/logos/express.png"
  },
  {
    name: "passport.js",
    src: "assets/images/logos/passport.png"
  },
  {
    name: "sequelize",
    src: "assets/images/logos/sequelize.png"
  },
]

const databases = [
  {
    name: "SQL",
    src: "assets/images/logos/sql.png"
  },
  {
    name: "Mongo",
    src: "assets/images/logos/mongo.png"
  },
  {
    name: "firebase",
    src: "assets/images/logos/firebase.png"
  },
]

const deployment = [
  {
    name: "Digital Ocean",
    src: "assets/images/logos/digitalocean.png"
  },
  {
    name: "Nginx",
    src: "assets/images/logos/nginx.png"
  },
  {
    name: "Gunicorn",
    src: "assets/images/logos/gunicorn.png"
  },
  {
    name: "Heroku",
    src: "assets/images/logos/heroku.png"
  },
]

const Portfolio = (props) => (
  <section className="portfolio" id="portfolio">
    <h3 className="portfolio__heading">My Stack</h3>

    <div className="jumbotron u-pad-md">

      <h3 className="h__3 h__3--ko u-mgn-btm-sm">Languages</h3>
      <div className="u-flex u-flex-justify-start u-flex-wrap u-mgn-btm-md">
        {languages.map(l => (
          <div className="u-mgn-btm-sm u-mgn-right-md u-flex u-flex-column u-flex-align-center">
            <img className="u-img-sm u-img-fit-contain u-mgn-btm-sm" src={l.src} />
            <p className="p__1 p__1--ko">{l.name}</p>
          </div>
        ))}
      </div>

      <h3 className="h__3 h__3--ko u-mgn-btm-sm">Frameworks</h3>
      <div className="u-flex u-flex-justify-start u-flex-wrap u-mgn-btm-md">
        {frameworks.map(f => (
          <div className="u-mgn-btm-sm u-mgn-right-md u-flex u-flex-column u-flex-align-center">
            <img className="u-img-sm u-img-fit-contain u-mgn-btm-sm" src={f.src} />
            <p className="p__1 p__1--ko">{f.name}</p>
          </div>
        ))}
      </div>

      <h3 className="h__3 h__3--ko u-mgn-btm-sm">Libraries</h3>
      <div className="u-flex u-flex-justify-start u-flex-wrap u-mgn-btm-md">
        {libraries.map(l => (
          <div className="u-mgn-btm-sm u-mgn-right-md u-flex u-flex-column u-flex-align-center">
            <img className="u-img-sm u-img-fit-contain u-mgn-btm-sm" src={l.src} />
            <p className="p__1 p__1--ko">{l.name}</p>
          </div>
        ))}
      </div>

      <h3 className="h__3 h__3--ko u-mgn-btm-sm">Databases</h3>
      <div className="u-flex u-flex-justify-start u-flex-wrap u-mgn-btm-md">
        {databases.map(d => (
          <div className="u-mgn-btm-sm u-mgn-right-md u-flex u-flex-column u-flex-align-center">
            <img className="u-img-sm u-img-fit-contain u-mgn-btm-sm" src={d.src} />
            <p className="p__1 p__1--ko">{d.name}</p>
          </div>
        ))}
      </div>

      <h3 className="h__3 h__3--ko u-mgn-btm-sm">Deployment</h3>
      <div className="u-flex u-flex-justify-start u-flex-wrap u-mgn-btm-md">
        {deployment.map(d => (
          <div className="u-mgn-btm-sm u-mgn-right-md u-flex u-flex-column u-flex-align-center">
            <img className="u-img-sm u-img-fit-contain u-mgn-btm-sm" src={d.src} />
            <p className="p__1 p__1--ko">{d.name}</p>
          </div>
        ))}
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
      <h5 className="jumbotron--heading-sub">Examples of projects students are guided through in these code drills.</h5>

      <div className="col-1-of-2">
        <Card
          backgroundImg={cards["11"]}
          heading={"rate-a-restaurant app"}
          desc1={"Rate-a-restaurant is about learning how to create a full-stack app with a node-mysql backend and a jquery front-end. The basics of RESTful routing are covered as well. Rate-a-restaurant is great practice for CRUD operatons! "}
          desc2={"Rate-a-restaurant allows a user to input a restaurant of their choice, which is then saved in a database. The user can then update the ratings of the restaurant, which are also stored and maintained."}
          github={"https://github.com/SashaPatsel/coding-drills/tree/master/express/rate-a-restaurant"}
          deployed={"https://rate-a-restaurant-app.herokuapp.com/"}
        >
          {/* <li>
            <img className="card__details--logo" src={stack.mysql} /> mysql
        </li>
          <li>
            <img className="card__details--logo" src={stack.express} />Express</li>
          <li>
            <img className="card__details--logo" src={stack.jquery} />jquery</li>
          <li>
            <img className="card__details--logo" src={stack.node} />Node</li> */}

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
          {/* <li>
            <img className="card__details--logo" src={stack.node} />Node</li>
          <li>
            <img className="card__details--logo" src={stack.express} />Express</li>


          <li>
            <img className="card__details--logo" src={stack.jquery} />jquery</li> */}

        </Card>

      </div>

    </div>


    <h4 className="portfolio__heading portfolio__heading-sub">Personal Projects</h4>
    <h5 className="portfolio__heading portfolio__heading-sub--desc">A few Examples</h5>


    <div className="project__row">
      <Project
        name="Pacifica.com"
        img="assets/images/pacifica.png"
        description="Pacifica.com is a template for a brochure-type website with a modern look. It features several advanced CSS techniques that bring the page to life."
        github="https://github.com/SashaPatsel/pacifica.com" deployed="https://sashapatsel.github.io/pacifica.com/" />



      <Project
        name="The News Room"
        img="assets/images/the-news-room.png"
        description="The News Room is your one-stop-shop to get news from every source. Instead of scouring the internet or looking through your feed on facebook, The News Room keeps news from every news source in one place!"
        github="https://github.com/SashaPatsel/all-the-news"
        deployed="https://the-news-room-sp.herokuapp.com/"
      />
    </div>




    <div className="project__row">
      <Project
        name="Book.me"
        img="assets/images/bookme.png"
        description="Book.me is a template for a hotel booking site's main interface. With a sleek, modern look, it takes advantage of some of the newest and most useful features in CSS."
        github="https://github.com/SashaPatsel/book.me"
        deployed="https://sashapatsel.github.io/book.me/"
      />

      <Project
        name="HQ"
        img="assets/images/hq.png"
        description="HQ is a user homepage. Inspired by the Chrome extension Momentum, HQ offers users several useful features to unique users. HQ fetures secure authentication, live news, a personal journal, and much more!"
        github="https://github.com/SashaPatsel/hq-extension"
        deployed="https://sashapatsel.github.io/hq-extension/"
      />



    </div>



    <div className="project__row">
      <Project
        name="Super Smash Bros"
        img="assets/images/super-smash.png"
        description="This game is one of my first ever projects! Super Smash Bros is an RPG battle game. Pick a character and then choose your opponents wisely as you make it through the gauntlet of the melee."
        github="https://github.com/SashaPatsel/super-smash-rpg" deployed="https://sashapatsel.github.io/super-smash-rpg/" />

      <Project
        name="Hangman"
        img="assets/images/hangman.png"
        description="Hangman is my first ever project with client-side javascript. Test your NBA hostory knowledge as you guess names one by one."
        github="https://github.com/SashaPatsel/Hangman-Game" deployed="https://sashapatsel.github.io/Hangman-Game/" />


    </div>






    <div className="project__row">

      <Project
        name="Bamazon"
        description="Bamazon is a shopping simulator powered by a MySQL database and Node.js. It is a CLI app, so please refer to the github page for instructions to use it."
        img="assets/images/bamazon-demo.gif"
        github="https://github.com/SashaPatsel/bamazon-app"
      />


      <Project
        name="Pretty-Much-Netflix"
        img="assets/images/netflix.png"
        description="Pretty-Much-Netflix uses the Gify API to provide any gif a user searches for. The theme of this application is TV shows, but feel free to search for any gif of your choice!"
        github="https://github.com/SashaPatsel/pretty-much-netflix" deployed="https://sashapatsel.github.io/pretty-much-netflix/" />

    </div>


  </section>
)

export default Portfolio;