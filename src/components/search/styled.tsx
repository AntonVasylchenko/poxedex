import styled, { css } from "styled-components";

export const SearchWrapper: any = styled.div`
   display: flex;
   align-items: center;
   justify-content: flex-start;
   min-height: 20px;
   width: 100%;
   max-width: 400px;
   margin: 0 auto 40px auto;
   border-radius: 12px;
   padding: 3px 11px;
   background-color: #ccc;


   img {
      margin-right: 20px;
   }

   input {
      width: 100%;
      height: 100%;
   }
`;

SearchWrapper.displayName = SearchWrapper