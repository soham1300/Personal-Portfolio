import styled from "styled-components";
import { TaggedContentCard } from "react-ui-cards";
import Calculator from "../assets/Calculator.png";
import ToDo from "../assets/ToDo.png";
import RandomUser from "../assets/RandomUser.png";
import TeslaClone from "../assets/TeslaClone.jpeg";
import TicTacToe from "../assets/TicTacToe.jpeg";
import Weather from "../assets/Weather.png";

function MiniProjects() {
  return (
    <MiniProjectsDiv>
      <Title>... /Mini Projects ...</Title>
      <Projects>
        <TaggedContentCard
          href="https://github.com/soham1300/Tesla-Clone"
          thumbnail={TeslaClone}
          title="Tesla Website Clone"
          description="‎ "
          tags={["HTML", "CSS", "JavaScript"]}
        />
        <TaggedContentCard
          href="https://github.com/soham1300/To-Do-List"
          thumbnail={ToDo}
          title="Todo List"
          description="‎ "
          tags={["HTML", "CSS", "JavaScript"]}
        />
        <TaggedContentCard
          href="https://github.com/soham1300/Weather-Forecast"
          thumbnail={Weather}
          title="Weather App"
          description="‎ "
          tags={["HTML", "CSS", "JavaScript", "API"]}
        />
        <TaggedContentCard
          href="https://github.com/soham1300/Random-User-Generator"
          thumbnail={RandomUser}
          title="Random User Generator"
          description="‎ "
          tags={["HTML", "CSS", "JavaScript", "API"]}
        />
        <TaggedContentCard
          href="https://github.com/soham1300/Digital-Calculator"
          thumbnail={Calculator}
          title="Digital Calculator"
          description="‎ "
          tags={["HTML", "CSS", "JavaScript"]}
        />

        <TaggedContentCard
          href="https://github.com/soham1300/Tic-Tac-Toe"
          thumbnail={TicTacToe}
          title="Tic Tac Toe"
          description="‎ "
          tags={["HTML", "CSS", "JavaScript"]}
        />

        {/* <TaggedContentCard
          href="https://github.com/nukeop"
          thumbnail="https://i.imgur.com/yCch7GN.jpg"
          title="Cheesecake"
          description="a cake with raspberries"
          tags={["food", "cake", "fruits"]}
        /> */}
      </Projects>
    </MiniProjectsDiv>
  );
}

export default MiniProjects;

const MiniProjectsDiv = styled.div``;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-left: 2rem;
`;

const Projects = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 1.1rem;
`;
