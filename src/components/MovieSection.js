import React from "react";
import Movie from "./Movie"

const MovieSection = (props) => {
  return (
    <div className="container">
      <div className="grid">
        <div className="col-1">
          {props.movies.map((movie, i) => {
            return <Movie key={i} image={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieSection;
