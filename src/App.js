import styled from "styled-components";
import InputContainer from "./Components/InputContainer";
import OutputContainer from "./Components/OutputContainer";

import { useState } from "react";

function App() {
  // !State
  const [enteredData, setEnteredData] = useState({
    purchasePrice: "",
    stockQuantity: "",
    currentPrice: "",
  });

  const [loss, setLoss] = useState({
    isAtLoss: false,
    lossValue: "",
    lossPercentage: "",
  });

  const [profile, setProfit] = useState({
    isAtProfit: false,
    profitValue: "",
    profitPercentage: "",
  });

  // !Event Handlers
  const handleOnChange = e => {
    setEnteredData(prevState => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  //!

  return (
    <div className="App">
      <AppBody>
        <InputContainer
          enteredData={enteredData}
          handleOnChange={handleOnChange}
          setLoss={setLoss}
          setProfit={setProfit}
        />
        <OutputContainer />
      </AppBody>
    </div>
  );
}

export default App;

/* ---------------------------- Styled Components --------------------------- */

// const App = styled.div`

// `

const AppBody = styled.div`
  height: 90vh;
  width: 90vw;
  /* padding: 1rem; */
  border: 0.1rem solid #000;
  border-radius: 3px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  display: flex;
`;
