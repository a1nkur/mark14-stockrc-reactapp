const OutputScreen = (props) => {
    return ( 
        <Container>
            {props.children}
        </Container>
     );
}
 
export default OutputScreen;

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