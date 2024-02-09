import styled from "styled-components";

export const ToggleSwitcher = styled.div`
  display: inline-block;
  max-width: 48px;
  width: 100%;
  height: 24px;
  border-radius: 19px;
  background: var(--background-mode);
  z-index: 0;
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
  position: relative;
  transition: all 0.3s;
  &.switch-on {
    background: var(--background-mode);
    img {
      right: 0;
      left: unset;
    }
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;
    object-fit: contain;
    transition: all 0.3s;
  }
`;
ToggleSwitcher.displayName = "ToggleSwitcher";
