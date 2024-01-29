import { createGlobalStyle } from "styled-components";

const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(1140),
  tablet: customMediaQuery(998),
  mobile: customMediaQuery(768),
};

export const GlobalStyle = createGlobalStyle`
   :root {
      --color-mode: #fff;
      --background-theme: #fff;
      --color-mode-logo: #000;
      --background-mode: #000;
      --side-space: 70px;
      ${media.desktop} {
         --side-space: 30px;
      }
      ${media.mobile}{
         --side-space: 15px;
      }
   }

   html,
   body {
      padding: 0;
      margin: 0;
      background-color: var(--background-theme);
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 16px;
   }

   .disabled-scroll {
      height: 100vh;
      overflow: hidden;
   }

`;
