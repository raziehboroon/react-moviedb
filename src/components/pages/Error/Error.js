import "./Error.scss";
import React from "react";
import { Link } from "react-router-dom";
import errorLogo from "../../../assets/images/logo404-cropped.svg";

const Error = () => {
  return (
    <main>
      <section className="section error-section">
        <div className="error-container">
          <div className="error-content">
            <h3>404 not found</h3>
            <h2>i have bad news for you!</h2>
            <p>
              The page you are looking for might be removed or temporarly
              unavailable.
            </p>
            <Link to="/">
              <button type="button" className="error-btn">
                back to homepage
              </button>
            </Link>
          </div>

          <div className="error-image-container">
            <img src={errorLogo} alt="404 illustration" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Error;
