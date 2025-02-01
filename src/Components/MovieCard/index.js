import { useEffect, useState } from "react";
import { Style } from "./style";

export default function MovieCard({ poster_path, id, title, overview, hasNumber, index }) {
  function checkHasNumber(hasNumber) {
    if(hasNumber) {
      return <div className="number-h1">{index+1}</div>;
    }
  }
  return (
    <Style className="movie-card">
      <h5 className="item__name">{title}</h5>
      <div className="item__poster">
        <img src={`https://image.tmdb.org/t/p/original${poster_path}`} />
        <img src={`https://image.tmdb.org/t/p/original${poster_path}`} />
        <img src={`https://image.tmdb.org/t/p/original${poster_path}`} />
        <div className="poster-hover">
          {/* <h4 class="release-date">قسمت بعد ۷ آذر ۱۴۰۳ چهارشنبه</h4> */}
          <p>{overview.slice(0,200)+"..."}</p>
          <div className="action-buttons">
            <i className="fa-solid fa-heart"></i>
            <i className="fa-regular fa-bell"></i>
            <i className="fa-regular fa-eye"></i>
            <i className="fa-solid fa-circle-plus"></i>
          </div>
          <ul className="genres">
            <li>ترسناک</li>
            <li>فانتزی</li>
            <li>کمدی</li>
          </ul>
        </div>
      </div>
      <div className="item__rating">
        <div className="flex align-center space-between">
          <div className="rating__online-watch">
            <i className="fa-solid fa-play"></i>
            <i className="fa-solid fa-closed-captioning"></i>
          </div>
          <div className="rating__imdb">
            <span>9</span>
            <img src="assets/images/imdb.png" />
          </div>
          <div className="rating__30nama">
            <span>9.2</span>
            <img src="assets/images/30nama.png" />
          </div>
        </div>
      </div>
      {checkHasNumber(hasNumber)}
    </Style>
  );
}
