import ReactDOM from "react-dom";
import styled, { css, keyframes } from "styled-components";
import { flexBox } from "../../styles/postion";
import zIndex from "../../styles/z-index";

interface backdropProps {
  onClose: () => void;
  visible: boolean;
}

interface modalOverlayProps {
  children: React.ReactNode;
  visible: boolean;
}

interface modalProps extends backdropProps, modalOverlayProps {}

const Backdrop: React.FC<backdropProps> = ({ onClose, visible }) => {
  return <BackDropContainer onClick={onClose} visible={visible} />;
};

const ModalOverlay: React.FC<modalOverlayProps> = ({ children, visible }) => {
  return (
    <ModalOverlayContainer visible={visible}>
      <div>{children}</div>
    </ModalOverlayContainer>
  );
};

const portalElement = document.getElementById("overlays");

const Modal: React.FC<modalProps> = ({ onClose, children, visible }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop visible={visible} onClose={onClose} />,
        portalElement!
      )}
      {ReactDOM.createPortal(
        <ModalOverlay visible={visible}>{children}</ModalOverlay>,
        portalElement!
      )}
    </>
  );
};

export default Modal;

const ZoomIn = keyframes`
  0%{
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.7);
    }
    65%{
        opacity: 0.65;
        transform: translate(-50%, -50%) scale(1.01);
    }
    85%{
        opacity: 0.85;
        transform: translate(-50%, -50%) scale(0.97);
    }
    100%{
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
`;

const BackDropContainer = styled.div<{ visible: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  transition: display 200ms ease-in-out;
  z-index: ${zIndex.overlayBackdropLevel};

  ${(props) =>
    props.visible &&
    css`
      display: block;
    `}
`;

const ModalOverlayContainer = styled.div<{ visible: boolean }>`
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 37px 63px;
  background-color: white;
  z-index: ${zIndex.overlayLevel};
  transform: translate(-50%, -50%);

  div {
    ${flexBox({ direction: "column" })}
  }

  ${(props) =>
    props.visible &&
    css`
      display: block;
      animation: ${ZoomIn} 0.6s ease-in-out;
    `}
`;
