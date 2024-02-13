import styled from "styled-components";

export const ButtonMenu = styled.button`
  border: transparent;
  padding: 1.9rem 0;
  color: ${(props) => props.theme.colors.gray_50};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Icon = styled.i``;
export const TextSpan = styled.span`
  font-size: ${(props) => props.theme.spacings.xsmall};
`;
