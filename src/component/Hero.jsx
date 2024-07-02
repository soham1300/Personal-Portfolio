import styled from "styled-components";
import {
  FaArrowRight,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import IsMobile from "./IsMobile";

function Hero() {
  const isMobile = IsMobile();

  return (
    <>
      {isMobile ? (
        <HeroDiv>
          <Section>
            <FullStack isMobile={isMobile}>Full-Stack </FullStack>
          </Section>
          <Section>
            <FullStack isMobile={isMobile}>Developer</FullStack>
          </Section>
          <Section>
            <Goal isMobile={isMobile}>
              My goal is to <Highlight>write maintainable, clean</Highlight> and
              <Highlight> understandable code</Highlight> to ensure development
              is enjoyable.
            </Goal>
          </Section>
          <Section>
            <ProjectsDiv>
              <ProjectsBtn>Projects</ProjectsBtn>
              <ArrowBtn>
                <FaArrowRight />
              </ArrowBtn>
            </ProjectsDiv>
          </Section>
          <SocialLinks isMobile={isMobile}>
            <Link
              isMobile={isMobile}
              href="https://github.com/soham1300"
              target="_blank"
            >
              <FaGithub />
              Github
            </Link>
            <Link
              isMobile={isMobile}
              href="https://www.linkedin.com/in/soham-bhogale-182451223/"
              target="_blank"
            >
              <FaLinkedinIn />
              LinkedIn
            </Link>
          </SocialLinks>
          <SocialLinks isMobile={isMobile}>
            <Link
              isMobile={isMobile}
              href="https://x.com/soham_bhogale"
              target="_blank"
            >
              <FaTwitter />
              Twitter
            </Link>
            <Link
              isMobile={isMobile}
              href="https://www.instagram.com/soham_bhogale/"
              target="_blank"
            >
              <FaInstagram />
              Instagram
            </Link>
          </SocialLinks>
        </HeroDiv>
      ) : (
        <HeroDiv>
          <Section>
            <FullStack isMobile={isMobile}>Full-Stack </FullStack>
            <ProjectsDiv>
              <ProjectsBtn>Projects</ProjectsBtn>
              <ArrowBtn>
                <FaArrowRight />
              </ArrowBtn>
            </ProjectsDiv>
          </Section>
          <Section>
            <Goal>
              My goal is to <Highlight>write maintainable, clean</Highlight> and
              <Highlight> understandable code</Highlight> to ensure development
              is enjoyable.
            </Goal>
            <FullStack isMobile={isMobile}>Developer</FullStack>
          </Section>
          <SocialLinks isMobile={isMobile}>
            <Link
              isMobile={isMobile}
              href="https://github.com/soham1300"
              target="_blank"
            >
              <FaGithub />
              Github
            </Link>
            <Link
              isMobile={isMobile}
              href="https://www.linkedin.com/in/soham-bhogale-182451223/"
              target="_blank"
            >
              <FaLinkedinIn />
              LinkedIn
            </Link>
            <Link
              isMobile={isMobile}
              href="https://x.com/soham_bhogale"
              target="_blank"
            >
              <FaTwitter />
              Twitter
            </Link>
            <Link
              isMobile={isMobile}
              href="https://www.instagram.com/sohambhogle/"
              target="_blank"
            >
              <FaInstagram />
              Instagram
            </Link>
          </SocialLinks>
        </HeroDiv>
      )}
    </>
  );
}

export default Hero;

const HeroDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  margin: 5rem 0;
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const FullStack = styled.a`
  font-size: ${(props) => (props.isMobile ? "3.5rem" : "8rem")};
  font-weight: bold;
  word-wrap: break-word;
`;

const ProjectsDiv = styled.div`
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5rem;
  gap: 1rem;
`;

const ProjectsBtn = styled.i`
  background-color: #f5f5f5;
  color: #121212;
  padding: 1rem 5rem;
  border-radius: 25px;
`;

const ArrowBtn = styled.div`
  background-color: #f5f5f5;
  color: #121212;
  font-size: 1.5rem;
  padding: 1rem 1rem 0.8rem 1rem;
  border-radius: 50%;
`;

const Goal = styled.div`
  color: #a6a6a6;
  font-size: 1.3rem;
  word-wrap: break-word;
  line-height: 1.5;
  width: ${(props) => (props.isMobile ? "100%" : "30%")};
  margin: 3rem;
`;

const Highlight = styled.span`
  color: #f5f5f5;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: space-around;
  margin: ${(props) => (props.isMobile ? "2rem 2rem 0 2rem" : "5rem")};
`;

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: #a6a6a6;
  font-size: ${(props) => (props.isMobile ? "1rem" : "1.5rem")};
  padding: 1rem;
  border-radius: 30px;
  border: 1px solid #a6a6a6;
  text-decoration: none;
`;
