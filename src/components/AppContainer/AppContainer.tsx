import { ReactNode } from "react";
import * as S from "./styles";

interface AppContainerProps {
  children: ReactNode;
}
const AppContainer = ({ children }: AppContainerProps) => {
  return <S.AppContainer>{children}</S.AppContainer>;
};
export default AppContainer;
