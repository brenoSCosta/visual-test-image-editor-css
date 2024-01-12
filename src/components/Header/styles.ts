import styled from "styled-components";
import Image from "next/image";

// import theme from "../../styles/theme";

export const Header = styled.header`
  background-image: linear-gradient(to right, #18a0be, #622db9);
  margin: 0;
`;

export const Img = styled(Image)``;

export const ButtonMenu = styled.button`
  display: inline-block;
  align-items: center;
  border: transparent !important;
  margin: 0.2rem;
  padding: 2rem;
  color: white;
`;

export const Icon = styled.i``;

export const Logo = styled(Img)`
  width: 5rem;
  height: 3rem;
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
