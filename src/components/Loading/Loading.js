//resource related to loading animation is available at https://loading.io/css/

import React from "react";
import "./Loading.scss";

const Loading = () => {
  return (
    <section className="section loading-section">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default Loading;
