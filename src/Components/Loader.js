import styled from "styled-components";
import { Helmet } from "react-helmet";

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-top: 70px;
`;

const Loader = () => (
  <>
    <Helmet>
      <title>Loading | 코인정보</title>
    </Helmet>
    <Title>Loading...</Title>
  </>
);

export default Loader;
