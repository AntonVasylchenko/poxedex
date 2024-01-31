import styled from "styled-components";

export const ToggleSwitcher = styled.div`
  display: inline-block;
  width: 72px; /* ширина */
  height: 38px; /* высота */
  border-radius: 19px; /* радиус скругления */
  background: #bfbfbf; /* цвет фона */
  z-index: 0;
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
  position: relative;
  transition-duration: 300ms; /* анимация */
  &::after {
    content: "";
    height: 32px; /* высота кнопки */
    width: 32px; /* ширина кнопки */
    border-radius: 17px;
    background: #fff; /* цвет кнопки */
    top: 3px; /* положение кнопки по вертикали относительно основы */
    left: 3px; /* положение кнопки по горизонтали относительно основы */
    transition-duration: 300ms; /* анимация */
    position: absolute;
    z-index: 1;
  }
  &.switch-on {
    background: #118c4e;
  }
  &.switch-on::after {
    left: 37px;
  }
`;
ToggleSwitcher.displayName = "ToggleSwitcher";
