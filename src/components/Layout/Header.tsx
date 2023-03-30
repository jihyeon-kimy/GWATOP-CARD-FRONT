import styled from "styled-components";
import { useRouter } from "../../hooks/useRouter";
import { navList } from "../../router";
import color from "../../styles/color";
import { flexBox } from "../../styles/postion";
import text from "../../styles/text";
import zIndex from "../../styles/z-index";

const Header = () => {
  const { routeTo } = useRouter();

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo src="./assets/Images/logo.png" alt="로고" onClick={() => routeTo("/")} />
        <Nav>
          {navList?.map((item) => (
            <NavItem
              key={item?.id}
              label={item?.label}
              onClick={() => routeTo(item?.path)}>
              <img src={item?.icon} alt={item?.label} />
              <span>{item?.label}</span>
            </NavItem>
          ))}
          {/** 비로그인 시 **/}
          {/* <LoginButton>로그인</LoginButton>  */}
          <UserIcon>재</UserIcon>
        </Nav>
      </HeaderWrapper>
    </HeaderContainer>
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
