import styled from "styled-components";
import color from "../../styles/color";
import { flexBox } from "../../styles/postion";
import text from "../../styles/text";
import Card from "../Common/Card";
import CardDeck from "../Common/CardDeck";

interface cardDeckDesc {
  cardDeckName: string;
  totalNum: number;
}

const CardDeckDesc: React.FC<cardDeckDesc> = ({ cardDeckName, totalNum }) => {
  return (
    <CardDeckDescContainer>
      <CardDeck
        className="card-deck-class"
        title="카드덱 제목"
        image="./assets/Images/image-card-1.jpg"
        onClick={() => {}}
      />
      <Card className="card-class">
        <ul>
          <li>
            해당 카드덱은 총 <span>{totalNum}개</span>의 카드로 구성되어있습니다.
          </li>
          <li>주제: {cardDeckName}</li>
        </ul>
      </Card>
    </CardDeckDescContainer>
  );
};

export default CardDeckDesc;

const CardDeckDescContainer = styled.div`
  ${flexBox}
  margin-top: 51px;

  .card-deck-class {
    cursor: initial;
  }

  .card-class {
    padding: 55px 73px;
    margin-left: 40px;
    border-radius: 10px;
  }

  li {
    ${text.textStyle20(400)};
    color: ${color.primary};
    padding: 5px 0;

    span {
      color: ${color.green};
    }
  }

  li::before {
    content: "• ";
  }
`;
