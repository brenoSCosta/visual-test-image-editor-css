// animations.js

import { keyframes } from "styled-components";

export const scale = keyframes`
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.2);
  }
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const fadeInFromLeft = keyframes`
  0%   {
    opacity: 0;
    transform: translateX(-5rem);
  }

  100% {
    opacity: 1;
    transform: translateX(0rem);
    }
`;
export const fadeInFromRight = keyframes`
  0%   {
    opacity: 0;
    transform: translateX(5rem);
  }

  100% {
    opacity: 1;
    transform: translateX(0rem);
    }
`;
export const fadeInFromTop = keyframes`
  0%   {
    transform: translateY(-5rem);
  }

  100% {
    transform: translateY(0rem);
    }
`;

export const makeSmaller = keyframes`
0%   {
  height: 100%;
  width: 100%;
}

100% {
  height: 75%;
  width: 78%;
  }
`;
