import { Link } from "react-router-dom";
import { Style } from "./style";

export default function FooterMenu(props) {
  const { menuTitle, items } = props;

  function renderFarm() {
    return items.map(({ link, title }, index) => {
      return (
        <li key={index}>
          <Link to={link}>{title}</Link>
        </li>
      );
    });
  }

  return (
    <Style>
      <h3 className="title">{menuTitle}</h3>
      <ul>{renderFarm()}</ul>
    </Style>
  );
}
