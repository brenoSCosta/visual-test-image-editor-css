import { device } from "@/constants/constants";
import {
  fadeIn,
  fadeInFromRight,
  makeSmaller,
} from "@/styles/animations/animations";
import styled from "styled-components";

export const ArtBoard = styled.div`
  display: flex;
  margin-top: 4rem;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;
  @media ${device.laptop} {
    padding: 5rem 2rem;
    margin-top: 1rem;
    height: initial;
  }
`;

export const Canvas = styled.section`
  height: 57.7vh;
  width: 48.6vw;
  position: relative;
  border: 0.1rem solid ${(props) => props.theme.colors.white};
  border-radius: 0.3rem;
  @media ${device.laptop} {
    width: 67vw;
    height: 50rem;
  }
`;

export const CanvasImgBg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: 0.15;
`;
export const CanvasImg = styled.img`
  height: 75%;
  width: 78%;
  object-fit: cover;
  border-radius: 0.3rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: grab;
  animation: ${makeSmaller} 1s 0.2s;

  border: 0.1rem solid ${(props) => props.theme.colors.white};
`;

export const CanvasCircle = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.white};
  position: absolute;
  animation: ${fadeIn} 1s 1s backwards;
  &:nth-of-type(1) {
    top: 11.5%;
    left: 10.4%;
    cursor: nw-resize;
  }
  &:nth-of-type(2) {
    top: 11.5%;
    right: 10.4%;
    cursor: sw-resize;
  }
  &:nth-of-type(3) {
    bottom: 11.5%;
    left: 10.4%;
    cursor: nw-resize;
  }
  &:nth-of-type(4) {
    bottom: 11.5%;
    right: 10.4%;
    cursor: sw-resize;
  }
`;

export const Tools = styled.section`
  height: 57.5vh;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  transition: all 0.4s;
  animation: ${fadeInFromRight} 0.5s;
  @media ${device.laptop} {
    height: 50rem;
  }
`;

export const ButtonTools = styled.button<{ active?: boolean }>`
  background-color: ${(props) => props.theme.colors.gray_blue};
  cursor: pointer;
  height: 4.4rem;
  width: 4.4rem;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.gray_300};
  border: none;

  &:last-child {
    margin-top: auto;
  }
  &:hover,
  :focus {
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
  }

  ${(props) =>
    props.active &&
    `
    background-color: ${props.theme.colors.black};
    color: ${props.theme.colors.white};

  `}
`;
