import React from "react";

function Movie(props) {
  const { Poster: poster, Title: title, Year: year, Type: type } = props;

  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={poster} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
        </span>
        <span className="card-title activator grey-text text-darken-4">
          {year}
          <span>{type}</span>
        </span>
      </div>
    </div>
  );
}

export { Movie };
