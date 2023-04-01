import styled from "styled-components";
import { useRouter } from "../../hooks/useRouter";
import { CARD_DECK_LIST } from "../../mock/cardDeckList";
import color from "../../styles/color";
import { flexBox } from "../../styles/postion";
import text from "../../styles/text";
import CardDeck from "../Common/CardDeck";

const CardDeckInfo = () => {
  const { routeTo } = useRouter();

  return (
    <CardDeckInfoContainer>
      <Title>
        <img
          src={`${process.env.PUBLIC_URL}/assets/Icons/Deck.png`}
          alt="MY카드덱 아이콘"
        />
        <h5>MY카드덱</h5>
      </Title>
      <SubTitle>
        지금까지 내가 마스터한 문제들은
        <br /> <b>MY카드덱</b>에서 확인해보세요.
      </SubTitle>
      <CardDeckList>
        {CARD_DECK_LIST.map((cardDeck) => (
          <CardDeck
            key={cardDeck.id}
            title={cardDeck.title}
            image={process.env.PUBLIC_URL + cardDeck.image}
            onClick={() => routeTo("/cardDeckList")}
            hoverAction={true}
          />
        ))}
      </CardDeckList>
    </CardDeckInfoContainer>
  );
};

export default CardDeckInfo;

const CardDeckInfoContainer = styled.div`
  ${flexBox({ direction: "column" })}
  margin-top: 85px;
`;

const Title = styled.div`
  ${flexBox}
  img {
    width: 26px;
    margin-right: 16px;
  }

  h5 {
    ${text.textStyle24(400)};
    color: ${color.green};
  }
`;

const SubTitle = styled.p`
  ${text.textStyle24()}
  margin-top: 22px;
  text-align: center;
  b {
    font-weight: 700;
  }
`;

const CardDeckList = styled.div`
  ${flexBox({ justify: "space-between" })}
  margin-top: 38px;
  width: 982px;
`;
