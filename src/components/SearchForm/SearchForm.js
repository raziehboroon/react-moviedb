import React, { useEffect, useRef } from "react";
import "./SearchForm.scss";
import { useGlobalContext } from "../../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");
  const handleSearch = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    searchValue.current.focus();
  });

  return (
    <header>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="searchTerm"
          placeholder="Search..."
          ref={searchValue}
          onChange={() => setSearchTerm(searchValue.current.value)}
        />
      </form>
    </header>
  );
};

export default SearchForm;
