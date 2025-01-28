import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import tmdbApi from "../../api";
import "swiper/css/effect-fade";
import axios from "axios";

// import "./styles.css";

export default function HeroSlider() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(function () {
    setLoading(true);
    tmdbApi
      .get("movie/popular?language=fa-IR&page=1")
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
    return data.map(({ id, backdrop_path }) => {
      return (
        <SwiperSlide key={id}>
          <div
            className="image"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
              backgroundSize: "cover",
              backgroundPosition: "top right",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100vh",
              zIndex: "1",
            }}
          ></div>
          <div className="content"></div>
        </SwiperSlide>
      );
    });
  }

  return (
    <Swiper
      className="mySwiper"
      modules={[Autoplay]}
      autoplay={{ delay: 7000, disableOnInteraction: false }}
    >
      {loading ? <div>loading...</div> : renderFarm()}
    </Swiper>
  );
}
