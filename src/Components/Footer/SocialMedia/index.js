import { Style } from "./style";
import { Link } from "react-router-dom";
export default function SocialMedia({ items }) {
  function renderFarm() {
    return items.map(({ link, icon }, index) => {
      return (
        <li key={index}>
          <Link to={link}>
            <i className={`fa-brands ${icon}`} />
          </Link>
        </li>
      );
    });
  }
  return (
    <Style>
      <ul className="flex gap-20">{renderFarm()}</ul>
    </Style>
  );
}
