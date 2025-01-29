import styled from "styled-components";

export const Style = styled.div`
  direction: rtl;
  position: relative;
  .slider-item {
    display: flex;
    align-items: center;
    .content {
      width: 600px;
      position: relative;
      z-index: 2;
      .title {
      }
      .breadcrumb {
        color: #787878;
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
