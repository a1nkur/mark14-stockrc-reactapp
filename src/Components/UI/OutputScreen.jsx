import styled from "styled-components";

const OutputScreen = props => {
  return <Container>{props.children}</Container>;
};

export default OutputScreen;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.div`
  order: 2;
  flex: 0.6 0 54vw;
  font-size: 2.5rem;
  background-color: #fff;

  /* ---------------------------- MEDIA QUERY ---------------------------- */

  /* Phone Screen */
  @media (max-width: 520px) {
    display: table-header-group;
    height: 100vh;
    width: 100vw;
  }

  /* ---------------------------- MEDIA QUERY ---------------------------- */
`;
