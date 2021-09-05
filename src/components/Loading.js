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

// https://loading.io/css/
