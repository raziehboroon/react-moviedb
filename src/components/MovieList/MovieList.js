import "./MovieList.scss";
import React from "react";
import { Link } from "react-router-dom";
// Component(s)
import Loading from "../Loading/Loading";
import Movie from "../Movie/Movie";
import MoviePagination from "../MoviePagination/MoviePagination";
// Context
import { useGlobalContext } from "../../context/context";

const MovieList = () => {
  // const { loading, films, totalPages, setSearchTerm } = useGlobalContext();
  const { loading, filmsObj, setSearchTerm } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (filmsObj.results.length < 1) {
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
        {filmsObj.results.map((film) => (
          <Movie key={film.id} {...film} />
        ))}
      </div>
      {filmsObj.total_pages > 1 && <MoviePagination></MoviePagination>}
    </>
  );
};

export default MovieList;
