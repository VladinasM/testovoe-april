
import styled from "styled-components";
import Calendar from "./components/Calendar";

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #ccc;
  color: #000;
`

const App = () => {
  return (
    <AppWrapper>
      <Calendar/>
    </AppWrapper>
  );
}

export default App;
