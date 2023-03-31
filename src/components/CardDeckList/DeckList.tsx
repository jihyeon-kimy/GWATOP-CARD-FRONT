import { useRef } from "react";
import styled from "styled-components";
import useOverlay from "../../hooks/useOverlay";
import { useRouter } from "../../hooks/useRouter";
import { flexBox } from "../../styles/postion";
import { cardDeck } from "../../types/card";
import CardDeck from "../Common/CardDeck";
import DeleteModal from "./DeleteModal";

interface deckListProps {
  deckList: cardDeck[];
  getCardDecks: () => Promise<void>;
}

const DeckList: React.FC<deckListProps> = ({ deckList, getCardDecks }) => {
  const { routeTo } = useRouter();
  const { overlayVisible, openOverlay, closeOverlay } = useOverlay();
  const ClickedDeckID = useRef("");

  return (
    <>
      <DeleteModal
        visible={overlayVisible}
        onClose={closeOverlay}
        deckId={ClickedDeckID.current}
        getCardDecks={getCardDecks}
      />
      <DeckListContainer>
        {deckList.map((item, idx) => (
          <CardWrapper key={idx}>
            <CardDeck
              className="card-deck-class"
              frontElclassName="card-deck-front-el-class"
              image={item.image_url}
              title={item.deck_name}
              onClick={() => {
                routeTo(`/view/${item.deck_id}`);
              }}
            />
            <button
              type="button"
              onClick={() => {
                ClickedDeckID.current = item.deck_id;
                openOverlay();
              }}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/Icons/DeleteBlack.png`}
                alt="삭제하기"
              />
            </button>
          </CardWrapper>
        ))}
      </DeckListContainer>
    </>
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
