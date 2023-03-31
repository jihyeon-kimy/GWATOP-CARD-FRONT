import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getCardList } from "../../api/cardDeck";
import { flexBox } from "../../styles/postion";
import { card } from "../../types/card";
import CardAnswer from "./CardAnswer";
import CardDeckDesc from "./CardDeckDesc";
import CardSlider from "./CardSlider";

interface cardDeckInfoEl {
  name: string;
  img: string;
}

const View = () => {
  const { cardDeckId } = useParams();
  const [cardDeckInfo, setCardDeckInfo] = useState<cardDeckInfoEl>();
  const [cardList, setCardList] = useState<card[]>([]);
  const [currentCardNumber, setCurrentCardNumber] = useState(0);
  const [answerVisible, setAnswerVisible] = useState(false);

  const getCards = async () => {
    const result = await getCardList(cardDeckId!);
    setCardDeckInfo({ name: result?.data.deck_name, img: result?.data?.image_url });
    setCardList(Object.values(result?.data?.card_deck));
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <>
      <CardDeckDesc
        cardDeckname={cardDeckInfo?.name!}
        cardDeckimg={cardDeckInfo?.img!}
        totalNum={cardList.length}
      />
      <CardView>
        <CardSlider
          cardList={cardList}
          currentNum={currentCardNumber}
          setAnswerVisible={setAnswerVisible}
          setCurrentCardNumber={setCurrentCardNumber}
        />
        <CardAnswer
          cardList={cardList}
          currentNum={currentCardNumber}
          visible={answerVisible}
          setAnswerVisible={setAnswerVisible}
        />
      </CardView>
    </>
  );
};

export default View;

const CardView = styled.div`
  ${flexBox({ direction: "column" })}
`;
