import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   body {
      padding: 0;
      margin: 0;
      background-color: #fff;
      box-sizing: border-box;
   }
`
export const Wrapper = styled.div`

`;
Wrapper.displayName = 'WrapperApp'