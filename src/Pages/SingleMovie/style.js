import styled from "styled-components";
import pallete from "../../theme";

export const Style = styled.div`
  position: relative;
  .movie {
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
      .your-rate {
        margin-bottom: 2.4rem;
        i {
          font-size: 1.2rem;
          margin-left: 5px;
        }
      }
      .status {
        margin-bottom: 2.4rem;
        font-size: 1.4rem;
        .item {
          width: 247px;
          text-align: center;
          .date {
            display: inline;
            text-align: center;
            background-color: #232729;
            border-radius: 7px 7px 0 0px;
            padding: 2px 8px;
            color: ${pallete.btnDefault};
          }
          .title {
            font-size: 1.6rem;
            text-align: center;
            background-color: #232729;
            border-radius: 7px;
            padding: 4px 16px;
            box-shadow: 0 0 1rem -0.2rem rgba(0, 0, 0, 0.6);
            position: relative;
          }
          .content {
            text-align: center;
            background-color: ${pallete.btnPrimary};
            display: inline;
            border-radius: 0 0 7px 7px;
            padding: 2px 8px;
          }
        }
      }
      .details {
        margin-bottom: 4.8rem;
        .icons {
          display: flex;
          justify-content: center;
          gap: 20px;
          font-size: 2rem;
          border-radius: 7px;
          background-color: #232729;
          padding: 8px;
          i {
            &:nth-child(1) {
              color: #ff0000;
            }
            &:nth-child(2) {
              color: #ffff00;
            }
            &:nth-child(3) {
              color: #234786;
            }
            &:nth-child(4) {
              color: #008000;
            }
          }
        }
        .overview {
          margin: 20px 0;
          line-height: 3rem;
        }
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
  .navbar {
    position: relative;
    z-index: 2;
    ul {
      box-shadow: 0 12px 22px -15px #000000;
      li {
        a {
          display: inline-block;
          padding: 2.4rem;
          font-size: 1.6rem;
        }
      }
    }
  }
  .more-information {
    margin: 3.2rem 0;
    position: relative;
    z-index: 2;
    .title-content {
      text-align: center;
      font-size: 2.4rem;
      margin: 1.6rem 0;
    }
    .data-content {
      margin: 3.2rem 0;
      .item-title {
        margin-bottom: 1.6rem;
        white-space: nowrap;
        span {
          &:nth-child(1) {
            font-size: 2.4rem;
          }
          &:nth-child(2) {
            width: 100%;
            height: 3px;
            background-color: #2e3133;
            margin: 0 1.6rem;
          }
        }
      }
      .details {
        .movie-card {
          padding: 1.6rem;
        }
        .basic-info {
          ul {
            flex-wrap: wrap;
            li {
              width: 20rem;
              margin: 1.2rem;
              .icon {
                min-width: 22.5px;
              }
              .line {
                min-width: 0.2rem;
                min-height: 6.2rem;
                border-radius: 0.1rem;
                margin: 0 0.8rem;
                background-color: #f84444;
              }
              .data {
                .title {
                  white-space: nowrap;
                  margin-bottom: 0.4rem;
                  color: ${pallete.btnDefault};
                  font-size: 1.6rem;
                  font-weight: 400;
                }
                span {
                  margin: 0px 0.4rem;
                  font-size: 1.4rem;
                  transition: all .5s;
                  &:hover {
                    color: #2d5395;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
