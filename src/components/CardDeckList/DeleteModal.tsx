import styled from "styled-components";
import { flexBox } from "../../styles/postion";
import Button from "../Common/Button";
import Modal from "../Common/Modal";

interface deleteMoalProps {
  visible: boolean;
  onClose: () => void;
}

const DeleteModal: React.FC<deleteMoalProps> = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} onClose={onClose}>
      <ModalContent>
        <span>🗑️</span>
        <p>해당 카드덱을 삭제하시겠습니까?</p>
        <div>
          <Button onClick={() => {}}>확인</Button>
          <Button onClick={onClose}>취소</Button>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default DeleteModal;

const ModalContent = styled.div`
  margin: 33px 59px 17px;
  span {
    font-size: 26px;
  }

  p {
    font-size: 26px;
    font-weight: 700;
    margin-top: 25px;
  }

  div {
    ${flexBox({ justify: "space-between" })}
    width: 234px;
    margin-top: 44px;
  }
`;
