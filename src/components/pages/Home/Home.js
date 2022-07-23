import React from "react";
import "./Home.scss";
import SearchForm from "../../SearchForm/SearchForm";
import MovieList from "../../MovieList/MovieList";

const Home = () => {
  return (
    <main>
      <div className="section">
        <SearchForm></SearchForm>
        <MovieList></MovieList>
      </div>
    </main>
  );
};

export default Home;
