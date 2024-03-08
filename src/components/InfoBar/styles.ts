import { device } from "@/constants/constants";
import styled from "styled-components";

export const InfoBar = styled.div`
  font-size: ${(props) => props.theme.font.sizes.xxsmall};
  height: 5rem;
  background-color: ${(props) => props.theme.colors.white};
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.gray_50};
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
  height: auto;
  min-height: 5rem;
  @media ${device.laptop} {
    padding: 0 2rem;
  }
`;

export const BreadCrumbs = styled.div``;

export const BreadCrumbsLink = styled.a`
  color: ${(props) => props.theme.colors.gray_200};
`;
export const BreadCrumbsIcon = styled.i`
  color: ${(props) => props.theme.colors.gray_200};
  margin: 0 1.3rem;
`;
export const BreadCrumbsText = styled.span`
  font-weight: 500;
`;

export const InfoBarButton = styled.button`
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.orange_200};
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 50rem;
  transition: all 0.4s;
  &:focus,
  &:hover {
    background-color: ${(props) => props.theme.colors.orange_300};
  }
`;
