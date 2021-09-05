import React from "react";
import SearchForm from "../components/SearchForm";
import MovieList from "../components/MovieList";

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
