import { useState } from "react";
import styled from "styled-components";
import color from "../../styles/color";
import { flexBox } from "../../styles/postion";
import text from "../../styles/text";
import { card } from "../../types/card";
import Card from "../Common/Card";

interface cardSliderProps {
  cardList: card[];
  currentNum: number;
  setAnswerVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentCardNumber: React.Dispatch<React.SetStateAction<number>>;
}

const CardSlider: React.FC<cardSliderProps> = ({
  cardList,
  currentNum,
  setAnswerVisible,
  setCurrentCardNumber,
}) => {
  const [animation, setAnimation] = useState("");
  const lastCardNum = cardList.length - 1;

  const handlePrveCard = () => {
    setAnswerVisible(false);
    setCurrentCardNumber((prev) => {
      if (prev >= 1) return prev - 1;
      return lastCardNum;
    });
    setAnimation("prev");
  };

  const handleNexteCard = () => {
    setAnswerVisible(false);
    setCurrentCardNumber((prev) => {
      if (prev < lastCardNum) return prev + 1;
      return 0;
    });
    setAnimation("next");
  };

  return (
    <CardSliderContainer>
      <Card className="coverd-card-class">
        <img
          src={`${process.env.PUBLIC_URL}/assets/Images/image-cap.png`}
          alt="카드 기본 이미지"
        />
      </Card>
      <ArrowButton type="button" onClick={handlePrveCard}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/Icons/Prev.png`}
          alt="이전 카드 보기"
        />
      </ArrowButton>
      <Card className="current-card-class" key={currentNum} animation={animation}>
        <div>
          <Question>Q. {cardList?.[currentNum]?.questions}</Question>
          <ul>
            {cardList?.[currentNum]?.options?.map((option, idx) => (
              <li key={idx}>
                {idx + 1}) {option}
              </li>
            ))}
          </ul>
        </div>
        <QuestionNum>
          {currentNum + 1}/<b>{cardList.length}</b>
        </QuestionNum>
      </Card>
      <ArrowButton type="button" onClick={handleNexteCard}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/Icons/Next.png`}
          alt="다음 카드 보기"
        />
      </ArrowButton>
      <Card className="coverd-card-class">
        <img
          src={`${process.env.PUBLIC_URL}/assets/Images/image-cap.png`}
          alt="카드 기본 이미지"
        />
      </Card>
    </CardSliderContainer>
  );
};

export default CardSlider;

const CardSliderContainer = styled.div`
  ${flexBox({ justify: "space-between" })}
  width: 1817px;
  margin-top: 35px;

  .coverd-card-class {
    ${flexBox({})};
    width: 474px;
    height: 243px;
    background-color: ${color.green};
    border-radius: 20px;
  }

  .current-card-class {
    ${flexBox({})}
    padding: 30px;
    width: 584px;
    height: 299px;
    border-radius: 20px;

    ul {
      margin-top: 28px;
    }

    li {
      ${text.textStyle20(500)};
      color: ${color.primary};
      margin-bottom: 8px;
    }
  }
`;

const Question = styled.span`
  font-size: 26px;
  font-weight: 700;
  color: ${color.primary};
`;

const ArrowButton = styled.button`
  cursor: pointer;
`;

const QuestionNum = styled.span`
  position: absolute;
  bottom: 24px;
  right: 30px;
  color: ${color.green};

  b {
    font-weight: 700;
  }
`;
