import "./aboutProject.css";
import "atropos/css";
import Atropos from "atropos";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function AboutProject() {
  useEffect(() => {
    const myAtropos = Atropos({
      el: ".my-atropos3",
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <Link to={"/"}>
              <h5>
                <i className="bi bi-arrow-left fs-1"></i>
              </h5>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <h1 className="mb-5">About this project</h1>
            <p style={{ textAlign: "justify" }}>
              This project's main goal is to continue improving my skills in the
              technologies I learned during my coding bootcamp experience at
              Hack Academy. Additionally, I wanted to put into practice a
              library called Atropos, which allows creating the 3D effects used
              in the cards. One of the most significant challenges in this
              process was working entirely independently. Although it initially
              seemed like an obstacle, it quickly turned into a valuable
              opportunity to showcase my self-management and problem-solving
              abilities. I learned to make critical decisions on my own and to
              overcome obstacles effectively. This project not only helped me
              solidify my technical skills but also provided me with valuable
              experience in decision-making and project management.
            </p>
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <h2 className="mb-4">Duration</h2>
          <div className="col-12 col-sm-6">
            <p>
              The development time for this project was approximately 2 weeks,
              during which I worked from Monday to Friday for approximately 5
              hours per day.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <h2 className="mb-4">About me</h2>
          <div style={{ textAlign: "justify" }} className="col-12 col-md-6">
            <p>
              My name is Facundo Riñón, I'm 27 years old, and I am a graduate of
              Hack Academy's coding bootcamp. Throughout this program, I
              dedicated over 600 hours to become a full stack developer.
              Currently, I am actively seeking my first professional experience
              in the IT industry, and I invest a significant amount of my time
              in creating projects to showcase my skills. In addition to my
              technical pursuits, I am also an advanced psychology student,
              having completed over 95% of my coursework. This dual educational
              background allows me to bring a unique perspective and
              problem-solving approach to my work.
            </p>
            <Link
              target="blank"
              className="text-white no-underline"
              to={"https://web-portfolio-facundorinon.vercel.app/"}
            >
              <p id="portfolioLogo">
                <i className="bi bi-collection"></i> Web portfolio
              </p>
            </Link>
            <Link
              target="blank"
              className="text-white no-underline"
              to={
                "https://www.linkedin.com/in/facundo-ri%C3%B1%C3%B3n-93b730220/"
              }
            >
              <p id="linkedinLogo">
                <i className="bi bi-linkedin"></i> Linkedin
              </p>
            </Link>
            <Link
              target="blank"
              className="text-white no-underline"
              to={"https://github.com/FacundoRinon"}
            >
              <p id="githubLogo">
                <i className="bi bi-github"></i> GitHub
              </p>
            </Link>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div class="atropos my-atropos3">
              <div class="atropos-scale">
                <div class="atropos-rotate">
                  <div class="atropos-inner">
                    <img
                      src={`${import.meta.env.VITE_IMG_URL}/myPic.jpeg`}
                      className="myPic"
                      alt=""
                      data-atropos-offset="-3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-center mt-5 mb-5">
          <h2 className="mb-4">Technologies</h2>
          <div className="col-12 col-sm-6 mt-3 mb-3">
            <h4>Front</h4>
            <p style={{ textAlign: "justify" }}>
              For the development of the application on the front-end, I used
              the technologies Redux.js and React.js, which I want to continue
              practicing as I find them very effective and enjoyable to use.
            </p>
            <div className="row mt-3">
              <div className="col">
                <img
                  className="techLogo"
                  src={`${import.meta.env.VITE_IMG_URL2}/react.png`}
                  alt=""
                />
                <p>React.js</p>
              </div>
              <div className="col">
                <img
                  className="techLogo"
                  src={`${import.meta.env.VITE_IMG_URL2}/redux.png`}
                  alt=""
                />
                <p>Redux.js</p>
              </div>
              <div className="col">
                <img
                  className="techLogo"
                  src={`${import.meta.env.VITE_IMG_URL2}/Bootstrap.png`}
                  alt=""
                />
                <p>Bootstrap</p>
              </div>
              <div className="col">
                <img
                  className="techLogo"
                  src={`${import.meta.env.VITE_IMG_URL2}/css.png`}
                  alt=""
                />
                <p>CSS</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 mt-3 mb-3">
            <h4>Back</h4>
            <p style={{ textAlign: "justify" }}>
              For the back-end, I developed a Rest API using the technologies
              Node.js and Express.js, which was powered by a non-relational
              database with MongoDB technology.
            </p>
            <div className="row mt-3">
              <div className="col">
                <img
                  className="techLogo"
                  src={`${import.meta.env.VITE_IMG_URL2}/node.png`}
                  alt=""
                />
                <p>Node.js</p>
              </div>
              <div className="col">
                <img
                  className="techLogo"
                  src={`${import.meta.env.VITE_IMG_URL2}/mongoDB.png`}
                  alt=""
                />
                <p>MongoDB</p>
              </div>
              <div className="col">
                <img
                  className="techLogo"
                  src={`${import.meta.env.VITE_IMG_URL2}/JS.png`}
                  alt=""
                />
                <p>JavaScript</p>
              </div>
              <div className="col">
                <img
                  className="techLogo"
                  src={`${import.meta.env.VITE_IMG_URL2}/Git.png`}
                  alt=""
                />
                <p>Github</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutProject;
