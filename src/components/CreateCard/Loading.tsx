import { CSSProperties } from "react";
import BarLoader from "react-spinners/BarLoader";
import styled from "styled-components";
import color from "../../styles/color";
import { flexBox } from "../../styles/postion";
import text from "../../styles/text";
import zIndex from "../../styles/z-index";

const override: CSSProperties = {
  margin: "0",
  border: "2px solid #555555",
  borderRadius: "30px",
};

const Loading = () => {
  return (
    <LoadingContainer>
      <img src={`${process.env.PUBLIC_URL}/assets/Icons/CapGreen.png`} alt="로고" />
      <LoadingText>잠시만 기다려 주세요...</LoadingText>
      <BarLoader
        width={584}
        height={16}
        cssOverride={override}
        color={"#10b382"}
        loading={true}
        speedMultiplier={0.7}
      />
      <p>
        나에게 꼭 맞는
        <br />
        기출문제가 생성되고 있어요!
      </p>
    </LoadingContainer>
  );
};

export default Loading;

const LoadingContainer = styled.div`
  ${flexBox({ direction: "column" })}
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: ${color.white};
  text-align: center;
  z-index: ${zIndex.loadingPageLevel};

  p {
    margin-top: 50px;
    padding-bottom: 20px;
    font-size: 30px;
    font-weight: 700;
    line-height: 35px;
  }
`;

const LoadingText = styled.span`
  ${text.textStyle22()}
  margin: 32px 0;
`;
