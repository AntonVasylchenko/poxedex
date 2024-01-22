import styled, { css } from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: var(--background-theme);
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-column-gap: 15px;
  padding: 15px 60px;

  border-radius: 20px;

  border-top-right-radius: 0;
  border-top-left-radius: 0;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 16px;
`;

export const LogoElement = styled.div`
  width: 100%;
  color: var(--color-mode-logo);
  font-size: 28px;
  font-weight: 700;
  text-align: center;
`;

export const IconElement = styled.div`
  width: fit-content;
  padding: 0 5px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Overlay = styled.div<{ $open?: boolean }>`
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease-in 0.1s;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;

  ${(props) =>
    props.$open &&
    css`
      visibility: visible;
      opacity: 1;
    `}

  .header-overlay__line {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--background-theme);
  }

  .header-overlay__content {
    position: relative;
  }
  .header-overlay__header {
    background-color: var(--background-theme);
    position: relative;
    padding: 15px 60px;

    border-radius: 20px;

    border-top-right-radius: 0;
    border-top-left-radius: 0;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-bottom: 16px;
  }
  img {
   cursor: pointer;
   position: absolute;
   left: 28px;
   top: 50%;
   transform: translateY(-50%);
  }

  h2 {
    width: 100%;
    color: var(--color-mode-logo);
    font-size: 28px;
    font-weight: 700;
    text-align: center;
  }
`;
