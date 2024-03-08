import { device } from "@/constants/constants";
import styled from "styled-components";

export const Sidebar = styled.div`
  background-color: ${(props) => props.theme.colors.side_bar};
  width: 7.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${device.tablet} {
    display: none;
  }
`;

export const Footer = styled.div`
  margin-bottom: 6rem;
  transform: rotate(-90deg);
  white-space: nowrap;
`;

export const Copyright = styled.small`
  color: rgba(255, 255, 255, 0.1);
  font-size: ${(props) => props.theme.font.sizes.xxsmall};
`;
