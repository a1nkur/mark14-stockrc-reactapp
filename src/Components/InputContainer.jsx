import styled from "styled-components";

// Framer motion
import { motion } from "framer-motion";
import { genericAnimate, lineAnimation, fade } from "../animate";

const InputContainer = ({
  enteredData,
  handleOnChange,
  setLoss,
  setProfit,
  setIsNeutral,
}) => {
  //!Event Handler
  const handleOnsubmit = e => {
    e.preventDefault();

    window.scrollTo({
      top: -100,
      behavior: "smooth",
    });

    // CP = CURRENT PRICE
    // PP = PURCHASE PRICE
    // QTY = QUANTITY

    const CP = Number(enteredData.currentPrice);
    const PP = Number(enteredData.purchasePrice);
    const QTY = Number(enteredData.stockQuantity);

    //* Processing
    if (CP - PP > 0) {
      setProfit({
        isAtProfit: true,
        profitValue: ((CP - PP) * QTY).toFixed(2),
        profitPercentage: (((CP - PP) / PP) * 100).toFixed(2),
      });

      setLoss({
        isAtLoss: false,
        lossValue: "",
        lossPercentage: "",
      });

      setIsNeutral(false);
    } else if (CP - PP < 0) {
      setLoss({
        isAtLoss: true,
        lossValue: ((CP - PP) * QTY).toFixed(2),
        lossPercentage: (((CP - PP) / PP) * 100).toFixed(2),
      });

      setProfit({
        isAtProfit: false,
        profitValue: "",
        profitPercentage: "",
      });

      setIsNeutral(false);
    } else {
      alert("Purchase and Current price cannot be same. Try again!");
    }
  };

  return (
    <Container>
      <FormContainer variants={genericAnimate} initial="hidden" animate="show">
        <form onSubmit={handleOnsubmit}>
          <FormControl>
            <motion.input
              type="number"
              name="purchasePrice"
              id="purchasePrice"
              value={enteredData.purchasePrice}
              min={1}
              step={0.1}
              onChange={handleOnChange}
              placeholder="Purchase Price"
              variants={lineAnimation}
              required
            />
          </FormControl>
          <FormControl>
            <motion.input
              type="number"
              name="currentPrice"
              id="currentPrice"
              min={0}
              step={0.1}
              value={enteredData.currentPrice}
              onChange={handleOnChange}
              variants={lineAnimation}
              placeholder="Current Price"
              required
            />
          </FormControl>
          <FormControl>
            <motion.input
              type="number"
              name="stockQuantity"
              id="stockQuantity"
              value={enteredData.stockQuantity}
              min={1}
              onChange={handleOnChange}
              placeholder="Stock Quantity"
              variants={lineAnimation}
              required
            />
          </FormControl>
          <motion.button type="submit" variants={fade}>
            Check Now
          </motion.button>
        </form>
      </FormContainer>
    </Container>
  );
};

export default InputContainer;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.div`
  order: 1;
  flex: 0.4 1 36vw;
  padding: 5rem 1rem;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  /* ---------------------------- MEDIA QUERY ---------------------------- */

  /* Phone Screen */
  @media (max-width: 520px) {
    height: 100vh;
    width: 100vw;
    flex-direction: column;

    justify-content: center;
  }

  /* ---------------------------- MEDIA QUERY ---------------------------- */
`;

const FormContainer = styled(motion.div)`
  width: 100%;
  padding: 0 1.5rem;

  button {
    padding: 0.7rem 0.5rem;
    width: 30%;
    cursor: pointer;
    border-radius: 3px;
    background: transparent;
    border: 1px solid rgb(108, 99, 255);
    transition: all 0.3s ease;
    font-weight: bold;
    &:hover {
      background-color: rgb(108, 99, 255);
      color: #fff;
    }
  }

  /* ----------------- Media Query for Responsive button ---------------- */
  @media (max-width: 1200px) {
    button {
      width: 70%;
    }
  }

  @media (max-width: 520px) {
    button {
      max-width: 96%;
      margin: auto;
      margin-left: 3rem;
    }
  }

  /* ----------------- Media Query for Responsive button ---------------- */
`;

const FormControl = styled.div`
  width: 100%;
  padding: 0rem 0rem 1.5rem 0rem;

  input {
    font-size: 2rem;
    color: rgb(108, 99, 255);
    padding: 0.7rem 0.5rem;
    width: 100%;
    border: none;
    border-bottom: 2px dotted rgb(108, 99, 255);
    background-color: transparent;
    &:focus {
      border: none;
      outline: none;
      border-bottom: 1px solid rgb(108, 99, 255);
    }
  }

  /* ----------------- Media Query for Responsive Input Fields ---------------- */
  /* @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

  } */

  @media (max-width: 520px) {
    display: flex;
    align-items: center;
    justify-content: space-around;

    input {
      font-size: 1.3rem;
      text-align: center;
    }
  }

  /* ----------------- Media Query for Responsive Input Fields ---------------- */
`;
