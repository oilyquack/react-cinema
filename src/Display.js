import React from "react";

function Display({ mainPoster, mainTitle, mainID }) {
  return (
    <figure className="app__display">
      <a href={`https://www.imdb.com/title/${mainID}`} target="_blank">
        <img
          src={
            mainPoster === "N/A"
              ? "http://www.statusav.com/wp-content/uploads/2012/09/Projector-service.jpg"
              : mainPoster
          }
          className="app__display--poster"
        />
      </a>

      <h2>{mainTitle}</h2>
    </figure>
  );
}

export default Display;
