import styled from "styled-components";
import color from "../../styles/color";

interface cardProps {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<cardProps> = ({ className, children }) => {
  return <CardContainer className={className}>{children}</CardContainer>;
};

export default Card;

const CardContainer = styled.div`
  display: inline-block;
  background-color: ${color.white};
  border-radius: 30px;
  filter: drop-shadow(2px 3px 6px rgba(83, 194, 150, 0.25));
`;
