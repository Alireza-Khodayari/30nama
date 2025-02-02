import styled from "styled-components";
import pallete from "../../../theme";

function checkBackground(props) {
  if(props.type=="primary") return pallete.btnPrimary
  else if(props.type=="transparent-blue") return "transparent"
  else if(props.type=="blue") return pallete.btnBlue
  else return "transparent"
}
function checkBorderColor(props) {
  if(props.type=="primary") return pallete.btnPrimary
  else if(props.type=="transparent-blue") return pallete.btnBlue
  else if(props.type=="blue") return pallete.btnBlue
  else return pallete.btnDefault
}
function checkBackgroundHover(props) {
  if(props.type=="primary") return pallete.btnPrimaryHover
  else if(props.type=="transparent-blue") return pallete.btnBlue
  else if(props.type=="blue") return pallete.btnBlueHover
  else return "transparent"
}
function checkBorderHover(props) {
  if(props.type=="primary") return pallete.btnPrimary
  else if(props.type=="transparent-blue") return pallete.btnBlue
  else if(props.type=="blue") return pallete.btnBlueHover
  else return pallete.btnDefaultHover
}

export const Style = styled.a`

  text-align: center;
  display: ${(props) => (props.display == "block" ? "block" : "inline-block")};
  padding: ${pallete.btnPadding};
  border-radius: ${pallete.defaultRadius};
  a {
    color: ${(props) => (props.type== "default" ? pallete.btnDefault : "#fff")};
  }
  background-color: ${(props) =>
    checkBackground(props)
  };
  border: 3px solid;
  border-color: ${(props) =>
    checkBorderColor(props)
  };
  &:hover {
    background-color: ${(props) =>
      checkBackgroundHover(props)
    };
    border-color: ${(props) =>
      checkBorderHover(props)
    };
    a {
    color: ${(props) => (props.type== "default" ? pallete.btnDefaultHover : "#fff")};
    }
  }
  transition: all 0.3s;
`;
