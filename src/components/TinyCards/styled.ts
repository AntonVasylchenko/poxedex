import styled from 'styled-components'
import { media } from '../Loyaut/styled';

export const WrapperGrid = styled.div`
   display: flex;
   align-items: center;
   justify-content: flex-start;
   flex-wrap: wrap;
   row-gap: 50px;
   column-gap: 32px;

   ${media.desktop} {
      row-gap: 20px;
      column-gap: 20px;
   }
`;
WrapperGrid.displayName = 'WrapperGrid'