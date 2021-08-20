import styled from "styled-components";

import { FiTrendingUp } from "react-icons/fi";

// Framer motion
import { motion } from "framer-motion";
import { OutputScreenAnimate, titleAnimate, fade } from "../animate";

const ProfitScreen = ({ profit }) => {
  return (
    <Container variants={OutputScreenAnimate} initial="hidden" animate="show">
      <TextInfo>
        <div className="part__one">
          <motion.span variants={fade}>
            <FiTrendingUp size="2x" />
          </motion.span>
          <Hide>
            <motion.h1 variants={titleAnimate}>
              +{profit.profitPercentage}%
            </motion.h1>
          </Hide>
        </div>
        <div className="part__two">
          <h5>You gained </h5>
          <Hide>
            <motion.h1 variants={titleAnimate}>
              ₹{Math.abs(profit.profitValue)} 😁
            </motion.h1>
          </Hide>
        </div>
      </TextInfo>
    </Container>
  );
};

export default ProfitScreen;

/* ---------------------------- Styled Components --------------------------- */
const Container = styled(motion.div)`
  padding: 5rem 4rem;
  color: #000;
  background-color: #16f5aa;
  display: flex;
  align-items: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 100%;

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
        50% {
          color: #212121;
        }
        100% {
          color: #000;
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
  /* ---------- Media Query For Responsive SVG And Profit % Placement END --------- */

  /* --------------------- Media Query For Resposnive Text -------------------- */
  @media (max-width: 1510px) {
    font-size: 2.3rem;
  }

  @media (max-width: 1410px) {
    font-size: 2rem;
  }

  /* --------------------- Media Query For Resposnive Text END-------------------- */
`;

const Hide = styled(motion.div)`
  overflow: hidden;
`;
