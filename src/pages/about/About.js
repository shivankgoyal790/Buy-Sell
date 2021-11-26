import React from "react";
import { Fragment } from "react";
import "./About.css";
import TeamMember from "./TeamMember";
const About = () => {
  return (
    <Fragment>
      <div className="aboutus-bg w-100 d-flex justify-content-center align-items-center">
        <h1
          className="text-center text-white display-1"
          style={{ fontWeight: "700" }}
        >
          About Us
        </h1>
      </div>
      <div className="w-100 bg-con pt-5">
        <div className=" container">
          <h1>Our Mission</h1>
          <hr
            className="border border-2 border-danger m-0 mt-1 ms-1"
            style={{ width: "120px", opacity: "1" }}
          ></hr>
          <div className="d-flex flex-md-row flex-column justify-content-center align-items-center gap-5 pt-4">
            <div className="col-md-5 col-12 text-center">
              <img
                src="https://cdn.dribbble.com/users/1059583/screenshots/4171367/coding-freak.gif"
                alt="img"
                width="100%"
              />
            </div>
            <p
              className="m-0 col-md-7 col-12 text-md-start text-center"
              style={{ fontSize: "20px" }}
            >
              This project supports the process of doing business online. The
              main objective of this project is to allow small business as well
              as individuals to sell their products and services online,
              products can be new, refurbished, and pre-used as well which will
              be made clear to the buyer. The UI of this project makes it easy
              for seller to list his/her product on website and for buyer to
              purchase the desired product under economical budget. The
              condition of the products listed will be available on website and
              can be checked by the users. Not only these features but also some
              useful tools like comparison, chat-with-seller,
              navigation-support, etc. are also available to make the buy-sell
              process easy.
            </p>
          </div>
        </div>
      </div>
      <div class="container mt-5">
        <h1>Our Supervisor</h1>
        <hr
          className="border border-2 border-danger m-0 mt-1 ms-1"
          style={{ width: "120px", opacity: "1" }}
        ></hr>
        <div className="w-100 d-flex gap-5 flex-wrap justify-content-center mt-5">
          <TeamMember
            name="Ms Amarjeet Kaur"
            src="https://www.jiit.ac.in/sites/default/files/amarjeet%20kaur.jpg"
            designation="Teacher"
            protfolio="https://www.jiit.ac.in/amarjeet-kaur"
            linkedin="https://www.linkedin.com/signup"
          />
        </div>
      </div>
      <div class="container mt-5">
        <h1>Our Team</h1>
        <hr
          className="border border-2 border-danger m-0 mt-1 ms-1"
          style={{ width: "120px", opacity: "1" }}
        ></hr>
        <div className="w-100 d-flex gap-5 flex-wrap justify-content-center mt-5">
          <TeamMember
            name="Shivank Goyal"
            enroll="19103124"
            src="https://avatars.githubusercontent.com/u/71492552?v=4"
            designation="Full Stack Developer & Designer"
            github="https://github.com/shivankgoyal790"
            linkedin="https://www.linkedin.com/signup"
            protfolio=""
          />
          <TeamMember
            name="Anurag Singh"
            enroll="19103150"
            src="https://avatars.githubusercontent.com/u/63997049?s=400&u=9873b3e58be9ef3039a83c764bb40f468723cb8e&v=4"
            designation="React Developer"
            github="https://github.com/anuragc10"
            linkedin="https://www.linkedin.com/in/anurag-singh-a428a61ab/"
            protfolio=""
          />
          <TeamMember
            name="Divyansh Bhargava"
            enroll="19103127"
            src="	https://avatars.githubusercontent.com/u/64961736?v=4"
            designation="MERN Stack Developer"
            github="https://github.com/Divyansh62"
            linkedin="https://www.linkedin.com/signup"
            protfolio=""
          />
        </div>
      </div>
    </Fragment>
  );
};

export default About;
