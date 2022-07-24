import React, { useContext, useEffect, useState } from "react";
import getData from "../services/api";
export const api_secret = process.env.REACT_APP_API_KEY;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [filmsObj, setFilmsObj] = useState({});
  const [page, setPage] = useState(1);

  window.addEventListener("resize", () => {
    setScreenWidth(window.innerWidth);
  });

  useEffect(() => {
    const fetchFilms = async () => {
      let url = "";
      console.log(page);
      if (searchTerm) {
        url = `https://api.themoviedb.org/3/search/movie?api_key=${api_secret}&sort_by=popularity.desc&page=${page}&query=${searchTerm}`;
      } else {
        url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_secret}&sort_by=popularity.desc&page=${page}`;
      }
      try {
        const response = await getData(url);
        console.log(response);
        if (response.results) {
          setFilmsObj(response);
        } else {
          setFilmsObj({});
        }
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchFilms();
  }, [searchTerm, page]);

  return (
    <AppContext.Provider
      value={{
        filmsObj,
        loading,
        setLoading,
        searchTerm,
        setSearchTerm,
        page,
        setPage,
        screenWidth,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

// const trending = `https://api.themoviedb.org/3/trending/all/day?api_key=${api_secret}`;

// const discover_movie = `
// https://api.themoviedb.org/3/discover/movie?api_key=${api_secret}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

// const discover_series = `https://api.themoviedb.org/3/discover/tv?api_key=${api_secret}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`;
// contentModal

// For Carousel
// export const noPicture ="https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg";

// const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${api_secret}&sort_by=popularity.desc&page=1&query=${searchTerm}`;
// const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${api_secret}&sort_by=popularity.desc&page=${page}`;
