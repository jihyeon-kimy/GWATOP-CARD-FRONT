import styled from "styled-components";
import color from "../../styles/color";
import CardDeckInfo from "./CardDeckInfo";
import ServiceInfo from "./ServiceInfo";

const Home = () => {
  return (
    <HomeContainer>
      <ServiceInfo />
      <CardDeckInfo />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  background-color: ${color.white};
  width: 100%;
  height: 100%;
`;
