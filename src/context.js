import React, { useContext, useEffect, useState } from "react";

export const api_secret = process.env.REACT_APP_API_KEY;
export const img_film_300 = "https://image.tmdb.org/t/p/w300";
export const img_film_500 = "https://image.tmdb.org/t/p/w500";
export const BASE_API = "https://api.themoviedb.org/3/movie/";
export const img_unavailable =
  "https://www.movienewz.com/img/films/poster-holder.jpg";
export const unavailable_Landscape =
  "https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setScreenWidth(window.innerWidth);
  });

  useEffect(() => {
    const fetchFilms = async () => {
      let url = "";
      if (searchTerm) {
        url = `https://api.themoviedb.org/3/search/movie?api_key=${api_secret}&sort_by=popularity.desc&page=${page}&query=${searchTerm}`;
      } else {
        url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_secret}&sort_by=popularity.desc&page=${page}`;
      }
      try {
        const response = await fetch(url);
        const films = await response.json();
        if (films.results) {
          setTotalPages(films.total_pages);
          setFilms(films.results);
        } else {
          setFilms([]);
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
        films,
        loading,
        setLoading,
        searchTerm,
        setSearchTerm,
        page,
        setPage,
        totalPages,
        setTotalPages,
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
