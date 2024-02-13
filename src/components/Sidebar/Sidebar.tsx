import { ButtonMenu } from "../ButtonMenu";
import * as S from "./styles";

const Sidebar = () => {
  return (
    <S.Sidebar>
      <ButtonMenu text="Clique aquidsds" />
      <ButtonMenu text="Clique aqui" /> <ButtonMenu text="Clique aqui" />{" "}
      <ButtonMenu text="Clique aqui" /> <ButtonMenu text="Clique aqui" />{" "}
      <ButtonMenu text="Clique aqui" /> <ButtonMenu text="Clique aqui" />
    </S.Sidebar>
  );
};

export default Sidebar;
