import styled from "styled-components";

export const StatsWrapper = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   align-items: stretch;
   flex-wrap: wrap;
   column-gap: 90px;
   row-gap: 30px;
   column-count: 3;
   max-width: 600px;
   padding: 20px 60px;
   border-radius: 20px;
   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
   h2 {
      width: 100%;
      max-width: 100%;
      text-align: center;
      color: var(--color-mode-logo);
      font-size: 24px;
      font-weight: 700;
      line-height: 28px;
      text-align: center;
   }
   
`

StatsWrapper.displayName = "StatsWrapper"