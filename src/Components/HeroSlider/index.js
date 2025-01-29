import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

import "swiper/css";
import tmdbApi from "../../api";
import "swiper/css/effect-fade";
import { Style } from "./style";
import Button from "../UiElements/Button";

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
    return data.map(
      ({ id, backdrop_path, original_title, title, overview }) => {
        return (
          <SwiperSlide key={id}>
            <div
              className="slider-item"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
                backgroundSize: "cover",
                backgroundPosition: "top right",
                width: "100%",
                height: "100vh",
              }}
            >
              <div className="content">
                <div className="container">
                  <h1 className="title">{original_title}</h1>
                  <div className="breadcrumb">
                    <span>{title}</span>
                  </div>
                  <p className="overview">{overview}</p>
                  <div className="action-buttons flex gap-10">
                    <Button type="blue" link="/">
                      تماشای آنلاین
                    </Button>
                    <Button type="blue" link="/">
                      بیشتر
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      }
    );
  }

  return (
    <Style className="hero-slider">
      <Swiper
        className="mySwiper"
        modules={[Autoplay]}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        slidesPerView={1}
        // rtl={true}
      >
        {loading ? <div>loading...</div> : renderFarm()}
      </Swiper>
    </Style>
  );
}
