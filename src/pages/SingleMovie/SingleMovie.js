import React, { useEffect, useState } from "react";
import "./SingleMovie.scss";
import Loading from "../../components/Loading/Loading";
import Error from "../Error/Error";
import Button from "@material-ui/core/Button";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { useParams } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import {
  useGlobalContext,
  img_film_300,
  api_secret,
  BASE_API,
  unavailable_Landscape,
  img_unavailable,
} from "../../context";

const SingleMovie = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [film, setFilm] = useState(null);
  const [videoKey, setVideoKey] = useState("");
  const { screenWidth } = useGlobalContext();

  //fetching data of a single movie from API
  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const response = await fetch(`${BASE_API}${id}?api_key=${api_secret}`);
        const data = await response.json();
        setFilm(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    //fetching the videokey of the a particular movie by its ID from API
    const fetchVideo = async () => {
      try {
        const response = await fetch(
          `${BASE_API}${id}/videos?api_key=${api_secret}`
        );
        const data = await response.json();
        setVideoKey(data.results[0]?.key);
        // setLoading(false);
      } catch (err) {
        console.log(err);
        // setLoading(false);
      }
    };

    fetchFilm();
    fetchVideo();
  }, [id]);

  //while loading data from API show loading animation
  if (loading) {
    return <Loading />;
  }

  //in case of resource not found
  if (!film || film.status_code === 34) {
    return <Error />;
  }

  //destructuring movie data recieved from API
  const {
    genres,
    poster_path,
    overview,
    backdrop_path,
    release_date,
    title,
    vote_average,
    vote_count,
    runtime,
  } = film;

  const summarizeVoteCount = (vote_count) => {
    if (vote_count > 1000000) {
      return `${vote_count.toString().slice(0, -6)}M`;
    }
    if (vote_count > 1000) {
      return `${vote_count.toString().slice(0, -3)}K`;
    }
    return vote_count;
  };

  return (
    <main>
      <section className="section singleMovie-section">
        <div className="singleMovie-container">
          {/* Movie poster */}
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
              <img
                src={`${img_film_300}${backdrop_path}`}
                alt="movie backdrop"
              />
            ) : (
              <img
                src={unavailable_Landscape}
                className="unavailable-image"
                alt="poster not available"
              />
            )}
          </div>
          {/* movie info */}
          <div className="info-container">
            {/* movie title & rating */}
            <div className="header">
              <h3 className="title">{title}</h3>
              <h5 className="release-date">
                {release_date && release_date.slice(0, 4)}{" "}
                {release_date && ` - `}
                {runtime} min
              </h5>
              <div className="rating-container">
                <h6 className="rating-title">Rating</h6>
                <h4 className="rating">
                  <span>{vote_average}</span>/10
                </h4>
                <span className="vote-count">
                  {summarizeVoteCount(vote_count)}
                </span>
              </div>
            </div>
            {/* movie genres */}
            <div className="genres-container">
              {genres.map((genres, index) => {
                return (
                  <span key={index} className="genres">
                    {genres.name}
                  </span>
                );
              })}
            </div>
            {/* movie summary */}
            {overview && <h4 className="overviwe">{overview}</h4>}
            {/* carousel for showing cast of a movie */}
            <div className="carousel">
              <Carousel id={id} />
            </div>

            {/* youtube btn */}
            {/* if there is videokey, therefore is a related video on Youtube */}
            {videoKey && (
              <Button
                className="youtube-btn"
                href={`https://www.youtube.com/watch?v=${videoKey}`}
                target="_blank"
                variant="contained"
                color="secondary"
                startIcon={<YouTubeIcon />}
              >
                watch trailer
              </Button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SingleMovie;
