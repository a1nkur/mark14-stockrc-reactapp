import styled from "styled-components";
import { BsArrowUpRight, BsArrowDownLeft } from "react-icons/bs";

import { motion } from "framer-motion";

const NeutralScreen = () => {
  return (
    <Container>
      <IntroText
        initial={{ y: 700 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h1 className="first">Check Your Stock's</h1>
        <h1>
          <span className="intro-profit">
            Profit <BsArrowUpRight />
          </span>
        </h1>
        <h3>or,</h3>
        <h1>
          <span className="intro-loss">
            loss <BsArrowDownLeft />
          </span>
        </h1>
      </IntroText>
    </Container>
  );
};

export default NeutralScreen;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.div`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 0rem 4rem;
  color: #fff;
  background-color: #000;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;

  /* ----------------------- Permanently Remove Scrollbar ---------------------- */
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */

  &::-webkit-scrollbar {
    /* WebKit */
    width: 0;
    height: 0;
  }
  /* ----------------------- Permanently Remove Scrollbar ---------------------- */

  /* ---------------------------- Phone Responsive ---------------------------- */

  /* ---------------------------- Phone Responsive ---------------------------- */

  /* --------------------- Media Query For Resposnive Text -------------------- */
  @media (max-width: 1510px) {
    font-size: 2.3rem;
  }

  @media (max-width: 1410px) {
    font-size: 2rem;
  }

  @media (max-width: 1253px) {
    font-size: 1.5rem;
  }
  /* --------------------- Media Query For Resposnive Text -------------------- */
`;

const IntroText = styled(motion.div)`
  span {
    display: flex;
    align-items: center;

    svg {
      margin-left: 0.5rem;
    }
  }

  .first {
    font-weight: 700;
  }

  .intro-profit {
    color: rgb(58, 210, 159);
  }
  .intro-loss {
    color: #c70039;
  }

  .white {
    color: #fff;
  }
`;
