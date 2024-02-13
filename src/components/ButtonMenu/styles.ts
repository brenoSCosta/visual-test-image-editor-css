import styled, { keyframes } from "styled-components";

const fadeInFromLeft = keyframes`
  0%   {
    transform: translateX(-5rem);
  }

  100% {
    transform: translateX(0rem);
    }
`;

export const ButtonMenu = styled.button`
  border: transparent;
  padding: 1.9rem 0;
  color: ${(props) => props.theme.colors.gray_50};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  transition: background-color 0.3s;
  animation: ${fadeInFromLeft} 0.5s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  &:focus {
    background-color: rgba(255, 255, 255, 0.1);
  }
  &::before {
    content: "";
    width: 0.2rem;
    height: 100%;
    background-color: #375bb6;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const Icon = styled.i``;
export const TextSpan = styled.span`
  font-size: ${(props) => props.theme.spacings.xsmall};
`;
