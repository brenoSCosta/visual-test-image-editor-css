import { useState } from "react";
import { ButtonMenu } from "../ButtonMenu";
import * as S from "./styles";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import FontDownloadIcon from "@mui/icons-material/FontDownload";

interface SidebarProps {
  selectValue: number;
  changeSelectedValue: (newValue: number) => void;
}

const Sidebar = ({ selectValue = 0, changeSelectedValue }: SidebarProps) => {
  return (
    <S.Sidebar>
      <section>
        <ButtonMenu
          text="Templates"
          onClick={() => {
            changeSelectedValue(1);
          }}
          active={selectValue === 1}
          icon={FolderOpenIcon}
        />
        <ButtonMenu
          text="Images"
          onClick={() => {
            changeSelectedValue(2);
          }}
          active={selectValue === 2}
          icon={ImageSearchIcon}
        />
        <ButtonMenu
          text="Text/Font"
          onClick={() => {
            changeSelectedValue(3);
          }}
          active={selectValue === 3}
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
