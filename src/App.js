import { CardContainer, CardFront, CardBack } from "./lib";

function App() {
  return (
    <CardContainer width="130px" height="160px">
      <CardFront background="#f00">
        <h1>Front</h1>
      </CardFront>
      <CardBack background="#0f0">
        <h1>Back</h1>
      </CardBack>
    </CardContainer>  
  );
}

export default App;
