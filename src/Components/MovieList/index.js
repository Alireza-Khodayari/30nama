import { Style } from "./style";
import React, { useRef, useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import MovieCard from "../MovieCard";
import tmdbApi from "../../api";

export default function MovieList() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(function () {
    setLoading(true);
    tmdbApi
      .get("movie/top_rated?language=fa-IR&page=1")
      .then(function (response) {
        console.log(response.data);
        console.log(response.data.results);
        setLoading(false);
        setData(response.data.results);
      })
      .catch(function (error) {
        setLoading(false);
      });
  }, []);

  function renderFarm() {
    return data.map(({ poster_path, id, original_title, overview }) => {
      const data = {};
      return (
        <SwiperSlide>
          <MovieCard
            poster_path={poster_path}
            id={id}
            title={original_title}
            overview={overview}
          ></MovieCard>
        </SwiperSlide>
      );
    });
  }

  return (
    <Style className="movie-list">
      <div className="container">
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={5}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {loading ? <div>loading...</div> : renderFarm()}
        </Swiper>
      </div>
    </Style>
  );
}
