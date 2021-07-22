import styled from "styled-components";

import { FiTrendingUp } from "react-icons/fi";

const ProfitScreen = ({ profit }) => {
  return (
    <Container>
      <TextInfo>
        <div className="part__one">
          <h1>
            <FiTrendingUp />
            <span>+ {profit.profitPercentage}%</span>
          </h1>
        </div>
        <div className="part__two">
          <h5>You gained </h5>
          <h1> ₹{Math.abs(profit.profitValue)} 😁</h1>
        </div>
      </TextInfo>
    </Container>
  );
};

export default ProfitScreen;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.div`
  padding: 5rem 4rem;
  color: #000;
  background-color: #16f5aa;
  display: flex;
  align-items: center;
  height: 100%;
`;

const TextInfo = styled.div`
  width: 100%;
  height: 25rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .part__one {
    width: 100%;

    h1 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
  }
`;
