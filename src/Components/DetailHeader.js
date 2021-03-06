import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Container = styled.header`
  margin-bottom: 15px;
`;
const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  height: 60px;
  gap: 20px;
  @media (max-width: 480px) {
    justify-content: center;
  }
`;
const Li = styled.li``;
const Slink = styled(Link)`
  font-size: 24px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.path ? "white" : "black")};
  background-color: ${(props) => (props.path ? "#139478" : "transparent")};
  border: 5px solid #139478;
  border-radius: 5px;
  transition: background-color 0.2s linear;
  transition: color 0.2s linear;
`;

const DetailHeader = ({ match: { url }, location: { pathname } }) => (
  <Container>
    <Ul>
      <Li>
        <Slink to={`${url}/markets`} path={pathname === `${url}/markets` ? 1 : 0}>
          Markets
        </Slink>
      </Li>
      <Li>
        <Slink to={`${url}/exchanges`} path={pathname === `${url}/exchanges` ? 1 : 0}>
          Exchanges
        </Slink>
      </Li>
    </Ul>
  </Container>
);

export default withRouter(DetailHeader);
