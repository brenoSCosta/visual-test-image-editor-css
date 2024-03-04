import { ReactNode } from "react";
import * as S from "./styles";
interface ISidePanel {
  title: string;
}
const SidePanel = ({ title = "" }: ISidePanel) => {
  return (
    <S.SidePanel>
      <S.PanelTop>
        <S.PanelTopTitle>{title}</S.PanelTopTitle>
      </S.PanelTop>
      <S.PanelImages>
        <S.PanelImgs></S.PanelImgs>
      </S.PanelImages>
    </S.SidePanel>
  );
};
export default SidePanel;
