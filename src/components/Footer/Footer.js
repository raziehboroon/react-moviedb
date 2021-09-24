import React from "react";
import "./Footer.scss";

const Footer = () => {
  const getCopyrightDate = () => {
    const date = new Date();
    return date.getFullYear();
  };
  return (
    <footer>
      <h5>&copy; {getCopyrightDate()} Razieh Boroon. all rights reserved</h5>
    </footer>
  );
};

export default Footer;
