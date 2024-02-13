import { useState } from "react";
import { ButtonMenu } from "../ButtonMenu";
import * as S from "./styles";

const Sidebar = () => {
  const [buttonActive, setButtonActive] = useState(0);
  function handleBtActive(value: number) {
    setButtonActive(value);
  }
  return (
    <S.Sidebar>
      <section>
        <ButtonMenu
          text="Clique aquidsds"
          onClick={() => {
            handleBtActive(1);
          }}
        />
        <ButtonMenu
          text="Clique aqui"
          onClick={() => {
            handleBtActive(2);
          }}
        />{" "}
        <ButtonMenu
          text="Clique aqui"
          onClick={() => {
            handleBtActive(3);
          }}
        />
      </section>
      <S.Footer>
        <S.Copyright>
          &copy; 2024 Breno Souza Costa. All rights reserved.
        </S.Copyright>
      </S.Footer>
    </S.Sidebar>
  );
};

export default Sidebar;
