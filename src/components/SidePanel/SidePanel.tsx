import * as S from "./styles";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import AddIcon from "@mui/icons-material/Add";
interface ISidePanel {
  title: string;
}
const SidePanel = ({ title = "" }: ISidePanel) => {
  return (
    <S.SidePanel>
      <S.PanelTop>
        <S.PanelTopTitle>{title}</S.PanelTopTitle>
        <S.PanelTopIcon>
          <KeyboardDoubleArrowLeftIcon fontSize="inherit" />
        </S.PanelTopIcon>
      </S.PanelTop>
      <S.PanelImages>
        <S.PanelImgs
          src="https://plus.unsplash.com/premium_photo-1679689964097-db2045bf5c96?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Happy womans in the beach"
        />
        <S.PanelImgs
          src="https://images.unsplash.com/photo-1582152629442-4a864303fb96?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VsZmllfGVufDB8fDB8fHww"
          alt="Woman selfie"
        />
        <S.PanelImgs
          src="https://images.unsplash.com/photo-1612000529646-f424a2aa1bff?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNlbGZpZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Woman selfie 2"
        />
        <S.PanelImgs
          src="https://images.unsplash.com/photo-1603112579965-e24332cc453a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNlbGZpZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Guy selfie"
        />
        <S.PanelImgs
          src="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNlbGZpZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Guy selfie"
        />
        <S.PanelBtnAdd>
          <S.PanelUploadIcon>
            <AddIcon fontSize="large" />
          </S.PanelUploadIcon>
        </S.PanelBtnAdd>
      </S.PanelImages>
    </S.SidePanel>
  );
};
export default SidePanel;
