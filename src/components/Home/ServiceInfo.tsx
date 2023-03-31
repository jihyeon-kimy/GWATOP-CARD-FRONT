import styled from "styled-components";
import { useRouter } from "../../hooks/useRouter";
import { flexBox } from "../../styles/postion";
import text from "../../styles/text";
import Button from "../Common/Button";

const ServiceInfo = () => {
  const { routeTo } = useRouter();

  return (
    <ServiceInfocContainer>
      <img
        src={`${process.env.PUBLIC_URL}/assets/Images/image-main.png`}
        alt="메인 페이지 이미지"
      />
      <InfoText>
        <h2>
          <b>시험준비</b>부터 <b>과탑</b>처럼 <br /> 기출문제 생성 서비스 <b>과탑카드</b>
        </h2>
        <p>
          지금 바로 기출문제 모음, 카드덱을 생성하고
          <br /> 더 쉽게 더 빠르게 공부해보세요!
        </p>
        <Button
          onClick={() => {
            routeTo("/create");
          }}>
          카드 생성하기
        </Button>
      </InfoText>
    </ServiceInfocContainer>
  );
};

export default ServiceInfo;

const ServiceInfocContainer = styled.section`
  ${flexBox};
  padding: 60px 25px 0 0;

  img {
    margin-right: 60px;
  }
`;

const InfoText = styled.div`
  text-align: center;
  h2 {
    ${text.textStyle40()}
    margin-bottom:18px;

    b {
      font-weight: 700;
    }
  }

  p {
    ${text.textStyle20(400)}
    margin-bottom: 32px;
    line-height: 27px;
  }
`;
