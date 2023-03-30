import styled from "styled-components";
import color from "../../styles/color";
import { flexBox } from "../../styles/postion";
import text from "../../styles/text";

interface cardProps {
  title: string;
  image: string;
  onClick: () => void;
  className?: string;
  hoverAction?: boolean;
  frontElclassName?: string;
}

const CardDeck: React.FC<cardProps> = ({
  title,
  image,
  onClick,
  className,
  hoverAction,
  frontElclassName,
}) => {
  return (
    <CardDeckContainer onClick={onClick} className={className}>
      <BackDrop />
      <CardDeckEl hoverAction={hoverAction || false} className={frontElclassName}>
        <img src={image} alt="카드덱 대표이미지" />
        <CardTitle>{title}</CardTitle>
      </CardDeckEl>
    </CardDeckContainer>
  );
};

export default CardDeck;

const CardDeckContainer = styled.div`
  position: relative;

  border-radius: 10px;
`;

const BackDrop = styled.div`
  width: 160px;
  height: 240px;
  background-color: ${color.yellow};
  border-radius: 10px;
`;

const CardDeckEl = styled.div<{ hoverAction: boolean }>`
  position: absolute;
  top: 0;
  width: 160px;
  height: 240px;
  border-radius: 10px;
  cursor: pointer;
  filter: drop-shadow(2px 3px 6px rgba(0, 0, 0, 0.1));
  transition: transform 200ms ease-in-out;

  img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }

  &:hover {
    transform: ${(props) => (props.hoverAction ? "rotate(10.28deg)" : "none")};
  }
`;

const CardTitle = styled.div`
  ${flexBox};
  ${text.textStyle16()};
  position: absolute;
  width: 100%;
  height: 70px;
  bottom: 0;
  border-end-end-radius: 10px;
  border-end-start-radius: 10px;
  background-color: ${color.white};
`;
