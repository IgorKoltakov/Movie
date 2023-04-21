import React from "react";
import { Movie } from "./Movie";

function Movies(props) {
  const { movie = [] } = props;

  return (
    <div className="movies">
      {movie.length ? (
        movie.map((mov) => <Movie key={mov.imdbID} {...mov} />)
      ) : (
        <h5>Nothing found</h5>
      )}
    </div>
  );
}

export { Movies };
