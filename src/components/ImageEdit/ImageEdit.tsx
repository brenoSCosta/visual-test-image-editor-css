import * as S from "./styles";

import { useState } from "react";
import CropIcon from "@mui/icons-material/Crop";
import ImageAspectRatioIcon from "@mui/icons-material/ImageAspectRatio";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";

export const ImageEdit = () => {
  const [buttonActive, setButtonActive] = useState(0);
  function handleBtActive(value: number) {
    setButtonActive(value);
  }
  return (
    <S.ArtBoard>
      <S.Canvas>
        <S.CanvasImgBg
          src="https://images.unsplash.com/photo-1542353436-312f0e1f67ff?q=80&w=942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Happy womans in the beach"
        />
        <S.CanvasImg
          src="https://images.unsplash.com/photo-1542353436-312f0e1f67ff?q=80&w=942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Happy womans in the beach"
        />
        <S.CanvasCircle />
        <S.CanvasCircle />
        <S.CanvasCircle />
        <S.CanvasCircle />
      </S.Canvas>

      <S.Tools>
        <S.ButtonTools
          onClick={() => {
            handleBtActive(1);
          }}
          active={buttonActive === 1}
        >
          <CropIcon />
        </S.ButtonTools>
        <S.ButtonTools
          onClick={() => {
            handleBtActive(2);
          }}
          active={buttonActive === 2}
        >
          <ImageAspectRatioIcon />
        </S.ButtonTools>
        <S.ButtonTools
          onClick={() => {
            handleBtActive(3);
          }}
          active={buttonActive === 3}
        >
          <CreateIcon />
        </S.ButtonTools>
        <S.ButtonTools
          onClick={() => {
            handleBtActive(4);
          }}
          active={buttonActive === 4}
        >
          <DeleteIcon />
        </S.ButtonTools>
      </S.Tools>
    </S.ArtBoard>
  );
};
export default ImageEdit;
