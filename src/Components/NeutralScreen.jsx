import styled from "styled-components";
import { AiOutlineRise, AiOutlineFall } from "react-icons/ai";
import { BsArrowUpRight, BsArrowDownLeft } from "react-icons/bs";

const NeutralScreen = () => {
  return (
    <Container>
      <IntroText>
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
  padding: 0rem 4rem;
  color: #fff;
  background-color: #000;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  height: 100%;

  @media (max-width: 1510px) {
    font-size: 2.3rem;
  }

  @media (max-width: 1410px) {
    font-size: 2rem;
  }

  @media (max-width: 1253px) {
    font-size: 1.5rem;
  }
`;

const IntroText = styled.div`
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
    /* font-size: 1rem; */
  }
`;
