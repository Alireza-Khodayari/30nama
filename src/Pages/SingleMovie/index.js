import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Style } from "./style";
import tmdbApi from "../../api";
import Button from "../../Components/UiElements/Button";
import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";
import MovieCard from "../../Components/MovieCard";

export default function SingleMovie() {
  const [data, setData] = useState({ genres: [] });
  const { id } = useParams();

  const basicInfo = [
    {
      key: "محصول کشور",
      value: data.origin_country,
      icon: "fa-solid fa-globe",
    },
    {
      key: "زبان اصلی",
      value: data.original_language,
      icon: "fa-solid fa-language",
    },
    {
      key: "مدت زمان",
      value: data.runtime + " دقیقه",
      icon: "fa-regular fa-clock",
    },
    {
      key: "وضعیت",
      value: data.status,
      icon: "fa-solid fa-wifi",
    },
    {
      key: "مخصوص کودکان",
      value: data.adult ? "خیر" : "بله",
      icon: "fa-solid fa-child",
    },
    {
      key: "تاریخ انتشار",
      value: data.release_date,
      icon: "fa-regular fa-calendar",
    },
    {
      key: "بودجه",
      value: data.budget ? data.budget.toLocaleString() : "",
      icon: "fa-solid fa-sack-dollar",
    },
  ];

  function handleBasicInfo(basicInfo) {
    return basicInfo.map(({ key, value, icon }) => {
      return (
        <li className="flex align-center">
          <div className="icon">
            <i class={icon}></i>
          </div>
          <div className="line" />
          <div className="data">
            <h6 className="title">{key}</h6>
            <span>
              <Link>{value}</Link>
            </span>
          </div>
        </li>
      );
    });
  }

  useEffect(function () {
    window.scrollTo(0, 0);
    tmdbApi
      .get(`movie/${id}?language=fa-IR`)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {});
  }, []);

  function renderGenres() {
    console.log(data.genres);
    return data.genres.map(({ name }) => {
      return <span>{name}</span>;
    });
  }

  return (
    <PrimaryLayout>
      <Style className="single-movie">
        <div
          className="movie"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "top right",
            width: "100%",
            height: "980px",
          }}
        >
          <div className="content">
            <div className="container">
              <h1 className="title">{data.original_title}</h1>
              <div className="breadcrumb">
                <span>{data.title}</span>
              </div>
              <ul className="ul-header flex gap-15">
                <li>{`کشور سازنده: ${data.origin_country}`}</li>
                <li>{`${data.release_date}`}</li>
                <li>{`${data.runtime} دقیقه`}</li>
              </ul>
              <div className="genres flex gap-10">{renderGenres()}</div>
              <ul className="rating flex gap-15">
                <li className="flex gap-10">
                  <div className="vote">
                    <div className="vote-average">7.2</div>
                    <div className="vote-count">53</div>
                  </div>
                  <div className="icon">
                    <img src="/assets/images/30nama.png"></img>
                  </div>
                </li>
                <li className="flex gap-10">
                  <div className="vote">
                    <div className="vote-average">
                      {parseFloat(data.vote_average).toFixed(1)}
                    </div>
                    <div className="vote-count">{data.vote_count}</div>
                  </div>
                  <div className="icon">
                    <img src="/assets/images/imdb.png"></img>
                  </div>
                </li>
              </ul>
              <div className="your-rate">
                <span>امتیاز بدهید: </span>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <div className="status flex align-center gap-10">
                <div className="item">
                  <div className="date">۲۸ دی ۱۴۰۳ ۱۲:۳۱</div>
                  <div className="title">اضافه شدن پخش آنلاین</div>
                  <div className="content">اپیزود 10 فصل 2</div>
                </div>
                <div className="item">
                  <div className="date">۲۸ دی ۱۴۰۳ ۱۲:۳۱</div>
                  <div className="title">اضافه شدن پخش آنلاین</div>
                  <div className="content">اپیزود 10 فصل 2</div>
                </div>
              </div>
              <div className="details flex align-center gap-20">
                <div className="icons flex flex-column space-between gap-10">
                  <i className="fa-solid fa-heart"></i>
                  <i className="fa-regular fa-bell"></i>
                  <i className="fa-regular fa-eye"></i>
                  <i className="fa-solid fa-circle-plus"></i>
                </div>
                <div className="overview">
                  {data.overview
                    ? data.overview.slice(0, 200) + "..."
                    : data.overview}
                </div>
              </div>
              <div className="action-buttons flex gap-10">
                <Button type="blue">دانلود</Button>
                <Button type="transparent-blue">تماشای آنلاین</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar">
          <div className="container">
            <ul className="flex space-between">
              <li>
                <Link>اطلاعات بیشتر</Link>
              </li>
              <li>
                <Link>دانلود</Link>
              </li>
              <li>
                <Link>زیرنویس</Link>
              </li>
              <li>
                <Link>دیدگاه ها</Link>
              </li>
              <li>
                <Link>پرسش و پاسخ</Link>
              </li>
              <li>
                <Link>مقالات و اخبار</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="more-information">
          <div className="container">
            <h2 className="title-content">
              دانلود سریال {data.original_title} ({data.title}) با زیرنویس فارسی
              و تماشای آنلاین
            </h2>
            <div className="data-content">
              <div className="item-title flex align-center">
                <span>{data.title}</span>
                <span></span>
              </div>
              <div className="details flex space-between align-center">
                <div className="movie-card">
                  <MovieCard
                    hasDetails={false}
                    hasNumber={false}
                    poster_path={data.poster_path}
                    id={data.id}
                    title={data.original_title}
                    overview={data.overview}
                  />
                </div>
                <div className="basic-info">
                  <ul className="flex">{handleBasicInfo(basicInfo)}</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Style>
    </PrimaryLayout>
  );
}
