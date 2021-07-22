import styled from "styled-components";
import InputContainer from "./Components/InputContainer";

import { useState } from "react";
import OutputScreen from "./Components/UI/OutputScreen";
import NeutralScreen from "./Components/NeutralScreen";
import LossScreen from "./Components/LossScreen";
import ProfitScreen from "./Components/ProfitScreen";

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

  const [profit, setProfit] = useState({
    isAtProfit: false,
    profitValue: "",
    profitPercentage: "",
  });

  const [isNeutral, setIsNeutral] = useState(true);

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
          setIsNeutral={setIsNeutral}
        />
        <OutputScreen>
          {isNeutral && <NeutralScreen />}
          {loss.isAtLoss && <LossScreen loss={loss} />}
          {profit.isAtProfit && <ProfitScreen profit={profit} />}
        </OutputScreen>
      </AppBody>
    </div>
  );
}

export default App;

/* ---------------------------- Styled Components --------------------------- */

const AppBody = styled.div`
  height: 90vh;
  width: 90vw;
  border: 0.1rem solid #000;
  border-radius: 3px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  display: flex;
`;
