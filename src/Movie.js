import React from "react";

function Movie({ movie }) {
  return (
    <a className="app__movies__movie" id={movie.imdbID}>
      <img
        src={
          movie.Poster === "N/A"
            ? "http://www.statusav.com/wp-content/uploads/2012/09/Projector-service.jpg"
            : movie.Poster
        }
        className="app__movies__movie--img"
      />
    </a>
  );
}

export default Movie;
