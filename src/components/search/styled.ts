import styled from "styled-components";

export const SearchWrapper = styled.div`
   padding: 0 var(--side-space);
  div {
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
  }

  div img {
    margin-right: 20px;
  }

  div input {
    width: 100%;
    height: 100%;
  }
`;

SearchWrapper.displayName = "SearchWrapper";
