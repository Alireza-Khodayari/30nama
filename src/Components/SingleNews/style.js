import styled from "styled-components";
import { pallete } from "../../theme";

export const Style = styled.div`
    margin-bottom: 16px;
  .news-item {
    margin: 0 auto;
    width: 680px;
    height: 250px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    border-radius: ${pallete.defaultRadius};
    background-color: #232729;
    .poster {
      width: 50%;
      border-radius: ${pallete.defaultRadius};
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.5s;
      }
      &:hover img {
        transform: scale(1.2);
      }
    }
    .item-information {
        width: 50%;
      font-size: 1.5rem;
      .title {
        font-size: 1.6rem;
      }
      p {
        color: #787878;
        margin: 10px 0;
      }
      .details {
        .needed-time {
          i {
            color: rgba(248, 68, 67, 0.85);
          }
          span {
            color: #787878;
          }
        }
      }
    }
    &:hover img {
      transform: scale(1.2);
    }
  }
`;
