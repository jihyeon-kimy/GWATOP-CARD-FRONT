import styled, { css, keyframes } from "styled-components";
import useAuth from "../../hooks/useAuth";
import { useAppSelector } from "../../hooks/useRedux";
import { selectIsLoggedIn, selectName } from "../../store/authSlice";
import color from "../../styles/color";
import { flexBox } from "../../styles/postion";
import text from "../../styles/text";
import zIndex from "../../styles/z-index";
import Card from "../Common/Card";

interface userOverlayMenuProps {
  visible: boolean;
}

const UserOverlayMenu: React.FC<userOverlayMenuProps> = ({ visible }) => {
  const name = useAppSelector(selectName);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const { userLogOut } = useAuth();

  return (
    <>
      {isLoggedIn && (
        <UserMemuContainer visible={visible}>
          <Card className="card-class">
            <CardContent>
              <UserIcon>{name[0]}</UserIcon>
              <UserName>{name}</UserName>
              <LogoutButton>
                <button type="button" onClick={userLogOut}>
                  로그아웃
                </button>
              </LogoutButton>
            </CardContent>
          </Card>
        </UserMemuContainer>
      )}
    </>
  );
};

export default UserOverlayMenu;

const ZoomIn = keyframes`
  0%{
        opacity: 0;
        transform: scale(0.7);
    }
    65%{
        opacity: 0.65;
        transform:  scale(1.01);
    }
    85%{
        opacity: 0.85;
        transform:  scale(0.97);
    }
    100%{
        opacity: 1;
        transform:  scale(1);
    }
`;

const UserMemuContainer = styled.div<{ visible: boolean }>`
  display: none;
  position: absolute;
  top: 93px;
  right: 47px;
  z-index: ${zIndex.headerLevel};

  .card-class {
    border-radius: 20px;
  }

  ${(props) =>
    props.visible &&
    css`
      display: block;
      animation: ${ZoomIn} 0.6s ease-in-out;
    `}
`;

const CardContent = styled.div`
  ${flexBox({ direction: "column" })}
  width: 188px;
  height: 193px;
`;

const UserIcon = styled.div`
  ${text.textStyle28()}
  width: 57px;
  height: 57px;
  border-radius: 50%;
  background-color: ${color.yellow};
  text-align: center;
  line-height: 57px;
  color: ${color.white};
  cursor: pointer;
`;

const UserName = styled.span`
  ${text.textStyle16()}
  margin-top: 13px;
`;

const LogoutButton = styled.div`
  ${flexBox}
  width: 137px;
  margin-top: 14px;
  padding-top: 16px;
  border-top: 1px solid ${color.black};

  button {
    ${text.textStyle20()}
    cursor: pointer;
  }
`;
