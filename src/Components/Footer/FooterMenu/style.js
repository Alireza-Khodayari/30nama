import styled from "styled-components";
import pallete from "../../../theme";

export const Style = styled.div`
  .title {
    font-size: 2.4rem;
    padding: 4px 24px;
    border-bottom: 3px solid ${pallete.btnPrimary};
    margin-bottom: 16px;
  }
  ul {
    li {
      margin-bottom: 16px;
      background-color: #2e3133;
      border-radius: 5px;
      min-width: 170px;
      a {
        padding: 2px 8px;
        font-size: 17px;
        color: ${pallete.btnDefault};
        transition: all 0.3s;
      }
      &:hover {
        background-color: ${pallete.btnPrimary};
        a {
          color: #fff;
        }
      }
      transition: all 0.3s;
    }
  }
`;
