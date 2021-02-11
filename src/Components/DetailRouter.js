import { HashRouter, Route } from "react-router-dom";
import CoinsExchanges from "./CoinsExchanges";
import CoinsMarkets from "./CoinsMarkets";

const DetailRouter = ({ id, name }) => (
  <HashRouter>
    <Route path="/coins/:id/markets" render={() => <CoinsMarkets id={id} name={name} />} />
    <Route path="/coins/:id/exchanges" render={() => <CoinsExchanges id={id} name={name} />} />
  </HashRouter>
);

export default DetailRouter;
