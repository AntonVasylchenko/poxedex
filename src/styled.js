import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   :root {
      --color-mode: #fff;
      --background-theme: #fff;
      --color-mode-logo: #000;
      --background-mode: #000;
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

   
   
`
export const Wrapper = styled.div`

`;
