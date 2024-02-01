import styled from "styled-components";

export const ToggleSwitcher = styled.div`
  display: inline-block;
  width: 40px; 
  height: 24px; 
  border-radius: 19px;
  background: #bfbfbf;
  z-index: 0;
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
  position: relative;
  transition-duration: 300ms;
  &::after {
    content: "";
    height: 20px; 
    width: 20px; 
    border-radius: 17px;
    background: #fff; 
    top: 1.5px; 
    left: 3px;
    transition-duration: 300ms;
    position: absolute;
    z-index: 1;
  }
  &.switch-on {
    background: #118c4e;
  }
  &.switch-on::after {
    left: 18px;
  }
`;
ToggleSwitcher.displayName = "ToggleSwitcher";
