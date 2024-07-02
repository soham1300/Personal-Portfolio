import styled from "styled-components";
import NavBar from "../component/NavBar";
import Hero from "../component/Hero";
import About from "../component/About";

function Home() {
  return (
    <HomeDiv>
      <NavBar />
      <Hero />
      <About />
    </HomeDiv>
  );
}

export default Home;

const HomeDiv = styled.div`
  margin: 0;
  padding: 0;
`;
