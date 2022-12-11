import React from "react";
import "./Home.css";
import Typical from "react-typical";
import profile from "./profile.jpeg";

const Home = (props) => {

  const Resume=()=>
  {
    props.displayAlert("Resume Downloaded","success");
  }
  return (
    <div className="container-fluid  bg-dark text-light">
      <div className="container">
        <img  className="img-style fade-in-profile resp" src={profile} alt="profile" />

        <h5 className="text-light my-2 fade-in-text">
          Hey👋 I am <span className="text-warning fade-in-text1 ">Asima Jamal</span>
        </h5>
        <h1 className="my-3 text-light fade-in-text2 ">
          <Typical
            loop={Infinity}
            steps={[
              "Front End Web Developer 💻",
              2000,
              "React Js Developer 👩‍💻",
              2000,
              "Wordpress Developer 🖥️",
              2000,
              "UI/UX Designer 🙂",
              2000,
            ]}
          ></Typical>
        </h1>

        <p className="text-muted fade-in-text3 ">
           I am graduated from the University of engineering and technology
           in 2022 with a degree in computer software Engineering. My interests are in
          Front End Engineering, and I love to create beautiful and performant
          products with delightful user experiences
        </p>
        <div className="my-4 ">
          <a
            href="https://asimajamal789@gmail.com"
            rel="noreferrer"
            target="_blank"
          ><button type="button" class="btn btn-light  ">
              Hire Me
            </button>
          </a>
          <a href="MyCv.pdf" download="Asma.pdf">
            <button type="button" class="btn btn-warning mx-1 btnn " onClick={Resume}>
             Get Resume
            </button>
          </a>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Home;
