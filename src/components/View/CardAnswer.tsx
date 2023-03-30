import styled, { keyframes } from "styled-components";
import color from "../../styles/color";
import { flexBox } from "../../styles/postion";
import text from "../../styles/text";
import { card } from "../../types/card";
import Card from "../Common/Card";

interface cardAnswerProps {
  cardList: card[];
  visible: boolean;
  currentNum: number;
  setAnswerVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardAnswer: React.FC<cardAnswerProps> = ({
  cardList,
  visible,
  currentNum,
  setAnswerVisible,
}) => {
  const handleOpenAnswer = () => {
    setAnswerVisible(true);
  };

  const answerNum = cardList?.[currentNum]?.answer + 1;
  const answer = cardList?.[currentNum]?.options?.[cardList?.[currentNum]?.answer];

  return (
    <CardAnswerContainer>
      <Card className="answer-card-class" onClick={handleOpenAnswer}>
        {!visible && (
          <InvisibleAnswerCard>
            <div>
              <span> 👀 클릭 하면 답안을 확인할 수 있어요!</span>
            </div>
          </InvisibleAnswerCard>
        )}

        {visible && (
          <VisibleAnswerCard>
            <span>ANSWER</span>
            <p>{`${answerNum}. ${answer}`}</p>
          </VisibleAnswerCard>
        )}
      </Card>
    </CardAnswerContainer>
  );
};

export default CardAnswer;

export const ZoomIn = keyframes`
0%{
      opacity: 0;
      transform: scale(0.7);
  }
  65%{
      opacity: 0.65;
      transform: scale(1.01);
  }
  85%{
      opacity: 0.85;
      transform: scale(0.97);
  }
  100%{
      opacity: 1;
      transform: scale(1);
  }
`;

const CardAnswerContainer = styled.div`
  .answer-card-class {
    ${flexBox({})}
    width: 584px;
    height: 122px;
    margin-top: 71px;
    border-radius: 20px;
    cursor: pointer;
  }
`;

const VisibleAnswerCard = styled.div`
  span {
    ${text.textStyle24(700)}
    position: absolute;
    top: 17px;
    left: 32px;
    color: ${color.primary};
  }

  p {
    ${text.textStyle20(500)}
    margin: 10px 30px 0 30px;
    animation: ${ZoomIn} 0.6s ease-in-out;
  }
`;

const InvisibleAnswerCard = styled.div`
  ${flexBox}
  border-radius: 20px;
  width: 100%;
  height: 100%;
  background-color: ${color.yellow};

  div {
    ${flexBox}
    width: 570px;
    height: 106px;
    border: 3px dashed #fdf7e3;
    border-radius: 20px;
  }
`;
