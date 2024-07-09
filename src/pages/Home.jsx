import styled from "styled-components";
import NavBar from "../component/NavBar";
import Hero from "../component/Hero";
import About from "../component/About";
import Projects from "../component/Projects";
import MiniProjects from "../component/MiniProjects";
import ContactMe from "../component/ContactMe";

function Home() {
  return (
    <HomeDiv>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <MiniProjects />
      <ContactMe />
    </HomeDiv>
  );
}

export default Home;

const HomeDiv = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
`;
