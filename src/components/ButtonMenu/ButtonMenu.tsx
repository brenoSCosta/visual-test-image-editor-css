import * as S from "./styles";
import { IconType } from "react-icons";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";

interface ButtonMenuProps {
  text: string;
  active: boolean;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string }; // Defina o tipo correto do ícone do Material-UI
}
const ButtonMenu = ({
  text = "",
  active = false,
  icon,
  ...props
}: ButtonMenuProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const Icon = icon;

  return (
    <S.ButtonMenu active={active} {...props}>
      <S.Icon active={active}>
        <Icon fontSize="large" />
      </S.Icon>
      <S.TextSpan> {text}</S.TextSpan>
    </S.ButtonMenu>
  );
};
export default ButtonMenu;
