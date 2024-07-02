import AnimatedCursor from "react-animated-cursor";
import styled from "styled-components";
import Home from "./pages/Home";

function App() {
  return (
    <Container className="App">
      <AnimatedCursor
        color="255, 255, 255"
        innerSize={35}
        outerSize={35}
        innerScale={3}
        outerScale={0}
        outerAlpha={0.2}
        outerStyle={{
          mixBlendMode: "screen",
        }}
        innerStyle={{
          mixBlendMode: "difference",
        }}
      />
      <Home />
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: #121212;
  color: #f5f5f5;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
`;
