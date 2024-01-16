import React from "react";
import { Wrapper } from "./styled";
import { getItems } from "./Api/api";


const App: React.FC = () => {
  React.useEffect( () => {
    getItems()
  },[])
  return (
    <Wrapper>
      app
    </Wrapper>
  );
};

export default App;
