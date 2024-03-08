import * as S from "./styles";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
const InfoBar = () => {
  return (
    <S.InfoBar>
      <S.BreadCrumbs>
        <S.BreadCrumbsLink href="#">Instagram posts</S.BreadCrumbsLink>
        <S.BreadCrumbsIcon>
          <KeyboardDoubleArrowRightIcon />
        </S.BreadCrumbsIcon>
        <S.BreadCrumbsText>My new profile picture</S.BreadCrumbsText>
      </S.BreadCrumbs>
      <S.InfoBarButton>Publish</S.InfoBarButton>
    </S.InfoBar>
  );
};
export default InfoBar;
