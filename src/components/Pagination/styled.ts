import styled from "styled-components";

export const PaginationContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 20px;

  .disabled-button {
    pointer-events: none;
    opacity: 0.7;
  }
`;
PaginationContainer.displayName = "PaginationContainer";
