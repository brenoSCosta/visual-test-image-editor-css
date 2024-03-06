import { useState } from "react";
import { ButtonMenu } from "../ButtonMenu";
import * as S from "./styles";
import { faA, faFolderOpen, faImages } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [buttonActive, setButtonActive] = useState(0);
  function handleBtActive(value: number) {
    setButtonActive(value);
  }
  return (
    <S.Sidebar>
      <section>
        <ButtonMenu
          text="Templates"
          onClick={() => {
            handleBtActive(1);
          }}
          active={buttonActive === 1}
          icon={faFolderOpen}
        />
        <ButtonMenu
          text="Images"
          onClick={() => {
            handleBtActive(2);
          }}
          active={buttonActive === 2}
          icon={faImages}
        />
        <ButtonMenu
          text="Text/Font"
          onClick={() => {
            handleBtActive(3);
          }}
          active={buttonActive === 3}
          icon={faA}
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
