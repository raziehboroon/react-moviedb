import React from "react";
import "./About.scss";

const About = () => {
  return (
    <main>
      <section className="section about-section">
        <div className="about-content">
          <h2>About</h2>
          <h4>
            This product uses the TMDb API but is not endorsed or certified by
            TMDb.
          </h4>
        </div>
      </section>
    </main>
  );
};

export default About;
