import styled from "styled-components";
import Image from "next/image";
import { fadeInFromTop } from "@/styles/animations/animations";
import { device } from "@/constants/constants";

export const Header = styled.header`
  display: flex;
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.colors.orange_300},
    ${(props) => props.theme.colors.orange_400}
  );
  margin: 0;
`;

export const Img = styled(Image)``;

export const ButtonMenu = styled.button`
  display: inline-block;
  align-items: center;
  border: transparent !important;
  padding: 1rem;
  color: white;
  font-size: ${(props) => props.theme.font.sizes.small};
  border-radius: 3rem;
  transition: background-color 0.3s;
  animation: ${fadeInFromTop} 1.5s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  &:focus {
    background-color: rgba(255, 255, 255, 0.1);
  }
  &:nth-of-type(4) {
    margin-left: auto;
  }
  &:last-child {
    display: flex;
    align-items: center;
  }

  @media ${device.laptop} {
    padding: 1rem;
    font-size: ${(props) => props.theme.font.sizes.xxsmall};
  }
  @media ${device.mobileL} {
    &:nth-of-type(1) {
      display: none;
    }
    &:nth-of-type(2) {
      display: none;
    }
    &:nth-of-type(3) {
      display: none;
    }
  }
`;

export const Logo = styled(Img)`
  width: 5rem;
  height: 3rem;
  align-self: center;
  object-fit: cover;
  margin-left: 2rem;
  margin-right: 3rem;
  @media (max-width: 768px) {
    width: 3rem;
  }
  animation: ${fadeInFromTop} 0.5s;
`;

export const UserImage = styled(Img)`
  width: 3rem;
  height: 3rem;
  border-radius: 2rem;
  margin-right: 1rem;
  align-self: center;
  object-fit: cover;
`;
export const UserSpan = styled.span``;

// export const Content = styled.div`
//   width: 100%;
//   max-width: ${theme.grid.container};

//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;
