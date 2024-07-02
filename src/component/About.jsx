import styled from "styled-components";
import SelfPic from "../assets/SelfPic.jpg";
import { FaGithub, FaLocationArrow } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

function About() {
  return (
    <AboutDiv>
      <Title>... /About me ...</Title>
      <MyInfo>
        <i>
          Hello! I`m Soham, a passionate Full Stack Developer specializing in
          the MERN and FERN stacks.
        </i>
      </MyInfo>
      <SkillsDiv>
        <Skills>
          <FrontendDiv>
            <SkillTitle>Front-end</SkillTitle>
            <Skill>
              <i>
                HTML5 / CSS3 / JavaScript (ES6+) / React (Hooks, Context API,
                Redux, React Router) / UI Frameworks (Bootstrap, Material-UI,
                Tailwind CSS) / State Management (Redux, Context API, MobX) /
                APIs (RESTful APIs, GraphQL) / Version Control (Git, GitHub) /
                Build Tools (Webpack, Babel, npm, Yarn) / Tools (VS Code, Chrome
                DevTools)
              </i>
            </Skill>
          </FrontendDiv>
          <SkillMidDiv>
            <StylesDiv>
              <SkillTitle>Styles</SkillTitle>
              <Skill>
                <i>
                  CSS3 / Sass / Styled-Components / CSS Modules / Animations /
                  Responsive Design
                </i>
              </Skill>
            </StylesDiv>
            <GithubBtnDiv href="https://github.com/soham1300" target="_blank">
              <GithubBtn>
                <FaGithub />
              </GithubBtn>
              <ArrowBtn>
                {/* <FaLocationArrow /> */}
                <GoArrowUpRight />
              </ArrowBtn>
            </GithubBtnDiv>
          </SkillMidDiv>
          <BackendDiv>
            <SkillTitle>Back-end</SkillTitle>
            <Skill>
              <i>
                Node.js / Express / MongoDB / Firebase / RESTful APIs /
                Authentication (JWT, OAuth) / WebSockets / Serverless
                Architecture
              </i>
            </Skill>
          </BackendDiv>
        </Skills>

        <MyPic>
          <Img src={SelfPic} />
        </MyPic>
      </SkillsDiv>
    </AboutDiv>
  );
}

export default About;

const AboutDiv = styled.div``;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-left: 2rem;
`;

const MyInfo = styled.div`
  font-size: 1.5rem;
  margin: 2rem;
`;

const SkillsDiv = styled.div`
  width: 100%;
  display: flex;
`;

const Skills = styled.div`
  width: 50%;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: #a6a6a6;
`;

const MyPic = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FrontendDiv = styled.div`
  border: 1px solid #a6a6a6;
  border-radius: 20px;
  &:hover {
    background-color: #f5f5f5;
    color: #121212;
  }
`;

const StylesDiv = styled.div`
  border: 1px solid #a6a6a6;
  border-radius: 20px;
  width: 50%;

  &:hover {
    background-color: #f5f5f5;
    color: #121212;
  }
`;

const BackendDiv = styled.div`
  border: 1px solid #a6a6a6;
  border-radius: 20px;
  &:hover {
    background-color: #f5f5f5;
    color: #121212;
  }
`;

const SkillTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1rem;
`;

const Skill = styled.div`
  font-size: 1.2rem;
  margin: 1rem;
  line-height: 1.5;
  text-align: justify;
  text-justify: inter-word;
`;

const Img = styled.img`
  width: 50%;
  border-radius: 20px;
`;

const SkillMidDiv = styled.div`
  display: flex;
  gap: 2rem;
`;

const GithubBtnDiv = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  color: #f5f5f5;
`;
const GithubBtn = styled.a`
  border: 1px solid #a6a6a6;
  border-radius: 50%;
  padding: 1.5rem;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowBtn = styled.a`
  background-color: #f5f5f5;
  color: #3d3d3d;
  border-radius: 50%;
  padding: 1.5rem;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -1rem;
`;
