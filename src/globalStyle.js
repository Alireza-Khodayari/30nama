import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: Vazirmatn;
    src: url('/assets/fonts/vazirmatn/Vazirmatn-Thin.woff2') format('woff2');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: Vazirmatn;
    src: url('/assets/fonts/vazirmatn/Vazirmatn-ExtraLight.woff2') format('woff2');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: Vazirmatn;
    src: url('/assets/fonts/vazirmatn/Vazirmatn-Light.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: Vazirmatn;
    src: url('/assets/fonts/vazirmatn/Vazirmatn-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: Vazirmatn;
    src: url('/assets/fonts/vazirmatn/Vazirmatn-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: Vazirmatn;
    src: url('/assets/fonts/vazirmatn/Vazirmatn-SemiBold.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: Vazirmatn;
    src: url('/assets/fonts/vazirmatn/Vazirmatn-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: Vazirmatn;
    src: url('/assets/fonts/vazirmatn/Vazirmatn-ExtraBold.woff2') format('woff2');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: Vazirmatn;
    src: url('/assets/fonts/vazirmatn/Vazirmatn-Black.woff2') format('woff2');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}
html {
    font-size: 10px;
}
*, *::after, *::before {
    box-sizing: border-box;
}
* {
    margin: 0;
    padding: 0;
}
body {
    direction: rtl;
    color: #fff;
    background-color: #0d1113;
    font-size: 1.8rem;
    font-family: Vazirmatn;
}
ul, li {
    list-style: none;
}
/* p {
    color: #787878;
} */
a {
    text-decoration: none;
    color: inherit;
}
.full-container {
    width: 100%;
    padding: 0 15px;
}
.container {
    width:100%;
    padding: 0 50px;
}
.h-full {
    height:100%;
}
.relative {
    position: relative;
}
.flex {
    display: flex;
}
.space-between {
    justify-content: space-between;
}
.justify-center {
    justify-content: center;
}
.justify-start {
    justify-content: start;
}
.justify-end {
    justify-content: end;
}
.flex-wrap {
    flex-wrap: wrap;
}
.align-center {
    align-items: center;
}
.gap-5 {
    gap: 5px;
}
.gap-10 {
    gap: 10px;
}
.gap-15 {
    gap: 15px;
}
.gap-20 {
    gap: 20px;
}
.gap-30 {
    gap: 20px;
}
.gap-40 {
    gap: 40px;
}
.gap-50 {
    gap: 50px;
}
`;
