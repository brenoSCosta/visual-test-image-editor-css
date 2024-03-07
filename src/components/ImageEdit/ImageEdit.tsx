import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrop,
  faObjectGroup,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export const ImageEdit = () => {
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
        <S.ButtonTools>
          <FontAwesomeIcon icon={faCrop} />
        </S.ButtonTools>
        <S.ButtonTools>
          <FontAwesomeIcon icon={faObjectGroup} />
        </S.ButtonTools>
        <S.ButtonTools>
          <FontAwesomeIcon icon={faPen} />
        </S.ButtonTools>
        <S.ButtonTools>
          <FontAwesomeIcon icon={faTrash} />
        </S.ButtonTools>
      </S.Tools>
    </S.ArtBoard>
  );
};
export default ImageEdit;
