import React from "react";

function Movie({ movie }) {
  return (
    <a className="app__movies__movie" id={movie.imdbID}>
      <img src={movie.Poster} className="app__movies__movie--img" />
    </a>
  );
}

export default Movie;
