import { useState } from "react";
import { ButtonMenu } from "../ButtonMenu";
import * as S from "./styles";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import FontDownloadIcon from "@mui/icons-material/FontDownload";

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
          icon={FolderOpenIcon}
        />
        <ButtonMenu
          text="Images"
          onClick={() => {
            handleBtActive(2);
          }}
          active={buttonActive === 2}
          icon={ImageSearchIcon}
        />
        <ButtonMenu
          text="Text/Font"
          onClick={() => {
            handleBtActive(3);
          }}
          active={buttonActive === 3}
          icon={FontDownloadIcon}
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
