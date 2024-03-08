import { device } from "@/constants/constants";
import { fadeIn, scale } from "@/styles/animations/animations";
import styled from "styled-components";

export const SidePanel = styled.div`
  background-color: ${(props) => props.theme.colors.side_painel};
  width: 35rem;
  padding: 1.5rem 3.1rem;
  @media ${device.laptop} {
    display: none;
  }
`;
export const PanelTop = styled.div`
  background-color: ${(props) => props.theme.colors.side_painel};
  display: flex;
  justify-content: space-between;
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.gray_300};
`;
export const PanelTopTitle = styled.h1`
  font-size: ${(props) => props.theme.font.sizes.xsmall};
  font-weight: ${(props) => props.theme.font.normal};
  color: ${(props) => props.theme.colors.white};
`;
export const PanelTopIcon = styled.i`
  cursor: pointer;
  color: ${(props) => props.theme.colors.gray_300};
  width: 2rem;
`;
export const PanelImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  padding: 2.5rem 0;
`;

export const PanelImgs = styled.img`
  height: 14rem;
  width: 14rem;
  border-radius: 0.7rem;
  object-fit: cover;
  animation: ${fadeIn} 1s;

  &:nth-of-type(2) {
    animation: ${fadeIn} 1s 0.1s backwards;
  }
  &:nth-of-type(3) {
    animation: ${fadeIn} 1s 0.2s backwards;
  }
  &:nth-of-type(4) {
    animation: ${fadeIn} 1s 0.3s backwards;
  }
  &:nth-of-type(5) {
    animation: ${fadeIn} 1s 0.4s backwards;
  }
  &:hover {
    animation: ${scale} 1s ease forwards;
  }
`;
export const PanelBtnAdd = styled.button`
  height: 14rem;
  width: 14rem;
  border-radius: 0.7rem;
  background-color: ${(props) => props.theme.colors.side_button};
  border: none;
  animation: ${fadeIn} 1s 0.5s backwards;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  &:focus {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
export const PanelUploadIcon = styled.i`
  cursor: pointer;
  // color: ${(props) => props.theme.colors.gray_300};

  height: 2rem;
  width: 4.5rem;
`;
