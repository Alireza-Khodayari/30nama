import { Style } from "./style";
import { Link } from "react-router-dom";

export default function Button(props) {
  const { link, type, children, display } = props;
  return (
    <Style type={type} display={display}>
      <Link to={link}>{children}</Link>
    </Style>
  );
}
