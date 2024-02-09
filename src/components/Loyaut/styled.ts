import { createGlobalStyle } from "styled-components";

const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(1140),
  tablet: customMediaQuery(998),
  mobile: customMediaQuery(768),
};

export const GlobalStyle = createGlobalStyle<{ themeName: string }>`
   :root {
      --color-mode: ${(props) =>
        props.themeName === "light" ? "#fff" : "#000"};
      --background-theme: ${(props) =>
        props.themeName === "light" ? "#fff" : "#000"};
      --color-mode-logo: ${(props) =>
        props.themeName === "light" ? "#000" : "#fff"};
      --background-mode: ${(props) =>
        props.themeName === "light" ? "#000" : "#fff"};
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
      width: 100vw;
      min-height: 100vh;
   }
   #root {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
   }

   .disabled-scroll {
      height: 100vh;
      overflow: hidden;
   }

   h1,h2,h3,h4,h5,h6 {
      width: 100%;
      margin: 20px auto;
      text-align: center;
      color: var(--color-mode-logo);
      font-size: 18px;
   } 

`;
