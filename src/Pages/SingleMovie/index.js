import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Style } from "./style";
import tmdbApi from "../../api";
import Button from "../../Components/UiElements/Button";
import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";

export default function SingleMovie() {
  const [data, setData] = useState({"genres" : []});
  const { id } = useParams();

  useEffect(function () {
    tmdbApi
      .get(`movie/${id}?language=fa-IR`)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {});
  }, []);
  function renderGenres() {
    console.log(data.genres)
    return data.genres.map(({name}) => {
      return <span>{name}</span>
    })
  }
  return (
    <PrimaryLayout>
      <Style className="single-movie">
        <div
          className="item"
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
                    <div className="vote-average">{parseFloat(data.vote_average).toFixed(1)}</div>
                    <div className="vote-count">{data.vote_count}</div>
                  </div>
                  <div className="icon">
                    <img src="/assets/images/imdb.png"></img>
                  </div>
                </li>
              </ul>
              <p className="overview">{data.overview}</p>
              <div className="action-buttons flex gap-10">
                <Button type="blue">
                  دانلود
                </Button>
                <Button type="transparent-blue">
                  تماشای آنلاین
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Style>
    </PrimaryLayout>
  );
}
