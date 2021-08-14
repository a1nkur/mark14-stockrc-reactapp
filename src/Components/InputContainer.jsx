import styled from "styled-components";
import { motion } from "framer-motion";

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

    // CP = CURRENT PRICE
    // PP = PURCHASE PRICE
    // QTY = QUANTITY

    const CP = Number(enteredData.currentPrice);
    const PP = Number(enteredData.purchasePrice);
    const QTY = Number(enteredData.stockQuantity);

    // Processing
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
      <FormContainer
        initial={{ y: -700 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <form onSubmit={handleOnsubmit}>
          <FormControl>
            <input
              type="number"
              name="purchasePrice"
              id="purchasePrice"
              value={enteredData.purchasePrice}
              min={1}
              step={0.1}
              onChange={handleOnChange}
              required
            />
            <label htmlFor="purchasePrice">Purchase Price</label>
          </FormControl>
          <FormControl>
            <input
              type="number"
              name="currentPrice"
              id="currentPrice"
              min={0}
              step={0.1}
              value={enteredData.currentPrice}
              onChange={handleOnChange}
              required
            />
            <label htmlFor="currentPrice" className="third-label">
              Current Price
            </label>
          </FormControl>
          <FormControl>
            <input
              type="number"
              name="stockQuantity"
              id="stockQuantity"
              value={enteredData.stockQuantity}
              min={1}
              onChange={handleOnChange}
              required
            />
            <label htmlFor="stockQuantity">Stock Quantity</label>
          </FormControl>

          <button type="submit">Check Now</button>
        </form>
      </FormContainer>
    </Container>
  );
};

export default InputContainer;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.div`
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  flex: 0.4 0 36vw;
  padding: 5rem 1rem;
  display: flex;
  align-items: center;
  background-color: #fff;

  /* Phone Screen */
  @media (max-width: 480px) {
    height: 100vh;
    width: 100vw;
    flex-direction: column;
  }

  /* ---------------------------- Phone Responsive ---------------------------- */

  /* ---------------------------- Phone Responsive ---------------------------- */
`;

const FormContainer = styled(motion.div)`
  padding-left: 1rem;

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
      width: 60%;
    }
  }

  /* ----------------- Media Query for Responsive button ---------------- */
`;

const FormControl = styled.div`
  width: 31vw;
  padding: 0rem 0rem 1.5rem 0rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  label {
    font-size: 1.2rem;
  }

  .third-label {
    margin-right: 0.9rem;
  }

  input {
    border: 1px solid red;
    font-size: 2rem;
    color: rgb(108, 99, 255);
    padding: 0.7rem 0.5rem;
    width: 70%;
    border: none;
    border-bottom: 1px solid rgb(108, 99, 255);
    background-color: transparent;
    &:focus {
      border: none;
      outline: none;
      border-bottom: 1px solid rgb(108, 99, 255);
    }
  }

  /* ----------------- Media Query for Responsive Input Fields ---------------- */
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: flex-start;

    input {
      order: 2;
    }

    label {
      order: 1;
      font-size: 1rem;
    }
  }

  /* ----------------- Media Query for Responsive Input Fields ---------------- */
`;
