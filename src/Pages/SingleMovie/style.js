import styled from "styled-components";
import pallete from "../../theme";

export const Style = styled.div`
  position: relative;
  .item {
    display: flex;
    align-items: center;
    .content {
      width: 600px;
      position: relative;
      z-index: 2;
      .title {
        font-size: 4rem;
      }
      .breadcrumb {
        color: #787878;
        font-size: 2rem;
        font-weight: 400;
        margin-bottom: 2.4rem;
      }
      .ul-header {
        margin-bottom: 2.4rem;
        font-size: 1.6rem;
        font-weight: 400;
      }
      .genres {
        margin-bottom: 2.4rem;
        span {
          background-color: #232729;
          border-radius: ${pallete.defaultRadius};
          padding: 0.2rem 0.8rem;
          font-size: 1.6rem;
        }
      }
      .rating {
        margin-bottom: 2.4rem;
        .vote {
          text-align: center;
          font-size: 1.4rem;
          font-weight: 400;
          .vote-average {
            
          }
          .vote-count {
            font-size: 1.1rem;
            color: ${pallete.btnDefault};
          }
        }
        .icon {
          img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
          }
        }
      }
      .overview {
        margin: 20px 0;
        line-height: 3rem;
      }
    }
    &::after {
      content: "";
      height: 100%;
      width: 100%;
      right: 0;
      top: 0;
      position: absolute;
      z-index: 1;
      background-image: linear-gradient(to left, #000000, #00000000);
    }
  }
`;
