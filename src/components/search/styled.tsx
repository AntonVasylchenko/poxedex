import styled, { css } from "styled-components";

export const SearchWrapper: any = styled.div`
   display: grid;
   place-content: center;
   min-height: 20px;
   width: 100%;
   max-width: 400px;
   margin: 0 auto 40px auto;
   border-radius: 12px;
   background-color: #ccc;

   input {
      width: 100%;
      height: 100%;
   }
`;

SearchWrapper.displayName = SearchWrapper