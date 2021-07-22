import styled from "styled-components";

import { FiTrendingDown } from "react-icons/fi";
import { motion } from "framer-motion";

const LossScreen = ({ loss }) => {
  // const lossPercentage = Number(loss.lossPercentage);

  return (
    <Container
      loss={loss}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1.5, type: "spring" }}
    >
      <TextInfo>
        <div className="part__one">
          <h1>
            <FiTrendingDown />
            <span>{loss.lossPercentage}%</span>
          </h1>
        </div>
        <div className="part__two">
          <h5>You lost </h5>
          <h1> ₹{Math.abs(loss.lossValue)} 😔</h1>
        </div>
      </TextInfo>
    </Container>
  );
};

export default LossScreen;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled(motion.div)`
  padding: 5rem 4rem;
  color: ${props =>
    Math.abs(Number(props.loss.lossPercentage)) > 50 ? `#000` : `#c70039`};
  background-color: ${props =>
    Math.abs(Number(props.loss.lossPercentage)) > 50 ? `#c70039` : `#000`};
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
