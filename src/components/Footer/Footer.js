import "./Footer.scss";
import React from "react";
// Function(s)
import { getDate } from "../../helpers/functions";

const Footer = () => {
  return (
    <footer>
      <h5>&copy; {getDate()} Razieh Boroon. all rights reserved</h5>
    </footer>
  );
};

export default Footer;
