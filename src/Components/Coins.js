import styled from "styled-components";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 35px;
  margin-top: 70px;
  padding: 5px;
  gap: 5px;
`;

const Column = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 0 5px;
  align-items: center;
  height: 100%;
`;

const Span = styled.span`
  font-weight: 600;
  color: black;
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Detail = styled(Link)`
  height: 100%;
  width: 100%;
  &:hover {
    opacity: 0.6;
  }
  transition: opacity 0.2s linear;
`;

const Coins = ({ coins }) => (
  <Container>
    <Helmet>
      <title>Coins | 코인정보</title>
    </Helmet>
    {coins.map((coin) => (
      <Detail to={`coins/${coin.id}`} id={coin.id} key={coin.id}>
        <Column>
          <Span>
            #{coin.rank} {coin.name} / {coin.symbol}
          </Span>
          <Span>⏩</Span>
        </Column>
      </Detail>
    ))}
  </Container>
);

Coins.propTypes = {
  coins: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
      rank: PropTypes.number.isRequired,
    })
  ),
};

export default Coins;
