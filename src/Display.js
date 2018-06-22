import React from "react";

function Display({ mainPoster }) {
  return (
    <figure className="app__display">
      <img
        src={
          mainPoster === "N/A"
            ? "http://www.statusav.com/wp-content/uploads/2012/09/Projector-service.jpg"
            : mainPoster
        }
        className="app__display--poster"
      />
    </figure>
  );
}

export default Display;
