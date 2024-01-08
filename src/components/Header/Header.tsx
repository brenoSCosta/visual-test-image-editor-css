'use client';
import * as S from "./styles";
import logo from '../../assets/images/logo.png';
// type MainProps = {
//   children: React.ReactNode;
// };

const Header = () => <S.Header>
    <S.Logo src={logo} alt="Logo" />
    <S.ButtonMenu>File</S.ButtonMenu>
    <S.ButtonMenu>View</S.ButtonMenu>
    <S.ButtonMenu>New</S.ButtonMenu>
    <S.ButtonMenu>
        <S.Icon className="fas  fa-crow" />
    </S.ButtonMenu>
    <S.ButtonMenu>
        <S.Icon className="fas  fa-bell" />
    </S.ButtonMenu>
    <S.ButtonMenu>
        <S.UserSpan >Breno S.</S.UserSpan>

    </S.ButtonMenu>
</S.Header>;

export default Header;
