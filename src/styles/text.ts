import { css } from "styled-components";

const textStyle16 = (fontWeight: number = 500) => css`
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.02em;
  font-weight: ${fontWeight};
`;

const textStyle20 = (fontWeight: number = 500) => css`
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.02em;
  font-weight: ${fontWeight};
`;

const textStyle22 = (fontWeight: number = 500) => css`
  font-size: 22px;
  line-height: 26px;
  letter-spacing: 0.02em;
  font-weight: ${fontWeight};
`;

const textStyle24 = (fontWeight: number = 500) => css`
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  font-weight: ${fontWeight};
`;

const textStyle28 = (fontWeight: number = 700) => css`
  font-size: 28px;
  line-height: 33px;
  letter-spacing: 0.02em;
  font-weight: ${fontWeight};
`;

const textStyle40 = (fontWeight: number = 400) => css`
  font-size: 40px;
  line-height: 50px;
  letter-spacing: 0.02em;
  font-weight: ${fontWeight};
`;
const text = {
  textStyle16,
  textStyle20,
  textStyle22,
  textStyle24,
  textStyle28,
  textStyle40,
};

export default text;
