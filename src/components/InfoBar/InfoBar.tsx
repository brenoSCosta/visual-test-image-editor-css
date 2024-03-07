import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const InfoBar = () => {
  return (
    <S.InfoBar>
      <S.BreadCrumbs>
        <S.BreadCrumbsLink href="#">Instagram posts</S.BreadCrumbsLink>
        <S.BreadCrumbsIcon>
          <FontAwesomeIcon icon={faAnglesRight} />
        </S.BreadCrumbsIcon>
        <S.BreadCrumbsText>My new profile picture</S.BreadCrumbsText>
      </S.BreadCrumbs>
      <S.InfoBarButton>Publish</S.InfoBarButton>
    </S.InfoBar>
  );
};
export default InfoBar;
