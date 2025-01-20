import styled from "styled-components";

export const Style = styled.div`
    padding: 10px 0;
    position: fixed;
    z-index: 100;
    width: 100%;
    background-color: rgba(10, 13, 16, .6);
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
                }
            }
        }
    }

`