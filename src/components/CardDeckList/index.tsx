import styled from "styled-components";
import useOverlay from "../../hooks/useOverlay";
import { flexBox } from "../../styles/postion";
import CardDeckEmpty from "./CardDeckEmpty";
import DeckList from "./DeckList";
import DeleteModal from "./DeleteModal";
import PageHeader from "./PageHeader";

const CardDeckList = () => {
  const { overlayVisible, openOverlay, closeOverlay } = useOverlay();

  return (
    <>
      <DeleteModal visible={overlayVisible} onClose={closeOverlay} />
      <CardDeckListContainer>
        <PageHeader />
        {/* 카드덱이 비어있을 경우 */}
        {/* <CardDeckEmpty /> */}
        <DeckList onOpenDeleteModal={openOverlay} />
      </CardDeckListContainer>
    </>
  );
};

export default CardDeckList;

const CardDeckListContainer = styled.div`
  ${flexBox({ direction: "column" })}
`;
