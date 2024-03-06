import * as S from "./styles";
interface MainContentProps {
  children: React.ReactNode;
}
const MainContent = ({ children }: MainContentProps) => {
  return <S.MainContent>{children}</S.MainContent>;
};
export default MainContent;
