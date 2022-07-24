// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US

import "./Carousel.scss";
import React, { useState, useEffect } from "react";
// Component
import { api_secret } from "../../context/context";
// Tools
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// Function(s)
import { BASE_API, img_film_300, img_unavailable } from "../../helpers/urls";
import getData from "../../services/api";

const Carousel = ({ id }) => {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await getData(
          `${BASE_API}${id}/credits?api_key=${api_secret}`
        );
        setCredits(data.cast);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCast();
  }, [id]);

  // draging imag of carousel
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
      // disableDotsControls
      disableButtonsControls
      items={items}
      // autoWidth={true}
    />
  );
};

export default Carousel;
