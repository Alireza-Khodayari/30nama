import styled from "styled-components";
import pallete from "../../theme";

export const Style = styled.div`
  .footer-menu {
    text-align: center;
  }
  .social {
    width: 500px;
    margin: 0 auto;
    .top-section {
      margin: 1.6rem 0;
      .logo {
        img {
          width: 150px;
          height: auto;
        }
      }
    }
  }
  .copyright {
    text-align: center;
    padding-top: 6.4rem;
    p {
      background-color: ${pallete.btnPrimary};
      border-radius: 7px 7px 0 0;
      display: inline-block;
      padding: 4px 16px;
      font-size: 1.4rem;
    }
  }
`;
