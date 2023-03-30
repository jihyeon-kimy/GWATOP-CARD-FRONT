import styled from "styled-components";
import color from "../../styles/color";
import { flexBox, posCenterCenter } from "../../styles/postion";
import text from "../../styles/text";
import CardDeck from "../Common/CardDeck";

const CardDeckEmpty = () => {
  return (
    <CardDeckEmptyContainer>
      <CardDeck
        title=""
        image="./assets/Icons/Plus.png"
        onClick={() => {}}
        className="empty-card-deck-class"
        frontElclassName="card-deck-front-el-class"
      />
      <p>
        아직 카드덱이 없어요.
        <br />
        지금 바로 생성해보세요!
      </p>
    </CardDeckEmptyContainer>
  );
};

export default CardDeckEmpty;

const CardDeckEmptyContainer = styled.div`
  position: relative;
  max-width: 984px;
  width: 100%;
  margin-top: 66px;

  .empty-card-deck-class {
    transition: transform 200ms ease-in-out;
  }

  .card-deck-front-el-class {
    ${flexBox}
    background-color: white;

    img {
      display: block;
      width: 54px;
      height: 54px;
    }

    div {
      display: none;
    }

    &:hover {
      transform: scale(1.1);
    }
  }

  p {
    ${text.textStyle22(500)};
    ${posCenterCenter()};
    line-height: 27px;
    text-align: center;
    color: ${color.green};
  }
`;
