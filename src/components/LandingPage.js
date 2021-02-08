import React from "react";

const LandingPage = ({ bgColor }) => {
  return (
    <div className={` ${bgColor} landing-page`}>
      <div>
        <p>
          Discovering talents. Creativity.
          <br /> Great Quality
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
