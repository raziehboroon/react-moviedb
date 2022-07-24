//resource related to loading animation is available at https://loading.io/css/

import "./Loading.scss";
import React from "react";

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
