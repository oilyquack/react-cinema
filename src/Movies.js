import React from "react";
import Movie from "./Movie";

function Movies({ movies }) {
  return (
    <div className="app__movies">
      {movies.map(movie => {
        return <Movie movie={movie} key={movie.imdbID} />;
      })}
    </div>
  );
}

export default Movies;
