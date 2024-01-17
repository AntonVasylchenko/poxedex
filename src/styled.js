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
export const WrapperGrid = styled.div`
   display: flex;
   align-items: center;
   justify-content: flex-start;
   flex-wrap: wrap;
   row-gap: 50px;
   column-gap: 32px;
`;
Wrapper.displayName = 'WrapperApp'