import styled from "styled-components";
import useOverlay from "../../hooks/useOverlay";
import { useAppSelector } from "../../hooks/useRedux";
import { useRouter } from "../../hooks/useRouter";
import { navList } from "../../router";
import { selectIsLoggedIn, selectName } from "../../store/authSlice";
import color from "../../styles/color";
import { flexBox } from "../../styles/postion";
import text from "../../styles/text";
import zIndex from "../../styles/z-index";
import UserOverlayMenu from "./UserOverlayMenu";

const Header = () => {
  const { routeTo } = useRouter();
  const { overlayVisible: userMenuVisible, openOverlay: openUserMenu } = useOverlay();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const name = useAppSelector(selectName);

  return (
    <>
      <HeaderContainer>
        <HeaderWrapper>
          <UserOverlayMenu visible={userMenuVisible} />
          <Logo
            src={`${process.env.PUBLIC_URL}/assets/Images/logo.png`}
            alt="로고"
            onClick={() => routeTo("/")}
          />
          <Nav>
            {navList?.map((item) => (
              <NavItem
                key={item?.id}
                label={item?.label}
                onClick={() => routeTo(item?.path)}>
                <img src={`${process.env.PUBLIC_URL}${item?.icon}`} alt={item?.label} />
                <span>{item?.label}</span>
              </NavItem>
            ))}
            {!isLoggedIn && (
              <LoginButton
                type="button"
                onClick={() => {
                  routeTo("/login");
                }}>
                로그인
              </LoginButton>
            )}
            {isLoggedIn && <UserIcon onClick={openUserMenu}>{name[0]}</UserIcon>}
          </Nav>
        </HeaderWrapper>
      </HeaderContainer>
    </>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${color.white};
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: ${zIndex.headerLevel};
`;

const HeaderWrapper = styled.div`
  position: relative;
  ${flexBox({ justify: "space-between" })}
  max-width: 1920px;
  height: 70px;
  padding: 0 48px;
  margin: 0 auto;
  flex-grow: 1;
`;

const Logo = styled.img`
  width: 148px;
  cursor: pointer;
`;

const Nav = styled.nav`
  ${flexBox({ justify: "space-between" })}
`;

const NavItem = styled.button<{ label: string }>`
  ${flexBox({ justify: "space-between", alignItem: "center" })}
  margin-right: 84px;
  cursor: pointer;

  img {
    margin-right: 12px;
    width: 24px;
  }

  span {
    ${text.textStyle22()}
    font-weight: ${(props) => (props.label === "HOME" ? 400 : 500)}
  }
`;

const UserIcon = styled.div`
  ${text.textStyle20(700)}
  width: 39px;
  height: 39px;
  margin: 0 15px 0 72px;
  line-height: 39px;
  border-radius: 50%;
  background-color: ${color.yellow};
  text-align: center;
  color: ${color.white};
  cursor: pointer;
`;

const LoginButton = styled.button`
  ${text.textStyle22(400)};
  margin: 0 4px 0 64px;
  cursor: pointer;
`;
