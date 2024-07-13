import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";
import styled, { keyframes } from "styled-components";
import NavBar from "../component/NavBar";
import Hero from "../component/Hero";
import About from "../component/About";
import Projects from "../component/Projects";
import MiniProjects from "../component/MiniProjects";
import ContactMe from "../component/ContactMe";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const AnimatedSection = styled.div`
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-play-state: ${({ inView }) => (inView ? "running" : "paused")};
`;

function AnimatedComponent({ children }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <AnimatedSection ref={ref} inView={inView}>
      {children}
    </AnimatedSection>
  );
}

AnimatedComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

function Home() {
  return (
    <HomeDiv>
      <NavBar />
      <AnimatedComponent>
        <Hero />
      </AnimatedComponent>
      <AnimatedComponent>
        <About />
      </AnimatedComponent>
      <AnimatedComponent>
        <Projects />
      </AnimatedComponent>
      <AnimatedComponent>
        <MiniProjects />
      </AnimatedComponent>
      <AnimatedComponent>
        <ContactMe />
      </AnimatedComponent>
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
