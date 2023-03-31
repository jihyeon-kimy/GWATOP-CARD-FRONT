import styled from "styled-components";
import { useRouter } from "../../hooks/useRouter";
import { flexBox } from "../../styles/postion";
import CardDeck from "../Common/CardDeck";

interface deckListProps {
  onOpenDeleteModal: () => void;
}

const DeckList: React.FC<deckListProps> = ({ onOpenDeleteModal }) => {
  const { routeTo } = useRouter();
  const sample = [1, 2, 3, 4, 5, 6];

  return (
    <DeckListContainer>
      {sample.map((item, idx) => (
        <CardWrapper key={idx}>
          <CardDeck
            className="card-deck-class"
            frontElclassName="card-deck-front-el-class"
            image="./assets/Images/image-card-1.jpg"
            title="카드덱 제목"
            onClick={() => {
              routeTo("/view");
            }}
          />
          <button type="button" onClick={onOpenDeleteModal}>
            <img src="./assets/Icons/DeleteBlack.png" alt="삭제하기" />
          </button>
        </CardWrapper>
      ))}
    </DeckListContainer>
  );
};

export default DeckList;

const DeckListContainer = styled.div`
  ${flexBox({ justify: "flex-start" })}
  flex-wrap: wrap;
  width: 100%;
  max-width: 984px;
  margin-top: 66px;

  .card-deck-class {
    margin-bottom: 57px;
  }
`;

const CardWrapper = styled.div`
  position: relative;
  width: 20%;
  transition: transform 200ms ease-in-out;

  button {
    position: absolute;
    top: 8px;
    left: 126px;
    cursor: pointer;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
