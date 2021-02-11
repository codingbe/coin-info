import styled from "styled-components";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const Container = styled.div``;
const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(235px, 1fr));
  gap: 10px;
`;
const Li = styled.li`
  border: 1px solid black;
  border-radius: 3px;
`;
const Span = styled.span``;
const Link = styled.a`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  &:hover {
    opacity: 0.5;
  }
  transition: opacity 0.2s linear;
  font-weight: bold;
  color: black;
`;

const Markets = ({ markets, name }) => (
  <Container>
    <Helmet>
      <title>{name} | 코인정보</title>
    </Helmet>
    <Ul>
      {markets.map(({ exchange_name, market_url, quotes: { USD: { price } } }) => (
        <Li key={new Date().getTime() * Math.random() * 50}>
          <Link href={market_url} target="_blank">
            <Span>{exchange_name}</Span>
            <Span>${price.toFixed(2)}</Span>
          </Link>
        </Li>
      ))}
    </Ul>
  </Container>
);

Markets.propTypes = {
  name: PropTypes.string.isRequired,
  markets: PropTypes.arrayOf(
    PropTypes.shape({
      exchange_name: PropTypes.string.isRequired,
      market_url: PropTypes.string.isRequired,
      quotes: PropTypes.shape({
        USD: PropTypes.shape({
          price: PropTypes.number.isRequired,
        }),
      }),
    })
  ),
};

export default Markets;
