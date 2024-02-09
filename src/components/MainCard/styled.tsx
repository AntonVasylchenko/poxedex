import styled from "styled-components";
import { media } from "../Loyaut/styled";

export const StatsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  ${media.tablet} {
    column-gap: 30px;
    row-gap: 30px;
    width: 100%;
    max-width: 100%;
    padding: 20px;
  }
`;

StatsWrapper.displayName = "StatsWrapper";

export const RateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 120px;
  row-gap: 20px;
  ${media.tablet} {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    column-gap: 30px;
    row-gap: 30px;
    width: 100%;
    max-width: 100%;
  }
`;
RateWrapper.displayName = "RateWrapper";

export const InfoWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
`;
InfoWrapper.displayName = "InfoWrapper";

export const InfoImage = styled.div`
  width: 240px;
  height: 240px;
  position: relative;
  margin-bottom: 30px;

  img {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: contain;
    width: 100%;
    height: 100%s;
  }
`;
InfoImage.displayName = "InfoImage";

export const AddTeam = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  border: 1px solid var(--background-mode);
  background-color: var(--background-mode);
  color: var(--color-mode);
  padding: 10px;
  border-radius: 20px;
`;
AddTeam.displayName = "AddTeam";
