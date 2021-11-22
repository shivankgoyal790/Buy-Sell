import React from "react";
import { Fragment } from "react";
import "./About.css";
const About = () => {
  return (
    <Fragment>
      <div className="AboutWebsite">
        <img
          src="https://cdn.dribbble.com/users/1059583/screenshots/4171367/coding-freak.gif"
          alt=""
        />
        <p>
          This project supports the process of doing business online. The main
          objective of this project is to allow small business as well as
          individuals to sell their products and services online, products can
          be new, refurbished, and pre-used as well which will be made clear to
          the buyer. The UI of this project makes it easy for seller to list
          his/her product on website and for buyer to purchase the desired
          product under economical budget. The condition of the products listed
          will be available on website and can be checked by the users. Not only
          these features but also some useful tools like comparison,
          chat-with-seller, navigation-support, etc. are also available to make
          the buy-sell process easy.
        </p>
      </div>

      <div class="aboutus">
        <img
          class="img-circle"
          src="https://avatars.githubusercontent.com/u/71492552?v=4"
          alt=""
        />

        <h1 class="nombre">Shivank Goyal</h1>
        <h2 class="acerca">
          191031__ | Jaypee Institute of Information Technology, Noida.
        </h2>
        <h3 class="acerca">React App Developer</h3>
        <nav>
          <a class="espacio" href="https://www.facebook.com">
            Facebook
          </a>
          <a class="espacio" href="https://twitter.com">
            Twitter
          </a>
          <a class="espacio" href="">
            Github
          </a>
        </nav>
        <img
          class="img-circle"
          src="https://avatars.githubusercontent.com/u/63997049?s=400&u=9873b3e58be9ef3039a83c764bb40f468723cb8e&v=4"
          alt=""
        />
        <h1 class="nombre">Anurag Singh</h1>
        <h2 class="acerca">
          191031__ | Jaypee Institute of Information Technology, Noida.
        </h2>
        <h3 class="acerca">React App Developer</h3>
        <nav>
          <a class="espacio" href="https://www.facebook.com">
            Facebook
          </a>
          <a class="espacio" href="https://twitter.com">
            Twitter
          </a>
          <a class="espacio" href="">
            Github
          </a>
        </nav>
        <img
          class="img-circle"
          src="https://i.pinimg.com/originals/d5/b0/4c/d5b04cc3dcd8c17702549ebc5f1acf1a.png"
          alt=""
        />
        <h1 class="nombre">Divyansh Bhargava</h1>
        <h2 class="acerca">
          191031__ | Jaypee Institute of Information Technology, Noida.
        </h2>
        <h3 class="acerca">React App Developer</h3>
        <nav>
          <a class="espacio" href="https://www.facebook.com">
            Facebook
          </a>
          <a class="espacio" href="https://twitter.com">
            Twitter
          </a>
          <a class="espacio" href="">
            Github
          </a>
        </nav>
      </div>
    </Fragment>
  );
};

export default About;
