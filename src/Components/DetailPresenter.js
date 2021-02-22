import styled from "styled-components";
import PropTypes from "prop-types";
import DetailHeader from "./DetailHeader";
import DetailRouter from "./DetailRouter";
import { Helmet } from "react-helmet";

const Container = styled.div`
  margin-top: 70px;
  padding: 5px;
  max-width: 1190px;
`;
const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 10px;
`;
const Description = styled.p`
  font-size: 20px;
  margin-bottom: 15px;
`;
const Content = styled.div`
  margin-bottom: 8px;
`;
const Info = styled.span`
  margin-right: 5px;
  font-size: 20px;
  &:first-child {
    font-weight: bold;
  }
`;

const DetailPresenter = ({ coin }) => (
  <Container>
    {console.log(coin)}
    <Helmet>
      <title>{coin.name} | 코인정보</title>
    </Helmet>
    <Title>
      {coin.name} / {coin.symbol}
    </Title>
    <Description>{coin.description}</Description>
    <Content>
      <Info>Rank:</Info>
      <Info>{coin.rank}</Info>
    </Content>
    <Content>
      <Info>Open Source:</Info>
      <Info>{coin.open_source ? "Yes" : "No"}</Info>
    </Content>
    <Content>
      <Info>Proof Type:</Info>
      <Info>{coin.proof_type}</Info>
    </Content>
    <Content>
      <Info>Structure:</Info>
      <Info>{coin.org_structure}</Info>
    </Content>
    <Content>
      <Info>Released:</Info>
      <Info>{coin.started_at ? coin.started_at?.slice(0, 10) : coin.first_data_at?.slice(0, 10)}</Info>
    </Content>
    <DetailHeader />
    <DetailRouter id={coin.id} name={coin.name} />
  </Container>
);

DetailPresenter.propTypes = {
  coin: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    open_source: PropTypes.bool,
    started_at: PropTypes.string,
    proof_type: PropTypes.string,
    org_structure: PropTypes.string,
  }),
};

export default DetailPresenter;
