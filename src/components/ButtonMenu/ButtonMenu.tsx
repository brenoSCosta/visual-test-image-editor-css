import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
interface ButtonMenuProps {
  text: string;
}
const ButtonMenu = ({
  text,
  ...props
}: ButtonMenuProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <S.ButtonMenu {...props}>
      <S.Icon>
        <FontAwesomeIcon icon={faBell} />
      </S.Icon>
      <S.TextSpan> {text}</S.TextSpan>
    </S.ButtonMenu>
  );
};
export default ButtonMenu;
