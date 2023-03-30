import styled from "styled-components";
import Header from "./Header";

interface layoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
};

export default Layout;

const Content = styled.div`
  height: 100%;
  padding-top: 70px;
`;
