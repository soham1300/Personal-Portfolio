import styled from "styled-components";
import CodeCraftersImg from "../assets/CodeCraftersImg.png";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import EduSnapImg from "../assets/EduSnapImg.png";
import ChattiesImg from "../assets/Chatties.png";

function Projects() {
  return (
    <ProjectsDiv>
      <Title>... /Projects ...</Title>
      <CodeCraftersDiv>
        <ProjectInfo>
          <ProjectTitle>CodeCrafters</ProjectTitle>
          <Skills>
            <Skill>React</Skill>
            <Skill>Styled Components</Skill>
            <Skill>Node JS</Skill>
            <Skill>Firebase</Skill>
            <Skill>API</Skill>
            <Skill>Authentication</Skill>
          </Skills>
          <ProjectDescription>
            Code Crafters is an innovative platform for code enthusiasts,
            offering comprehensive tools for code reviews, mentorship,
            collaborative projects, and engaging coding challenges. It enhances
            coding skills and fosters a strong community collaboration
            environment.
          </ProjectDescription>
          <ButtonsDiv>
            <GitRepoBtn>
              <FaGithub />
              Git Reop
            </GitRepoBtn>
            <LiveBtn>
              <FaArrowUpRightFromSquare />
              Visit Site
            </LiveBtn>
          </ButtonsDiv>
        </ProjectInfo>
        <ProjectImgDiv>
          <ProjectImg src={CodeCraftersImg} />
        </ProjectImgDiv>
      </CodeCraftersDiv>
      <CodeCraftersDiv>
        <ProjectImgDiv>
          <ProjectImg src={EduSnapImg} />
        </ProjectImgDiv>
        <ProjectInfo>
          <ProjectTitle>EduSnap</ProjectTitle>
          <Skills>
            <Skill>React</Skill>
            <Skill>Styled Components</Skill>
            <Skill>Node JS</Skill>
            <Skill>Firebase</Skill>
            <Skill>Authentication</Skill>
            <Skill>Material UI</Skill>
          </Skills>
          <ProjectDescription>
            Edusnap is a comprehensive student performance monitoring system
            that tracks attendance, assignment submissions, and exam marks. It
            provides detailed insights into academic progress, helping educators
            and parents support students more effectively.
          </ProjectDescription>
          <ButtonsDiv>
            <GitRepoBtn>
              <FaGithub />
              Git Reop
            </GitRepoBtn>
            <LiveBtn>
              <FaArrowUpRightFromSquare />
              Visit Site
            </LiveBtn>
          </ButtonsDiv>
        </ProjectInfo>
      </CodeCraftersDiv>
      <CodeCraftersDiv>
        <ProjectInfo>
          <ProjectTitle>Chatties</ProjectTitle>
          <Skills>
            <Skill>React</Skill>
            <Skill>Styled Components</Skill>
            <Skill>Node JS</Skill>
            <Skill>Firebase</Skill>
            <Skill>Authentication</Skill>
          </Skills>
          <ProjectDescription>
            Chatties is an intuitive chat web app designed for seamless
            communication, offering real-time messaging and collaboration. It
            features user-friendly interfaces and robust functionality, making
            it easy for users to connect and share information effortlessly.
          </ProjectDescription>
          <ButtonsDiv>
            <GitRepoBtn>
              <FaGithub />
              Git Reop
            </GitRepoBtn>
            <LiveBtn>
              <FaArrowUpRightFromSquare />
              Visit Site
            </LiveBtn>
          </ButtonsDiv>
        </ProjectInfo>
        <ProjectImgDiv>
          <ProjectImg src={ChattiesImg} />
        </ProjectImgDiv>
      </CodeCraftersDiv>
    </ProjectsDiv>
  );
}

export default Projects;

const ProjectsDiv = styled.div`
  margin-top: 10rem;
  gap: 2rem;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-left: 2rem;
`;

const CodeCraftersDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 2rem;
`;

const ProjectInfo = styled.div`
  width: 50%;
`;

const ProjectTitle = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin-left: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  /* color: #a6a6a6; */
`;

const Skills = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 2rem;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const Skill = styled.div`
  font-size: 1.3rem;
  color: #a6a6a6;
  border: 1px solid #3d3d3d;
  padding: 1rem;
  border-radius: 25px;
`;

const ProjectImgDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectImg = styled.img`
  width: 80%;
  border-radius: 20px;
`;

const ProjectDescription = styled.div`
  font-size: 1.5rem;
  margin: 0 2rem 2rem 2rem;
  line-height: 1.5;
  color: #a6a6a6;
`;

const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  font-size: 1.2rem;
`;

const GitRepoBtn = styled.a`
  border: 1px solid #a6a6a6;
  border-radius: 25px;
  padding: 1rem;
  margin-bottom: 2rem;
  margin-left: 2rem;
  color: #3d3d3d;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const LiveBtn = styled.a`
  border: 1px solid #a6a6a6;
  border-radius: 25px;
  padding: 1rem;
  margin-bottom: 2rem;
  margin-left: 2rem;
  color: #3d3d3d;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
