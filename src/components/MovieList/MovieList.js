import React from "react";
import "./MovieList.scss";
import Loading from "../Loading/Loading";
import Movie from "../Movie/Movie";
import MoviePagination from "../MoviePagination/MoviePagination";
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";

const MovieList = () => {
  const { loading, films, totalPages, setSearchTerm } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }

  if (films.length < 1) {
    return (
      <div className="movies-container no-movie">
        <h3 className="title">
          no films matching your search criteria were found.
        </h3>
        <Link to="/">
          <button
            type="button"
            className="btn error-btn"
            onClick={() => setSearchTerm("")}
          >
            back to home
          </button>
        </Link>
      </div>
    );
  }
  return (
    <>
      <div className="movies-container">
        {films.map((film, index) => (
          <Movie key={index} {...film} />
        ))}
      </div>
      {totalPages > 1 && <MoviePagination></MoviePagination>}
    </>
  );
};

export default MovieList;
