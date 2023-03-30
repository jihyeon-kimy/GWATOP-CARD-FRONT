import styled from "styled-components";
import color from "../../styles/color";
import { flexBox } from "../../styles/postion";
import text from "../../styles/text";

const PageHeader = () => {
  return (
    <PageHeaderContainer>
      <Title>
        <img src="./assets/Icons/Deck.png" alt="카드덱 아이콘" />
        <h3>MY 카드덱</h3>
      </Title>
      <p>생성한 기출문제를 MY카드덱에서 관리해보세요!</p>
    </PageHeaderContainer>
  );
};

export default PageHeader;

const PageHeaderContainer = styled.div`
  width: 100%;
  max-width: 984px;

  p {
    ${text.textStyle20(500)};
    color: ${color.primary};
  }
`;

const Title = styled.div`
  ${flexBox({ justify: "flex-start" })}
  ${text.textStyle28(700)}
  margin: 72px 0 25px;

  img {
    width: 26px;
  }

  h3 {
    ${text.textStyle28(700)}
    margin-left:12px;
  }
`;
