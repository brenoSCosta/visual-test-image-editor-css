import styled from "styled-components";
import Image from "next/image";

// import theme from "../../styles/theme";

export const Header = styled.header`
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
  padding: 2rem;
  color: white;
  font-size: 2rem;
  border-radius: 3rem;
  &:hover {
    background-color: ${(props) => props.theme.colors.gray_300};
  }
  &:nth-of-type(4) {
    justify-content: end;
  }
`;

export const Icon = styled.i``;

export const Logo = styled(Img)`
  width: 5rem;
  height: 3rem;
  object-fit: cover;
`;

export const UserImage = styled(Img)`
  width: 3rem;
  height: 3rem;
  border-radius: 2rem;
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
