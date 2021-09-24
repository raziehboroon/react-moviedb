import React from "react";
import "./Movie.scss";
import { Link } from "react-router-dom";
import { img_film_300, img_unavailable } from "../../context";

const Movie = ({ id, title, overview, poster_path, vote_average }) => {
  // small box containg movie rating on each movie component, diffrent color based on diffrent rating rage
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
            {/* don't display very long movie title */}
            {title.length > 30 ? `${title.substr(30)}...` : title}
          </h4>
          <span className={`movie-rate ${voteAverageColor(vote_average)}`}>
            {vote_average}
          </span>
        </div>
        {/* show summary on hover */}
        <div className="movie-summary">{overview}</div>
      </Link>
    </article>
  );
};

export default Movie;
