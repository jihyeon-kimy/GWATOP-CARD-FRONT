import styled from "styled-components";
import { flexBox } from "../../styles/postion";
import CardDeckEmpty from "./CardDeckEmpty";
import DeckList from "./CardDeckList";
import PageHeader from "./PageHeader";

const CardDeckList = () => {
  return (
    <CardDeckListContainer>
      <PageHeader />
      {/* 카드덱이 비어있을 경우 */}
      {/* <CardDeckEmpty /> */}
      <DeckList />
    </CardDeckListContainer>
  );
};

export default CardDeckList;

const CardDeckListContainer = styled.div`
  ${flexBox({ direction: "column" })}
`;
