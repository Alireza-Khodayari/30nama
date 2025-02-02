import styled from "styled-components";

export const Style = styled.div`
  padding: 10px 0;
  position: fixed;
  z-index: 100;
  width: 100%;
  background-color: rgba(10, 13, 16, 0.6);
  backdrop-filter: blur(20px);
  .first-items {
    .logo {
      img {
        width: 150px;
        height: auto;
      }
    }
    .menu {
      ul {
        li {
          display: inline-block;
          padding: 10px;
          color: #fff;
        }
      }
    }
  }
  .second-items {
    .search {
      a {
        color: #fff;
        width: 40px;
        height: 40px;
        display: inline-block;
        padding: 5px;
        border-radius: 100%;
        text-align: center;
        transition: all 0.5s;
        &:hover {
          background-color: #232729;
        }
        i {
          margin-top: 6px;
        }
      }
    }
  }
`;
