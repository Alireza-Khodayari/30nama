import { Style } from "./style";

export default function NewsItem({ data }) {
  const { poster, title, details, readingTime, publishDate } = data;
  return (
    <Style>
      <div className="container">
        <div className="news-item">
          <div className="poster">
            <img src={poster} />
          </div>
          <div className="item-information">
            <h4 className="title">{title}</h4>
            <p>{details}</p>
            <div className="details flex align-center space-between">
              <div className="needed-time flex align-center gap-5">
                <i className="fa-regular fa-clock"></i>
                <span>{`زمان مطالعه: ${readingTime}`}</span>
              </div>
              <div className="date">{publishDate}</div>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
}
