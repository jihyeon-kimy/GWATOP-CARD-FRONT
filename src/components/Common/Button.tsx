import styled from "styled-components";
import color from "../../styles/color";
import text from "../../styles/text";

interface buttonProps {
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  children: string;
  disabled?: boolean;
}
const Button: React.FC<buttonProps> = ({
  className,
  onClick,
  type,
  children,
  disabled,
}) => {
  return (
    <ButtonContainer
      className={className}
      onClick={onClick}
      type={type || "button"}
      disabled={disabled || false}>
      {children}
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.button`
  height: 48px;
  padding: 12px 26px;
  background-color: ${color.green};
  border-radius: 30px;
  color: ${color.white};
  ${text.textStyle20(600)};
  cursor: pointer;
  transition: background-color 200ms ease-in-out;

  &:hover {
    background-color: ${color.yellow};
  }

  &:disabled {
    background-color: ${color.secondary};
    cursor: not-allowed;
  }
`;
