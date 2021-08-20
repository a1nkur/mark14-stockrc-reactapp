import styled from "styled-components";
import { BsArrowUpRight, BsArrowDownLeft } from "react-icons/bs";

// Framer motion
import { motion } from "framer-motion";
import { genericAnimate, titleAnimate } from "../animate";

const NeutralScreen = () => {
  return (
    <Container>
      <IntroText variants={genericAnimate} initial="hidden" animate="show">
        <Hide>
          <motion.h1 className="first" variants={titleAnimate}>
            Check Your Stock's
          </motion.h1>
        </Hide>
        <Hide>
          <motion.h1 variants={titleAnimate}>
            <span className="intro-profit">
              Profit <BsArrowUpRight />
            </span>
          </motion.h1>
        </Hide>
        <Hide>
          <motion.h3 variants={titleAnimate}>or,</motion.h3>
        </Hide>
        <Hide>
          <motion.h1 variants={titleAnimate}>
            <span className="intro-loss">
              loss <BsArrowDownLeft />
            </span>
          </motion.h1>
        </Hide>
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

  @media (max-width: 520px) {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    width: 100vw;
  }

  /* ---------------------------- Phone Responsive ---------------------------- */

  /* --------------------- Media Query For Resposnive Text -------------------- */
  @media (max-width: 1510px) {
    font-size: 2.3rem;
  }

  @media (max-width: 1410px) {
    font-size: 2rem;
  }

  @media (max-width: 1253px) {
    font-size: 1.8rem;
  }
  /* --------------------- Media Query For Resposnive Text -------------------- */
`;

const Hide = styled.div`
  overflow: hidden;
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
