import styled from "styled-components";

export const CirleBar = styled.div<{ color: string; value: number }>`
  --main-color: ${(props) => props.color};
  --main-value: ${(props) => props.value + "%"};
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: radial-gradient(closest-side, white 79%, transparent 80% 100%),
    conic-gradient(var(--main-color) var(--main-value), var(--background-mode) 0);
  progress {
    visibility: hidden;
    height: 0;
    width: 0;
  }
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    line-height: 28px;
    font-weight: 700;
    color: var(--main-color);
  }
`;

CirleBar.displayName = "CirleBar";

export const CirleBarWrapper = styled.div`
  width: 100%;
  max-width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
   font-size: 18px ;
   line-height: 40px;
   font-weight: 500;
   text-transform: capitalize;
   line-height: 18px;
   text-align: center;
  }

`;

CirleBarWrapper.displayName = "CirleBarWrapper";
