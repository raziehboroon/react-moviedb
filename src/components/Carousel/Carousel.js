// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US

import React, { useState, useEffect } from "react";
import "./Carousel.scss";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {
  api_secret,
  BASE_API,
  img_film_300,
  img_unavailable,
} from "../../context";

const Carousel = ({ id }) => {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await fetch(
          `${BASE_API}${id}/credits?api_key=${api_secret}`
        );
        const data = await response.json();
        setCredits(data.cast);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCast();
  }, [id]);

  const handleDragStart = (e) => e.preventDefault();
  const items = credits?.map((person) => (
    <div className="carousel-item">
      <img
        className="carousel-img"
        src={
          person.profile_path
            ? img_film_300 + person.profile_path
            : img_unavailable
        }
        onDragStart={handleDragStart}
        alt={person.name}
      />
      <b>{person.name}</b>
    </div>
  ));

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };
  // console.log(credits);

  // const items = [
  //   <img src="path-to-img" onDragStart={handleDragStart} />,
  //   <img src="path-to-img" onDragStart={handleDragStart} />,
  //   <img src="path-to-img" onDragStart={handleDragStart} />,
  // ];
  return (
    <AliceCarousel
      mouseTracking
      responsive={responsive}
      autoPlay
      infinite
      disableDotsControls
      disableButtonsControls
      items={items}
    />
  );
};

export default Carousel;
