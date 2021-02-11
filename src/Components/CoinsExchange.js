import { Helmet } from "react-helmet";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 10px;
`;
const Grid = styled.div`
  border: 1px solid black;
  padding: 3px;
  border-radius: 3px;
`;
const Title = styled.h1`
  margin-bottom: 5px;
`;
const Fiats = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
  gap: 5px;
`;
const Fiat = styled.li``;
const Span = styled.span``;

const CoinsExchange = ({ exchanges, name }) => (
  <Container>
    <Helmet>
      <title>{name} | 코인정보</title>
    </Helmet>
    {exchanges.map(({ id, name, fiats }) => (
      <Grid key={id}>
        <Title>{name}</Title>
        <Fiats>
          {fiats.map(({ symbol, name }) => (
            <Fiat key={name}>
              <Span>{symbol}</Span>
            </Fiat>
          ))}
        </Fiats>
      </Grid>
    ))}
  </Container>
);

CoinsExchange.propTypes = {
  name: PropTypes.string.isRequired,
  exchanges: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      fiats: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          symbol: PropTypes.string.isRequired,
        })
      ),
    })
  ),
};

export default CoinsExchange;
