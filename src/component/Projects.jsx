import styled from "styled-components";
import CodeCraftersImg from "../assets/CodeCraftersImg.png";

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
          </Skills>
          <ProjectDescription>
            Code Crafters is an innovative platform for code enthusiasts,
            offering comprehensive tools for code reviews, mentorship,
            collaborative projects, and engaging coding challenges. It enhances
            coding skills and fosters a strong community collaboration
            environment.
          </ProjectDescription>
          <ButtonsDiv>
            <GitRepoBtn>Git Reop</GitRepoBtn>
            <LiveBtn>Visit Site</LiveBtn>
          </ButtonsDiv>
        </ProjectInfo>
        <ProjectImgDiv>
          <ProjectImg src={CodeCraftersImg} />
        </ProjectImgDiv>
      </CodeCraftersDiv>
      <CodeCraftersDiv>
        <ProjectImgDiv>
          <ProjectImg src={CodeCraftersImg} />
        </ProjectImgDiv>
        <ProjectInfo>
          <ProjectTitle>CodeCrafters</ProjectTitle>
          <Skills>
            <Skill>React</Skill>
            <Skill>Styled Components</Skill>
            <Skill>Node JS</Skill>
            <Skill>Firebase</Skill>
          </Skills>
          <ProjectDescription>
            Code Crafters is an innovative platform for code enthusiasts,
            offering comprehensive tools for code reviews, mentorship,
            collaborative projects, and engaging coding challenges. It enhances
            coding skills and fosters a strong community collaboration
            environment.
          </ProjectDescription>
          <ButtonsDiv>
            <GitRepoBtn>Git Reop</GitRepoBtn>
            <LiveBtn>Visit Site</LiveBtn>
          </ButtonsDiv>
        </ProjectInfo>
      </CodeCraftersDiv>
      <CodeCraftersDiv>
        <ProjectInfo>
          <ProjectTitle>CodeCrafters</ProjectTitle>
          <Skills>
            <Skill>React</Skill>
            <Skill>Styled Components</Skill>
            <Skill>Node JS</Skill>
            <Skill>Firebase</Skill>
          </Skills>
          <ProjectDescription>
            Code Crafters is an innovative platform for code enthusiasts,
            offering comprehensive tools for code reviews, mentorship,
            collaborative projects, and engaging coding challenges. It enhances
            coding skills and fosters a strong community collaboration
            environment.
          </ProjectDescription>
          <ButtonsDiv>
            <GitRepoBtn>Git Reop</GitRepoBtn>
            <LiveBtn>Visit Site</LiveBtn>
          </ButtonsDiv>
        </ProjectInfo>
        <ProjectImgDiv>
          <ProjectImg src={CodeCraftersImg} />
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
`;

const Skill = styled.div`
  font-size: 1.3rem;
  color: #a6a6a6;
  border: 1px solid #3d3d3d;
  padding: 1rem;
  border-radius: 25px;
  margin-bottom: 2rem;
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
  margin-left: 2rem;
  margin-bottom: 2rem;
  color: #a6a6a6;
`;

const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const GitRepoBtn = styled.a`
  border: 1px solid #a6a6a6;
  border-radius: 25px;
  padding: 1rem;
  margin-bottom: 2rem;
  margin-left: 2rem;
  color: #3d3d3d;
  background-color: #f5f5f5;
`;

const LiveBtn = styled.a`
  border: 1px solid #a6a6a6;
  border-radius: 25px;
  padding: 1rem;
  margin-bottom: 2rem;
  margin-left: 2rem;
  color: #3d3d3d;
  background-color: #f5f5f5;
`;
