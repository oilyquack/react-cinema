import React from "react";
import Movie from "./Movie";

function Movies({ movies, receiveMainPoster }) {
  return (
    <div className="app__movies">
      {movies.map(movie => {
        return (
          <Movie
            movie={movie}
            key={movie.imdbID}
            receiveMainPoster={receiveMainPoster}
          />
        );
      })}
    </div>
  );
}

export default Movies;
