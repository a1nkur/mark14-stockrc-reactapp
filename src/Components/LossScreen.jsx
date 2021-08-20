import styled from "styled-components";

import { FiTrendingDown } from "react-icons/fi";

// Framer motion
import { motion } from "framer-motion";
import { OutputScreenAnimate, titleAnimate, fade } from "../animate";

const LossScreen = ({ loss }) => {
  // const lossPercentage = Number(loss.lossPercentage);

  return (
    <Container
      loss={loss}
      variants={OutputScreenAnimate}
      initial="hidden"
      animate="show"
    >
      <TextInfo>
        <div className="part__one">
          <motion.span
            variants={fade}
            className={
              Math.abs(Number(loss.lossPercentage)) < 50 ? "apply" : ""
            }
          >
            <FiTrendingDown size="2x" />
          </motion.span>
          <Hide>
            <motion.h1 variants={titleAnimate}>
              {loss.lossPercentage}%
            </motion.h1>
          </Hide>
        </div>
        <div className="part__two">
          <h5>You lost </h5>
          <Hide>
            <motion.h1 variants={titleAnimate}>
              ₹{Math.abs(loss.lossValue)} 😔
            </motion.h1>
          </Hide>
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
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  /* ------------------------------- MEDIA QUERY ------------------------------ */
  @media (max-width: 520px) {
    width: 100vw;
  }
  /* ------------------------------- MEDIA QUERY END ------------------------------ */
`;

const TextInfo = styled.div`
  width: 100%;
  height: 25rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .part__one {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      font-size: 4rem;
    }

    span {
      font-size: 2rem;
    }

    SVG {
      color: #000;
      animation: color-change 1s infinite;
      @keyframes color-change {
        0% {
          opacity: 0;
        }
        100% {
          color: #000;
          opacity: 1;
        }
      }
    }

    span.apply svg {
      color: #c70039;
      animation: color-change 1s infinite;
      @keyframes color-change {
        0% {
          opacity: 0;
        }

        100% {
          color: #c70039;
          opacity: 1;
        }
      }
    }
  }

  /* ---------- Media Query For Responsive SVG And Profit % Placement --------- */
  @media (max-width: 520px) {
    .part__one {
      display: flex;
      flex-direction: column;

      span {
        height: 8rem;
      }
    }

    .part__two {
      h5 {
        padding-bottom: 0.5rem;
      }
      text-align: center;
    }
  }
  /* ---------- Media Query For Responsive SVG And Profit % Placement --------- */

  /* ---------- Media Query For Responsive SVG And Profit % Placement --------- */
  @media (max-width: 1200px) {
    .part__one {
      h1 {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
  /* ---------- Media Query For Responsive SVG And Profit % Placement --------- */

  /* --------------------- Media Query For Resposnive Text -------------------- */
  @media (max-width: 1510px) {
    font-size: 2.3rem;
  }

  @media (max-width: 1410px) {
    font-size: 2rem;
  }

  /* --------------------- Media Query For Resposnive Text -------------------- */
`;

const Hide = styled(motion.div)`
  overflow: hidden;
`;
