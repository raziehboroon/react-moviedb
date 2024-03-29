import "./About.scss";
import React from "react";

const About = () => {
  return (
    <main>
      <section className="section about-section">
        <div className="about-content">
          <h2>About</h2>
          <h4>
            This product uses the{" "}
            <a href="https://www.themoviedb.org/documentation/api?language=en-US">
              TMDb
            </a>{" "}
            API but is not endorsed or certified by TMDb.
          </h4>
        </div>
      </section>
    </main>
  );
};

export default About;
