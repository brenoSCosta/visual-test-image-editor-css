"use client";
import * as S from "./styles";
import logo from "../../assets/images/logo.png";
import user_img from "../../assets/images/user_img.png";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";

const Header = () => (
  <S.Header>
    <S.Logo src={logo} alt="Logo" />
    <S.ButtonMenu>File</S.ButtonMenu>
    <S.ButtonMenu>View</S.ButtonMenu>
    <S.ButtonMenu>New</S.ButtonMenu>
    <S.ButtonMenu>
      <NotificationsIcon fontSize="large" />
    </S.ButtonMenu>
    <S.ButtonMenu>
      <PersonSearchIcon fontSize="large" />
    </S.ButtonMenu>
    <S.ButtonMenu>
      <S.UserImage src={user_img} alt="logo_user" />
      <S.UserSpan>Breno S.</S.UserSpan>
    </S.ButtonMenu>
  </S.Header>
);

export default Header;
