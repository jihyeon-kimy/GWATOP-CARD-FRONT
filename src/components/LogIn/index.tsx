import styled from "styled-components";
import { useRouter } from "../../hooks/useRouter";
import color from "../../styles/color";
import { flexBox } from "../../styles/postion";
import text from "../../styles/text";
import Card from "../Common/Card";

const LogIn = () => {
  const { routeTo } = useRouter();
  return (
    <LogInContainer>
      <Card>
        <CardContent>
          <b>학습자료는 과탑카드가 만들어줄게요!</b>
          <b>
            오롯이 <span>'학습'</span>에만 집중해보세요!
          </b>
          <p>
            로그인하면 카드덱을 생성하여
            <br /> 기출문제를 받아볼 수 있어요.😊
          </p>
          <SocialLoginBox>
            <h3>SNS 계정으로 로그인하기</h3>
            <div>
              <button
                type="button"
                onClick={() => {
                  routeTo("/signUp");
                }}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/Images/image-social-kakaoTalk.png`}
                  alt="카카오톡 소셜로그인 하기"
                />
              </button>
              <button
                type="button"
                onClick={() => {
                  routeTo("/signUp");
                }}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/Images/image-social-naver.png`}
                  alt="네이버 소셜로그인 하기"
                />
              </button>
              <button
                type="button"
                onClick={() => {
                  routeTo("/signUp");
                }}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/Images/image-social-google.png`}
                  alt="구글 소셜로그인 하기"
                />
              </button>
            </div>
          </SocialLoginBox>
        </CardContent>
      </Card>
    </LogInContainer>
  );
};

export default LogIn;

const LogInContainer = styled.div`
  ${flexBox}
  height: 100%;
`;

const CardContent = styled.div`
  ${flexBox({ direction: "column" })}
  width: 816px;
  height: 640px;

  b {
    ${text.textStyle28(400)}
    display: block;

    span {
      font-weight: 700;
      color: ${color.green};
    }
  }

  p {
    ${text.textStyle20()}
    margin-top: 42px;
    color: ${color.primary};
  }
`;

const SocialLoginBox = styled.div`
  ${flexBox({ direction: "column" })}
  width: 610px;
  margin-top: 55px;
  border-top: 1px solid ${color.border};

  h3 {
    margin-top: 55px;
    font-size: 26px;
    font-weight: 700;
  }
  div {
    ${flexBox({ justify: "space-between" })}
    width: 300px;
    margin-top: 40px;
    transition: transform 200ms ease-in-out;

    button {
      cursor: pointer;

      &:hover,
      &:focus,
      &:active {
        transform: scale(1.1);
      }
    }
  }
`;
