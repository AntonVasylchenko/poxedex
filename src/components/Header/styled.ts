import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: var(--background-theme);
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr 40px auto;
  grid-column-gap: 5px;
  padding: 15px var(--side-space);
  align-items: center;

  border-radius: 20px;

  border-top-right-radius: 0;
  border-top-left-radius: 0;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 16px;
`;
HeaderWrapper.displayName = "HeaderWrapper";

export const LogoElement = styled.h1`
  width: 100%;
  color: var(--color-mode-logo);
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  margin: 0;
  padding-left: 50px;
  text-transform: uppercase;
  a {
    color: inherit;
    text-decoration: none;
  }
`;
LogoElement.displayName = "LogoElement";

export const IconElement = styled.div`
  width: fit-content;
  padding: 0 5px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

IconElement.displayName = "IconElement";

