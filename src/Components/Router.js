import { HashRouter, Route } from "react-router-dom";
import Prices from "Routes/Prices";
import Exchanges from "Routes/Exchanges";
import Coins from "Routes/Coins";
import Header from "./Header";
import Detail from "Routes/Detail";

const Router = () => (
  <HashRouter>
    <Header />
    <Route path="/" exact component={Prices} />
    <Route path="/exchanges" component={Exchanges} />
    <Route path="/coins" exact component={Coins} />
    <Route path="/coins/:id" component={Detail} />
  </HashRouter>
);

export default Router;
