"use client";
import * as S from "./styles";
import logo from "../../assets/images/logo.png";
import user_img from "../../assets/images/user_img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faBell } from "@fortawesome/free-solid-svg-icons";

// type MainProps = {
//   children: React.ReactNode;
// };

const Header = () => (
  <S.Header>
    <S.Logo src={logo} alt="Logo" />
    <S.ButtonMenu>File</S.ButtonMenu>
    <S.ButtonMenu>View</S.ButtonMenu>
    <S.ButtonMenu>New</S.ButtonMenu>
    <S.ButtonMenu>
      <FontAwesomeIcon icon={faBell} />
    </S.ButtonMenu>
    <S.ButtonMenu>
      <FontAwesomeIcon icon={faCrown} />
    </S.ButtonMenu>
    <S.ButtonMenu>
      <S.UserImage src={user_img} alt="logo_user" />
      <S.UserSpan>Breno S.</S.UserSpan>
    </S.ButtonMenu>
  </S.Header>
);

export default Header;
