import styled from "styled-components";
import Resume from "../assets/Soham_Resume_Fullstack.pdf";
import IsMobile from "./IsMobile";

function NavBar() {
  const isMobile = IsMobile();
  return (
    <NavBarDiv>
      <Name>Soham Bhogale</Name>
      {!isMobile && (
        <MidNav>
          <About>About</About>
          <Projects>Projects</Projects>
          <Articles>Articles</Articles>
          <Contacts>Contacts</Contacts>
        </MidNav>
      )}

      <DownloadCVBtn
        href={Resume}
        download="Soham Resume Fullstack"
        target="_blank"
      >
        Download Resume
      </DownloadCVBtn>
    </NavBarDiv>
  );
}

export default NavBar;

const NavBarDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 5rem;
  gap: 1rem;
`;

const Name = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const MidNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  font-size: 1.2rem;
`;

const DownloadCVBtn = styled.a`
  background-color: #f5f5f5;
  color: #121212;
  border-radius: 10px;
  padding: 10px;
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
`;

const About = styled.div``;

const Projects = styled.div``;

const Articles = styled.div``;

const Contacts = styled.div``;
