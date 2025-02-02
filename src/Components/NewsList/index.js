import NewsItem from "../SingleNews";
import Button from "../UiElements/Button";
import { Style } from "./style";

export default function NewsList({ news, listTitle, icon }) {
  function renderFarm() {
    return news.map((item) => {
      return <NewsItem data={item} />;
    });
  }
  return (
    <Style className="news-list">
      <div className="container">
        <div className="top-section flex space-between align-center">
          <div className="holder flex align-center gap-10">
            <i class={icon}></i>
            <h3 class="list-title">{listTitle}</h3>
          </div>
          <Button type="default">آرشیو کلی</Button>
        </div>
      </div>
      {renderFarm()}
    </Style>
  );
}
