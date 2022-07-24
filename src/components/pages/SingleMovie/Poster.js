import "./SingleMovie.scss";
import React from "react";
// Context
import { useGlobalContext } from "../../../context/context";

import {
  img_film_300,
  unavailable_Landscape,
  img_unavailable,
} from "../../../helpers/urls";

const Poster = ({ poster_path, backdrop_path }) => {
  const { screenWidth } = useGlobalContext();
  return (
    <div className="poster-container">
      {/* conditional rendering for vertical and landscape movie poster */}
      {screenWidth > 800 ? (
        poster_path ? (
          <img src={`${img_film_300}${poster_path}`} alt="movie poster" />
        ) : (
          <img
            src={img_unavailable}
            className="unavailable-image"
            alt="poster not available"
          />
        )
      ) : backdrop_path ? (
        <img src={`${img_film_300}${backdrop_path}`} alt="movie backdrop" />
      ) : (
        <img
          src={unavailable_Landscape}
          className="unavailable-image"
          alt="poster not available"
        />
      )}
    </div>
  );
};

export default Poster;
