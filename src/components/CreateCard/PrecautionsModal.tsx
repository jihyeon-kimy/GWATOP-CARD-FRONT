import styled from "styled-components";
import { flexBox } from "../../styles/postion";
import text from "../../styles/text";
import Button from "../Common/Button";
import Modal from "../Common/Modal";

interface precautionsModalProps {
  visible: boolean;
  onClose: () => void;
  onCreate: () => void;
}

const PrecautionsModal: React.FC<precautionsModalProps> = ({
  visible,
  onClose,
  onCreate,
}) => {
  return (
    <Modal visible={visible} onClose={onClose}>
      <ModalContent>
        <span>📢</span>
        <h5>유의사항</h5>
        <ul>
          <li>
            업로드하신 학습자료에 대한 지적재산권 여부를 체크하여 안전하게 관리해주세요.
          </li>
          <li>생성하신 카드덱은 개인학습 용도로만 활용해주세요.</li>
          <li>업로드된 파일은 서비스 내 어디에도 저장되지 않음을 알려드립니다.</li>
        </ul>
        <Button
          onClick={() => {
            onCreate();
            onClose();
          }}>
          확인
        </Button>
      </ModalContent>
    </Modal>
  );
};

export default PrecautionsModal;

const ModalContent = styled.div`
  span {
    margin-top: 11px;
    font-size: 26px;
  }
  h5 {
    font-size: 26px;
    font-weight: 700;
    margin-top: 25px;
  }
  ul {
    ${flexBox({ direction: "column", justify: "space-between", alignItem: "flex-start" })}
    ${text.textStyle20()}
    height: 92px;
    margin: 28px 0 40px;
  }

  li {
    &::before {
      content: "• ";
      padding-right: 10px;
    }
  }
`;
