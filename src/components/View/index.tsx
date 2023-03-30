import { useState } from "react";
import styled from "styled-components";
import { SAMPLE } from "../../mock/sample";
import { flexBox } from "../../styles/postion";
import CardAnswer from "./CardAnswer";
import CardDeckDesc from "./CardDeckDesc";
import CardSlider from "./CardSlider";

const cardList = Object.values(SAMPLE.card_deck);

const View = () => {
  const [currentCardNumber, setCurrentCardNumber] = useState(1);
  const [answerVisible, setAnswerVisible] = useState(false);
  const [animation, setAnimation] = useState("");
  const lastCardNum = cardList.length - 1;

  const handlePrveCard = () => {
    setAnswerVisible(false);
    setCurrentCardNumber((prev) => {
      if (prev !== 1) return prev - 1;
      return lastCardNum;
    });
    setAnimation("prev");
  };
  const handleNexteCard = () => {
    setAnswerVisible(false);
    setCurrentCardNumber((prev) => {
      if (prev !== lastCardNum) return prev + 1;
      return 1;
    });
    setAnimation("next");
  };

  return (
    <>
      <CardDeckDesc cardDeckName={SAMPLE.filename} totalNum={lastCardNum} />
      <CardView>
        <CardSlider
          cardList={cardList}
          currentNum={currentCardNumber}
          onPrevCard={handlePrveCard}
          onNextCard={handleNexteCard}
          animation={animation}
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
