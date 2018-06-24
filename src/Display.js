import React from "react";

function Display({ mainPoster, movie }) {
  return (
    <figure className="app__display">
      <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank">
        <img
          src={
            mainPoster === "N/A"
              ? "http://www.statusav.com/wp-content/uploads/2012/09/Projector-service.jpg"
              : mainPoster
          }
          className="app__display--poster"
        />
      </a>
      <h2>{movie.Title}</h2>
    </figure>
  );
}

export default Display;
