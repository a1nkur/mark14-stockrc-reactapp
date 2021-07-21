import styled from "styled-components";
import { AiOutlineRise, AiOutlineFall } from "react-icons/ai";
import { BsArrowUpRight, BsArrowDownLeft } from "react-icons/bs";

const OutputContainer = () => {
  return (
    <Container>
      <IntroText>
        <h1>Check Your Stock's</h1>
        <h1>
          <span className="intro-profit">
            Profit <BsArrowUpRight />
          </span>
        </h1>
        <h1>or,</h1>
        <h1>
          <span className="intro-loss">
            loss <span className="white">.</span> <BsArrowDownLeft />
          </span>
        </h1>
      </IntroText>
    </Container>
  );
};

export default OutputContainer;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.div`
  flex: 0.6 0 54vw;
  padding: 0rem 4rem;
  color: #fff;
  background-color: #000;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
`;

const IntroText = styled.div`
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
