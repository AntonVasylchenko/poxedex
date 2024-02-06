import styled from "styled-components";
import { media } from "../Loyaut/styled";
export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex: 1;
`;
NavWrapper.displayName = "NavWrapper";

export const NavList = styled.ul`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  column-gap: 60px;
  row-gap: 20px;
  ${media.tablet} {
   column-gap: 20px;
  }
`;
NavList.displayName = "NavList";

export const NavItem = styled.li`

  max-width: calc(100% / 3 - 60px * 2 / 3);
  width: 100%;
  margin: 0;
  padding: 0;

  border-radius: 20px;
  background: var(--background-mode);
  color: var(--color-mode);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 20px;
  cursor: pointer;
  ${media.tablet} {
   max-width: calc(100% / 3 - 20px * 2 / 3);
  }
  ${media.mobile} {
   max-width: 100%;
  }


  a {
    color: inherit;
    display: flex;
    align-items: center;

    justify-content: space-between;
  }
`;
NavItem.displayName = "NavItem";

export const NavName = styled.span`
  color: inherit;
  white-space: nowrap;
  font-size: 26px;
  line-height: 30px;
  letter-spacing: 0;
`;
NavName.displayName = "NavName";

export const NavImage = styled.div`
  margin-left: 20px;
  width: 120px;
  height: 120px;
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
NavImage.displayName = "NavImage";
