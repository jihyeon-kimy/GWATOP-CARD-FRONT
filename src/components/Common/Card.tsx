import styled, { css, keyframes } from "styled-components";
import color from "../../styles/color";

interface cardProps {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  animation?: string;
}

const Card: React.FC<cardProps> = ({ className, onClick, children, animation }) => {
  return (
    <CardContainer className={className} onClick={onClick} animation={animation}>
      {children}
    </CardContainer>
  );
};

export default Card;

export const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(10%);

  }
  to {
    opacity: 1;
    transform: translateX(0);

  }
`;

export const Slide = keyframes`
  from{
    opacity: 0;
    transform: translate(50%, 30px);
  }
  to{
    opacity: 1;
    transform: translate(50%, 0);
  }
  `;

const CardContainer = styled.div<{ animation?: string }>`
  display: inline-block;
  background-color: ${color.white};
  border-radius: 30px;
  filter: drop-shadow(2px 3px 6px rgba(83, 194, 150, 0.25));

  ${(props) =>
    props.animation === "prev" &&
    css`
      div {
        animation: ${slideInRight} 600ms ease-in-out;
      }
    `}

  ${(props) =>
    props.animation === "next" &&
    css`
      div {
        animation: ${slideInLeft} 600ms ease-in-out;
      }
    `}
`;
