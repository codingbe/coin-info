import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Container = styled.header`
  height: 70px;
  display: flex;
  min-width: 1190px;
  background-color: #c89393;
  border-radius: 3px;
  z-index: 10;
  position: fixed;
  top: 0;
  @media (max-width: 480px) {
    min-width: 100%;
  }
`;
const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;
`;
const Li = styled.li`
  height: 100%;
  width: 100%;
  background-color: ${({ path }) => (path ? `rgba(210, 210, 210, 0.3)` : `transparent`)};
  transition: background-color 0.5s linear;
`;
const Slink = styled(Link)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: white;
  font-size: 24px;
  font-weight: bold;
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Header = ({ location: { pathname } }) => (
  <Container>
    <Ul>
      <Li path={pathname === "/"}>
        <Slink to="/">Prices</Slink>
      </Li>
      <Li path={pathname === "/exchanges"}>
        <Slink to="/exchanges">Exchanges</Slink>
      </Li>
      <Li path={pathname === "/coins" || (pathname.includes("coins") && pathname)}>
        <Slink to="/coins">Coins</Slink>
      </Li>
    </Ul>
  </Container>
);

export default withRouter(Header);
