import styled from "styled-components";
import { media } from "../Loyaut/styled";

export const Card = styled.div`
  max-width: calc(100% / 3 - 32px * 2 / 3);
  width: 100%;
  border-radius: 20px;
  background: var(--background-mode);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 20px;
  cursor: pointer;

  &:hover .card__photo--back {
    opacity: 1;
  }
  &:hover .card__photo--front {
    opacity: 0;
  }

  .card__number {
    color: var(--color-mode);
    font-size: 14px;
    font-style: normal;
    line-height: normal;
  }

  .card__container {
    padding-left: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .card__title {
    color: var(--color-mode);
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
    margin-bottom: 10px;
  }

  .card__item--name {
    color: var(--color-mode);
    font-size: 16px;
    font-style: normal;
    line-height: normal;
  }

  .card__photo {
    margin-left: 27px;
    width: 100px;
    height: 100px;
    position: relative;
  }

  .card__photo img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: opacity 0.3s;
  }

  .card__photo--front {
    opacity: 1;
  }

  .card__photo--back {
    opacity: 0;
  }

  ${media.desktop} {
    max-width: calc(100% / 2 - 20px * 1 / 2);
  }
  ${media.mobile} {
    max-width: 100%;

    .card__container {
      padding-left: 0px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    .card__photo {
      margin-left: 0;
    }
  }
`;


Card.displayName = "Card"