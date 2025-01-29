import styled from "styled-components";

export const Style = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 214px;
  position: relative;

  .item__name {
    width: 180px;
    display: inline-block;
    background-color: #232729;
    border-radius: 5px 5px 0 0;
    text-align: center;
    padding: 5px;
    position: relative;
    z-index: 5;
  }
  .item__poster {
    position: relative;
    width: 100%;
    height: 320px;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      transition: all 0.5s;
      &:nth-child(1) {
        z-index: 1;
        left: 10px;
        bottom: 10px;
      }
      &:nth-child(2) {
        z-index: 2;
        left: 5px;
        bottom: 5px;
      }
      &:nth-child(3) {
        z-index: 3;
      }
    }
  }
  &:hover img:nth-child(1),
  &:hover img:nth-child(2) {
    left: 0;
    bottom: 0;
  }

  .number-h1 {
    font-size: 20rem;
    color: #454545;
    position: absolute;
    z-index: 6;
    left: 70%;
    top: 50%;
    transform: translateY(-50%);
    opacity: 1;
    transition: all 0.5s;
  }
  &:hover .number-h1 {
    opacity: 0;
  }
  .item__poster .poster-hover {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    z-index: 5;
    opacity: 0;
    transition: all 1s;
    text-align: center;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    p {
      font-size: 1.4rem;
    }
    .action-buttons {
      display: flex;
      justify-content: center;
      gap: 20px;
      font-size: 1.6rem;
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
    .genres {
      li {
        display: inline-block;
        padding: 5px;
        border: 3px solid rgba(0, 0, 0, 0);
        transition: all 1s;
        &:hover {
          border-bottom: 3px solid #fff;
        }
      }
    }
  }
  .item__rating {
    width: 180px;
    background-color: #232729;
    border-radius: 0 0 5px 5px;
    text-align: center;
    padding: 5px;
    position: relative;
    z-index: 5;
    font-size: 16px;
    img {
      width: 24px;
      height: auto;
      border-radius: 5px;
    }
    .rating__online-watch {
      display: flex;
      align-items: center;
      gap: 5px;
      i {
        &:nth-child(1) {
          color: #f84444;
          margin-left: 5px;
        }
        &:nth-child(2) {
          color: #2d5395;
        }
      }
    }
    .rating__imdb,
    .rating__30nama {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
  &:hover .poster-hover {
    opacity: 1;
  }
`;
