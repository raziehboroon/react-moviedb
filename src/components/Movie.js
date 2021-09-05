import React from "react";
import { Link } from "react-router-dom";
import { img_film_300, img_unavailable } from "../context";

const Movie = ({ id, title, overview, poster_path, vote_average }) => {
  const voteAverageColor = (vote_average) => {
    if (vote_average === 0) {
      return;
    } else if (vote_average >= 7) {
      return "green";
    } else if (vote_average >= 5) {
      return "orange";
    } else {
      return "red";
    }
  };
  return (
    <article className="movie">
      <Link to={`/Movie/${id}`}>
        <img
          src={poster_path ? `${img_film_300}${poster_path}` : img_unavailable}
          alt="poster"
        />
        <div className="movie-info">
          <h4 className="movie-title">
            {title.length > 30 ? `${title.substr(30)}...` : title}
          </h4>
          <span className={`movie-rate ${voteAverageColor(vote_average)}`}>
            {vote_average}
          </span>
        </div>
        <div className="movie-summary">{overview}</div>
      </Link>
    </article>
  );
};

export default Movie;
