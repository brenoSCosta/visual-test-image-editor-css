import { fadeInFromLeft } from "@/styles/animations/animations";
import styled from "styled-components";

export const ButtonMenu = styled.button<{ active?: boolean }>`
  border: transparent;
  padding: 1.9rem 0;
  color: ${(props) => props.theme.colors.gray_50};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: auto;
  width: 100%;
  transition: background-color 0.3s;
  animation: ${fadeInFromLeft} 0.5s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  &:focus {
    background-color: rgba(255, 255, 255, 0.1);
  }

  ${(props) =>
    props.active &&
    `
    background-color: rgba(255, 255, 255, 0.1);
    &::before {
      content: "";
      width: 0.2rem;
      height: 100%;
      background-color: #375bb6;
      position: absolute;
      top: 0;
      left: 0;
    }
  `}
`;

export const Icon = styled.i<{ active?: boolean }>`
  color: ${(props) =>
    props.active ? props.theme.colors.white : props.theme.colors.gray_300};
`;
export const TextSpan = styled.span`
  font-size: ${(props) => props.theme.font.sizes.xxsmall};
`;
