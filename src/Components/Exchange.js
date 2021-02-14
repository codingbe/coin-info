import styled from "styled-components";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const Container = styled.div`
  margin-top: 70px;
  padding: 5px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 80px;
  gap: 10px;
`;
const ExContainer = styled.div`
  height: 100%;
  border: 1px solid black;
  border-radius: 3px;
  padding: 0 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Name = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;
const Description = styled.p`
  margin-bottom: 5px;
`;
const Website = styled.a`
  color: black;
  width: 65px;
  &:hover {
    color: #c43636;
  }
  transition: color 0.2s linear;
`;

const Exchange = ({ exchanges }) => (
  <Container>
    <Helmet>
      <title>Exchanges | 코인정보</title>
    </Helmet>
    {exchanges.map((exchange) => (
      <ExContainer key={exchange.id}>
        <Name>{exchange.name}</Name>
        {exchange.description && exchange.description.length > 0 ? (
          <Description>
            {exchange.description.length > 42 ? `${exchange.description.slice(0, 42)}...` : exchange.description}
          </Description>
        ) : null}
        {exchange.links && exchange.links.website && exchange.links.website.length > 0 ? (
          <Website href={exchange.links.website[0]} target="_blank">
            WebSite
          </Website>
        ) : null}
      </ExContainer>
    ))}
  </Container>
);

Exchange.propTypes = {
  exchanges: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      links: PropTypes.shape({
        website: PropTypes.arrayOf(PropTypes.string.isRequired),
      }),
    })
  ),
};

export default Exchange;
