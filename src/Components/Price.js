import styled from "styled-components";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 30px;
  font-size: 16px;
  font-weight: bold;
  gap: 10px;
  padding: 10px 5px;
  margin-top: 70px;
  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    font-size: 14px;
  }
`;
const Span = styled.span`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Column = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 0px 10px;
  border-radius: 3px;
  height: 100%;
  align-items: center;
`;

const Price = ({ prices }) => (
  <Container>
    <Helmet>
      <title>Prices | 코인정보</title>
    </Helmet>
    {prices.map((price) => (
      <Column key={price.id}>
        <Span>
          {price.name} / {price.symbol}
        </Span>
        <Span>${price.quotes.USD.price.toFixed(2)}</Span>
      </Column>
    ))}
  </Container>
);

Price.propTypes = {
  prices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
      quotes: PropTypes.shape({
        USD: PropTypes.shape({
          price: PropTypes.number.isRequired,
        }),
      }),
    })
  ),
};

export default Price;
