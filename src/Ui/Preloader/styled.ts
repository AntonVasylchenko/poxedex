import styled from "styled-components";

export const BallWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;
export const Ball = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: white;
  position: relative;
  box-shadow: -20px 0 rgba(0, 0, 0, 0.1) inset;
  animation: roll 1s ease-in-out infinite;
  background: linear-gradient(
    to bottom,
    #e83e35 0%,
    #e83e35 50.5%,
    #ffffff 50.51%,
    #ffffff 100%
  );
  &:after {
    content: "";
    position: absolute;
    top: calc(100px - 3px);
    left: 0;
    width: 200px;
    height: 6px;
    background: #3f3f3f;
  }

  &:before {
    content: "";
    position: absolute;
    top: 67px;
    left: 67px;
    width: 54px;
    height: 54px;
    border: solid 6px #3f3f3f;
    border-radius: 50%;
    background: white;
    z-index: 1;
    box-shadow: 0 0 15px -2px #c62828 inset;
    animation: button 3s ease infinite;
  }

  @-webkit-keyframes roll {
    from {
      transform: rotate(0);
    }
    90%,
    to {
      transform: rotate(720deg);
    }
  }

  @-webkit-keyframes button {
    from,
    50%,
    to {
      box-shadow: 0 0 15px -2px #c62828 inset;
    }

    25%,
    75% {
      box-shadow: 0 0 10px -2px #1300ea inset;
    }
  }
`;

Ball.displayName = "Ball";
BallWrapper.displayName = "BallWrapper";
