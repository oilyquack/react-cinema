import React from "react";

function Movie({ movie, receiveMainPoster }) {
  function handleClick(event) {
    event.preventDefault();

    receiveMainPoster(movie.Poster, movie.Title, movie.imdbID, movie);
  }

  return (
    <a
      className="app__movies__movie"
      movie={movie}
      id={movie.imdbID}
      onClick={handleClick}
    >
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
