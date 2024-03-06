import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
interface ButtonMenuProps {
  text: string;
  active: boolean;
  icon: IconDefinition;
}
const ButtonMenu = ({
  text = "",
  active = false,
  icon,
  ...props
}: ButtonMenuProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <S.ButtonMenu active={active} {...props}>
      <S.Icon active={active}>
        <FontAwesomeIcon icon={icon} />
      </S.Icon>
      <S.TextSpan> {text}</S.TextSpan>
    </S.ButtonMenu>
  );
};
export default ButtonMenu;
