import styled from "styled-components";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import IsMobile from "./IsMobile";

function ContactMe() {
  const isMobile = IsMobile();
  return (
    <ContactMeDiv id="contacts">
      <Title isMobile={isMobile}>... /Contact Me ...</Title>
      <Info isMobile={isMobile}>
        <i>
          Feel free to reach out to me for any opportunities, collaborations, or
          just a friendly chat!
        </i>
      </Info>
      <ContactLinks>
        <Link
          href="mailto:sohambhogale13@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope /> sohambhogale13@gmail.com
        </Link>
        <Link
          href="https://www.linkedin.com/in/soham-bhogale-182451223/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </Link>
        <Link
          href="https://github.com/soham1300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </Link>
      </ContactLinks>
    </ContactMeDiv>
  );
}

export default ContactMe;

const ContactMeDiv = styled.div`
  /* margin: 2rem; */
`;

const Title = styled.div`
  /* font-size: 2rem; */
  font-size: ${(props) => (props.isMobile ? "1.5rem" : "2rem")};
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Info = styled.div`
  /* font-size: 1.5rem; */
  margin-bottom: 2rem;
  font-size: ${(props) => (props.isMobile ? "1.2rem" : "1.5rem")};
  text-align: justify;
  text-justify: inter-word;
  margin: 2rem;
`;

const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  border-radius: 8px;
  color: #f5f5f5;
  font-size: 1.2rem;
  background-color: #121212;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #1a1a1a;
    transform: translateY(-2px);
  }

  svg {
    font-size: 1.5rem;
  }
`;
