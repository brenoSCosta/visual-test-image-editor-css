import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrop,
  faObjectGroup,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

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
          <FontAwesomeIcon icon={faCrop} />
        </S.ButtonTools>
        <S.ButtonTools
          onClick={() => {
            handleBtActive(2);
          }}
          active={buttonActive === 2}
        >
          <FontAwesomeIcon icon={faObjectGroup} />
        </S.ButtonTools>
        <S.ButtonTools
          onClick={() => {
            handleBtActive(3);
          }}
          active={buttonActive === 3}
        >
          <FontAwesomeIcon icon={faPen} />
        </S.ButtonTools>
        <S.ButtonTools
          onClick={() => {
            handleBtActive(4);
          }}
          active={buttonActive === 4}
        >
          <FontAwesomeIcon icon={faTrash} />
        </S.ButtonTools>
      </S.Tools>
    </S.ArtBoard>
  );
};
export default ImageEdit;
