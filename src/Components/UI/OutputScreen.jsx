import styled from "styled-components";

const OutputScreen = props => {
  return <Container>{props.children}</Container>;
};

export default OutputScreen;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.div`
  flex: 0.6 0 54vw;
  font-size: 2.5rem;
`;
