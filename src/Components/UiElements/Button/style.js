import styled from "styled-components";
import pallete from "../../../theme";

export const Style = styled.a`
  text-align: center;
  display: ${(props) => (props.display == "block" ? "block" : "inline-block")};
  padding: ${pallete.btnPadding};
  border-radius: ${pallete.defaultRadius};
  background-color: ${(props) =>
    props.type == "primary"
      ? pallete.btnPrimary
      : props.type == "blue"
      ? "transparent"
      : pallete.btnDefault};
  border: 3px solid;
  border-color: ${(props) =>
    props.type == "primary"
      ? pallete.btnPrimary
      : props.type == "blue"
      ? pallete.btnBlue
      : pallete.btnDefaultHover};
  &:hover {
    background-color: ${(props) =>
      props.type == "primary"
        ? pallete.btnPrimaryHover
        : props.type == "blue"
        ? pallete.btnBlue
        : pallete.btnDefault};
  }
  transition: all 0.3s;
`;
