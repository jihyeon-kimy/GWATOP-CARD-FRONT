import { useEffect, useState } from "react";
import styled from "styled-components";
import { getCardDeckList } from "../../api/cardDeck";
import { flexBox } from "../../styles/postion";
import { cardDeck } from "../../types/card";
import CardDeckEmpty from "./CardDeckEmpty";
import DeckList from "./DeckList";
import PageHeader from "./PageHeader";

const CardDeckList = () => {
  const [deckList, setDeckList] = useState<cardDeck[]>();
  const [loading, setLoading] = useState(true);

  const getCardDecks = async () => {
    setLoading(true);
    try {
      const result = await getCardDeckList();
      setDeckList(result.data.response);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    getCardDecks();
  }, []);

  return (
    <CardDeckListContainer>
      <PageHeader />
      {loading && <></>}
      {deckList?.length === 0 && <CardDeckEmpty />}
      {deckList?.length! > 0 && (
        <DeckList deckList={deckList!} getCardDecks={getCardDecks} />
      )}
    </CardDeckListContainer>
  );
};

export default CardDeckList;

const CardDeckListContainer = styled.div`
  ${flexBox({ direction: "column" })}
`;
